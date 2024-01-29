"use client";
import Image from "next/image";
import { Pannellum } from "pannellum-react";
import pano1 from "../../public/images/panorama/pano1-X.png";
import { useState } from "react";
import { StaticImageData } from "next/image";

const Home = () => {
  const [currentScene, setCurrentScene] = useState<StaticImageData>(pano1);

  return (
    <div className="h-screen flex">
      <Pannellum
        width="100%"
        height="100%"
        image={currentScene.src}
        // yaw={300}
        // hfov={110}
        yaw={206}
        hfov={115}
        // vaov={178}
        // vOffsect={5}
        // maxYaw={180}
        pitch={-15}
        title={""}
        autoLoad
        autoRotate={-0.6}
        compass={true}
        showZoomCtrl={false}
        mouseZoom={false}
        keyboardZoom={false}
        showFullscreenCtrl={false}
        onLoad={() => {
          console.log("panorama loaded");
        }}
      >
        {/* <Pannellum.Hotspot
          type="custom"
          pitch={20}
          yaw={200}
          text={"click me"}
          handleClick={() =>
            setCurrentScene(currentScene !== pano1 ? pano1 : pano1)
          }
        /> */}
      </Pannellum>
    </div>
  );
};

export default Home;
