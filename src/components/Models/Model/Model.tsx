import React from "react";
import "@google/model-viewer/lib/model-viewer";
import Prompt from "images/Svg/prompt";
import "./Model.css";
import {
  AiOutlineShoppingCart,
  AiFillHeart,
  AiOutlineHeart,
} from "react-icons/ai";
import { addToCart } from "features/slices/cartSlice";
import {
  addToFavorite,
  deleteFromFavorite,
  getAllFavorite,
} from "features/slices/favoriteSlice";
import { useSelector } from "react-redux";
import { useAppDispatch } from "features/hook";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export interface IData {
  data: any;
}
type IProps = any[] | any;

interface ModelViewerJSX {
  src: string;
  poster?: string;
  iosSrc?: string;
  seamlessPoster?: boolean;
  autoplay?: boolean;
  environmentImage?: string;
  exposure?: string;
  interactionPromptThreshold?: string;
  shadowIntensity?: string;
  ar?: boolean;
  arModes?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  cameraOrbit?: string;
  alt?: string;
  sx?: any;
}

const Model: React.FC<IData> = ({ data }) => {
  const dispatch = useAppDispatch();
  const favoriteList: IProps = useSelector(getAllFavorite);
  const searchQuery = useSelector((state: any) => state.search);

  const productQuantityIncreaseButtonClick = (item: any) => {
    dispatch(addToCart(item));
  };
  const favoriteButtonOnClick = (product: any) => {
    dispatch(addToFavorite(product));
  };

  const deleteFavoriteButtonOnClick = (product: any) => {
    dispatch(deleteFromFavorite(product.id));
  };

  const filteredData = data?.filter((item: any) =>
    item?.name.toLowerCase().includes(searchQuery)
  );

  return (
    <>
      {filteredData?.map((item: any) => (
        <div className="card_model" style={{ background: item.color }}>
          <div className="model_fav">
            {favoriteList.find((favori: any) => favori.id === item.id) ? (
              <AiFillHeart
                size={25}
                className="favoriteIconFill"
                onClick={() => deleteFavoriteButtonOnClick(item)}
              />
            ) : (
              <AiOutlineHeart
                size={25}
                className="favoriteIcon"
                onClick={() => favoriteButtonOnClick(item)}
              />
            )}
          </div>
          <model-viewer
            id="first"
            src={item.glbFile}
            ios-src={item.iosSrc}
            seamless-poster
            environment-image="neutral"
            exposure="1.0"
            interaction-prompt-threshold="0"
            shadow-intensity="1"
            ar
            autoplay
            ar-modes="webxr scene-viewer quick-look"
            auto-rotate
            camera-controls
            camera-orbit="0deg 90deg 0deg 8.37364m"
            alt="3D model"
            style={{
              width: "15em",
              height: "15em",
            }}
          >
            <div className="poster" slot="poster">
              <div className="pre-prompt">
                <Prompt />
              </div>
            </div>
          </model-viewer>
          <div className="model_container">
            <h2>{item.name}</h2>
            <div className="model_desc">
              <h4>{item.price} $</h4>
              <button onClick={() => productQuantityIncreaseButtonClick(item)}>
                <AiOutlineShoppingCart /> Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Model;
