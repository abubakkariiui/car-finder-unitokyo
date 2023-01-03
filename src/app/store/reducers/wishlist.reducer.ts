import {
  wishlistAction,
  wishlistActionTypes,
} from 'src/app/store/actions/wishlist.actions';
import { CarModel } from 'src/app/store/models/car.model';

const initialState: Array<CarModel> = [];

export function wishlistReducer(
  state: Array<CarModel> = initialState,
  action: wishlistAction
) {
  switch (action.type) {
    case wishlistActionTypes.ADD_ITEM:
      return [...state, action.payload];
    case wishlistActionTypes.DELETE_ITEM:
      return state.filter((item) => item.id !== action.payload);
    case wishlistActionTypes.DELETE_ALL_ITEMS: {
      state = [];
      return state;
    }
    default:
      return state;
  }
}
