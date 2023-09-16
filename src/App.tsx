import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { CssBaseline } from '@mui/material';

import { router } from './routes/router.tsx';

import { getPositions, getStacks } from './api/articleApi.ts';
import { positionState, stackState } from './recoil/articleState.ts';
import { IPosition, IStacks } from './types/article.ts';
import { getMyInfoLookup } from './api/userApi.ts';
import { userState } from './recoil/userState.ts';
import { IUserInfo } from './types/user.ts';

function App() {
  const setStacks = useSetRecoilState<IStacks | null>(stackState);
  const setPositions = useSetRecoilState<IPosition | null>(positionState);
  const setUserInfo = useSetRecoilState<IUserInfo | null>(userState);

  useEffect(() => {
    Promise.all([getStacks(), getPositions(), getMyInfoLookup()])
      .then((values) => {
        const [stackData, positionData, myInfo] = values;
        setStacks(stackData);
        setPositions(positionData);
        setUserInfo(myInfo);
      })
      .catch((error) => console.error('Error: ', error));
  }, []);

  return (
    <>
      <RouterProvider router={router} />
      <CssBaseline />
    </>
  );
}

export default App;
