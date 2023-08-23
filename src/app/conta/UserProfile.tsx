'use client'
import React from 'react'
// import { useParams } from 'react-router-dom'
// import Feed from '../Feed/Feed'
import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/Head';
import { useParams } from 'next/navigation'

const UserProfile = ({slug} : {slug: string}) => {
  // const { user } = useParams();
  // const params = useParams()
  return (
    <section className='container mainContainer'>
      <Head title={slug} />
      <h1 className='title'>{slug}</h1>
      <Feed user={slug}></Feed>
    </section>
  )
}

export default UserProfile