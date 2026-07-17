import React from "react";
import "remixicon/fonts/remixicon.css";
import Herotext from "./Herotext";
import Arrow from "./Arrow";

const Left_content = () => {
  return (
    <div className="h-full flex justify-between flex-col w-1/4 ">
      <Herotext />
      <Arrow />
    </div>
  );
};

export default Left_content;
