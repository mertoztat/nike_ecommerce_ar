import React from "react";
import "@google/model-viewer/lib/model-viewer";
import Prompt from "assets/Svg/prompt";

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

const ModelBox = () => {
  return (
    <>
      <model-viewer
        id="first"
        src="/assets/nikeBox.glb"
        ios-src="/assets/nikeBox.usdz"
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
          width: "20em",
          height: "20em",
          zIndex: "99",
          position: "relative",
        }}
      >
        <div className="poster" slot="poster">
          <div className="pre-prompt">
            <Prompt />
          </div>
        </div>
      </model-viewer>
    </>
  );
};

export default ModelBox;
