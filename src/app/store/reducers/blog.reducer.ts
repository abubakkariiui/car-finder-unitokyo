import {
  BlogActionTypes,
  BlogAction,
} from 'src/app/store/actions/blog.actions';

const initialState: any = [];

export function blogReducer(state: any = initialState, action: BlogAction) {
  switch (action.type) {
    case BlogActionTypes.STORE_BLOGS:
      return [...state, action.payload];

    default:
      return state;
  }
}
