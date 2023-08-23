import React from 'react'

interface HeadProps {
  title: string;
  description?: string;
}

const Head:React.FC<HeadProps> = ({ title, description }) => {

  React.useEffect(() => {

    document.title = title + ' | Dogs';
    const metaDescriptionTag = document.querySelector("meta[name='description']");
    if(metaDescriptionTag){
      metaDescriptionTag.setAttribute('content', description || '');
    }
 

  }, [title, description])
  return (
    <></>
  )
}

export default Head