import { useState } from 'react';
import Authenticate from "./components/Authenticate/Authenticate";
import SignupForm from "./components/SignupForm/SignupForm";

function App() {
const [token, setToken] = useState(null);
 return (
 <> 
    <Authenticate token={token} />
    <SignupForm setToken={setToken}/>
 </>
  );
}

export default App
