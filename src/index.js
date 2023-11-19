import React, { useState } from "react";
import ReactDOM from "react-dom"
import './index.css'
import { MyContext } from "./MyContext";
import ShowCard from "./ShowCard";
import TextBox from "./TextBox";

function App() {

  const [data, setData] = useState(null);
  const [value, setValue] = useState('');

  return (
    <div className="App">

      <MyContext.Provider value={{data, setData, value, setValue}} >
        <ShowCard />
        <TextBox />
      </MyContext.Provider>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
