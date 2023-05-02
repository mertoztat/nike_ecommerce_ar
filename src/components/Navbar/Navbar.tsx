import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import logo from "images/logo.png";
import { useSelector } from "react-redux";
import { useState } from "react";
import { getAllFavorite } from "features/slices/favoriteSlice";
import CartModal from "components/CartModal/CartModal";
import FavModal from "components/FavModal/FavModal";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "features/slices/searchSlice";

export interface IProps {
  data: any;
  cartList: [];
}
type IFavorite = any[] | any;

const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isFavOpen, setIsFavOpen] = useState<boolean>(false);
  const cartList: IProps = useSelector((state: any) => state?.carts?.cartList);
  const favoriteList: IFavorite = useSelector(getAllFavorite);
  const navbarCarts = Object.entries(cartList);
  const navbarFavs = Object.entries(favoriteList);

  const dispatch = useDispatch();

  const handleSearchInputChange = (event: any) => {
    dispatch(setSearchQuery(event.target.value));
  };

  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="nike_logo" />
          </div>
          <div className="nav_search">
            <input
              type="text"
              placeholder="Search"
              onChange={handleSearchInputChange}
            />
            <FaSearch size={15} className="search_icon" />
          </div>
          <div className="nav_items">
            <ul>
              <li className="cart_fav">
                <div
                  className="notifications"
                  onClick={() => setIsFavOpen(!isFavOpen)}
                >
                  <FaHeart size={20} />
                  <span className="badge">
                    <small>{navbarFavs?.length}</small>
                  </span>
                </div>
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
      {isFavOpen && (
        <FavModal setIsFavOpen={setIsFavOpen} navbarFavs={navbarFavs} />
      )}
      {isCartOpen && (
        <CartModal setIsCartOpen={setIsCartOpen} navbarCarts={navbarCarts} />
      )}
    </>
  );
};

export default Navbar;
