import "./CartModal.css";
import { addToCart, deleteFromCart } from "../../features/slices/cartSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "features/hook";
import ModelBox from "components/Models/ModelBox/ModelBox";
import { FaTimes } from "react-icons/fa";

export interface IProps {
  data: any;
  cartList: [];
}

const CartModal = ({ setIsCartOpen }: any) => {
  const dispatch = useAppDispatch();
  const cartList: IProps = useSelector((state: any) => state?.carts?.cartList);

  const deleteFromCartButton = (product: any) => {
    dispatch(deleteFromCart(product));
  };

  const addToCartButton = (product: any) => {
    dispatch(addToCart(product));
  };

  const navbarCarts = Object.entries(cartList);

  console.log("navbar cart", navbarCarts);

  return (
    <div className="cartWrapper">
      <div className="closeBtn">
        <h2>Cart: </h2>
        <FaTimes onClick={() => setIsCartOpen(false)} />
      </div>
      {navbarCarts &&
        navbarCarts?.map(([key, value]) => (
          <>
            <div className="cartItems">
              <div className="cartTopItems">
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
                  {/* <button>Satın Al</button> */}
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default CartModal;
