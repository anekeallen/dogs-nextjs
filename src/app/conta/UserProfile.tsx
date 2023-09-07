'use client';
import React from 'react';

import Feed from '../Components/Feed/Feed';
import Head from '../Components/Helper/Head';

const UserProfile = ({ slug }: { slug: string }) => {
  return (
    <section className="container mainContainer">
      <Head title={slug} />
      <h1 className="title">{slug}</h1>
      <Feed user={slug}></Feed>
    </section>
  );
};

export default UserProfile;
