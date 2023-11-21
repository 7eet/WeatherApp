import React, { useContext } from "react";
import { MyContext } from "./MyContext";



function ShowCard() {
  const {data, setData} = useContext(MyContext);

  return (
    
      <div className="weatherDetails"> {
        (data != null) ? <div>
      <p className="weatherLocation">{data.name}</p>
      <p className="weatherDegree">{data.main.temp}°C</p>
      <p className="weatherType">
        <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
        {data.weather[0].description}
      </p>
      <div className="additionalDetails">
        <div className="item">
          <p>Minimum Temperature</p>
          <p>{data.main.temp_min}°C</p>
        </div>
        <div className="item">
          <p>Maximum Temperature</p>
          <p>{data.main.temp_max}°C</p>
        </div>
        <div className="item">
          <p>Humidity</p>
          <p>{data.main.humidity}</p>
        </div>
        
      </div>
      </div>
      : <div>
      <p>To Get the details do enter the location</p>
      </div> }
    </div>
    
  )
}

export default ShowCard;