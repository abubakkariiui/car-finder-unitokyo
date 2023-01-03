import { Action } from '@ngrx/store';
export enum CatalogActionTypes {
  STORE_CATALOG = '[Catalog] Store Catalog',
}

export class StoreCatalog implements Action {
  readonly type = CatalogActionTypes.STORE_CATALOG;

  constructor(public payload) {}
}

export type CatalogAction = StoreCatalog;
