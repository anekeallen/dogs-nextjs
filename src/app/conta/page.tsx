'use client'
import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import { UserContext } from '../UserContext'
// import Error404 from '../Error404'
import Feed from '../Components/Feed/Feed'
import UsePhotoPost from './UsePhotoPost'
import UserHeader from './UserHeader'
import UseStats from './UseStats'



const Conta = () => {
  const { data } = React.useContext(UserContext);

  if(data === null) return null;
  
  return (
    <section className='container'>
      <UserHeader />
      <Feed user={data.id} />

      {/* <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='estatisticas' element={<UseStats />} />
        <Route path='postar' element={<UsePhotoPost />} />
        <Route path="*" element={<Error404 />} />
      </Routes> */}
    </section>
  )
}

export default Conta