import {
  CompareAction,
  CompareActionTypes,
} from 'src/app/store/actions/compare.actions';

const initialState: Array<any> = [];

export function CompareReducer(
  state: Array<any> = initialState,
  action: CompareAction
) {
  switch (action.type) {
    case CompareActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case CompareActionTypes.DELETE_ITEM:
      return state.filter((item) => item.VehicleSku !== action.payload);
    case CompareActionTypes.DELETE_ALL_ITEMS: {
      state = [];
      return state;
    }
    default:
      return state;
  }
}
