import React from 'react';
import NasaDisplay from './NasaDisplay';
import nasaIcon from '../Assets/rocket.png';

class Nasa extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      img: ''
    }
  }
  
  componentWillReceiveProps(nextProps) {

    fetch(`https://api.nasa.gov/planetary/earth/imagery/?lon=${nextProps.long}&lat=${nextProps.lat}&date=2014-02-01&cloud_score=True&api_key=ckxYv0M9ATuj5dwD91768IwgO6eh4Ijw4dMKubFW`)
    .then(res => res.json())
    .then(json => {
      this.setState({
        img: json.url
      });
      console.log(this.state.img)
    })
    .catch(error => console.log(error));
  };


    render(){
      return(
        <div>
          <img src={nasaIcon}/>
          <h1>Nasa Image of Your Location</h1>
          <NasaDisplay url={this.state.img}/>
        </div>
      );
    }
}

export default Nasa;