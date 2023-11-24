import React, { useState } from 'react';

import { COMMENT_POST } from '../../api';
// import Enviar from './enviar.svg';
import Enviar from '../../assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';
// import Image from 'next/image';

// console.log(enviar)

interface PhotoDeleteProps {
  id: string | number;
  setComments: React.Dispatch<React.SetStateAction<Comment[]>> | null;
  single: boolean | undefined;
}

const PhotoCommentsForm: React.FC<PhotoDeleteProps> = ({
  id,
  setComments,
  single
}) => {
  const [comment, setComment] = useState('');
  const { error, request } = useFetch();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    if (response && response.ok && setComments) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form
      className={`${styles.form} ${single ? styles.single : ''}`}
      onSubmit={handleSubmit}
    >
      <textarea
        className={styles.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
      ></textarea>
      <button className={styles.button}>
        {/* <Image alt='' width={40} height={30} src='/enviar.svg'></Image> */}
        <Enviar></Enviar>
      </button>

      {error && <Error error={error} />}
    </form>
  );
};

export default PhotoCommentsForm;
