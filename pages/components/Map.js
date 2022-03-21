import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw";

const Map = (props) => {
  useEffect(() => {
    // initialize map only once
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if(props.pickupCoordinate){
      addToMap(map,props.pickupCoordinate)
    }
    if(props.dropoffCoordinate){
      addToMap(map,props.dropoffCoordinate)
    }

    if(props.pickupCoordinate&&props.dropoffCoordinate){
      map.fitBounds(
        [props.dropoffCoordinate,props.pickupCoordinate],
        {padding:100})
    }
     
  },[props.pickupCoordinate,props.dropoffCoordinate]);

  

  const addToMap=(map,coordinates)=>{
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }

  return <Wrapper id="map"></Wrapper>;
};
const Wrapper = tw.div`
 flex-1 h-1/2
`;

export default Map;
