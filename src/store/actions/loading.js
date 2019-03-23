import { CHANGE_LOADING_STATE  } from '../actionTypes';

export const changeLoadingState = () => ({
  type: CHANGE_LOADING_STATE,
});

// export const changeLoadingState = (status) => {
//   return dispatch => {
//     try {
//       if (status) {
//         return dispatch(startLoading());
//       } else {
//         return dispatch(stopLoading());
//       }
//     }
//     catch (err) {
//       console.log(err);
//     }
//   }
// }