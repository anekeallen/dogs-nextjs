import UserProfile from '@/app/conta/UserProfile';
import React from 'react';

const page = ({ params }: { params: { slug: string } }) => {
  // console.log(params)
  return <UserProfile slug={params.slug} />;
};

export default page;
