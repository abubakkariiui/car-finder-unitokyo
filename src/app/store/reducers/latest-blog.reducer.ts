import {
  BlogActionTypes,
  BlogAction,
} from 'src/app/store/actions/blog.actions';

const initialState: any = [];

export function latestBlogReducer(
  state: any = initialState,
  action: BlogAction
) {
  switch (action.type) {
    case BlogActionTypes.STORE_LATEST_BLOGS:
      return [...state, action.payload];

    default:
      return state;
  }
}
