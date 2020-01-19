const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const itemid = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_ITEM_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_ITEM_BY_ID_FULFILLED':
      return {
        count: action.payload.data.length,
        data: action.payload.data.data,
        isLoading: false,
        isError: false,
      };
    case 'GET_ITEM_BY_CATEGORY_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case 'GET_ITEM_BY_CATEGORY_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case 'GET_ITEM_BY_CATEGORY_FULFILLED':
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

export default itemid;
