import React, { useContext } from "react";
import { MyContext } from "./MyContext";

function TextBox() {

    const {value, setValue, data, setData} = useContext(MyContext)

    const apiKey = "do enter api key"


    const handleChange = (e) => {
      console.log(e.target.value);
      setValue(e.target.value);
    }

    async function handleSubmit(e) {
      e.preventDefault();
      console.log(value)
      let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${apikey}&units=metric`);
      let json = await response.json();
      setData(json);
      console.log(data);
    }

  
    return (
      <div>
        <form name="location">
          <input type="text" placeholder="Location" value={value} onChange={handleChange} />
          <button onClick={handleSubmit}>Get Details</button>
        </form>
      </div>
    )

}

export default TextBox;