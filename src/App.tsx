import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

import { router } from './routes/router.tsx';

const queryClient = new QueryClient();

function App() {
  // 새로고침, 창 껐다 켰을때 로그인 유지
  // 최초 한번 회원정보 들고오는 API 호출

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <RouterProvider router={router} />
        <CssBaseline />
      </RecoilRoot>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
