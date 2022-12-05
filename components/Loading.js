import React from "react";
import { Circle } from "better-react-spinkit";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection:'column'
      }}
    >
      <Circle color="#024c42" size={100} />
      <p style={{color:'white'}}>Consulting the hive</p>
    </div>
  );
};

export default Loading;
