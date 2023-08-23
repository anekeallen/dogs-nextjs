import React, { useEffect, useState } from 'react'
import styles from './UsePhotoPost.module.css'
// import Input from '../Form/Input';
import Input from '../Components/Form/Input';
import Button from '../Components/Form/Button';
import useForm from '../Hooks/useForm';
import useFetch from '../Hooks/useFetch';
import Error from '../Components/Helper/Error';
import { PHOTO_POST } from '../api';
import { useRouter, usePathname  } from 'next/navigation'
import { File } from 'buffer';
// import { useNavigate } from 'react-router-dom';


type IImg = {
  raw: Blob,
  preview: string
}

const UsePhotoPost = () => {

  const nome = useForm('');
  const peso = useForm('');
  const idade = useForm('');
  const [img, setImg] = useState<IImg | null>(null);
  const router = useRouter();

  const {data, error,loading, request} = useFetch();

  useEffect(()=> {
    if(data) router.push('/conta');
  }, [data, router])

  function handleSubmit(event: React.FormEvent) {

    event.preventDefault();

    const formData = new FormData();
    if(img) {
      formData.append('img', img.raw);

    }
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);
    // console.log(event);

    const token = window.localStorage.getItem('token');

    const {url, options} = PHOTO_POST(formData, token);

    request(url, options);

    // console.log(data);

    
    
  }

  function handleImgChange(event :  React.ChangeEvent<HTMLInputElement>) {

    if(event.target.files){

    setImg({
      
      preview: URL.createObjectURL(event.target.files[0]),
      raw : event.target.files[0],
    })
  }

    // console.log(img);
  }
  return (
    <section className= {`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="number" label="Peso" name="peso" {...peso} />
        <Input type="number" label="Idade" name="idade" {...idade} />
        <input className={styles.file} onChange={handleImgChange} type="file" name="img" id="img"></input>

        {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar</Button>}

       {error && <Error error={error}/>} 
        
      </form>

      <div>
        {img?.preview && <div className={styles.preview} style={{backgroundImage: `url('${img.preview}')`}}></div>}
      </div>
    </section>
  )
}

export default UsePhotoPost