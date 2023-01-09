import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

function Products({ state, dispatch }) {
  const { cart } = state;

  const addProductsToCart = (prod) => {
    dispatch({
      type: "Add_To_Cart",
      payload: {
        id: prod.id,
        title: prod.title,
        price: prod.price,
        thumbnail: prod.thumbnail,
        qty: 1
      }
    });
  };
  const removeItemFromCart = (prod) => {
    dispatch({
      type: "Remove_From_Cart",
      payload: prod.id
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        width: "80%"
      }}
    >
      {state.products.length > 0 &&
        state.products.map((prod) => {
          return (
            <div
              key={prod.id}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                border: "1px solid grey",
                width: "30%",
                marginTop: 10,
                gap: 10
              }}
            >
              <img
                src={prod.thumbnail}
                alt={prod.title}
                style={{ height: 200, objectFit: "cover" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>{prod.title}</span>
                <b>$ {prod.price}</b>
              </div>
              {cart.some((element) => element.id == prod.id) ? (
                <button
                  onClick={() => {
                    removeItemFromCart(prod);
                  }}
                >
                  <DeleteIcon />
                </button>
              ) : (
                <button
                  color="primary"
                  aria-label="add to shopping cart"
                  onClick={() => {
                    addProductsToCart(prod);
                  }}
                >
                  <AddShoppingCartIcon />
                </button>
              )}
            </div>
          );
        })}
    </div>
  );
}
export default Products;
