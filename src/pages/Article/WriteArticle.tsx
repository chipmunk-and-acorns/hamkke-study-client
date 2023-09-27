import { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';

import { positionState, stackState } from '../../recoil/articleState';
import {
  durationOfProgress,
  recruitmentCategoryOptions,
  recruitmentNumberOfPeopleOptions,
  workOptions,
} from '../../assets/articleOptions';
import SelectDatePicker from '../../components/DatePicker/SelectDatePicker';
import Selection from '../../components/SelectBox/Selection';
import Quill from '../../components/ReactQuill/Quill';
import InputBox from '../../components/Input/InputBox';
import ToastifyAlert from '../../components/alert/toastifyAlert';
import { postArticle } from '../../api/articleApi';
import { useNavigate } from 'react-router-dom';

enum SelectValues {
  RecruitmentType = 'recruitmentType', // 모집 구분
  RecruitmentLimit = 'recruitmentLimit', // 모집 인원
  ProgressMode = 'progressMode', // 진행 방식
  Duration = 'duration', // 진행 기간
  StackIds = 'stackIds', // 기술 스택
  ClosingDate = 'closingDate', // 모집 마감일
  PositionIds = 'positionIds', // 모집 포지션
  Title = 'title', // 제목
  Content = 'content', // 내용
}

const WriteArticle = () => {
  const navigate = useNavigate();
  const stacks = useRecoilValue(stackState);
  const positions = useRecoilValue(positionState);
  const [values, setValues] = useState([
    { key: SelectValues.RecruitmentType, value: '', name: '모집 구분' },
    { key: SelectValues.RecruitmentLimit, value: 0, name: '모집 인원' },
    { key: SelectValues.ProgressMode, value: '', name: '진행 방식' },
    { key: SelectValues.Duration, value: 0, name: '진행 기간' },
    { key: SelectValues.StackIds, value: [], name: '기술 스택' },
    { key: SelectValues.ClosingDate, value: '', name: '모집 마감일' },
    { key: SelectValues.PositionIds, value: [], name: '모집 포지션' },
    { key: SelectValues.Title, value: '', name: '제목' },
    { key: SelectValues.Content, value: '', name: '내용' },
  ]);

  const [toastOpen, setToastOpen] = useState(false);
  const [toastContents, setToastContents] = useState<string[] | null>(null);

  /** state update handler */
  const handleUpdateValue = (
    labelKey: string,
    selectValue: { value: string; label: string; createdAt?: string; stackId?: number } | string
  ) => {
    const newValues = [...values].filter((valueObj) => {
      if (valueObj.key === labelKey) {
        if (labelKey === SelectValues.StackIds) {
          valueObj.value = selectValue.map((value: { stackId: number }) => value.stackId);
        } else if (labelKey === SelectValues.PositionIds) {
          valueObj.value = selectValue.map((value: { positionId: number }) => value.positionId);
        } else if (
          labelKey === SelectValues.ClosingDate ||
          labelKey === SelectValues.Title ||
          labelKey === SelectValues.Content
        ) {
          valueObj.value = selectValue;
        } else if (
          labelKey === SelectValues.RecruitmentLimit ||
          labelKey === SelectValues.Duration
        ) {
          valueObj.value = +selectValue.value;
        } else {
          valueObj.value = selectValue.value;
        }
      }
      return valueObj;
    });
    setValues(newValues);
  };

  /** 글 등록 함수 */
  const handlePostArticle = async () => {
    const messages: string[] = [];

    values.forEach((obj) => {
      if (
        (typeof obj.value === 'number' && obj.value <= 0) ||
        (typeof obj.value === 'string' && !obj.value.length) ||
        (Array.isArray(obj.value) && !obj.value.length)
      ) {
        messages.push(`${obj.name}은 필수 입력해주셔야 합니다.`);
      }
      setToastOpen(true);
      setToastContents(messages);
    });

    // 값들이 전부 입력되었으면 서버 요청 보내기
    if (!toastContents?.length) {
      // 서버 요청 보내기
      let data = {};

      values.forEach((obj) => {
        data[obj.key] = obj.value;
      });

      // data를 서버 요청시 body에 담아 보내기
      const articleId = await postArticle(data);
      if (articleId) {
        navigate(`/articles/${articleId}`);
      }
      // 새로 만들어진 게시글 id를 받아와서 해당 게시글 상세페이지로 페이지 리다이렉트 시키기
    }
  };

  /** 글 등록 취소 함수 */
  const handleWriteCancel = () => {
    console.log('글 등록 취소');
  };

  return (
    <Box sx={ContainerStyle}>
      <Box>
        <Typography component="h6" variant="h5">
          프로젝트 기본 정보를 입력해주세요.
        </Typography>
        <Divider />
        <Grid container sx={BasicInformationBoxStyle}>
          <Grid item xs={6}>
            <Selection
              options={recruitmentCategoryOptions}
              placeholder="스터디 / 프로젝트 선택"
              label="모집 구분"
              labelKey={SelectValues.RecruitmentType}
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={recruitmentNumberOfPeopleOptions}
              placeholder="인원 미정 ~ 10명 이상 선택"
              label="모집 인원"
              labelKey={SelectValues.RecruitmentLimit}
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={workOptions}
              placeholder="온라인 / 오프라인 선택"
              label="진행 방식"
              labelKey={SelectValues.ProgressMode}
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={durationOfProgress}
              placeholder="기간 미정 ~ 6개월 이상 선택"
              label="진행 기간"
              labelKey={SelectValues.Duration}
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={stacks}
              placeholder="스택 선택"
              label="기술 스택"
              labelKey={SelectValues.StackIds}
              isMulti
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <SelectDatePicker
              label="모집 마감일"
              labelKey={SelectValues.ClosingDate}
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={positions}
              placeholder="프론트엔드, 백엔드, 기획자 등 선택"
              label="모집 포지션"
              labelKey={SelectValues.PositionIds}
              isMulti
              handleUpdateValue={handleUpdateValue}
            />
          </Grid>
        </Grid>
      </Box>
      <Box>
        <Typography component="h6" variant="h5">
          프로젝트에 대해 소개해주세요.
        </Typography>
        <Divider />
        <Box>
          <InputBox
            label="제목"
            labelKey={SelectValues.Title}
            handleUpdateValue={handleUpdateValue}
          />
        </Box>
        <Box sx={QuillBoxStyle}>
          <Quill labelKey={SelectValues.Content} handleUpdateValue={handleUpdateValue} />
        </Box>
      </Box>
      <Box sx={ButtonBoxStyle}>
        <Button variant="contained" color="warning" onClick={handleWriteCancel}>
          취소
        </Button>
        <Button variant="contained" color="primary" onClick={handlePostArticle}>
          등록
        </Button>
        {toastContents?.map((obj, idx) => (
          <ToastifyAlert key={idx} content={obj} open={true} />
        ))}
      </Box>
    </Box>
  );
};

const ContainerStyle = {
  mx: '15%',
  mb: '5rem',

  h6: {
    mt: '5rem',
  },

  hr: {
    mt: '1rem',
    mb: '2rem',
  },

  '.css-b62m3t-container': {
    mr: '1rem',
    mb: '2rem',
  },
};

const BasicInformationBoxStyle = {
  width: '100%',
};

const QuillBoxStyle = {
  '.ql-container': {
    height: '300px',
  },
  mb: '2rem',
};

const ButtonBoxStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  button: {
    ml: '0.5rem',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
};

export default WriteArticle;
