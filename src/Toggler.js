import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function Toggler() {

  const {toggle, setToggle} = useContext(MyContext);

  const handleToggler = () => {
    setToggle(!toggle);
  }

  return (
    <div className="toggler">
      <button onClick={handleToggler} className={toggle ? "darkModeButton" : "lightModeButton"}>
      {toggle ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  )
};

export default Toggler;