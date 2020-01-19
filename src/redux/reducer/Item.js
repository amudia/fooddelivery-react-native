const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const item = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ITEM':
      return {
        ...state,
        data: [
          {
            name: 'Supreme Super Pizza',
            image: 'pizza.png',
            restaurant: 'Pizza Hut',
            price: 120000,
          },
          {
            name: 'Espresso: Starbucks Coffee Company',
            image: 'starbucks.jpeg',
            restaurant: 'Starbucks',
            price: 24000,
          },
          {
            name: 'Dark Chocolate Mocha',
            image: 'ayam.jpg',
            restaurant: 'Khentucky Fried Chicken',
            price: 32000,
          },
          {
            name: 'Pumpkin Spice Latte',
            image: 'starbucks2.jpg',
            restaurant: 'Starbucks',
            price: 14000,
          },
        ],
      };
    default:
      return state;
  }
};

export default item;
