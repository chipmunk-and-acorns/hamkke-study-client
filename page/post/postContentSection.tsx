import { Box, Divider, Typography } from "@mui/material";
import { Input } from "@mui/joy";

import QuillEditor from "@/components/quill/reactQuill";

const PostContentSection = () => {
  return (
    <Box component="section">
      <Typography variant="h5" fontWeight="bold">
        프로젝트/스터디 진행방식 등 자세한 내용을 적어주세요.
      </Typography>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        component="hr"
        sx={{ border: "0.12rem solid #E0CCBE", mt: "0.5rem" }}
      />
      <Box maxWidth="lg" my={4}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          제목
        </Typography>
        <Input color="neutral" size="lg" variant="soft" />
      </Box>
      <Box maxWidth="lg" mb={10}>
        <Typography variant="subtitle1" fontWeight={"bold"}>
          내용
        </Typography>
        <QuillEditor value="test" onChange={() => console.log()} />
      </Box>
    </Box>
  );
};

export default PostContentSection;
