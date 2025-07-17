import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
const handler=NextAuth({
    providers:[
        GithubProvider({
            clientId:"Ov23liKZFHwxv9HUqDgM",
            clientSecret:"170a5694c6c931d3050d6d5464457e3a115e9b91"
        })
    ],
    
})
export {handler as GET ,handler as POST};

// http://localhost:3000/api/auth/callback/github