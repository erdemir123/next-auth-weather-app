
import { SessionProvider } from "next-auth/react";


export default function Providers({ children,session}) {
  console.log(session)
  return <SessionProvider session={session} >{children}</SessionProvider>;
}