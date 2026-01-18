import { useEffect, useState } from "react";
import Projects from "./Projects";
import api from "../api/axios";

function Workspace({ token }){
    const [workspaces, setWorkspaces] = useState([]);
    const [name, setName] = useState('');
    const [selectedWorkspace, setSelectedWorkspace] = useState(null);

    useEffect(()=>{
        api.get('/workspaces', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(res=>setWorkspaces(res.data))
          .catch(err=>console.log(err));
       }, [token]);

    const createWorkspace = async () => {
        await api.post(
            '/workspaces', {
            name
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
    };

    if(selectedWorkspace){
        return <Projects token ={token} workspaceId={selectedWorkspace} />;
    }
    return(
        <div className="container">
            <h2>Workspaces</h2>
            <input placeholder="Workspace Name" onChange={e=>setName(e.target.value)}/>
            <button onClick={createWorkspace}>Create Workspace</button>
            <div className="list">
    {workspaces.map(w => (
      <div className="list-item" key={w._id}>
        <span>{w.name}</span>
        <button
          className="small-btn"
          onClick={() => setSelectedWorkspace(w._id)}
        >
          Open
        </button>
      </div>
    ))}
  </div>
        </div>  
    )




}

export default Workspace;