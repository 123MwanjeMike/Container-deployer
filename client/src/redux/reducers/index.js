import * as appTypes from '../types';

const initialState = {
  page: 'index',
  linkTo: '/form',
  linkText: 'Continue',
  loading: false,
  error: false,
  errorMessage: null,
  success: {
    status: false,
    message: 'All set!',
  },
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case appTypes.APP_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
        errorMessage: null,
      };
    case appTypes.APP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case appTypes.APP_INDEX:
      return {
        ...state,
        page: 'index',
        linkTo: '/form',
        linkText: 'Continue',
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case appTypes.APP_FORM:
      return {
        ...state,
        ...state,
        page: 'form',
        linkTo: '/',
        linkText: 'Back',
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: action.payload.status,
          message: action.payload.message,
        },
      };
    case appTypes.APP_ERROR:
      return {
        ...state,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage,
        loading: false,
      };
    case appTypes.APP_RESET:
      return {
        ...state,
        loading: false,
        error: false,
        errorMessage: null,
        success: {
          status: false,
          message: 'All set!',
        },
      };
    default:
      return state;
  }
};

export default appReducer;
