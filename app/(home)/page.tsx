import { Container, Typography } from "@mui/material";

export const metadata = {
  title: "Home",
};

export default async function Home() {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4">Hamkke Study</Typography>
    </Container>
  );
}
