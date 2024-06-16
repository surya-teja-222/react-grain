import React from "react";
import grain from "../../assets/grain.webp";

export interface IReactGrain {
  children?: React.ReactNode;
  height?: string;
  width?: string;
  style?: React.CSSProperties;
  className?: string;
  grainSrc?: string;
  grainStyle?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
}

const ReactGrain: React.FC<IReactGrain> = ({
  children,
  height = "100vh",
  width = "100vw",
  style,
  className,
  grainSrc = grain,
  grainStyle,
  containerStyle,
  ...props
}) => {
  return (
    <div
      className={`relative ${className}`}
      style={{
        height,
        width,
        overflow: "hidden",
        ...style,
      }}
      {...props}
    >
      <div
        style={{
          backgroundImage: `url("${grainSrc}")`,
          animation: "anim-noise 0.03s linear alternate infinite",
          position: "absolute",
          height: "calc(500px + 100%)",
          width: "calc(200px + 100%)",
          opacity: 0.07,
          ...grainStyle,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...containerStyle,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export { ReactGrain };
