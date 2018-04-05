//client/src/reducers/products.js

const initialState = [
  {
    id: 1,
    name: 'Douche bag',
    price: 1450
  },
  {
    id: 5,
    name: 'Tweater',
    price: 550
  },
  {
    id: 7,
    name: 'T-shirt',
    price: 10
  }
]

export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
