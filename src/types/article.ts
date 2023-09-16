export interface IStacks {
  stackId: number;
  createdAt: string;
}

export interface IPosition {
  positionId: number;
  createdAt: string;
}

export interface IResponseStack {
  stackId: number;
  name?: string;
  createdAt: string;
  value?: string;
  label?: string;
}

export interface IResponsePosition {
  positionId: number;
  name?: string;
  createAt: string;
  value?: string;
  label?: string;
}
