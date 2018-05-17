import { createAction } from "redux-actions";
// Default Actions required for redux flow  Used A predefined library called redux actions to organize the flow more
export const LoadDataSuccess = createAction("LOAD_DATA_SUCCESS");
export const LoadMoreDataSuccess = createAction("LOAD_MORE_DATA_SUCCESS");
// Load Initial Data for the app to view the achieved layout
export const LoadInitData = (images, size) => dispatch => {
  fetch('https://demo6539122.mockable.io/images')
    .then((response) => response.json())
    .then((responseJson) => dispatch(LoadDataSuccess(responseJson.slice(images.length, size)
    )))
    .catch((error) => {
      console.error(error);
    });
}

// Load MOre Action to be triggered when  LoadMore Event Triggered
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