import { RootState } from '@/app/store/configureStore';
import { useAppDispatch } from '@/app/store/hooks';
import { fetchPhoto } from '@/app/store/photo';
import Link from 'next/link';
import React, { useEffect } from 'react';

// import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

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

  // const { photo, comments } = useSelector(
  //   (state: RootState) => state.photo.data
  // );

  const photoData = useSelector((state: RootState) => state.photo.data);

  // Verifica se photoData não é null antes de acessar suas propriedades
  const { photo, comments } = photoData || { photo: null, comments: null };

  const src = photo ? `http://${photo['src']}` : '';
  const alt = photo ? photo['title'] : '';
  const id = photo ? photo['id'] : 0;
  const author = photo ? photo['author'] : '';
  const acessos = photo ? photo['acessos'] : '';
  const peso = photo ? photo['peso'] : '';
  const title = photo ? photo['title'] : '';
  const idade = photo ? photo['idade'] : '';

  console.log(idade);
  // const photo_data = useSelector(
  //   (state: RootState) => state.photo.data
  // );
  console.log(photo);
  // const dispatch = useDispatch();

  return (
    <div className={`${styles.photo} ${single ? styles.single : ''}`}>
      <div className={styles.img}>
        <Image src={src} alt={alt} />
      </div>
      <div className={styles.detalhes}>
        <div>
          <p className={styles.autor}>
            {user.data && user.data['username'] === author ? (
              <PhotoDelete id={id} />
            ) : (
              <Link href={`/perfil/${author}`}>@{author}</Link>
            )}
            <span className={styles.visualizacoes}>{acessos}</span>
          </p>
          <h1 className="title">
            <Link href={`/foto/${id}`}>{title}</Link>
          </h1>

          <ul className={styles.atributos}>
            <li> {peso} Kg</li>
            <li> {idade} anos</li>
          </ul>
        </div>
      </div>

      <PhotoComments single={single} id={id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
