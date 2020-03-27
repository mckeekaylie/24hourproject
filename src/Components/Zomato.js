import React from 'react';
import zomatoIcon from '../Components/Assets/fork.png';

export default class Zomato extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            restaurants: null
        }
    }

    // function restMapper() {
    //     return this.state.restaurants.map((restaurant, index) => {
    //         return(
    //             <tr key= {index}>
    //                 <td>{restaurant.name}</td>
    //             </tr>
    //         )
    //     })
    // }

    componentWillReceiveProps(nextProps) {
            console.log(nextProps)
        fetch(`https://developers.zomato.com/api/v2.1/geocode?lat=${nextProps.lat}&lon=${nextProps.long}&apikey=81c9aab1b42ec1d7a28080c10fa3f996`)
            .then(res => res.json())
            .then(json => {
                console.log(json);

                let result = []
                for ( let i = 0; i < json.nearby_restaurants.length; i++) 
                {result.push (json.nearby_restaurants[i].restaurant.name)
                    console.log(result)
                }
                this.setState({
                    restaurants: result        
                })
                console.log(this.state.restaurants)
            })       
        }  

    render(){ 
        console.log(this.state.restaurants)
        // const restMapper = this.state.restaurants.map((restaurant, index) => {
        //     return(
        //         <li key={index}>{restaurant.name}</li>
        //     )
        // })


     
        return(
            <div>
                <img src={zomatoIcon}/>
                <h1>Restaurants near:</h1>
                <p>{this.state.restaurants}</p>
                <ul>
                    {/* {restMapper} */}
                </ul>  
          {/* {this.state.restaurants.map((restaurant, index) => {
                     return(
                         <tr key= {index}>
                            <td>{restaurant.name}</td>
                        </tr>
                         )
                     })
                 } */}
            </div>
        )
    }
}
