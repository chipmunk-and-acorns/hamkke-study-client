import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { CssBaseline } from '@mui/material';

import { router } from './routes/router.tsx';

import { getPositions, getStacks } from './api/articleApi.ts';
import { positionState, stackState } from './recoil/articleState.ts';
import { IPosition, IStacks } from './types/article.ts';

function App() {
  const setStacks = useSetRecoilState<IStacks | null>(stackState);
  const setPositions = useSetRecoilState<IPosition | null>(positionState);
  const stack = useRecoilValue(stackState);
  const positoin = useRecoilValue(positionState);

  useEffect(() => {
    // stack, position 가져오는 요청
    // TODO: my info api 호출
    Promise.all([getStacks(), getPositions()])
      .then((values) => {
        const [stackData, positionData] = values;
        setStacks(stackData.data);
        setPositions(positionData.data);
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
