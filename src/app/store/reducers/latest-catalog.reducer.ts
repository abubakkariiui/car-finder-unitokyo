import {
  LatestCatalogActionTypes,
  LatestCatalogAction,
} from 'src/app/store/actions/latestCatalog.actions';

const initialState: any = [];

export function latestCatalogReducer(
  state: any = initialState,
  action: LatestCatalogAction
) {
  switch (action.type) {
    case LatestCatalogActionTypes.STORE_LATEST_CATALOG:
      return [...state, action.payload];

    default:
      return state;
  }
}
