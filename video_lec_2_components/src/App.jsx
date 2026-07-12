import Card from "./components/card.jsx";
import Navbar from "./components/navbar.jsx";

function read() {
  return (
    <div>
      {Card()}
      {Navbar()}
    </div>
  );
}

export default read;
