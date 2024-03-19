"use client";

import { Suspense } from "react";
import { Box, Button, Container } from "@mui/material";

import PostContentSection from "@/page/post/postContentSection";
import PostJoinSection from "@/page/post/postJoinSection";
import PostSelectSection from "@/page/post/postSelectSection";
import LoadingSpinners from "@/components/loading/loading";

const PostWriteContainer = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100%", mb: 10 }}>
      <Suspense fallback={<LoadingSpinners />}>
        <PostSelectSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinners />}>
        <PostContentSection />
      </Suspense>
      <Suspense fallback={<LoadingSpinners />}>
        <PostJoinSection />
      </Suspense>
      <Box sx={{ marginTop: "3rem", display: "flex", justifyContent: "end" }}>
        <Button variant="outlined" sx={{ marginRight: "1rem" }}>
          이전 페이지로
        </Button>
        <Button variant="contained">글 등록</Button>
      </Box>
    </Container>
  );
};

export default PostWriteContainer;
