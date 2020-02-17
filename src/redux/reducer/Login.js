const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case 'POST_LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'POST_LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'POST_LOGIN_FULFILLED':
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: action.payload.data.success,
      };
    case 'LOGOUT_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case 'LOGOUT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    case 'LOGOUT_FULFILLED':
      return {
        ...state,
        data: [],
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default login;
