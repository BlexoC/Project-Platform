import { useState } from 'react'
import AddProjectForm from './components/AddProjectForm'
import ProjectList from './components/ProjectList'
import './App.css'

function App() {
  const [projects, setProjects] = useState([
    { id: 1, name: "Project 1", description: "Description " },
    { id: 2, name: "Project 2", description: "Description " },
  ]);

  function handleAddProject(project) {
    const newProject = { id: Date.now(), ...project };
    setProjects([...projects, newProject]);
  }

  function handleDeleteProject(id) {
    setProjects(projects.filter((project) => project.id !== id));
  }

  return (
    <div>
      <h1>Project Platform</h1>
      <AddProjectForm onAdd={handleAddProject} />
      <ProjectList projects={projects} onDelete={handleDeleteProject} />
    </div>

  );
}

export default App;