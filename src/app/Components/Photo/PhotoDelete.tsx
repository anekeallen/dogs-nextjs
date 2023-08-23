import React from 'react'
import { PHOTO_DELETE } from '../../api';
import useFetch from '../../Hooks/useFetch';
import styles from './PhotoDelete.module.css';

interface PhotoDeleteProps {
  id: string | number;
}

const PhotoDelete: React.FC<PhotoDeleteProps> = ({ id }) => {
  const { loading, data, error, request } = useFetch();

  async function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    const confirm = window.confirm('Tem certeza que deseja deletar?');

    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);

      const { response, json } = await request(url, options);

      if (response && response.ok) {
        window.location.reload();
      }
    }

    // console.log(response);
  }


  return (
    <>
      {loading ? <button className={styles.delete} disabled>Deletar</button> : <button onClick={handleClick} className={styles.delete}>Deletar</button>}

    </>
  )
}

export default PhotoDelete