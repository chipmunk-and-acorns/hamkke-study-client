import { Stack, Skeleton } from "@mui/material";

// post 컴포넌트에 맞춰서 다듬기
const PostSkeletonVariant = () => {
  return (
    <Stack spacing={1}>
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
};

export default PostSkeletonVariant;
