import { RootState } from '@/app/store/configureStore';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { UserContext } from '../../UserContext';
import styles from './PhotoComments.module.css';
import PhotoCommentsForm from './PhotoCommentsForm';

interface PhotoCommentsProps {
  id: number;
  comments: Comment[] | null;
  single: boolean | undefined;
}

const PhotoComments = (props: PhotoCommentsProps) => {
  const [comments, setComments] = useState(() => props.comments);

  const { data } = useSelector((state: RootState) => state.user);
  // const commentsSection = useRef(null);
  const commentsSection = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (commentsSection.current) {
      commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
    }
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${styles.comments} ${props.single ? styles.single : ''}`}
      >
        {comments?.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {data && (
        <PhotoCommentsForm
          single={props.single}
          setComments={setComments}
          id={props.id}
        />
      )}
    </>
  );
};

export default PhotoComments;
