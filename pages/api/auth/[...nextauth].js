import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import NextAuth from 'next-auth'



export const authOptions = {
    // Configure one or more authentication providers
    providers: [
      GoogleProvider({
        clientId: "530717775078-ivsp90bru0242pqp3fpadsdinscnur0j.apps.googleusercontent.com",
            clientSecret: "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"
      }),
      GitHubProvider({
        clientId: "ced3cf60994a01ea5dd5",
        clientSecret: "a7bd9baa6d0c4f32e63fa9f3ead47f8f266e379b"
      })
      // ...add more providers here
    ],
  }


  export default NextAuth(authOptions)