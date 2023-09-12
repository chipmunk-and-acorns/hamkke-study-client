import { Box, Typography, Grid, Divider } from '@mui/material';

import Selection from '../../components/SelectBox/Selection';
import {
  durationOfProgress,
  recruitmentCategoryOptions,
  recruitmentNumberOfPeopleOptions,
  recruitmentPosition,
  technologyStack,
  workOptions,
} from '../../assets/articleOptions';
import SelectDatePicker from '../../components/DatePicker/SelectDatePicker';

const WriteArticle = () => {
  return (
    <Box sx={ContainerStyle}>
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
          <Selection options={workOptions} placeholder="온라인 / 오프라인 선택" label="진행 방식" />
        </Grid>
        <Grid item xs={6}>
          <Selection
            options={durationOfProgress}
            placeholder="기간 미정 ~ 6개월 이상 선택"
            label="진행 기간"
          />
        </Grid>
        <Grid item xs={6}>
          <Selection options={technologyStack} placeholder="스택 선택" label="기술 스택" isMulti />
        </Grid>
        {/** 모집 마감일 (date picker) */}
        <Grid item xs={6}>
          <SelectDatePicker />
        </Grid>
        <Grid item xs={6}>
          <Selection
            options={recruitmentPosition}
            placeholder="프론트엔드, 백엔드, 기획자 등 선택"
            label="모집 포지션"
            isMulti
          />
        </Grid>
      </Grid>
    </Box>
  );
};

const ContainerStyle = {
  mx: '15%',

  hr: {
    mt: '1rem',
    mb: '2rem',
  },

  '.css-b62m3t-container': {
    mr: '1rem',
    mb: '2rem',
    backgroundColor: 'yellow',
  },
};

const BasicInformationBoxStyle = {
  width: '100%',
};

export default WriteArticle;
