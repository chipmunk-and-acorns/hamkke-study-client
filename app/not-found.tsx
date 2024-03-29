import Link from "next/link";
import Image from "next/image";
import { Button, Container, Typography } from "@mui/material";

import { Error404 } from "@/public/assets/imgSrc";

const NotFound = () => {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
      }}
    >
      <Image
        src={Error404}
        alt={`A bear crying because he can't find the page img`}
      />
      <Typography m={4} sx={{ fontWeight: "bold" }}>
        요청하신 페이지를 찾을 수 없어요 &#10071;
      </Typography>
      <Button variant="text">
        <Link href="/">Hamkke 홈으로 가기</Link>
      </Button>
    </Container>
  );
};

export default NotFound;
