const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const popularitem = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_POPULAR_ITEM':
      return {
        ...state,
        data: [
          {
            name_item: 'Pumpkin Spice Latte',
            image: 'starbucks2.jpg',
            name_rest: 'Starbucks',
            price: 14000,
          },
          {
            name_item: 'Paket Combo',
            image: 'ayam.jpg',
            name_rest: 'Khentucky Fried Chicken',
            price: 32000,
          },
          {
            name_item: 'Supreme Super Pizza',
            image: 'pizza.png',
            name_rest: 'Pizza Hut',
            price: 120000,
          },
          {
            name_item: 'Espresso: Starbucks Coffee Company',
            image: 'starbucks.jpeg',
            name_rest: 'Starbucks',
            price: 24000,
          },
        ],
      };
    default:
      return state;
  }
};

export default popularitem;
