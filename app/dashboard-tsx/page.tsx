'use client'
import { useUser, useAuth } from "@clerk/nextjs";

export default function DashboardClient() {
   const { isLoaded: isLoadedAuth, userId, sessionId} = useAuth();
   const { isLoaded: isLoadedUser, isSignedIn, user } = useUser();


   if (!isLoadedAuth || !userId) {
      /*@typescript-eslint/no-unused-expressions*/
      return null
   }
   if (!isLoadedUser || !isSignedIn) {
      return null
   }

   return (
      <div>
         <h1 className="text-2xl font-bold mb-4"> Dashboard  </h1>
         <p>
            hello, {user.fullName} <br />
            Your user ID: {userId} <br />
            Your current active session : {sessionId} <br />
         </p>
      </div>
   )
}
