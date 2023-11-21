import React, { useState } from "react";
import ReactDOM from "react-dom"
import './index.css'
import { MyContext } from "./MyContext";
import ShowCard from "./ShowCard";
import TextBox from "./TextBox";
import Toggler from "./Toggler";

function App() {

  const [data, setData] = useState(null);
  const [value, setValue] = useState('');
  const [toggle, setToggle] = useState(false)

  return (
      <MyContext.Provider value={{data, setData, value, setValue, toggle, setToggle}} >
        <div className={"App " + (toggle ? " darkMode " : "lightMode") }>
          <ShowCard />
          <TextBox />
          <Toggler />
        </div>
      </MyContext.Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
