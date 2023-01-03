import { Action } from '@ngrx/store';

export enum BlogActionTypes {
  STORE_BLOGS = '[blog] Store Blogs',
  STORE_LATEST_BLOGS = '[blog] Store Lates Blogs',
}

export class StoreBlogs implements Action {
  readonly type = BlogActionTypes.STORE_BLOGS;

  constructor(public payload) {}
}

export class StoreLatestBlogs implements Action {
  readonly type = BlogActionTypes.STORE_LATEST_BLOGS;

  constructor(public payload) {}
}

export type BlogAction = StoreBlogs | StoreLatestBlogs;
