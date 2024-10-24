'use client'
import Courses from '@/components/Courses'
import React, { useEffect, useState } from 'react'

export default function CoursesPage() {
   const [courses, setCourses] = useState([])
   const [loading, setLoading] = useState(true)

   useEffect(() => {
      const fetchCourses = async () => {
         //api가져올때 fetch함수를 썼다.
         const res = await fetch('api/courses');
         const data = await res.json()
         setCourses(data)
         setLoading(false)
      }
      fetchCourses()
   }, [])

   if(loading) {
      return
   }

   return (
      <div>
         <h1 className='text-2xl font-bold mb-4'>Courses</h1>
         <Courses courses = {courses}/>
      </div>
   )
}
