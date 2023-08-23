import React, { useEffect } from 'react'
import { PHOTO_GET } from '../../api';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = ({ photo, setModalPhoto }: {photo: Photo; setModalPhoto: SetModal}) => {

  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id);

    request(url, options);

  }, [photo, request]);

  function handleClickFora(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      setModalPhoto(null);
    }
  }

  return (
    <div className={styles.modal} onClick={handleClickFora}>
      {error && <Error error={error}></Error>}
      {loading && <Loading></Loading>}
      {data && <PhotoContent data={data} />}


    </div>
  )
}

export default FeedModal