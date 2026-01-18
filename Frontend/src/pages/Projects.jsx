import { useEffect, useState } from "react";
import api from "../api/axios";
import Tasks from "./Tasks";

function Projects({ token, workspaceId }) {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    api.get(`/projects/workspace/${workspaceId}`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then(res => setProjects(res.data));
  }, [workspaceId, token]);

  const createProject = async () => {
    const res = await api.post(
      "/projects",
      { name, workspaceId },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setProjects(prev => [...prev, res.data]);
    setName("");
  };

  if (selectedProject) {
    return <Tasks token={token} projectId={selectedProject} />;
  }

  return (
    <div className="container">
      <h3>Projects</h3>

      <input
        placeholder="Project name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={createProject}>Create</button>

      <div className="list">
        {projects.map(p => (
          <div className="list-item" key={p._id}>
            <span>{p.name}</span>
            <button
              className="small-btn"
              onClick={() => setSelectedProject(p._id)}
            >
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
