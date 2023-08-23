/* eslint-disable @next/next/no-img-element */
'use client'

import React, { SyntheticEvent, useState } from 'react'
import styles from './Image.module.css'
import Image from 'next/image';


const Imagem = ({ alt, src, ...props }: {alt: string; src: string}) => {

  const [skeleton, setSkeleton] = useState(true);


  function handleLoad(e: SyntheticEvent<HTMLImageElement>) {
    // const target = e.target as HTMLImageElement

    if(e.target instanceof HTMLImageElement){
      e.target.style.opacity='1';
      // e.target.style.opacity= 1;
    }

    // target.style.opacity = '1';
  
    setSkeleton(false);

  }
  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}

     
      {/* <Image fill src={src} onLoad={handleLoad} className={styles.img} alt={alt} {...props} /> */}
      <img onLoad={handleLoad} src={src} className={styles.img} alt={alt} {...props} />
    </div>
  )
}

export default Imagem