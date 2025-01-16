import React from "react";
import Image from "next/image";

type LogoProps = {
  src?: string;
  width?: number;
  height?: number;
};

const Logo: React.FC<LogoProps> = ({
  src = "/static/images/logo_strefaBHP_250x55.png",
  width = 150,
  height = 50,
}) => {
  return (
    <Image
      src={src}
      alt="Strefa BHP Logo"
      width={width}
      height={height}
      className="w-auto h-10"
    />
  );
};

export default Logo;
