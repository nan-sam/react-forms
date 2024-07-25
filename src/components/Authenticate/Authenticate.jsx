import { useState } from 'react';

function Authenticate({token}) {
        const[successMessage, setSuccessMessage] = useState(null);
        const[error, setError] = useState(null);

    const handleClick = async () => {
        try {
            console.log("clicked");
            const res = await fetch (
                "https;//fsa-jwt-practice.herokuapp.com/authenticate", 
                {
                method: "GET",
                headers: {
                    "Content-type":"application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
            );
            const json = await res.json();
            console.log(json)
            if(json.success){
                setSuccessMessage(json.message);
            } else {
                setError(true);
            }
        } catch (err) {
            console.log(err);
        }
        
    };

  return (
    <>
    {error & <p>Could not authenticate</p>}
    {successMessage && <p>{successMessage}</p>}
    <h2>Authenticate</h2>
    <button onClick={handleClick}>Authenticate</button>
    </>
  );
}

export default Authenticate;