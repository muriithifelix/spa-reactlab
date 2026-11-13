
import { useState } from "react";

import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import ProjectsCard from "./components/ProjectsCard";

import "./App.css";

function App() {

  // State: Store all projects
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal website showcasing my skills and projects."
    },
    {
      id: 2,
      title: "Weather App",
      description: "An application that displays weather information."
    },
    {
      id: 3,
      title: "Online Bookstore",
      description: "A web application for browsing and managing books."
    },
    {
      id: 4,
      title: "Student Management System",
      description: "An application for managing student records."
    },
    {
      id: 5,
      title: "Budget Tracker",
      description: "A simple application for tracking income and expenses."
    },
    {
      id: 6,
      title: "Dictionary App",
      description: "A dictionary application that retrieves word definitions."
    }
  ]);

  // State: Store search input
  const [searchTerm, setSearchTerm] = useState("");

  // Function: Add a new project
  const addProject = (title, description) => {

    const newProject = {
      id: Date.now(),
      title,
      description
    };

    setProjects((previousProjects) => [
      ...previousProjects,
      newProject
    ]);
  };

  // Filter projects by title or description
  const filteredProjects = projects.filter((project) =>
    `${project.title} ${project.description}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">

      <Header />

      <main className="container">

        <ProjectForm onAddProject={addProject} />

        <ProjectsCard
          projects={filteredProjects}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

      </main>

    </div>
  );
}

export default App;
