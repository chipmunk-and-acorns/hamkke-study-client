import { Typography } from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import HamkkeLogo from "@/public/assets/hamkke_logo.png";

const Copyright = (props: any) => {
  return (
    <Typography
      variant="body2"
      align="center"
      color="text.secondary"
      {...props}
    >
      <Image
        src={HamkkeLogo}
        alt="hamkke logo"
        style={{ width: "4rem", height: "1rem" }}
      />
      {" Copyright © "}
      <Link href="https://github.com/chipmunk-and-acorns">
        Hamkke Github site
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
