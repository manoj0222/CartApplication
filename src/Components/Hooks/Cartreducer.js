const Cartreducer = (state, action) => {
  switch (action.type) {
    case "Add_Products":
      return { ...state, products: action.payload };

    case "Add_To_Cart":
      return { ...state, cart: [{ ...action.payload, qty: 1 }, ...state.cart] };

    case "Remove_From_Cart":
      return {
        ...state,
        cart: state.cart.filter((element) => action.payload !== element.id)
      };

    case "Increase_The_Quantity":
      return {
        ...state,
        cart: state.cart.filter((element) =>
          element.id == action.payload.productid
            ? (element.qty = action.payload.Qty)
            : element.qty
        )
      };

    default:
      break;
  }
};

export default Cartreducer;
