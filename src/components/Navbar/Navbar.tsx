import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import CartModal from "components/CartModal/CartModal";

export interface IProps {
  data: any;
  cartList: [];
}

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const cartList: IProps = useSelector((state: any) => state?.carts?.cartList);
  const navbarCarts = Object.entries(cartList);
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="nike_logo" />
          </div>
          <div className="nav_search">
            <input type="text" placeholder="Search" />
            <FaSearch size={15} className="search_icon" />
          </div>
          <div className="nav_items">
            <ul>
              <li className="cart_fav">
                <FaHeart size={20} />
              </li>
              <li className="cart_item">
                <div
                  className="notifications"
                  onClick={() => setIsCartOpen(!isCartOpen)}
                >
                  <FaShoppingCart size={20} />
                  <span className="badge">
                    <small>{navbarCarts?.length}</small>
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      {isCartOpen && <CartModal setIsCartOpen={setIsCartOpen} />}
    </>
  );
};

export default Navbar;
