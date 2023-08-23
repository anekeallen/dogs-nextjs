'use client'

import React, { useState } from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'

const Feed = ({ user = 0 } : {user?: number | string}) => {

  const [modalPhoto, setModalPhoto] = useState<Photo | null>(null);
  const [pages, setPages] = useState([1]);
  const [infinite, setInfinite] = useState(true);

  React.useEffect(() => {

    let wait = false;
    function infiniteScroll() {

      if (infinite === true) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;

        if (scroll > height * 0.75 && !wait) {
          setPages((pages) => [...pages, pages.length + 1])
          wait = true;
          setTimeout(() => {
            wait = false;
          }, 500)
        }
      }

    }

    window.addEventListener('scroll', infiniteScroll);
    window.addEventListener('wheel', infiniteScroll);

    return () => {
      window.removeEventListener('scroll', infiniteScroll);
      window.removeEventListener('wheel', infiniteScroll);
    }


  }, [infinite])

  return (
    <div>

      {modalPhoto && <FeedModal setModalPhoto={setModalPhoto} photo={modalPhoto} />}

      {pages.map((page) => {

        return <FeedPhotos setInfinite={setInfinite} user={user} key={page} page={page} setModalPhoto={setModalPhoto} />
      })}

    </div>
  )
}

export default Feed