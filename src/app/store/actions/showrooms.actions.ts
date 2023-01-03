import { Action } from '@ngrx/store';
export enum ShowroomActionTypes {
  STORE_SHOWROOMS = '[Showroom] Store Showroom',
}

export class StoreShowrooms implements Action {
  readonly type = ShowroomActionTypes.STORE_SHOWROOMS;

  constructor(public payload) {}
}

export type ShowroomAction = StoreShowrooms;
