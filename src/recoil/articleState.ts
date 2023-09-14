import { atom } from 'recoil';

import { IStacks, IPosition } from '../types/article';

const stackState = atom<IStacks | null>({
  key: 'stacks',
  default: null,
});

const positionState = atom<IPosition | null>({
  key: 'positions',
  default: null,
});

export { stackState, positionState };
