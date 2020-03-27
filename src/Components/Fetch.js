import React from 'react';
import Nasa from './Nasa/Nasa'
import Weather from './Weather';
import Zomato from './Zomato';
import './Fetch.css'
import {Container, Grid} from '@material-ui/core'
import map from '../Components/Assets/map.jpg'


export default class Fetch extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            location: {lat: 0, long: 0},
            zip: '',
            country: '',
        };
    }
    
    componentDidMount() {
            console.log('component mounted')
            
        fetch('http://ip-api.com/json')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                this.setState({
                    location: json.city,
                    zip: json.zip,
                    country: json.countryCode,
                    lat: json.lat,
                    long: json.lon
                })
                console.log(this.state.location);
                console.log(this.state.zip);
                console.log(this.state.country);
                console.log(this.state.lat);
                console.log(this.state.long);
            })
    }



    render(){
        return(
            <div>
                <Grid className='main' container spacing={1}>

                    <Grid className='nasa' container item xs={4} spacing={3}>
                        <Nasa lat={this.state.lat} long={this.state.long} location={this.state.city} />
                    </Grid>

                    <Grid className='weather' container item xs={4} spacing={3}>
                        <Weather zip={this.state.zip} country={this.state.country}/>
                    </Grid>

                    <Grid className='zomato' container item xs={4} spacing={3}>
                        <Zomato lat={this.state.lat} long={this.state.long} location={this.state.city} />
                    </Grid>

                </Grid>

                <div id='map'>
                    {/* <img id="map" src={map}/> */}
                </div>

            </div>
        )
    }
}