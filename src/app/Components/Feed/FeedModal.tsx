import { RootState } from '@/app/store/configureStore';
import { useAppDispatch, useAppSelector } from '@/app/store/hooks';
import { fetchPhoto, resetPhotoState } from '@/app/store/photo';
import { closeModal } from '@/app/store/ui';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';
import styles from './FeedModal.module.css';

const FeedModal = () => {
  const { loading, error, data } = useSelector(
    (state: RootState) => state.photo
  );

  const { modal } = useAppSelector((state: RootState) => state.ui);

  const dispatch = useAppDispatch();

  function handleClickFora(event: React.MouseEvent<HTMLElement>) {
    if (event.target === event.currentTarget) {
      dispatch(closeModal());
      dispatch(resetPhotoState());
      // setModalPhoto(null);
    }
  }

  useEffect(() => {
    dispatch(closeModal());
    // dispatch(resetPhotoState());
  }, [dispatch]);

  if (!modal) return null;

  return (
    <div className={styles.modal} onClick={handleClickFora}>
      {error && <Error error={error}></Error>}
      {loading && <Loading></Loading>}
      {data && <PhotoContent />}
    </div>
  );
};

export default FeedModal;
