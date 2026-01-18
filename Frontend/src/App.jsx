
import { useState } from 'react';
import Register from "./pages/Register";
import Login from "./pages/Login"; 
import Workspace from './pages/workspace';

function App(){
  const [token, setToken] = useState(null);
  const [showRegister, setShowRegister] = useState();

  if(!token){
    return showRegister ?
     <Register onSwitch={()=>setShowRegister(false)}/> : 
     <Login setToken={setToken} onSwitch={()=>setShowRegister(true)}/>;
  }

  return <Workspace token={token}/>;
}
 
export default App;

