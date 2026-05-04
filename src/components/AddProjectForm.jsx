import { useState } from "react";

function AddProjectForm({ onAdd }) {
  const [projectName, setProjectName] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({ name: projectName, description: projectDescription });
    setProjectName("");
    setProjectDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label for="projectName">Project Name:</label>
        <input
          type="text"
          id="projectName"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />
      </div>
      <div>
        <label for="projectDescription">Project Description:</label>
        <textarea
          id="projectDescription"
          value={projectDescription}
          onChange={(event) => setProjectDescription(event.target.value)}
        />
      </div>
      <button type="submit">Add Project</button>
    </form>
  );
}

export default AddProjectForm;