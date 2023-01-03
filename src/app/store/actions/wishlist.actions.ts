import { Action } from '@ngrx/store';
import { CarModel } from '../models/car.model';

export enum wishlistActionTypes {
  ADD_ITEM = '[wishlist] Add Item',
  DELETE_ITEM = '[wishlist] Delete Item',
  DELETE_ALL_ITEMS = '[wishlist] Delete All Items',
}

export class AddWishlistItem implements Action {
  readonly type = wishlistActionTypes.ADD_ITEM;

  constructor(public payload: CarModel) {}
}

export class DeleteWishlistItem implements Action {
  readonly type = wishlistActionTypes.DELETE_ITEM;

  constructor(public payload: string) {}
}
export class DeleteAllWishlistItems implements Action {
  readonly type = wishlistActionTypes.DELETE_ALL_ITEMS;

  constructor() {}
}

export type wishlistAction =
  | AddWishlistItem
  | DeleteWishlistItem
  | DeleteAllWishlistItems;
