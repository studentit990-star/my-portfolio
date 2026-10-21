import React from 'react';

const Skills = ({ lang }) => {
  const content = {
    kh: { title: "ជំនាញបច្ចេកទេស" },
    en: { title: "Technical Skills" }
  };
  
  const t = content[lang];
  const isKh = lang === 'kh';
  
  const skillsList = [
    {
      name: "React & Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
    },
    {
      name: "C# ASP.NET Core & MVC",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg"
    },
    {
      name: "Python & FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
    },
    {
      name: "Flutter & React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg"
    },
    {
      name: "Linux Ubuntu Server",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ubuntu/ubuntu-plain.svg"
    },
    {
      name: "SQL Databases",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg"
    },
    {
      name: "Graphic Design",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg"
    },
    {
      name: "Microsoft Office",
      icon: "https://img.icons8.com/color/512/microsoft-office-2019.png"
    }
  ];

  return (
    <section 
      id="skills" 
      className="max-w-7xl mx-auto pt-2 pb-16 px-4 scroll-mt-24"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      
      {/* ផ្នែកចំណងជើង មានពន្លឺរត់ និងពណ៌ស៊ីគ្នា */}
      <div className="text-center mb-8">
        <div className="inline-block relative p-3 px-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-blue-200/50 dark:border-blue-700/50 shadow-sm overflow-hidden group">
          
          {/* ពន្លឺរត់ជុំវិញស៊ុម */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <h2 
            className={`relative z-10 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300% ${isKh ? '' : 'tracking-wide'}`}
            style={isKh ? { fontFamily: '"Khmer OS Muol Light", serif', fontWeight: 'normal', lineHeight: '1.6' } : {}}
          >
            {t.title}
          </h2>
        </div>
      </div>

      {/* ផ្នែកក្រឡាជំនាញ (Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {skillsList.map((skill, index) => (
          <div 
            key={index} 
            className="group relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-md py-4 px-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md hover:-translate-y-1 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 flex items-center overflow-hidden"
          >
            {/* បន្ទាត់ពណ៌ខៀវតូចនៅខាងឆ្វេងពេល Hover */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            
            {/* រូបតំណាង (Logo) ពី Internet */}
            <div className="w-10 h-10 flex-shrink-0 mr-4 group-hover:scale-110 transition-transform duration-300">
              <img 
                src={skill.icon} 
                alt={skill.name} 
                className="w-full h-full object-contain filter drop-shadow-sm"
                loading="lazy"
              />
            </div>
            
            {/* ឈ្មោះជំនាញ */}
            <span className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Skills;