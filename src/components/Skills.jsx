import React from 'react';

const skillsData = [
  {
    category: '🧠 Programming Languages',
    items: ['JavaScript', 'Python', 'PHP', 'HTML & CSS'],
  },
  {
    category: '⚙️ Frameworks & Libraries',
    items: ['React.js', 'Tailwind CSS', 'Node.js', 'Laravel', 'Express.js'],
  },
  {
    category: '🗄️ Databases',
    items: ['MySQL', 'MongoDB', 'Firebase'],
  },
  {
    category: '🧪 Tools & Platforms',
    items: ['Git & GitHub', 'Vercel', 'VS Code', 'Postman', 'npm'],
  },
  {
    category: '🌐 Other Skills',
    items: ['Responsive Design', 'REST API Integration', 'Problem Solving', 'Team Collaboration', 'UI/UX Basics'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-blue-900 text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillCategory) => (
            <div key={skillCategory.category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{skillCategory.category}</h3>
              <ul className="space-y-2">
                {skillCategory.items.map((item) => (
                  <li key={item} className="text-lg text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 