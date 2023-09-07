'use client';
import Photo from '@/app/Components/Photo/Photo';
import React from 'react';

const PagePhoto = ({ params }: { params: { id: string } }) => {
  // console.log(params)
  // return null
  return <Photo id={params.id} />;
};

export default PagePhoto;
