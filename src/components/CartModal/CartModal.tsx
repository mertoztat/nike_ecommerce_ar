import "./CartModal.css";
import { addToCart, deleteFromCart } from "../../features/slices/cartSlice";
import { useAppDispatch } from "features/hook";
import ModelBox from "components/Models/ModelBox/ModelBox";
import { FaTimes } from "react-icons/fa";
import ModelData from "Data/data.json";
import { useSelector } from "react-redux";

export interface IProps {
  data: any;
}

const CartModal = ({ setIsCartOpen, navbarCarts }: any) => {
  const dispatch = useAppDispatch();
  const data = Object.entries(ModelData)[0][1];
  const cartList: IProps = useSelector((state: any) => state?.carts?.cartList);
  const navCartItems = Object.entries(cartList);

  const deleteFromCartButton = (product: any) => {
    dispatch(deleteFromCart(product));
  };

  const addToCartButton = (product: any) => {
    dispatch(addToCart(product));
  };

  const cartTotalPrice = () => {
    let total = 0;
    navbarCarts?.map((item: any) => {
      const products = data.find((product: any) => product.id === item[1].id);
      const price = products?.price;
      total += Number(price) * item[1].quantity;
    });
    return total;
  };

  console.log("navCartItems", navCartItems);

  return (
    <div className="cartWrapper">
      <div className="closeBtn">
        <h2>Cart </h2>
        <FaTimes
          style={{
            color: "rgba(71, 36, 117, 0.89)",
            cursor: "pointer",
          }}
          onClick={() => setIsCartOpen(false)}
        />
      </div>
      <div className="cart-items">
        {navbarCarts &&
          navbarCarts?.map(([key, value]: any) => (
            <>
              <div className="cartItem">
                <div className="cartTopItem">
                  <ModelBox
                    width="8em"
                    height="8 em"
                    glbSrc={value.glbFile}
                    iosSrc={value.iosSrc}
                  />
                  <p>{value.name}</p>
                  <div className="counter">
                    <div className="counterQuantity">
                      <span
                        onClick={() => deleteFromCartButton(value)}
                        className="decrease"
                      >
                        -
                      </span>
                      <span className="count">{value.quantity}</span>
                      <span
                        onClick={() => addToCartButton(value)}
                        className="increase"
                      >
                        +
                      </span>
                    </div>
                    <span>{value.quantity * value.price}</span>
                  </div>
                </div>
              </div>
            </>
          ))}
        {navCartItems.length === 0 ? (
          <h3>No Cart Items...</h3>
        ) : (
          <div className="cart-total">
            <h1>Subtotal: {cartTotalPrice()}</h1>
            <button>Satın Al</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartModal;
