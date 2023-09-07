import type { Metadata } from 'next';
import React from 'react';

import Feed from './Components/Feed/Feed';
// import Head from './Helper/Head'
// import Imagem from './Components/Helper/Imagem'
// import { stringify } from 'querystring'

export const metadata: Metadata = {
  title: 'Home - Fotos',
  description: 'Home do site Dogs, com o feed de fotos'
};

// async function getData() {
//   const res = await fetch('http://dogsapi.test/wp-json/api/photo')

//   if (!res.ok) {
//     // This will activate the closest `error.js` Error Boundary
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

const Home = async () => {
  // const data = await getData()

  return (
    <section className="container mainContainer">
      <Feed />
    </section>
  );
};

export default Home;
