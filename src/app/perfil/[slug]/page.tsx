import React from 'react'
import UserProfile from '@/app/conta/UserProfile'

const page = ({ params }: { params: { slug: string } }) => {
  // console.log(params)
  return (
    <UserProfile slug={params.slug} />
  )
}

export default page