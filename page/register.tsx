"use client";

import Link from "next/link";
import { useFormik } from "formik";
import * as Yup from "yup";
import AssignmentIndRoundedIcon from "@mui/icons-material/AssignmentIndRounded";
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography,
} from "@mui/material";

import Copyright from "@/components/copyright/copyright";
import { postRegister } from "@/api/user/userApi";
import { IUser } from "@/constants/user";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("유효하지 않은 이메일 주소입니다.")
    .required("이메일을 입력해주세요."),
  password: Yup.string()
    .min(7, "비밀번호는 최소 7자 이상이어야 합니다.")
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/,
      "비밀번호는 영어 대소문자, 숫자, 특수문자 중 최소 1개씩을 포함해야 합니다."
    )
    .required("비밀번호를 입력해주세요."),
  nickname: Yup.string()
    .min(4, "닉네임은 최소 4자 이상이어야 합니다.")
    .required("닉네임을 입력해주세요."),
});

const RegisterPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      nickname: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleRegister(values);
    },
  });

  const handleRegister = async (data: IUser) => {
    const result = await postRegister(data);
    console.log(result);
  };

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
        <Typography variant="h5" component="h1" fontWeight={"bold"}>
          회원가입
        </Typography>
        <Avatar sx={{ m: 4, bgcolor: "primary.main" }}>
          <AssignmentIndRoundedIcon />
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
              label="Password"
              fullWidth
              size="small"
              margin="normal"
              {...formik.getFieldProps("password")}
            />
            <TextField
              required
              variant="standard"
              type="text"
              id="nickname"
              label="Nickname"
              fullWidth
              size="small"
              margin="normal"
              {...formik.getFieldProps("nickname")}
            />
            {formik.errors.email && formik.touched.email && (
              <Typography
                variant="body2"
                sx={{
                  color: "warning.dark",
                  fontSize: "0.8rem",
                }}
              >
                {formik.errors.email}
              </Typography>
            )}
            {formik.errors.password && formik.touched.password && (
              <Typography
                variant="body2"
                sx={{
                  color: "warning.dark",
                  fontSize: "0.8rem",
                }}
              >
                {formik.errors.password}
              </Typography>
            )}
            {formik.errors.nickname && formik.touched.nickname && (
              <Typography
                variant="body2"
                sx={{
                  color: "warning.dark",
                  fontSize: "0.8rem",
                }}
              >
                {formik.errors.nickname}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ my: 6, fontWeight: "bold" }}
            >
              Sign Up
            </Button>
          </Box>
          <Link href="/login">
            <Typography
              variant="subtitle2"
              sx={{
                color: "info.dark",
                textAlign: "center",
              }}
            >
              {"이미 회원이신가요? 로그인하기"}
            </Typography>
          </Link>
          <Copyright sx={{ mt: 8 }} />
        </Container>
      </Box>
    </Container>
  );
};

export default RegisterPage;
