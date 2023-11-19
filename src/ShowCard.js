import React, { useContext } from "react";
import { MyContext } from "./MyContext";



function ShowCard() {
  const {data, setData} = useContext(MyContext);

  return (
    
      <div className="weatherDetails"> {
        (data != null) ? <div>
      <p className="weatherLocation">{data.name}</p>
      <p className="weatherDegree">{data.main.temp}°C</p>
      <p className="weatherType">{data.weather[0].main}</p>
      <p className="weatherIcon">

      </p>
      <div className="weatherFooter">
        <table>
          <tr>
            <th>Minimum Temperature</th>
            <th>Maximum Temperature</th>
            <th>Humidity</th>
          </tr>
          <tr>
            <td>{data.main.temp_min}</td>
            <td>{data.main.temp_max}</td>
            <td>{data.main.humidity}</td>
          </tr>
        </table>
      </div>
      </div>
      : <div>
      <p>To Get the details do enter the location</p>
      </div> }
    </div>
    
  )
}

export default ShowCard;