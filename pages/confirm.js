import Map from "./components/Map";
import tw from "tailwind-styled-components";

import { useEffect } from "react";

const Confirm = () => {
  useEffect(() => {
    getCoordinates();
  }, []);

  const getCoordinates = () => {
    const location = "Santa Monica";//access_token=${access_token}
     const access_token= "pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw"
    fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?`+new URLSearchParams({
        access_token:"pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw"
        
    }))
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      }).catch(err=>console.log(err));
  };

  return (
    <Wrapper>
      <Map />
      <RideContainer>Ride Slector Confirm Booking</RideContainer>
    </Wrapper>
  );
};

const RideContainer = tw.div`
flex-1 
`;

const Wrapper = tw.div`
flex h-screen flex-col
`;

export default Confirm;
