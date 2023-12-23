import React from 'react'
import TheMobileNavbar from './components/TheMobileNavbar'
import TheNavbar from './components/TheNavbar'

export default function TheHeader() {
  return (
    <header className='absolute w-full h-10 py-10 border-b '>
        <div className='flex md:hidden'><TheMobileNavbar /></div>
        <div className='hidden md:flex'><TheNavbar /></div>
    </header>
  )
}
