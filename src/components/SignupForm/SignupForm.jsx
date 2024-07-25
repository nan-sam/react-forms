import { useState } from 'react';


function SignupForm({ setToken }) {

const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [error, setError] = useState(null);

const handleSubmit = async (e) => {
    e.preventDefault();
    if(!username || !password){
        alert("Please enter a valid username and password");
        return;
    }
    try{
        const res = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
            method: "POST",
            body: JSON.stringify({username, password}),
            headers:{
                "Content-type":"application/json",
            },
        });
        const json = await res.json();
        if(json.success){
            setError(null);
            setUsername("");
            setPassword("");
            alert("Successfully signed up!");
            setToken(json.token);
        }
        console.log(json)

    } catch (err){
        console.log(err);
        setError(true)

    }
};


  return (
    <>
    {error && <p>Something went wrong. Please try again later.</p>}
    <h2>SignupForm</h2>
    <form onSubmit={handleSubmit}>
        <label>
            username: {" "}
            <input
            type="text"
            value={username} 
            onChange={(e) => {
                setUsername(e.target.value);
    
            }}
            />
        </label>
        <label>
            password:{" "}
             <input 
            type="password"
            value={password} 
            onChange={(e)=>{
                setPassword(e.target.value);
            }}
            />
        </label>
       <input type="submit" value="Submit"/>
    </form>
    </>
  );
}

export default SignupForm;