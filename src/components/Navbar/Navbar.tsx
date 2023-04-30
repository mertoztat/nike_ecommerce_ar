import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "assets/logo.png";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  return (
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
              <FaShoppingCart
                // onClick={() => dispatch(setIsOpenCart({}))}
                // onClick={() => dispatch(setIsOpenCart({ isCartOpen: !cart }))}
                size={20}
              />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
