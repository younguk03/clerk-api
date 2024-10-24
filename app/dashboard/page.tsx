import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardPage() {
   const { userId } = auth()
   const user = await currentUser()
   console.log(userId);

   return (
      <div className='text-2xl font-bold mb-5'><h1>Dashboard 대시보드</h1>
         <p>이 페이지는 로그인된 사용자 정보를 보여주는 페이지입니다.</p>
         {
            userId && (
               <div>
                  <p>UserID: {userId}</p>
                  <p>Name: {user?.fullName} </p>
                  <p>Email: {user?.primaryEmailAddress?.emailAddress}</p>
               </div>
            )
         }
      </div>
   )
}
