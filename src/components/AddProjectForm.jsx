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
    <form onSubmit={handleSubmit} className="project-form" >
      <div className="project-name">
        <label for="projectName">Project Name:</label>
        <input
          className="project-space"
          type="text"
          id="projectName"
          value={projectName}
          onChange={(event) => setProjectName(event.target.value)}
        />
      </div>
      <div className="project-description">
        <label for="projectDescription">Project Description:</label>
        <textarea
          className="project-des"
          id="projectDescription"
          value={projectDescription}
          onChange={(event) => setProjectDescription(event.target.value)}
        />
      </div>
      <button type="submit" className ="add-button">Add Project</button>
    </form>
  );
}

export default AddProjectForm;