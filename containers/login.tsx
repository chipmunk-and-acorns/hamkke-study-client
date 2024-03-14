"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import { LockRounded } from "@mui/icons-material";
import {
  Container,
  Typography,
  Box,
  TextField,
  Avatar,
  Button,
} from "@mui/material";

import Copyright from "@/components/copyright/copyright";
import Link from "next/link";
import { postLogin } from "@/api/user/userApi";

/**
 * TODO: 로그인 유효성 검증
 *
 * yup : 유효성 검증 객체 만들기
 * formik : 양식 상태 추적, 이벤트 핸들러
 *
 */
// 로그인의 경우 회원가입 시 이미 유효성 검증을 통과 후 가입 -> 이메일 타입체크, 비밀번호 입력만 되면 로그인 요청 처리하기
const validationSchema = Yup.object({
  email: Yup.string().email().required("이메일을 입력해주세요."),
  password: Yup.string().required("비밀번호를 입력해주세요."),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      /**
       * server api -> 결과에 따라
       *
       * 로그인 성공 시: 로그인 후 이동할 페이지 이동 처리
       * 로그인 실패 시: 화면에 피드백
       */
      alert(JSON.stringify(values, null, 2));

      // TODO: 서버에 로그인 요청 / 결과 처리
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" component="h1">
          Login
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
              <div>{formik.errors.email}</div>
            )}
            {formik.errors.password && formik.touched.password && (
              <div>{formik.errors.password}</div>
            )}
            <Button type="submit" variant="contained" fullWidth sx={{ my: 6 }}>
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
  );
};

export default LoginPage;
