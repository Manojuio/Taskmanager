import { useState } from "react";
import api from "../api/axios";

function Tasks({ token, projectId }) {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");

  const createTask = async () => {
    const res = await api.post(
      "/tasks",
      { title, projectId },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setTasks([...tasks, res.data]);
  };

  const toggleTask = async (taskId) => {
    await api.patch(
      `/tasks/${taskId}/status`,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );
  };

  return (
    <div>
      <h4>Tasks</h4>

      <input placeholder="Task title" onChange={e => setTitle(e.target.value)} />
      <button onClick={createTask}>Add</button>

      <ul>
        {tasks.map(t => (
          <li key={t._id}>
            {t.title}
            <button onClick={() => toggleTask(t._id)}>Toggle</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;
