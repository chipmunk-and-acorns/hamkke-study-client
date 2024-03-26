"use client";

import { useState } from "react";
import { Box, Button, Container } from "@mui/material";
import dynamic from "next/dynamic";

import LoadingSpinners from "@/components/loading/loading";

const PostSelectSection = dynamic(
  () => import("@/page/post/postSelectSection"),
  { suspense: true, loading: () => <LoadingSpinners /> }
);
const PostContentSection = dynamic(
  () => import("@/page/post/postContentSection"),
  { suspense: true, loading: () => <LoadingSpinners /> }
);
const PostJoinSection = dynamic(() => import("@/page/post/postJoinSection"), {
  suspense: true,
  loading: () => <LoadingSpinners />,
});

const PostWriteContainer = () => {
  /**
   * select, title/content, join state 들 여기서 관리
   */
  const [selectValues, setSelectValues] = useState({
    postType: "",
    recruitCount: "",
    endDate: "",
  });
  const [stacks, setStacks] = useState([]);
  const [position, setPosition] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preQuestion, setPreQuestion] = useState({
    select: "",
    writeQuestionList: [],
  });

  const handleTitleChange = (value: string) => setTitle(value);
  const handleContentChange = (value: string) => setContent(value);

  const handleSelectValuesChange = (value: { key: string; value: string }) => {
    setSelectValues((prevState) => ({
      ...prevState,
      [value.key]: value.value,
    }));
  };

  const handleStacksChange = (value) => {
    const newValue = value.map((item) => item.value);
    setStacks(newValue);
  };

  const handlePositionChange = (value) => {
    const newValue = value.map((item) => item.value);
    setPosition(newValue);
  };

  const handlePreQuestionChange = (value) => {
    setPreQuestion(value);
  };

  const handleSubmit = async () => {
    if (
      selectValues.postType &&
      selectValues.recruitCount &&
      selectValues.endDate &&
      title &&
      content
    ) {
      try {
        const response = await fetch("/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            select: selectValues,
            content: content,
          }),
        });

        if (!response.ok) {
          throw new Error("Something went wrong");
        }

        const data = await response.json();
        console.log(data);
        // 성공적으로 글이 등록되었다는 알림 또는 페이지 이동 로직 추가
      } catch (error) {
        console.error("Failed to submit post:", error);
        // 실패했을 때 사용자에게 알리는 로직 추가
      }
    } else {
      alert("모든 필드를 채워주세요.");
    }
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100%", mb: 10 }}>
      <PostSelectSection
        handleSelectValuesChange={handleSelectValuesChange}
        handleStacksChange={handleStacksChange}
        handlePositionChange={handlePositionChange}
      />
      <PostContentSection
        handleTitleChange={handleTitleChange}
        handleContentChange={handleContentChange}
      />
      <PostJoinSection handlePreQuestionChange={handlePreQuestionChange} />
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
