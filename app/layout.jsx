import Image from 'next/image'
import login from "../images/login.jpg"
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <head />
      <body>
        <div className='flex h-screen bg-blue-400 shadow-md '>
          <div className='m-auto bg-slate-50 rounded-lg w-4/5 h-3/4 lg:flex shadow-2xl'>
            <div className='h-[50%] lg:w-[50%] lg:h-[100%]'>
              <Image src={login} className="w-[100%] h-[100%] rounded-lg" alt='login-image' priority/>
            </div>
              <div className='h-[50%] lg:w-[50%] lg:h-[100%] '>
              {children}
              </div>
          </div>
        </div>
        </body>
    </html>
  )
}
