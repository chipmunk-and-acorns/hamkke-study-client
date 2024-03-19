import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { position, postTypes, recruitCount, stacks } from "@/constants/data";
import SelectBox from "@/components/select/selectBox";

const PostSelectSection = () => {
  return (
    <Box component="section" minHeight={350} sx={{ mt: 10, mb: 5 }}>
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
  );
};

export default PostSelectSection;
