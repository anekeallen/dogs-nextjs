'use client';
import React from 'react';

import UsePhotoPost from '../UsePhotoPost';
import UserHeader from '../UserHeader';

const Postar = () => {
  return (
    <section className="container">
      <UserHeader />
      <UsePhotoPost />
    </section>
  );
};

export default Postar;
