import React from 'react';


const PhotoGet = () => {
  

  function handleSubmit(event) {
    event.preventDefault();


    fetch(`http://dogsapi.test/json/api/photo`)
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        return json;
      });
  }

  return (
    <form onSubmit={handleSubmit}>
     
      <button>Enviar</button>
    </form>
  );
};

export default PhotoGet;