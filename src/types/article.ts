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

export interface IRequestArticle {
  recruitmentType: string;
  recruitmentLimit: number;
  progressMode: string;
  duration: number;
  stacks: number[];
  closingDate: string;
  positionIds: number[];
  title: string;
  content: string;
}
