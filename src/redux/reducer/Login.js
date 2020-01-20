const initialState = {
  data: [],
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
        data: action.payload.data.token,
        isLoading: false,
        isError: false,
        success: action.payload.data.success,
      };
    default:
      return state;
  }
};

export default login;
