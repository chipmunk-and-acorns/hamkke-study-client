"use client";

import { useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Grid from "@mui/material/Unstable_Grid2";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { Input } from "@mui/joy";
import {
  Box,
  Container,
  Divider,
  Typography,
  Radio,
  Fab,
  Tooltip,
  Button,
} from "@mui/material";

import { position, postTypes, recruitCount, stacks } from "@/constants/data";
import SelectBox from "@/components/select/selectBox";
import QuillEditor from "@/components/quill/reactQuill";
interface IPreQuestion {
  value: string;
  id: string;
}

const PostWritePage = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [preWriteQuestion, setPreWriteQuestion] = useState("");
  const [preQuestionList, setPreQuestionList] = useState<IPreQuestion[]>([]);

  // 참여 신청 여부 선택값 변경 함수
  // TODO: 'apply'에서 'immediately'로 바꾸기전에 alert 띄우기(작성한 사전 질문을 다 지우게됩니다. 계속하시겠습니까?)
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (selectedValue === "apply") setPreQuestionList([]);
    setSelectedValue((event.target as HTMLInputElement).value);
  };

  // 사전 질문 input 값 변경 함수
  const handleSetQuestion = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreWriteQuestion(() => e.target.value);
  };

  // 사전 질문 리스트 등록 함수
  const handleUpdatePreQuestionList = (
    e: React.MouseEvent | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();

    if (preQuestionList.length < 5) {
      let newList = { id: Date.now().toString(), value: preWriteQuestion };
      setPreQuestionList([...preQuestionList, newList]);
      setPreWriteQuestion("");
    }
  };

  // 사전 질문 리스트 삭제 함수
  const handleDeleteQuestion = (selectId: string) => {
    const newPrevQuestionList = preQuestionList.filter(
      (question) => question.id !== selectId
    );
    setPreQuestionList(newPrevQuestionList);
  };

  return (
    <Container maxWidth="lg" sx={{ height: "100%", mb: 10 }}>
      <Typography variant="h4" fontWeight="bold" textAlign={"center"} my={10}>
        프로젝트/스터디 모집 글 작성
      </Typography>
      <Box minHeight={350} sx={{ my: 5 }}>
        <Typography variant="h5" fontWeight="bold">
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
          spacing={{ xs: 3, md: 4 }}
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
            <Typography
              variant="subtitle2"
              sx={{
                fontSize: "1rem",
                lineHeight: "1.75",
                letterSpacing: "0.00938em",
                fontWeight: 700,
              }}
            >
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
          <Input color="neutral" size="md" variant="soft" />
        </Box>
        <Box maxWidth="lg" mb={10}>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            내용
          </Typography>
          <QuillEditor value="test" onChange={() => console.log()} />
        </Box>
        <Box>
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            팀원 모집시 원하는 참여방식을 선택해주세요.
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              color: "grey",
            }}
          >
            <NavigateNextRoundedIcon />
            <p style={{ fontSize: "0.85rem" }}>
              <strong>즉시 참여가능</strong> : 모집 글 상세 페이지에서 참여신청
              버튼을 누른 사람이&nbsp;
              <em style={{ textDecoration: "underline" }}>바로 그룹에 초대</em>
              &nbsp;됩니다.
            </p>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", color: "grey" }}>
            <NavigateNextRoundedIcon />
            <p style={{ fontSize: "0.85rem" }}>
              <strong>참여 신청 받기</strong> : 모집 글 상세 페이지에서 참여신청
              버튼을 누른 사람은&nbsp;
              <em style={{ textDecoration: "underline" }}>
                사전 질문에 대한 답변 작성과 글쓴이의 확인 여부에 따라 그룹에
                초대
              </em>
              &nbsp;됩니다.
            </p>
          </Box>
          <Box
            sx={{ fontSize: "0.9rem", fontWeight: "bold", color: "#35374B" }}
          >
            <label
              htmlFor="immediately"
              style={{ paddingLeft: "2rem", cursor: "pointer" }}
            >
              즉시 참여 가능
            </label>
            <Radio
              checked={selectedValue === "immediately"}
              onChange={handleChange}
              value="immediately"
              id="immediately"
              inputProps={{ "aria-label": "Immediately" }}
              sx={{ mr: 4 }}
            />
            <label htmlFor="apply" style={{ cursor: "pointer" }}>
              참여 신청 받기
            </label>
            <Radio
              checked={selectedValue === "apply"}
              onChange={handleChange}
              value="apply"
              id="apply"
              inputProps={{ "aria-label": "Apply" }}
            />
          </Box>
          <Box mt={5}>
            {selectedValue === "apply" && (
              <>
                <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                  참여에 관련된 사전 질문 목록을 작성할 수 있습니다.
                </Typography>
                <Typography variant="subtitle2" color={"GrayText"}>
                  사전 질문은 100자 이하로 등록 가능합니다.
                </Typography>
              </>
            )}
            {selectedValue === "apply" && (
              <Box mt={2} sx={{ display: "flex", alignItems: "center" }}>
                {/* TODO: Input keyboard 'Enter' 입력시 등록 처리 */}
                <Input
                  color="primary"
                  variant="soft"
                  placeholder={
                    preQuestionList.length < 5
                      ? "공통적으로 물어보고싶은 기본 질문을 입력해주세요."
                      : "사전 질문은 5개까지만 등록 가능합니다."
                  }
                  sx={{
                    width: "50vw",
                    height: "3rem",
                    marginRight: "2rem",
                  }}
                  value={preWriteQuestion}
                  onChange={(e) => handleSetQuestion(e)}
                  disabled={!(preQuestionList.length < 5)}
                />
                {preWriteQuestion.length > 0 &&
                  preWriteQuestion.length <= 100 && (
                    <Tooltip title="사전 질문 추가하기">
                      <Fab color="primary" aria-label="add" size="small">
                        <AddIcon
                          onClick={(e) => handleUpdatePreQuestionList(e)}
                        />
                      </Fab>
                    </Tooltip>
                  )}
              </Box>
            )}
          </Box>
          {preQuestionList.length ? (
            <Box mt={10}>
              <Typography variant="subtitle1" fontWeight={"bold"}>
                등록된 사전질문 목록입니다.
              </Typography>
              <ul style={{ listStyle: "none" }}>
                {preQuestionList?.map((list, idx) => (
                  <li
                    key={idx}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <CheckRoundedIcon sx={{ fontSize: "0.7rem" }} />
                    <Typography
                      variant="subtitle1"
                      sx={{
                        display: "inline-block",
                        pl: "0.5rem",
                        minWidth: "500px",
                        my: "0.3rem",
                        color: "#727070",
                        fontWeight: "bold",
                      }}
                    >
                      {list.value}
                    </Typography>
                    <Button
                      onClick={() => handleDeleteQuestion(list.id)}
                      variant="outlined"
                      startIcon={<DeleteIcon />}
                      size="small"
                      color="secondary"
                    >
                      Delete
                    </Button>
                  </li>
                ))}
              </ul>
            </Box>
          ) : null}
        </Box>
      </Box>
      <Box sx={{ marginTop: "3rem", display: "flex", justifyContent: "end" }}>
        <Button variant="outlined" sx={{ marginRight: "1rem" }}>
          이전 페이지로
        </Button>
        <Button variant="contained">글 등록</Button>
      </Box>
    </Container>
  );
};

export default PostWritePage;
