import { Action } from '@ngrx/store';

export enum TopOffersActionTypes {
  STORE_TOP_OFFERS = '[TopOffers] Store Top Offers',
}

export class StoreTopOffers implements Action {
  readonly type = TopOffersActionTypes.STORE_TOP_OFFERS;

  constructor(public payload) {}
}

export type TopOffersAction = StoreTopOffers;
