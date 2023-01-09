import { useEffect, useReducer } from "react";
import axios from "axios";
import Cartreducer from "./Hooks/Cartreducer";
import Products from "./Products";
import Cart from "./Cart";

function Parent() {
  const [state, dispatch] = useReducer(Cartreducer, {
    products: [],
    cart: []
  });

  const fetchAllProducts = async () => {
    const { data } = await axios.get("https://dummyjson.com/products");
    dispatch({
      type: "Add_Products",
      payload: data.products
    });
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div style={{ width: "100%", display: "flex" }}>
      <Products state={state} dispatch={dispatch} />
      <Cart state={state} dispatch={dispatch} />
    </div>
  );
}
export default Parent;
