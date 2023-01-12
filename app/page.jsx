
"use client"
import Login from "../components/Login";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from 'next/navigation'

export default function Home() {
  
  const router = useRouter()
  const {data:session}=useSession()
  useEffect(()=>{
    if(session){
      router.replace("/home")
    }
    else{
      router.push("/")
    }
  },[session])
  return (
    <div className="flex justify-center items-center w-[100%]  h-[100%]">
      <Login/>
    </div>
  )
}
