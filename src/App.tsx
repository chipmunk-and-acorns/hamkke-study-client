import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { CssBaseline } from '@mui/material';

import { router } from './routes/router.tsx';
import { getPositions, getStacks } from './api/articleApi.ts';
import { positionState, stackState } from './recoil/articleState.ts';
import { IPosition, IStacks } from './types/article.ts';
// import { userState } from './recoil/userState.ts';
// import { IUserInfo } from './types/user.ts';

/* enum PromiseResponseStatus {
  FulFilled = 'filfilled',
  Rejected = 'rejected',
} */

function App() {
  const setStacks = useSetRecoilState<IStacks | null>(stackState);
  const setPositions = useSetRecoilState<IPosition | null>(positionState);
  // const setUserInfo = useSetRecoilState<IUserInfo | null>(userState);

  useEffect(() => {
    Promise.all([getStacks(), getPositions()])
      .then((result) => {
        const [stackData, positionData] = result;
        setStacks(stackData);
        setPositions(positionData);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <CssBaseline />
    </>
  );
}

export default App;
