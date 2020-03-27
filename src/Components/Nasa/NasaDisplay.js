import React from 'react';

const NasaDisplay = (props) => {
  // console.log(props)
  return(
    <div>
      <img className="nasaImg" src={props.url} alt="Your Location"/>
    </div>
  )
}

export default NasaDisplay;
