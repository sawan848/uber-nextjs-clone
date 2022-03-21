import React,{useEffect,useState} from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";

const RideSelector = ({
    pickupCoordinate,
    dropoffCoordinate}) => {
    const [rideDuration, setRideDuration] = useState(0)
    const access_token =
    "pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw";
    const url='https://api.mapbox.com/directions/v5/mapbox/driving/';

    useEffect(() => {
      rideDuration= fetch(
        `${url}${pickupCoordinate[0]},${pickupCoordinate[1]};${dropoffCoordinate[0]},${dropoffCoordinate[1]}?access_token=${access_token}`).
       then(res=>res.json()).
       then(data=>{
         console.log('data')
         console.log(pickupCoordinate)
         console.log(dropoffCoordinate)
         console.log(data.routes[0].duration /100)
        //  console.log(data.routes[0].duration/100)
         setRideDuration(data.routes[0].duration/100)
        }).catch(err=>console.log(err))
     } , [pickupCoordinate,
      dropoffCoordinate])

  return (
    <Wrapper>
      <Title>Choose a ride ,or swipe up for more</Title>
      <CarLists>
      {carList.map((c,idx)=>{ 
        return (  
        <Car key={idx}>
              <CarImage src={c.imgUrl} />
            <CarDetails>
              <Service>{c.service} </Service>
              <Time>5 min away </Time>
            </CarDetails>
            <Price>{'$'+(rideDuration*c.multiplier).toFixed(2)}</Price>
          </Car>)
        })}
      
      </CarLists>
    </Wrapper>
  );
};
const Wrapper = tw.div`
flex flex-col flex-1 overflow-y-scroll
`;
const Title = tw.div`
text-gray-500 text-center text-xs py-2 border-b
`;
const CarLists = tw.div`
overflow-y-scroll
`;
const Car = tw.div`
flex p-4 items-center

`;
const CarDetails = tw.div`
flex-1

`;
const Service = tw.div`
    font-medium
`;
const Time = tw.div`
text-xs text-blue-500
`;
const Price = tw.div`
text-sm

`;
const CarImage = tw.img`
h-14 mr-4
`;
export default RideSelector;
