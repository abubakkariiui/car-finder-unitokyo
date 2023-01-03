import { Action } from '@ngrx/store';
export enum BrandActionTypes {
  STORE_BRANDS = '[Brand] Store Brand',
}

export class StoreBrands implements Action {
  readonly type = BrandActionTypes.STORE_BRANDS;

  constructor(public payload) {}
}

export type BrandAction = StoreBrands;
