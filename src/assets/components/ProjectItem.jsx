import DeleteButton from "./DeleteButton";

function ProjectItem({ project, onDelete }) {
  return (
    <div className="project-item">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <DeleteButton onClick={() => onDelete(project.id)} />
    </div>
  );
}

export default ProjectItem;