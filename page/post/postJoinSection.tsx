"use client";

import { useState } from "react";
import { Input } from "@mui/joy";
import NavigateNextRoundedIcon from "@mui/icons-material/NavigateNextRounded";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  Box,
  Divider,
  Typography,
  Radio,
  Fab,
  Tooltip,
  Button,
} from "@mui/material";

interface IPreQuestion {
  value: string;
  id: string;
}

const PostJoinSection = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const [preWriteQuestion, setPreWriteQuestion] = useState("");
  const [preQuestionList, setPreQuestionList] = useState<IPreQuestion[]>([]);

  // 참여 신청 여부 선택값 변경 함수
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let confirmMessage = `'즉시 참여 가능'으로 변경하실 경우 작성하신 사전질문 리스트가 지워집니다. 변경할까요?`;

    if (selectedValue === "apply") {
      if (confirm(confirmMessage)) {
        setPreQuestionList([]);
        setSelectedValue((event.target as HTMLInputElement).value);
      }
    } else {
      setSelectedValue((event.target as HTMLInputElement).value);
    }
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
    <Box component="section" sx={{ mt: "200px" }}>
      <Typography variant="h5" fontWeight="bold">
        팀원 모집 시 원하는 참여방식을 선택해주세요.
      </Typography>
      <Divider
        orientation="horizontal"
        variant="fullWidth"
        component="hr"
        sx={{ border: "0.12rem solid #E0CCBE", mt: "0.5rem", mb: "2rem" }}
      />
      <Box>
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
              사전 질문에 대한 답변 작성과 글쓴이의 확인 여부에 따라 그룹에 초대
            </em>
            &nbsp;됩니다.
          </p>
        </Box>
        <Box
          sx={{
            fontWeight: "bold",
            color: "#35374B",
            mt: "1rem",
          }}
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
            <ul>
              {preQuestionList?.map((list, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0.3rem 0",
                  }}
                >
                  <CheckRoundedIcon sx={{ fontSize: "0.7rem" }} />
                  <Typography
                    variant="subtitle1"
                    sx={{
                      display: "inline-block",
                      px: "0.5rem",
                      width: "80%",
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
                    sx={{ marginX: "2rem" }}
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
  );
};

export default PostJoinSection;
