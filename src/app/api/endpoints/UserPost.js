import React from 'react'

const UserPost = () => {

 const [username, setUsername] = React.useState("");
 const [email, setEmail] = React.useState("");
 const [password, setPassword] = React.useState("");

 async function handleSubmit(e) {
   e.preventDefault();

   let response = await fetch('http://dogsapi.test/json/api/user',{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username,
       email,
       password,
     })
   });

   let response_json = await response.json();

   console.log(response_json);
   
 }
  return (
    <form onSubmit={handleSubmit}>
      
      <input placeholder='username' type="text" value={username} name="" id="" onChange={({target})=> setUsername(target.value)} />
      <input placeholder='email' type="text" value={email} name="" id="" onChange={({target})=> setEmail(target.value)} />
      <input placeholder='password' type="text" value={password} name="" id="" onChange={({target})=> setPassword(target.value)} />

      <button>Enviar</button>
 
    </form>
  )
}

export default UserPost