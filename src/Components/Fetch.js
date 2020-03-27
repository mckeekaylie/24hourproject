import React from 'react';
import Nasa from './Nasa/Nasa'
import Weather from './Weather';
import Zomato from './Zomato';

export default class Fetch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: {lat: 0, long: 0}
        };
    }

    fetchLocation = () => {
        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    location: json.city,
                    lat: json.lat,
                    long: json.lon
                })
                console.log(this.state.location);
                console.log(this.state.lat);
                console.log(this.state.long);
            })
    }

    componentDidMount() {
        this.fetchLocation();
        }

    render(){
        return(
            <div>
                <h1>24 Hour Project</h1>

                <Nasa lat={this.state.lat} long={this.state.long} location={this.state.city} />
                <Weather lat={this.state.lat} long={this.state.lon} location={this.state.city} />
                <Zomato lat={this.state.lat} long={this.state.lon} location={this.state.city} />

            </div>
        )
    }
}