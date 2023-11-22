import { RootState } from '@/app/store/configureStore';
import { useAppDispatch } from '@/app/store/hooks';
import { fetchPhoto } from '@/app/store/photo';
import Link from 'next/link';
import React, { useEffect } from 'react';

// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { UserContext } from '../../UserContext';
import Image from '../Helper/Imagem';
import PhotoComments from './PhotoComments';
import styles from './PhotoContent.module.css';
import PhotoDelete from './PhotoDelete';

const PhotoContent = ({
  // data,
  single
}: {
  // data: DataContent;
  single?: boolean | undefined;
}) => {
  const user = useSelector((state: RootState) => state.user);
  // const { photo, comments } = data;
  const dispatch = useAppDispatch();

  const { photo, comments } = useSelector(
    (state: RootState) => state.photo.data
  );

  // const dispatch = useDispatch();

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={photo.src} alt={photo.title} />
      </div>
      <div className={styles.detalhes}>
        <div>
          <p className={styles.autor}>
            {user.data && user.data.username === photo.author ? (
              <PhotoDelete id={photo.id} />
            ) : (
              <Link href={`/perfil/${photo.author}`}>@{photo.author}</Link>
            )}
            <span className={styles.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>

          <ul className={styles.atributos}>
            <li> {photo.peso} Kg</li>
            <li> {photo.idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments single={single} id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
