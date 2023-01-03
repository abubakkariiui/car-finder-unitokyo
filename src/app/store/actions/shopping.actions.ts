import { Action, Store } from '@ngrx/store';
import { CarModel } from '../models/car.model';

export enum ShoppingActionTypes {
  ADD_ITEM = '[Shopping] Add Item',
  DELETE_ITEM = '[Shopping] Delete Item',
  DELETE_ALL_ITEMS = '[Shopping] Delete All Items',
}

export class AddItemAction implements Action {
  readonly type = ShoppingActionTypes.ADD_ITEM;

  constructor(public payload: CarModel) {}
}

export class DeleteItemAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}
export class DeleteAllItemsAction implements Action {
  readonly type = ShoppingActionTypes.DELETE_ALL_ITEMS;

  constructor() {}
}

export type ShoppingAction =
  | AddItemAction
  | DeleteItemAction
  | DeleteAllItemsAction;
