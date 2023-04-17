import React, { useState } from "react";
import "@google/model-viewer/lib/model-viewer";
import Prompt from "assets/Svg/prompt";
import ModelData from "Data/data.json";
import "./Model.css";
import { AiOutlineShoppingCart, AiFillHeart } from "react-icons/ai";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": ModelViewerJSX &
        React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

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

const Model = () => {
  const [data, setData] = useState(Object.entries(ModelData)[0][1]);
  console.log(data);
  return (
    <>
      {data?.map((item: any) => (
        <div className="card_model" style={{ background: item.color }}>
          <div className="model_fav">
            <AiFillHeart />
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
              <h4>{item.price}</h4>
              <button>
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
