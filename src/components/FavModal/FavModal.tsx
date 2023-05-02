import "./FavModal.css";
import ModelBox from "components/Models/ModelBox/ModelBox";
import { FaTimes } from "react-icons/fa";

export interface IProps {
  data: any;
}

const FavModal = ({ setIsFavOpen, navbarFavs }: any) => {
  return (
    <div className="favWrapper">
      <div className="closeBtn">
        <h2>Favorites </h2>
        <FaTimes onClick={() => setIsFavOpen(false)} />
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
      </div>
    </div>
  );
};

export default FavModal;
