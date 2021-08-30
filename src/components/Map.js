import React from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken='pk.eyJ1IjoicmFwaGFlbG51bmVzZHMiLCJhIjoiY2tzc29jOW5sMGw4czJ3bGJ4cW9iMGI0cCJ9.BjFyyTyHrSU1CLWyVdqsfA';

// Sample data 
/*const data = [
	{
		"location": "",
		"city": "",
		"state": "",
		"coordinates": [-73.9516030004786,40.72557300071668],
	},
	{
		"location": "6th Ave & 42nd St at NW corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.98393399979334,40.75533300052329],
	},
	{
		"location": "Essex St & Delancey St at SE corner",
		"city": "Manhattan",
		"state": "New York",
		"coordinates": [-73.9882730001973,40.718207001246554],
	}
]
*/


class Mapp extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -47.8825,
			lat: -15.7941,
			zoom: 4
		}
	}
	

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/mapbox/streets-v11', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		/*data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})*/

		
	}

	

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height: '700px'}}/>
			</div>
		);
	}	
}

export default Mapp;