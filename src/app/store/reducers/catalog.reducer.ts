import {
  CatalogActionTypes,
  CatalogAction,
} from 'src/app/store/actions/catalog.actions';

const initialState: any = [];

export function catalogReducer(
  state: any = initialState,
  action: CatalogAction
) {
  switch (action.type) {
    case CatalogActionTypes.STORE_CATALOG:
      return [...state, action.payload];

    default:
      return state;
  }
}
