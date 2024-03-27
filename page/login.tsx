"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import Link from "next/link";
import * as Yup from "yup";
import LockRounded from "@mui/icons-material/LockRounded";
import {
  Container,
  Typography,
  Box,
  TextField,
  Avatar,
  Button,
} from "@mui/material";

import { postLogin } from "@/api/auth/authApi";
import { IUser } from "@/types/user";
import { setAccessToken, setRefreshToken } from "@/utils/authStorage";
import Copyright from "@/components/copyright/copyright";
import SimpleSnackbar from "@/components/snackbar/snackbar";
import BasicAlert from "@/components/alert/alert";

/**
 * TODO: 로그인 유효성 검증
 *
 * yup : 유효성 검증 객체 만들기
 * formik : 양식 상태 추적, 이벤트 핸들러
 *
 */
// 로그인의 경우 회원가입 시 이미 유효성 검증을 통과 후 가입 -> 이메일 타입체크, 비밀번호 입력만 되면 로그인 요청 처리하기
const validationSchema = Yup.object({
  email: Yup.string()
    .email("유효하지 않은 이메일 주소입니다.")
    .required("이메일을 입력해주세요."),
  password: Yup.string().required("비밀번호를 입력해주세요."),
});

const LoginPage = () => {
  const router = useRouter();
  const [error, setError] = useState({ message: "", statusCode: null });

  const handleLogin = async (data: IUser) => {
    try {
      const result = await postLogin(data);
      const { accessToken, refreshToken } = result;

      if (accessToken && refreshToken) {
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        router.push("/");
        setError(null);
      }
    } catch (error: { message: string; statusCode: number }) {
      setError(error);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      handleLogin(values);
    },
  });

  return (
    <>
      {error?.message && (
        <BasicAlert
          title={error.message}
          color="danger"
          content="다시한번 확인해주세요."
        />
      )}
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="h1" fontWeight={"bold"}>
            로그인
          </Typography>
          <Avatar sx={{ m: 4, bgcolor: "primary.dark" }}>
            <LockRounded />
          </Avatar>
          <Container>
            <Box component="form" onSubmit={formik.handleSubmit}>
              <TextField
                required
                variant="standard"
                id="email"
                label="Email"
                fullWidth
                size="small"
                margin="normal"
                {...formik.getFieldProps("email")}
              />
              <TextField
                required
                variant="standard"
                type="password"
                id="password"
                name="password"
                label="Password"
                fullWidth
                size="small"
                margin="normal"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
              />
              {formik.errors.email && formik.touched.email && (
                <Typography variant="body2" sx={{ color: "warning.dark" }}>
                  {formik.errors.email}
                </Typography>
              )}
              {formik.errors.password && formik.touched.password && (
                <Typography variant="body2" sx={{ color: "warning.dark" }}>
                  {formik.errors.password}
                </Typography>
              )}
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{ my: 6, fontWeight: "bold" }}
              >
                Login
              </Button>
            </Box>
            <Link href="/register">
              <Typography
                variant="subtitle2"
                sx={{
                  color: "info.dark",
                  textAlign: "center",
                }}
              >
                {"아직 회원이 아니신가요? 가입하기"}
              </Typography>
            </Link>
            <Copyright sx={{ mt: 8 }} />
          </Container>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
