import TheEditCarForm from '@/components/admin/edit-car/TheEditCarForm'
import React from 'react'



export default function page({ params }: { params: { editCarId: string } }) {
  return (
    <>
    <TheEditCarForm editCarId={params.editCarId} />
    </>
  )
}
