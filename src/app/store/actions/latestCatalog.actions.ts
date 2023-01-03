import { Action } from '@ngrx/store';

export enum LatestCatalogActionTypes {
  STORE_LATEST_CATALOG = '[LatestCatalog] Store Latest Catalog',
}

export class StoreLatestCatalog implements Action {
  readonly type = LatestCatalogActionTypes.STORE_LATEST_CATALOG;

  constructor(public payload) {}
}

export type LatestCatalogAction = StoreLatestCatalog;
