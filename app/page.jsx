
"use client"
import Login from "../components/Login";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Home() {
  
  const {data}=useSession()
console.log(data);
  return (
    <div className="flex justify-center items-center w-[100%]  h-[100%]">
      <Login/>
    </div>
  )
}
