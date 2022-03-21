import Map from "./components/Map";
import tw from "tailwind-styled-components";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import RideSelector from "./components/RideSelector";
import Link from "next/link";

const Confirm = () => {
  const [pickupCoordinate, setPickupCoordinate] = useState([0, 0]);
  const [dropoffCoordinate, setDropoffCoordinate] = useState([0, 0]);
  const access_token =
    "pk.eyJ1Ijoic2Fhd2Fua3VtYXI4MDgiLCJhIjoiY2wwejg0eGx5MDBwdTNrbXhxZGM2dGo4ciJ9.R0O5oUHYWQMSUmCB0-3Zqw";
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log(pickup);
  console.log(dropoff);
  useEffect(() => {
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  const getPickupCoordinates = (pickup) => {
    fetch(
      `${url}${pickup}.json?` +
        new URLSearchParams({
          access_token: access_token,
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinate(data.features[0].center);
        // console.log(data.features[0].center);
      })
      .catch((err) => console.log(err));
  };

  const getDropoffCoordinates = (dropoff) => {
    fetch(
      `${url}${dropoff}.json?` +
        new URLSearchParams({
          access_token: access_token,
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("drop off");
        setDropoffCoordinate(data.features[0].center);
        // console.log(data.features[0].center);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Wrapper>
      <ButtonContainer>
        <Link href="/search">
          <BackButton src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </Link>
      </ButtonContainer>
      <Map
        pickupCoordinate={pickupCoordinate}
        dropoffCoordinate={dropoffCoordinate}
      />
      <RideContainer>
        <RideSelector
          pickupCoordinate={pickupCoordinate}
          dropoffCoordinate={dropoffCoordinate}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
border-t-2
`;
const ConfirmButton = tw.div`
 bg-black text-white text-2xl
 text-center mt-2 mx-4 my-4 px-4 py-4
 cursor-pointer
`;
const Wrapper = tw.div`
flex h-screen flex-col
`;
const ButtonContainer = tw.div`
rounded-full absolute top-4 left-4 z-10 
bg-white shadow-md cursor-pointer
`;
const BackButton = tw.img`
h-full object-contain
`;
export default Confirm;
