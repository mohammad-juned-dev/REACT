import React from "react";
import 'remixicon/fonts/remixicon.css'
import Rightcardcontent from "./Rightcardcontent";

const RightCard = (props) => {
  return <div className="bg-red-700 shrink-0 overflow-hidden relative h-full w-70 rounded-4xl">
    <img className="h-full w-full object-cover" src={props.img} alt="" />
 <Rightcardcontent id={props.id} color={props.color} tag={props.tag} />
    </div>;
};

export default RightCard;
