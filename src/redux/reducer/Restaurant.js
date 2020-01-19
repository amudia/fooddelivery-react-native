const initialState = {
  count: 0,
  data: [],
  isLoading: false,
  isError: false,
  isSuccess: true,
};

const restaurant = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_RESTAURANT':
      return {
        ...state,
        data: [
          {
            name_rest: 'Pizza Hut Delivery-Padjajaran Bogor',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'phd.jpg',
          },
          {
            name_rest: 'Richeese Factory-Padjajaran Bogor',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'richeese.jpg',
          },
          {
            name_rest: 'HokBen-Baranangsiang',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'hokben.jpg',
          },
          {
            name_rest: 'KFC-Padjajaran Bogor',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'kfc.jpg',
          },
          {
            name_rest: 'McDonalds-Juanda Bogor',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'mcdonald.jpg',
          },
          {
            name_rest: 'Starbucks-Bogor Rest Area',
            desc_rest: 'Deskripsi Restaurant',
            logo: 'starbucks.png',
          },
        ],
      };
    default:
      return state;
  }
};

export default restaurant;
