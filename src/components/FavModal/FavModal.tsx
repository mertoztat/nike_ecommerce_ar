import "./FavModal.css";
import ModelBox from "components/Models/ModelBox/ModelBox";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";

export interface IProps {
  data: any;
}

const FavModal = ({ setIsFavOpen, navbarFavs }: any) => {
  console.log("navbarFav", navbarFavs);

  return (
    <div className="favWrapper">
      <div className="closeBtn">
        <h2>Favorites </h2>
        <FaTimes
          style={{
            color: "rgba(71, 36, 117, 0.89)",
            cursor: "pointer",
          }}
          onClick={() => setIsFavOpen(false)}
        />
      </div>
      <div className="fav-items">
        {navbarFavs &&
          navbarFavs?.map(([key, value]: any) => (
            <>
              <div className="favItem">
                <div className="favTopItem">
                  <ModelBox
                    width="8em"
                    height="8 em"
                    glbSrc={value.glbFile}
                    iosSrc={value.iosSrc}
                  />
                  <p>{value.name}</p>
                </div>
              </div>
            </>
          ))}
        {navbarFavs.length === 0 ? <h3>No Favorite Items...</h3> : ""}
      </div>
    </div>
  );
};

export default FavModal;
