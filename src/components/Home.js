import React from 'react';
import { FiFolder } from 'react-icons/fi'; 

function Home() {
  const projects = [
    { id: 1, name: "Projeto 1", url: "https://app-store-tawny.vercel.app/" },  
    { id: 2, name: "Projeto 2", url: "https://kikacoffee.vercel.app/" }, 
    { id: 3, name: "Projeto 3", url: "https://prettyplanner-two.vercel.app/" },  
  ];

  return (
    <div className="container">
      <h2>Bem-vindo(a) novamente!</h2>
      <p>Explore os projetos abaixo:</p>

      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-folder">
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="folder-icon">
                <FiFolder />
              </div>
              <span>{project.name}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;