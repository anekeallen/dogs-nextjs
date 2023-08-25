import React, { useEffect } from 'react'

import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from './PhotoContent'

const Photo = ({id} : {id: string}) => {


  const { data, error, loading, request } = useFetch();

  useEffect(() => {
    if(id){
      const { url, options } = PHOTO_GET(id);
      request(url, options);

    }

  }, [id, request])

  if (error) return <Error error={error}></Error>
  if (loading) return <Loading></Loading>
  if (data)
    return (
      <section className='container mainContainer'>
        <PhotoContent single={true} data={data}></PhotoContent>
      </section>
    )

  else return null;
}

export default Photo