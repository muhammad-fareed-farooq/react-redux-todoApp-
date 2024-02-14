import React from 'react'
import Heading from './Component/Heading'
import ToDolist from './Component/ToDolist'

export default function App() {
  return (
    <div className='App font-Poppins container py-16 px-6 min-h-screen mx-auto'>
      <Heading/>
      <ToDolist/>
    </div>
  )
}
