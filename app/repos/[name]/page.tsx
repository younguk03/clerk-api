import React, { Suspense } from 'react'
import Link from 'next/link'
import Repo from '@/components/Repo'


export default function RepoDetialpage({params}:{params: {name: string}}) {//typescript에는 이걸 집어넣어야 한다.
   return (
      <div className='flex flex-col justify-start items-start max-w-lg'>
         <Link href='/repos' className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 mb-4'>Back to repositories</Link>
         <Suspense fallback={<div>Loding repo...</div>}>
         <Repo name = {params.name}></Repo>
         </Suspense>
      </div>
   )
}
