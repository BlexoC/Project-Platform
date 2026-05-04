import { useState } from "react";
import ProjectItem from "./ProjectItem";
import SearchBar from "./SearchBar";




function ProjectList({ projects, onDelete }) {
    const [query, setQuery] = useState("");
    
    const filteredProjects = projects.filter((project) =>
        project.name.toLowerCase().includes(query.toLowerCase())
    );
  return (


    <div className="project-list">
      <SearchBar
        query={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {filteredProjects.map((project) => (
        <ProjectItem key={project.id} project={project} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default ProjectList;