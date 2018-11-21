import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";

const API_KEY = "2d392f63f88a37ba3945fd4c1e8e1363";

class App extends React.Component{

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
    const data = await api_url.json();
    console.log(data);
  }

  render(){
    return (
      <div>
        <Info />
        <Weather />
        <Form wetherMethod={this.gettingWeather} />
      </div>
    );
  }
}
export default App;
