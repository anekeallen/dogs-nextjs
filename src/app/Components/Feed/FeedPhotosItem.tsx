import { useAppDispatch } from '@/app/store/hooks';
import { fetchPhoto } from '@/app/store/photo';
import { openModal } from '@/app/store/ui';
import React from 'react';

import Image from '../Helper/Imagem';
import styles from './FeedPhotosItem.module.css';

const FeedPhotosItem = ({
  photo,
  setModalPhoto
}: {
  photo: Photo;
  setModalPhoto: React.Dispatch<React.SetStateAction<Photo | null>>;
}) => {
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(fetchPhoto(photo.id.toString()));
    dispatch(openModal());
  }

  return (
    <li className={styles.photo} onClick={handleClick}>
      <Image src={'http://' + photo.src} alt={photo.title} />
      <span className={styles.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
