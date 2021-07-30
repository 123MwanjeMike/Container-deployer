import * as appTypes from '../types';
import * as fetchFunctions from '../../api/index';
import appEndpoints from '../endpoints/app';

export const continueClick = () => async (dispatch) => {
  dispatch({ type: appTypes.APP_FORM });
};

export const backClick = () => async (dispatch) => {
  dispatch({ type: appTypes.APP_INDEX });
};

export const deployContainer = (payload) => async (dispatch) => {
  dispatch({
    type: appTypes.APP_LOADING,
  });

  const result = await fetchFunctions.postData(
    appEndpoints.deploy_container,
    payload,
  );

  if (result.success) {
    dispatch({
      type: appTypes.APP_SUCCESS,
      payload: {
        status: true,
        message: result?.response?.message,
      },
    });
  } else {
    dispatch({
      type: appTypes.APP_ERROR,
      payload: {
        error: true,
        errorMessage: result?.error?.message,
      },
    });
  }
};
