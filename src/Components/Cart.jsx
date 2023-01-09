import { useState, useEffect } from "react";

function Cart({ state, dispatch }) {
  const { cart } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce(
        (acc, current) => acc + Number(current.price) * current.qty,
        0
      )
    );
  }, [cart]);

  const changeQty = (productId, qty) => {
    console.log(cart);
    dispatch({
      type: "Increase_The_Quantity",
      payload: {
        productid: productId,
        Qty: qty
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: 10,
        backgroundColor: "#ececec",
        padding: 10,
        width: "20%"
      }}
    >
      <b style={{ fontSize: 30, alignSelf: "center" }}>Cart</b>
      <b style={{ alignSelf: "center" }}>Subtotal: $ {total}</b>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        {cart.length > 0
          ? cart.map((prod) => {
              console.log(prod.thumbnail);
              return (
                <div
                  key={prod.title}
                  style={{
                    display: "flex",
                    padding: 10,
                    border: "1px solid grey",
                    margin: 5,
                    justifyContent: "space-between"
                  }}
                >
                  <div style={{ display: "flex", gap: 10 }}>
                    <img
                      src={prod.thumbnail}
                      alt={prod.title}
                      style={{ width: 70, objectFit: "cover" }}
                    />
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly"
                      }}
                    >
                      <span>{prod.title}</span>
                      <b>$ {prod.price}</b>
                    </div>
                  </div>
                  <div
                    style={{ display: "flex", alignItems: "center", gap: 10 }}
                  >
                    <button onClick={() => changeQty(prod.id, prod.qty - 1)}>
                      -
                    </button>
                    <span>{prod.qty}</span>
                    <button onClick={() => changeQty(prod.id, prod.qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
              );
            })
          : "Cart is Empty"}
      </div>
    </div>
  );
}
export default Cart;
