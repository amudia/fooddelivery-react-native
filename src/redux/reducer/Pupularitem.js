const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const popularitem = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_ITEM_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_POPULAR_ITEM_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_POPULAR_ITEM_FULFILLED':
      return {
        count: action.payload.data.length,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    default:
      return state;
  }
};

export default popularitem;
