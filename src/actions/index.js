import { createAction } from "redux-actions";

export const LoadDataSuccess = createAction("LOAD_DATA_SUCCESS");
export const LoadMoreDataSuccess = createAction("LOAD_MORE_DATA_SUCCESS");

export const LoadInitData = (images, size) => dispatch => {
  fetch('https://demo6539122.mockable.io/images')
    .then((response) => response.json())
    .then((responseJson) => dispatch(LoadDataSuccess(responseJson.slice(images.length, size)
    )))
    .catch((error) => {
      console.error(error);
    });
}
export const LoadMore = (images, size) => dispatch => {
  dispatch(LoadMoreIndication)
  fetch('https://demo6539122.mockable.io/images')
    .then((response) => {
      console.log("RESPONSE=>", response.json())
      return response.json()
    })
    .then((responseJson) => {
      if (responseJson.length !== images.length) {
        console.log("ENTERED CONDITION")
        dispatch(LoadMoreDataSuccess(responseJson.slice(images.length, size)))
      }

    })
    .catch((error) => {
      console.error(error);
    });
}