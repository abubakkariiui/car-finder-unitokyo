import {
  BrandActionTypes,
  BrandAction,
} from 'src/app/store/actions/brands.actions';

const initialState: any = [];

export function brandReducer(state: any = initialState, action: BrandAction) {
  switch (action.type) {
    case BrandActionTypes.STORE_BRANDS:
      return [...state, action.payload];

    default:
      return state;
  }
}
