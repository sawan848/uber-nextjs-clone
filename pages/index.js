import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl';
import {useEffect} from 'react'
import Map from './components/Map'
import Link from 'next/link';



export default function Home() {
//


  return (
    <Wrapper>
      <Map/>
      <ActionItems>
        {/* header */}
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg"/>
          <Profile>
            <Name>Rayan Clarke</Name>
            <UserImage src='https://i.ytimg.com/vi/BcGWdBV2lM4/maxresdefault.jpg'/> 
          </Profile>
        </Header>
        {/* action buttons */}
        <ActionButtons>
          <Link href='/search'>
        <ActionButton>
          <ActionButtonImage src='https://i.ibb.co/cyvcpfF/uberx.png'/>
          Ride
          </ActionButton>
          </Link>
        <ActionButton>
          
        <ActionButtonImage src='https://i.ibb.co/n776JLm/bike.png'/>
          Wheels</ActionButton>
        <ActionButton>
          
        <ActionButtonImage src=' https://i.ibb.co/5RjchBg/uberschedule.png'/>
          Reserve</ActionButton>
        </ActionButtons>
        {/* input buttons */}
        <InputButton>Where to go</InputButton>
        </ActionItems>
    </Wrapper>
  )
}

const Wrapper=tw.div`

flex flex-col h-screen
`

const ActionItems=tw.div`
 flex-1 p-4
`
const Header=tw.div` 
flex  justify-between items-center
`

const UberLogo=tw.img`
h-28`
const UserImage=tw.img`
h-28 w-28 rounded-full border border-gray-200 p-px
`
const Profile=tw.div`
flex items-center
`
const Name=tw.div`
mr-4 w-20 text-sm
`

const ActionButtons=tw.div`
flex
`
const ActionButtonImage=tw.img`
 h-3/5
`
const ActionButton=tw.div`
flex bg-gray-200 flex-1 m-8 h-32 
items-center flex-col justify-center
rounded-lg transform text-xl
hover:scale-105 transition 
`

const InputButton=tw.div`
flex h-20 bg-gray-200 mt-8
text-2xl p-4 items-center
`