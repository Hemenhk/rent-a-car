import React from 'react'
import { IoBagHandleOutline } from 'react-icons/io5'
import TheNavLinks from './navlinks/TheNavLinks'

export default function TheNavbar() {
  return (
    <div className="flex justify-between items-center px-5 w-full">
      <h1>Rent a car</h1>
      <nav>
        <TheNavLinks />
      </nav>
      <IoBagHandleOutline size={30} />
    </div>
  )
}
