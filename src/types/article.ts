import { IUserInfo } from './user';

export interface IStacks {
  stackId: number;
  createdAt?: string;
  name?: string;
}

export interface IPosition {
  positionId: number;
  createdAt?: string;
  name?: string;
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

export interface IResponseArticle extends IUserInfo, IStacks, IPosition {
  member: IUserInfo;
  articleId: string;
  title: string;
  content: string;
  recruitmentType: string;
  recruitmentLimit: number;
  progressMode: string;
  duration: number;
  stacks: IStacks[];
  closingDate: string;
  positions: IPosition[];
  createdAt: string;
  modifiedAt: string;
  isClosed: boolean;
  isDeleted: boolean;
  likeCount: number;
  viewCount: number;
}
