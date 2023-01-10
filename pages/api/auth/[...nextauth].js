import GoogleProvider from "next-auth/providers/google";
import NextAuth from 'next-auth'







export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: "530717775078-ivsp90bru0242pqp3fpadsdinscnur0j.apps.googleusercontent.com",
            clientSecret: "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"
      }),
      // ...add more providers here
    ],
  }


  export default NextAuth(authOptions)