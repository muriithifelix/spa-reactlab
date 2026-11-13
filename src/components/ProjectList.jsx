
import ProjectItem from "./ProjectItem";

function ProjectList({ projects, searchTerm, setSearchTerm }) {
  return (
    <div className="project-list">

      <div className="search-container">
        <input
          type="text"
          placeholder="Search Projects"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="projects-container">

        {projects.length > 0 ? (
          projects.map((project) => (
            <ProjectItem
              key={project.id}
              project={project}
            />
          ))
        ) : (
          <p>No projects found.</p>
        )}

      </div>

    </div>
  );
}

export default ProjectList;
