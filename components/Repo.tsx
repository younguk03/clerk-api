import Link from 'next/link'
import React from 'react'
import { FaCodeBranch, FaEye, FaStar } from 'react-icons/fa'

interface REpoProps {
   name: string
}

const Repo: React.FC<REpoProps> = async ({ name }) => {
   const username = 'bradtraversy'
   await new Promise(resolve => setTimeout(resolve, 1000));
   const response = await fetch(`https://api.github.com/repos/${username}/${name}`)
   const repo = await response.json()

   return (
      <div>
         <h3 className="text-xl font-bold">
            <Link href={`https://github.com/${username}/${name}`}>{repo.name}</Link>
         </h3>
         <p>{repo.description}</p>
         <p>Created:{repo.created_at}</p>
         <div className="flex justify-between items-center mb-4">
            <span className="flex items-center gap-1">
               <FaStar /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
               <FaCodeBranch /> {repo.forks_count}
            </span>
            <span className="flex items-center gap-1">
               <FaEye /> {repo.stargazers_count}
            </span>
         </div>
      </div>
   )
}

export default Repo