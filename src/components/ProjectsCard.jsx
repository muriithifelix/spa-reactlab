
import ProjectList from "./ProjectList";

function ProjectsCard({ projects, searchTerm, setSearchTerm }) {
  return (
    <section className="projects-card">

      <ProjectList
        projects={projects}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

    </section>
  );
}

export default ProjectsCard;
