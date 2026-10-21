import React, { useState, useEffect } from 'react';

// Import រូបភាពគម្រោងកសិAI
import imgKasiAI1 from '../assets/KEkasiAI1.png'; 
import imgKasiAI2 from '../assets/KEkasiAI2.png'; 

// Import រូបភាពគម្រោង LMS
import imgLMS1 from '../assets/Library Management System.png';
import imgLMS2 from '../assets/Library Management System1.png';

// Import រូបភាពគម្រោង Website ថ្មី
import imgWeb1 from '../assets/website.png';
import imgWeb2 from '../assets/website1.png';

// Component តូចសម្រាប់កាតគម្រោងនីមួយៗ
const ProjectCard = ({ item, isKh, lang }) => {
  const [currentImg, setCurrentImg] = useState(0);

  // មុខងារឱ្យរូបភាពលោតដោយស្វ័យប្រវត្តិ 
  useEffect(() => {
    if (!item.images || item.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImg((prev) => (prev === item.images.length - 1 ? 0 : prev + 1));
    }, 4000); // ៤ វិនាទីម្តង

    return () => clearInterval(interval);
  }, [item.images]);

  return (
    <div className="group relative bg-white/70 dark:bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl hover:-translate-y-2 hover:border-blue-400 dark:hover:border-blue-500/50 transition-all duration-300 flex flex-col overflow-hidden w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.333%-2rem)] max-w-2xl">
      
      {/* ផ្នែករូបភាព Auto-Slide */}
      {item.images && item.images.length > 0 && (
        <div className="w-full h-64 relative bg-gray-50/50 dark:bg-gray-900/50 border-b border-gray-100 dark:border-gray-700 overflow-hidden perspective-1000">
          
          {item.images.map((img, imgIndex) => (
            <img 
              key={imgIndex}
              src={img} 
              alt={`${item.name} screenshot ${imgIndex + 1}`} 
              className={`absolute inset-0 w-full h-full object-contain p-4 drop-shadow-sm transition-all duration-700 ease-out ${
                currentImg === imgIndex 
                  ? 'opacity-100 scale-100 z-10' 
                  : 'opacity-0 scale-75 z-0'
              }`} 
              loading="lazy"
            />
          ))}
          
          {/* ចំណុចមូលៗខាងក្រោម */}
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-20">
            {item.images.map((_, dotIndex) => (
              <button 
                key={dotIndex} 
                onClick={() => setCurrentImg(dotIndex)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentImg === dotIndex 
                    ? 'bg-blue-600 w-5' 
                    : 'bg-gray-300/80 dark:bg-gray-600/80 hover:bg-blue-400'
                }`}
                aria-label={`Go to slide ${dotIndex + 1}`}
              />
            ))}
          </div>
        </div>
      )}

      {/* ផ្នែកអត្ថបទ */}
      <div className="p-6 flex flex-col flex-grow relative z-20 bg-white/40 dark:bg-gray-800/40">
        <h3 
          className={`text-xl text-gray-900 dark:text-white mb-3 ${isKh ? 'font-medium' : 'font-bold'}`}
        >
          {item.name}
        </h3>
        
        <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-4 bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800 inline-block px-4 py-1 rounded-full w-max shadow-sm">
          {item.tech}
        </span>
        
        <p 
          className={`text-gray-600 dark:text-gray-300 flex-grow text-base ${isKh ? 'font-normal' : ''}`}
          style={{ lineHeight: isKh ? '2.2' : '1.6' }}
        >
          {item.desc}
        </p>
      </div>
      
    </div>
  );
};


// Main Projects Component
const Projects = ({ lang }) => {
  const content = {
    kh: {
      title: "ស្នាដៃ និងគម្រោង",
      items: [
        { 
          name: "ប្រព័ន្ធគ្រប់គ្រងបណ្ណាល័យ (LMS)", 
          tech: "React, Tailwind CSS, API", 
          desc: "ប្រព័ន្ធគ្រប់គ្រងការខ្ចី-សងសៀវភៅ គ្រប់គ្រងទិន្នន័យសមាជិក របាយការណ៍វត្តមាន និងរបាយការណ៍ហិរញ្ញវត្ថុ ភ្ជាប់ជាមួយផ្ទាំងគ្រប់គ្រង (Dashboard) ទំនើប និងងាយស្រួលប្រើប្រាស់។",
          images: [imgLMS1, imgLMS2] 
        },
        { 
          name: "កម្មវិធីទូរស័ព្ទ កសិAI", 
          tech: "Flutter, UI/UX Design", 
          desc: "កម្មវិធីទូរស័ព្ទជួយកសិករ ដែលមានមុខងារ AI វិភាគជំងឺដំណាំ ព្យាករណ៍ទិន្នផល ទីផ្សារកសិផលឆ្លាតវៃ និងកត់ត្រាប្រាក់ចំណេញ។ ខ្ញុំចូលរួមជាអ្នករចនា UI/UX និងអភិវឌ្ឍន៍ Mobile App។",
          images: [imgKasiAI1, imgKasiAI2] 
        },
        { 
          name: "គេហទំព័រអាជីវកម្មទំនើប", 
          tech: "React, Tailwind CSS", 
          desc: "អភិវឌ្ឍន៍គេហទំព័រទំនើបដែលមានល្បឿនលឿន រចនាបថទាក់ទាញ និងងាយស្រួលប្រើប្រាស់លើគ្រប់ទំហំអេក្រង់ (Responsive Design) ដើម្បីជួយជំរុញអាជីវកម្មលើអ៊ីនធឺណិត។",
          images: [imgWeb1, imgWeb2] 
        }
      ]
    },
    en: {
      title: "Projects",
      items: [
        { 
          name: "Library Management System", 
          tech: "React, Tailwind CSS, API", 
          desc: "A comprehensive system for managing library books, member records, borrowing/returning processes, and financial reports with a streamlined management dashboard.",
          images: [imgLMS1, imgLMS2] 
        },
        { 
          name: "KasiAI Mobile App", 
          tech: "Flutter, UI/UX Design", 
          desc: "An agriculture app featuring AI Crop Doctor, Supply Predictor, Smart Marketplace, and Profit Record. I served as the UI/UX Designer and Mobile App Developer.",
          images: [imgKasiAI1, imgKasiAI2] 
        },
        { 
          name: "Modern Business Website", 
          tech: "React, Tailwind CSS", 
          desc: "Developed a modern, fast, and visually appealing website with responsive design to enhance online business presence and provide an optimal user experience across all devices.",
          images: [imgWeb1, imgWeb2] 
        }
      ]
    }
  };
  
  const t = content[lang];
  const isKh = lang === 'kh';

  return (
    <section 
      id="projects" 
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

      {/* ផ្នែកកាតគម្រោង */}
      <div className="flex flex-wrap justify-center gap-8 w-full">
        {t.items.map((item, index) => (
          <ProjectCard key={index} item={item} isKh={isKh} lang={lang} />
        ))}
      </div>
      
    </section>
  );
};

export default Projects;