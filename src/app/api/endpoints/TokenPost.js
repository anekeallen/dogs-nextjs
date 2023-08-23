import React from 'react'

const TokenPost = () => {

 const [username, setUsername] = React.useState("");
 const [password, setPassword] = React.useState("");
 const [token, setToken] = React.useState("");

 async function handleSubmit(e) {
   e.preventDefault();

   let response = await fetch('http://dogsapi.test/json/jwt-auth/v1/token',{
     method: 'POST',
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username,
  
       password,
     })
   });

   let response_json = await response.json();

   setToken(response_json.token)

   console.log(response_json);
   
 }
  return (
    <form onSubmit={handleSubmit}>
      
      <input placeholder='username' type="text" value={username} name="" id="" onChange={({target})=> setUsername(target.value)} />
   
      <input placeholder='password' type="text" value={password} name="" id="" onChange={({target})=> setPassword(target.value)} />

      <button>Enviar</button>

      <p style={{wordBreak:'break-all'}}>{token}</p>
 
    </form>
  )
}

export default TokenPost