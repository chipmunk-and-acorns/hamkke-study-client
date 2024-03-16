"use client";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Container, Divider, Typography, Checkbox } from "@mui/material";
import { Input } from "@mui/joy";

import { position, postTypes, recruitCount, stacks } from "@/constants/data";
import SelectBox from "@/components/select/selectBox";

/**
 * 글 작성시 사용할 값들
 * 모집구분 (postType: 'project', 'study') -> 단일 선택
 * 모집 인원 (recruitCount) -> 1 ~ 10
 * 기술 스택 (stacks) -> 다중 선택
 * 모집 포지션 (positions) -> 다중 선택
 * 모집 마감일 (deadline) -> date
 *
 * 본문 내용에 진행방식, 기간 등 작성하는 것이 더 좋을 것 같음
 */

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const PostWritePage = () => {
  return (
    <Container maxWidth="lg" sx={{ height: "100vh" }}>
      <Typography variant="h5" fontWeight="bold" textAlign={"center"} my={8}>
        프로젝트/스터디 모집 글 작성
      </Typography>
      <Box minHeight={300} sx={{ my: 5 }}>
        <Typography variant="h6" fontWeight="bold">
          기본 정보를 입력해주세요.
        </Typography>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          component="hr"
          sx={{ border: "0.12rem solid #E0CCBE", mt: "0.5rem", mb: "2rem" }}
        />
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid xs={4} sm={4} md={4}>
            <SelectBox
              placeholder="프로젝트 / 스터디 선택"
              label="모집 구분"
              options={postTypes}
            />
          </Grid>
          <Grid xs={4} sm={4} md={4}>
            <SelectBox
              placeholder="인원 미정 ~ 10명 이상"
              label="모집 인원"
              options={recruitCount}
            />
          </Grid>
          <Grid xs={4} sm={4} md={4}>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              모집 마감일
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoItem>
                <DatePicker />
              </DemoItem>
            </LocalizationProvider>
          </Grid>
          <Grid xs={4} sm={4} md={6}>
            <SelectBox
              placeholder="사용할 기술 스택들 선택"
              isMulti
              label="기술 스택"
              options={stacks}
            />
          </Grid>
          <Grid xs={4} sm={4} md={6}>
            <SelectBox
              placeholder="프론트엔드, 백엔드, 디자이너 ..."
              isMulti
              label="모집 포지션"
              options={position}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="bold">
          프로젝트/스터디 진행방식 등 자세한 내용을 적어주세요.
        </Typography>
        <Divider
          orientation="horizontal"
          variant="fullWidth"
          component="hr"
          sx={{ border: "0.12rem solid #E0CCBE", mt: "0.5rem", mb: "2rem" }}
        />
        {/* 
        - title
        - content
        
        글 작성 시 때 팀원들을 어떻게 받을 지 물어보는 체크 박스

        1. 즉시참여 받기 checkbox 선택
        2. 참여신청 받기 checkbox 클릭 시 
            1) 전달 메세지 (default)  
            2) 사전 질문 추가 입력 버튼 클릭시 입력 창 제공


        ---

        상세 페이지

        글을 읽는 사람은 
         */}
        <Box maxWidth="sm" mb={4}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            제목
          </Typography>
          <Input color="neutral" size="md" variant="soft" />
        </Box>
        <Box mb={4}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            내용
          </Typography>
          <textarea />
        </Box>
        <Box>
          <Typography variant="subtitle2" fontWeight={"bold"}>
            팀원 모집시 원하는 참여방식을 선택해주세요.
          </Typography>
          <Checkbox {...label} />
          <span>즉시 참여</span>
          &nbsp; &nbsp; &nbsp;&nbsp;
          {/* 참여 신청 버튼 누를 경우, 글 작성자가 팀원들에게 묻고싶은 사전 질문들을 적을 수 있음
          -> 상세 페이지에서 글 읽는 사람들이 참여신청 누를 시 해당 질문들에 대한 답변을 작성해야 됨 */}
          <Checkbox {...label} />
          <span>참여신청</span>
        </Box>
      </Box>
    </Container>
  );
};

export default PostWritePage;
