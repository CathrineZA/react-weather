import "./App.css";
import Weather from "./Weather.js";
import ReactAnimatedWeather from "react-animated-weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <h1>Midrand</h1>
      <h2>
        Monday 15:50 <br />
        Cloudy
      </h2>
      <ReactAnimatedWeather
        icon="CLEAR_DAY"
        color="goldenrod"
        size={50}
        animate={true}
      />
      <span className="one"> 20℃</span>
      <ul>
        <li>
          <span> 20℃</span>{" "}
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={50}
            animate={true}
          />
          Mon
        </li>
        <li>
          <span> 19℃</span>{" "}
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="blue"
            size={50}
            animate={true}
          />
          Tues
        </li>
        <li>
          <span> 24℃</span>{" "}
          <ReactAnimatedWeather
            icon="PARTLY_CLOUDY_DAY"
            color="goldenrod"
            size={50}
            animate={true}
          />
          Wed
        </li>
        <li>
          <span> 21℃</span>{" "}
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="blue"
            size={50}
            animate={true}
          />
          Thu
        </li>
        <li>
          <span> 26℃</span>{" "}
          <ReactAnimatedWeather
            icon="CLEAR_DAY"
            color="goldenrod"
            size={50}
            animate={true}
          />
          Fri
        </li>
      </ul>
      <a href="https://github.com/CathrineZA/react-weather.git">
        open-source code
      </a>
      by Makoma Cathrine Sekhuto
    </div>
  );
}
