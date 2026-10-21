import React from 'react';

// Import រូបភាពពី Folder assets តាមឈ្មោះពិតប្រាកដ
import imgSarathDigital from '../assets/Sarath Digital Services.png';
import imgTeacher from '../assets/Computer & Language Teacher.jpg';
import imgPailinIT from '../assets/Pailin Information Technology1.png';
import imgSchoolSystem from '../assets/High School Management System.png';
// Import រូបភាពថ្មីសម្រាប់បទពិសោធន៍ CO
import imgCO from '../assets/CO.jpg';

const Experience = ({ lang }) => {
  const content = {
    kh: {
      title: "បទពិសោធន៍ការងារ និងគម្រោង",
      items: [
        { 
          title: "ភ្នាក់ងារ Sarath Digital Services", 
          desc: "បង្កើតមាតិកាផ្សព្វផ្សាយ រចនា Graphic អភិវឌ្ឍន៍វេបសាយ និងផ្តល់សេវាកម្ម IT ចម្រុះ។",
          image: imgSarathDigital
        },
        { 
          title: "មន្ត្រីឥណទាន (CO) នៅស្ថាប័នប្រាកដ", 
          desc: "មានបទពិសោធន៍ ១ ឆ្នាំក្នុងការចុះវាយតម្លៃឥណទាន សិក្សាពីប្រតិបត្តិការហិរញ្ញវត្ថុរបស់អតិថិជន និងរៀបចំឯកសារកម្ចីប្រកបដោយទំនួលខុសត្រូវ។",
          image: imgCO
        },
        { 
          title: "គ្រូបង្រៀនកុំព្យូទ័រ និងភាសាបរទេស", 
          desc: "បង្រៀនកម្មវិធី Microsoft Office, ការរចនាក្រាហ្វិក (Graphic Design), ការសរសេរកូដ (Coding) និងភាសាបរទេស នៅមជ្ឈមណ្ឌលព័ត៌មានបច្ចេកវិទ្យា។",
          image: imgTeacher
        },
        { 
          title: "មជ្ឈមណ្ឌល ប៉ៃលិន ព័ត៌មានបច្ចេកវិទ្យា", 
          desc: "រៀបចំរចនាសម្ព័ន្ធកម្មវិធីសិក្សាកុំព្យូទ័រ (កម្រិត A, B, C) និងរៀបចំឯកសាររដ្ឋបាលផ្សេងៗ។",
          image: imgPailinIT
        },
        { 
          title: "ប្រព័ន្ធគ្រប់គ្រងសាលាវិទ្យាល័យ (School Management System)", 
          desc: "អភិវឌ្ឍន៍ប្រព័ន្ធគ្រប់គ្រងសាលារៀន ដែលជាគម្រោងសារណាបញ្ចប់ឆ្នាំសិក្សា។",
          image: imgSchoolSystem
        }
      ]
    },
    en: {
      title: "Experience & Projects",
      items: [
        { 
          title: "Sarath Digital Services", 
          desc: "Created promotional content, graphic design, web development, and provided IT solutions.",
          image: imgSarathDigital
        },
        { 
          title: "Credit Officer (CO) at Prakak Institution", 
          desc: "One year of experience in credit assessment, analyzing client financial operations, and securely processing loan documentation.",
          image: imgCO
        },
        { 
          title: "Computer & Language Teacher", 
          desc: "Taught Microsoft Office, Graphic Design, Coding, and Foreign Languages at the Information Technology Center.",
          image: imgTeacher
        },
        { 
          title: "Pailin Information Technology", 
          desc: "Structured computer training curriculums (Level A, B, C) and administrative materials.",
          image: imgPailinIT
        },
        { 
          title: "High School Management System", 
          desc: "Developed a comprehensive school management system for my senior thesis project.",
          image: imgSchoolSystem
        }
      ]
    }
  };
  
  const t = content[lang];
  const isKh = lang === 'kh';

  return (
    <section 
      id="experience" 
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

      {/* ផ្នែក Timeline */}
      <div className="relative border-l-2 border-blue-200 dark:border-gray-700 ml-2 space-y-8 w-full">
        {t.items.map((item, index) => (
          <div key={index} className="relative pl-8 group">
            
            {/* ចំណុចរង្វង់ Timeline */}
            <div className="absolute -left-[9px] top-4 w-4 h-4 bg-blue-600 rounded-full ring-4 ring-gray-50 dark:ring-[#111827] group-hover:ring-blue-100 dark:group-hover:ring-blue-900/50 group-hover:scale-125 transition-all duration-300 z-10"></div>
            
            {/* កាតបទពិសោធន៍ */}
            <div className="bg-white/70 dark:bg-gray-800/60 backdrop-blur-md p-5 md:p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 group-hover:shadow-md group-hover:-translate-y-1 group-hover:border-blue-300 dark:group-hover:border-blue-600/50 transition-all duration-300 flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full">
              
              {/* រូបភាព */}
              <div className="w-full sm:w-56 md:w-64 h-36 md:h-44 flex-shrink-0 flex items-center justify-center p-2 rounded-xl border border-gray-100 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-900/50 shadow-inner">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-lg"
                  loading="lazy"
                />
              </div>

              {/* អត្ថបទ */}
              <div className="flex-1 w-full">
                <h3 
                  className={`text-xl md:text-2xl text-gray-900 dark:text-white mb-3 ${isKh ? 'font-medium' : 'font-bold'}`}
                >
                  {item.title}
                </h3>
                <p 
                  className={`text-gray-600 dark:text-gray-300 text-base md:text-lg ${isKh ? 'font-normal' : ''}`}
                  style={{ lineHeight: isKh ? '2.2' : '1.7' }}
                >
                  {item.desc}
                </p>
              </div>

            </div>
            
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Experience;