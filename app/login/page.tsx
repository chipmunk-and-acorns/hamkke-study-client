"use client";

import { FormEvent } from "react";
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

const Login = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
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
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              required
              variant="standard"
              id="email"
              label="Email Address"
              fullWidth
              size="small"
              margin="dense"
            />
            <TextField
              required
              variant="standard"
              id="password"
              label="Password"
              fullWidth
              size="small"
              margin="dense"
            />
          </Box>
          <Button variant="contained" fullWidth sx={{ my: 5 }}>
            Login
          </Button>
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

export default Login;
