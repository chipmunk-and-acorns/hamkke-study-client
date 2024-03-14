import Link from "next/link";
import Image from "next/image";
import { Box, Typography } from "@mui/material";

import { HamkkeLogo } from "@/public/assets/imgSrc";

const Copyright = (props: any) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
      <Image
        src={HamkkeLogo}
        alt="hamkke logo"
        style={{ width: "5.2rem", height: "1.2rem" }}
      />
      <Typography variant="body2" sx={{ color: "grey", mx: 1 }}>
        Copyright &copy;
      </Typography>
      <Link
        href="https://github.com/chipmunk-and-acorns"
        style={{ fontWeight: "bold" }}
      >
        <Typography variant="body2" sx={{ mr: 1 }}>
          Hamkke Github site
        </Typography>
      </Link>
      <Typography variant="body2" sx={{ color: "grey" }}>
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Box>
  );
};

export default Copyright;
