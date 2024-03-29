import React,{useEffect} from 'react'
import tw from "tailwind-styled-components";
import { useRouter } from 'next/router';
import { signInWithPopup,onAuthStateChanged } from 'firebase/auth';
import {auth,provider} from '../firbase'


const Login = () => {
  const router=useRouter()

  useEffect(() => {
      onAuthStateChanged(auth,user=>{
        if(user){
          router.push('/')
        }
      })
  }, [])

  return (
    <Wrapper>
        <UberLogo src='https://i.ibb.co/n6LWQM4/Post.png'/>
        <Title>Log in to access your account</Title>
        <HeadImage src=' https://i.ibb.co/CsV9RYZ/login-image.png
' />
        
        <SignInButton onClick={()=>signInWithPopup(auth,provider)}>
            Sign in with google
        </SignInButton>
        </Wrapper>
  )
}

const Wrapper = tw.div`
flex h-screen w-screen p-4 flex-col bg-gray-200
`;

const SignInButton = tw.button`
bg-black text-white text-center py-4 mt-8 self-center w-full
`;
const UberLogo=tw.img`
h-20 w-auto object-contain self-start`
const HeadImage=tw.img`
 object-contain w-full `

const Title=tw.div`
text-5xl  pt-4 text-gray-500`

export default Login;
