import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';

import { router } from './routes/router.tsx';

function App() {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
}

export default App;
