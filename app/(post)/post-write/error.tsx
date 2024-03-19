"use client";

import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { ErrorPageImg } from "@/public/assets/imgSrc";

const Error = () => {
  return (
    <Box style={{ textAlign: "center" }}>
      <Image
        src={ErrorPageImg}
        alt="Something's wrong here..."
        style={{ height: "100%", lineHeight: "100%" }}
      />
      <Typography variant="subtitle1">
        Something&lsquo;s wrong here...
      </Typography>
    </Box>
  );
};

export default Error;
