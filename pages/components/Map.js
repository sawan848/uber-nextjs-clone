
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react'

mapboxgl.accessToken = 'pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw';

const Map = () => {

  useEffect(() => {
    // initialize map only once
   const map = new mapboxgl.Map({
     container: 'map',
     style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
     center: [85.296013,23.344315],
     zoom: 3,
   });
 });

  return (
    <Wrapper id='map'>
    </Wrapper>
  )
}
const Wrapper=tw.div`
bg-cyan-900
flex flex-col h-screen
`

export default Map
