import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function TextBox() {

    const {value, setValue, data, setData, toggle} = useContext(MyContext)

    const apikey = process.env.REACT_APP_WEATHER_API_KEY


    const handleChange = (e) => {
      setValue(e.target.value);
    }

    async function handleSubmit(e) {
      e.preventDefault();
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apikey}&units=metric`);
      let json = await response.json();
      setData(json);
      // console.log(data);
    }

  
    return (
      <div className={"form " + (data != null ? " bottom " : "")}>
        <form>
          <input type="text" className={toggle ? "darkModeText" : "lightModeText"} placeholder="Location" value={value} onChange={handleChange} />
          <button onClick={handleSubmit} className={toggle ? "darkModeButton" : "lightModeButton"}>Get Details</button>
        </form>
      </div>
    )

}

export default TextBox;