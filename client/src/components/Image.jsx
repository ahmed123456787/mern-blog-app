import React from "react";
import { IKImage } from "imagekitio-react";

const Image = ({ src, className, width, height }) => {
  return (
    <IKImage
      urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT}
      path={src}
      loading="lazy"
      width={width}
      height={height}
      className={className}
    />
  );
};
export default Image;
