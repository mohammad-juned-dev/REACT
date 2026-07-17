import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";

const App = () => {
  const users = [
    { img: "https://i.pinimg.com/736x/61/f9/82/61f982fa89499422030c803affc50ed0.jpg", intro: "",color : "lightseagreen" ,tag: "Satisfied" },
    { img: "https://i.pinimg.com/736x/6a/22/6f/6a226fcd9a558c8e008df09e8e7268cc.jpg", intro: "",color : "lightseagreen" , tag: "Underserved" },
    { img: "https://i.pinimg.com/736x/1c/88/70/1c887069fec338e0ff5285bd5cbe7511.jpg", intro: "", color : "lightseagreen" ,tag: "UnderBanked" },
     { img: "https://i.pinimg.com/736x/2c/84/01/2c840185326e28d262832f4ae13e5a1a.jpg", intro: "", color : "lightseagreen" ,tag: "Satisfied" },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
