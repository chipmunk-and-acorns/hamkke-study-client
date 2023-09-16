import { useRecoilValue } from 'recoil';
import { Box, Typography, Grid, Divider, Button } from '@mui/material';

import { positionState, stackState } from '../../recoil/articleState';
import SelectDatePicker from '../../components/DatePicker/SelectDatePicker';
import Selection from '../../components/SelectBox/Selection';
import Quill from '../../components/ReactQuill/Quill';
import InputBox from '../../components/Input/InputBox';
import {
  durationOfProgress,
  recruitmentCategoryOptions,
  recruitmentNumberOfPeopleOptions,
  workOptions,
} from '../../assets/articleOptions';

const WriteArticle = () => {
  const stacks = useRecoilValue(stackState);
  const positions = useRecoilValue(positionState);

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
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={recruitmentNumberOfPeopleOptions}
              placeholder="인원 미정 ~ 10명 이상 선택"
              label="모집 인원"
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={workOptions}
              placeholder="온라인 / 오프라인 선택"
              label="진행 방식"
            />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={durationOfProgress}
              placeholder="기간 미정 ~ 6개월 이상 선택"
              label="진행 기간"
            />
          </Grid>
          <Grid item xs={6}>
            <Selection options={stacks} placeholder="스택 선택" label="기술 스택" isMulti />
          </Grid>
          <Grid item xs={6}>
            <SelectDatePicker label="모집 마감일" />
          </Grid>
          <Grid item xs={6}>
            <Selection
              options={positions}
              placeholder="프론트엔드, 백엔드, 기획자 등 선택"
              label="모집 포지션"
              isMulti
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
          <InputBox label="제목" />
        </Box>
        <Box sx={QuillBoxStyle}>
          <Quill />
        </Box>
      </Box>
      <Box sx={ButtonBoxStyle}>
        <Button variant="contained" color="warning">
          취소
        </Button>
        <Button variant="contained" color="primary">
          등록
        </Button>
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
