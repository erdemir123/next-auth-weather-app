"use client"
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import { BiUserX } from 'react-icons/bi';
import Weather from '../../components/Weather';
import Spinner from '../../components/Spinner';
import { useSession,signOut } from "next-auth/react"
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter()
  const {data:session} = useSession()
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f52bffe7adaa52051375083cf96266b4&units=metric&lang=tr`;
  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity('');
    setLoading(false);
  };
  useEffect(()=>{
if(!session){
  router.push("/")
  }
  console.log(session)
  },[])
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div>
        <div className='absolute top-5  right-5  z-[1] bg-slate-800 rounded-lg active:scale-95 flex items-center py-4 px-2' onClick={()=>signOut()}>{session?.user.email}</div>
        {/* Background image */}
        <img
          src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2575&q=80'
          className='w-full h-full absolute'
        />

        {/* Search */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 px-4 text-white z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full mx-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl mt-16'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl '
                type='text'
                placeholder='Search city'
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}
        {weather.main && <Weather data={weather} className="absolute"/>}
        <div className='absolute bottom-5  right-5  z-[1] bg-slate-800 rounded-lg active:scale-95 flex items-center' onClick={()=>signOut()}><BiUserX size={50} color="gray" /></div>
      </div>
    );
  }
}

