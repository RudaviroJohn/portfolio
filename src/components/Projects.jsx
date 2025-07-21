import React from 'react';

const projectsData = [
  {
    title: 'Project One',
    description: 'A brief description of Project One, highlighting its purpose, key features, and the technologies used. This project solves a real-world problem by providing an elegant and efficient solution.',
    image: 'https://via.placeholder.com/400x250',
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Two',
    description: 'A brief description of Project Two, highlighting its purpose, key features, and the technologies used. This project showcases my ability to work with modern frameworks and libraries.',
    image: 'https://via.placeholder.com/400x250',
    liveLink: '#',
    repoLink: '#',
  },
  {
    title: 'Project Three',
    description: 'A brief description of Project Three, highlighting its purpose, key features, and the technologies used. This project demonstrates my skills in database management and API integration.',
    image: 'https://via.placeholder.com/400x250',
    liveLink: '#',
    repoLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.title} className="bg-blue-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-blue-900 mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex justify-between">
                  <a href={project.liveLink} className="text-blue-600 hover:underline">Live Demo</a>
                  <a href={project.repoLink} className="text-blue-600 hover:underline">GitHub Repo</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 