const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const categories = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CATEGORIES':
      return {
        ...state,
        data: [
          {
            name_cat: 'Coffee',
            logo: 'coffee.png',
          },
          {
            name_cat: 'Tea',
            logo: 'tea.png',
          },
          {
            name_cat: 'Pizza',
            logo: 'pizza.png',
          },
          {
            name_cat: 'Chicken',
            logo: 'chicken.png',
          },
        ],
      };
    default:
      return state;
  }
};

export default categories;
