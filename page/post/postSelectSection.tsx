import { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { Box, Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { position, postTypes, recruitCount, stacks } from "@/constants/data";
import SelectBox from "@/components/select/selectBox";

interface IProps {
  handleSelectValuesChange: (value: { key: string; value: string }) => void;
  handleStacksChange: () => void;
  handlePositionChange: () => void;
}

const PostSelectSection = ({
  handleSelectValuesChange,
  handleStacksChange,
  handlePositionChange,
}: IProps) => {
  const handleEndDateChange = (value) => {
    const { $y: Year, $M: Month, $D: Day } = value;
    handleSelectValuesChange({
      key: "endDate",
      value: `${Year}-${Month + 1}-${Day}`,
    });
  };

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
            name="postType"
            onChange={handleSelectValuesChange}
          />
        </Grid>
        <Grid xs={4} sm={4} md={4}>
          <SelectBox
            placeholder="인원 미정 ~ 10명 이상"
            label="모집 인원"
            options={recruitCount}
            name="recruitCount"
            onChange={handleSelectValuesChange}
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
              <DatePicker onChange={handleEndDateChange} />
            </DemoItem>
          </LocalizationProvider>
        </Grid>
        <Grid xs={4} sm={4} md={6}>
          <SelectBox
            placeholder="사용할 기술 스택들 선택"
            isMulti
            label="기술 스택"
            options={stacks}
            name="stacks"
            onChange={handleStacksChange}
          />
        </Grid>
        <Grid xs={4} sm={4} md={6}>
          <SelectBox
            placeholder="프론트엔드, 백엔드, 디자이너 ..."
            isMulti
            label="모집 포지션"
            options={position}
            name="position"
            onChange={handlePositionChange}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostSelectSection;
