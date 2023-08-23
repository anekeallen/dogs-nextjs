'use client'
import React from 'react'
import Photo from '@/app/Components/Photo/Photo'

const PagePhoto = ({ params }: { params: { id: string } }) => {

  // console.log(params)
  // return null
  return (
    <Photo id={params.id} />
  )
}

export default PagePhoto