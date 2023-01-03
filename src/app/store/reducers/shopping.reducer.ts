import {
  ShoppingAction,
  ShoppingActionTypes,
} from 'src/app/store/actions/shopping.actions';
import { CarModel } from 'src/app/store/models/car.model';

const initialState: Array<CarModel> = [];

export function ShoppingReducer(
  state: Array<CarModel> = initialState,
  action: ShoppingAction
) {
  switch (action.type) {
    case ShoppingActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case ShoppingActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case ShoppingActionTypes.DELETE_ALL_ITEMS: {
      state = [];
      return state;
    }
    default:
      return state;
  }
}
