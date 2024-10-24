import { SignInButton, SignOutButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'

export default function Header() {
   return (
      <div>
         <nav className='bg-red-900 py-4 px-8'>
            <div className="flex items-center justify-between container">
               <div className="flex items-center font-bold">
                  <Link href='/'>
                     <div>
                        Clerk Auth
                     </div>
                  </Link>

               </div>
               <div className='flex items-center font-bold'>
                  <Link href="/dashboard" className='text-gray-300 hover:text-white mr-4' >Repositories</Link>
               </div>
               <div className='flex items-center font-bold'>

                  <SignedOut>
                     <div className='text-gray-50 flex items-center mr-4'>
                        <SignInButton />
                     </div>
                     <div className='text-gray-50 flex items-center'>
                        <SignUpButton />
                     </div>

                  </SignedOut>
                  <SignedIn>
                     <Link href="/profile" className='text-gray-300 hover:text-white mr-4' >Profile</Link>
                     <Link href="/dashboard" className='text-gray-300 hover:text-white mr-4' >DashboardS</Link>
                     <div className='text-gray-50 flex items-center mr-4'>
                        <UserButton />
                     </div>
                     <Link href="/dashboard-client" className='text-gray-300 hover:text-white mr-4' >DashboardC</Link>
                     <SignOutButton />
                  </SignedIn>
               </div>
            </div>
         </nav>
      </div>
   )
}
