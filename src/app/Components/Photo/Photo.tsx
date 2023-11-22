import { RootState } from '@/app/store/configureStore';
import { useAppDispatch } from '@/app/store/hooks';
import { fetchPhoto } from '@/app/store/photo';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from './PhotoContent';

const Photo = ({ id }: { id: string }) => {
  // const { data, error, loading, request } = useFetch();

  const { loading, error, data } = useSelector(
    (state: RootState) => state.photo
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPhoto(id));
  }, [id, dispatch]);

  if (error) return <Error error={error}></Error>;
  if (loading) return <Loading></Loading>;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent single={true}></PhotoContent>
      </section>
    );
  else return null;
};

export default Photo;
