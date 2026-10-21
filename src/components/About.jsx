import React from 'react';
// សូមកែប្រែទីតាំង path ឱ្យត្រូវនឹងរចនាសម្ព័ន្ធ folder របស់អ្នក
import imgEK2 from '../assets/EK2.jpg';
import imgKE from '../assets/KE.jpg';
import imgKE1 from '../assets/KE1.jpg';
import imgKE3 from '../assets/KE3.jpg';
import imgKE4 from '../assets/KE4.jpg';
import imgMasterIT from '../assets/MasterIT.jpg';
import imgMasterIT1 from '../assets/MasterIT1.jpg';
import imgStudent from '../assets/student.jpg';
import imgStudent2 from '../assets/student2.jpg';
import imgUME from '../assets/UME.jpg';
import imgUME1 from '../assets/UME1.jpg';
import imgUME2 from '../assets/UME2.jpg';

const About = ({ lang }) => {
  const content = {
    kh: {
      title: "អំពីខ្ញុំ",
      description: "សួស្តី! ខ្ញុំឈ្មោះ នី សារ៉ាត។ ខ្ញុំជាជនជាតិខ្មែរ ហើយខ្ញុំកើតនៅថ្ងៃទី ៣ ខែតុលា ឆ្នាំ ២០០៤។ ខ្ញុំរស់នៅខេត្តបាត់ដំបង ប្រទេសកម្ពុជា។ ជំនាញសិក្សារបស់ខ្ញុំគឺ បច្ចេកវិទ្យាព័ត៌មានវិទ្យា (IT) ហើយខ្ញុំធ្វើការជាគ្រូបង្រៀនកុំព្យូទ័រ។ ខ្ញុំចាប់អារម្មណ៍លើកុំព្យូទ័រ បច្ចេកវិទ្យា និងការរៀនភាសាអង់គ្លេស។ ខ្ញុំមានជំនាញផ្នែកសរសេរកូដ និងការរចនាក្រាហ្វិក។ ខ្ញុំជាមនុស្សរួសរាយរាក់ទាក់ ឧស្សាហ៍ព្យាយាម និងមានទំនួលខុសត្រូវ។",
      mission: "គោលដៅរបស់ខ្ញុំគឺ បង្កើនសមត្ថភាពភាសាអង់គ្លេស និងក្លាយជាអ្នកអភិវឌ្ឍន៍ផ្នែកព័ត៌មានវិទ្យាដែលមានជំនាញវិជ្ជាជីវៈនាពេលអនាគត។ រីករាយដែលបានស្គាល់អ្នក!",
      galleryTitle: "សកម្មភាព និង អនុស្សាវរីយ៍"
    },
    en: {
      title: "About Me",
      description: "Hello! My name is Ni Sarath. I am Cambodian, and I was born on October 3, 2004. I live in Battambang Province, Cambodia. My major is Information Technology (IT), and I work as a computer teacher. I am interested in computers, technology, and learning English. I have skills in programming and graphic design. I am a friendly, hardworking, and responsible person.",
      mission: "My goal is to improve my English skills and become a professional IT developer in the future. Nice to meet you!",
      galleryTitle: "Activities & Memories"
    }
  };
  
  const t = content[lang] || content.en;
  const isKh = lang === 'kh';

  const horizontalImages = [
    imgEK2, imgKE, imgMasterIT, imgMasterIT1, imgUME, imgUME1
  ];

  const verticalImages = [
    imgKE1, imgKE3, imgKE4, imgStudent, imgStudent2, imgUME2
  ];

  return (
    <section 
      id="about" 
      className="max-w-7xl mx-auto pt-2 pb-16 px-4 scroll-mt-24 overflow-hidden"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }
          .animate-scroll-right {
            animation: scroll-right 35s linear infinite;
          }
          .pause-on-hover:hover {
            animation-play-state: paused;
          }
        `}
      </style>

      {/* ផ្នែកចំណងជើង អំពីខ្ញុំ */}
      <div className="text-center mb-6">
        <div className="inline-block relative p-3 px-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-blue-200/50 dark:border-blue-700/50 shadow-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <h2 
            className={`relative z-10 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300% ${isKh ? '' : 'tracking-wide'}`}
            style={isKh ? { fontFamily: '"Khmer OS Muol Light", serif', fontWeight: 'normal', lineHeight: '1.6' } : {}}
          >
            {t.title}
          </h2>
        </div>
      </div>
      
      {/* ផ្នែកអត្ថបទ - បានកាត់បន្ថយ mb-20 មកត្រឹម mb-10 ដើម្បីកុំឱ្យចន្លោះធំពេក */}
      <div className="max-w-4xl mx-auto text-center mb-10 px-4">
        <p 
          className={`text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 ${isKh ? 'font-normal' : ''}`} 
          style={{ lineHeight: isKh ? '2.2' : '1.8' }}
        >
          {t.description}
        </p>
        
        {/* ផ្នែកគោលដៅ */}
        <p 
          className={`text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 leading-relaxed italic ${isKh ? 'font-normal' : 'font-medium'}`} 
          style={{ lineHeight: isKh ? '2.2' : '1.8' }}
        >
          "{t.mission}"
        </p>
      </div>

      {/* ចំណងជើង Gallery */}
      <div className="text-center mb-6">
        <div className="inline-block relative p-3 px-6 rounded-2xl bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-blue-200/50 dark:border-blue-700/50 shadow-sm overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-30 blur-md group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <h3 
            className={`relative z-10 text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent animate-gradient bg-300% ${isKh ? '' : 'tracking-wide'}`}
            style={isKh ? { fontFamily: '"Khmer OS Muol Light", serif', fontWeight: 'normal', lineHeight: '1.6' } : {}}
          >
            {t.galleryTitle}
          </h3>
        </div>
      </div>

      {/* វិចិត្រសាលរូបភាព */}
      <div className="space-y-6 relative">
        <div className="flex overflow-hidden relative w-full group">
          <div className="flex w-max animate-scroll-left pause-on-hover gap-6 px-3">
            {[...horizontalImages, ...horizontalImages].map((img, index) => (
              <div key={`h-${index}`} className="w-72 md:w-96 h-48 md:h-64 flex-shrink-0 overflow-hidden rounded-xl shadow-md border-2 border-transparent hover:border-blue-500 transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Horizontal Memory ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex overflow-hidden relative w-full group">
          <div className="flex w-max animate-scroll-right pause-on-hover gap-6 px-3">
            {[...verticalImages, ...verticalImages].map((img, index) => (
              <div key={`v-${index}`} className="w-48 md:w-60 h-64 md:h-80 flex-shrink-0 overflow-hidden rounded-xl shadow-md border-2 border-transparent hover:border-purple-500 transition-all duration-300">
                <img 
                  src={img} 
                  alt={`Vertical Memory ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default About;