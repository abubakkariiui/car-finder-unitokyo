import {
  ShowroomActionTypes,
  ShowroomAction,
} from 'src/app/store/actions/showrooms.actions';

const initialState: any = [];

export function ShowroomReducer(
  state: any = initialState,
  action: ShowroomAction
) {
  switch (action.type) {
    case ShowroomActionTypes.STORE_SHOWROOMS:
      return (state = action.payload);

    default:
      return state;
  }
}
