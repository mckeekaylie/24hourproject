import React from 'react';
export default class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            weatherMain: null,
            weatherDesc: null,
            temp: null,
            feelsLike: null,
            wind: null
        }
    }
    componentWillReceiveProps(nextProps) {
        fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${nextProps.zip},${nextProps.country}&units=imperial&appid=7637d846e5db74b8117c5109d2534581`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            this.setState({
                weatherMain: json.weather[0].main,
                weatherDesc: json.weather[0].description,
                temp: json.main.temp,
                feelsLike: json.main.feels_like,
                wind: json.wind.speed
            })
        })
    }
    render(){
        function celsiusConverter(props) {
            return this.props.temp = this.props.temp / 2;
            //Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
            //Celsius to Fahrenheit : (°C × 1.8) + 32 = °F
        }
        return(
            <div>
                <h1>Weather Forecast for {this.props.zip}, {this.props.country}</h1>
                <h3>{this.state.weatherMain}</h3>
                <h5>{this.state.weatherDesc}</h5>
                <p>Temperature: {this.state.temp}</p>
                <button onClick={celsiusConverter()}>Convert to Celsius</button>
                <p>Feels like: {this.state.feelsLike}</p>
                <p>Wind: {this.state.wind}</p>
            </div>
        )
    }
}