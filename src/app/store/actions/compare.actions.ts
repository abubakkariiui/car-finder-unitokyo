import { Action } from '@ngrx/store';

export enum CompareActionTypes {
  ADD_ITEM = '[Compare] Add Item',
  DELETE_ITEM = '[Compare] Delete Item',
  DELETE_ALL_ITEMS = '[Compare] Delete All Items',
}

export class AddItemAction implements Action {
  // this.compareList = JSON.parse(localStorage.getItem('compareList'));

  // this.compareList.push(payload);

  // localStorage.setItem('compareList', JSON.stringify(this.compareList));
  // console.log(JSON.parse(localStorage.getItem('compareList')));

  readonly type = CompareActionTypes.ADD_ITEM;

  constructor(public payload: any) {}
}

export class DeleteItemAction implements Action {
  readonly type = CompareActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}
export class DeleteAllItemsAction implements Action {
  readonly type = CompareActionTypes.DELETE_ALL_ITEMS;

  constructor() {}
}

export type CompareAction =
  | AddItemAction
  | DeleteItemAction
  | DeleteAllItemsAction;
