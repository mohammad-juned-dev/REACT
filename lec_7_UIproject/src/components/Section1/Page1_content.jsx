import React from "react";
import Left_content from "./Left_content";
import Right_content from "./Right_content";

const Page1_content = (props) => {
  return (
    <div className=" py-10 flex items-center justify-between gap-10  px-15 h-[90vh]">
      <Left_content />
      <Right_content users={props.users} />
    </div>
  );
};

export default Page1_content;
