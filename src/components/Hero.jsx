import React from 'react';
// សូមប្រាកដថា path ទៅកាន់ folder assets គឺត្រឹមត្រូវ
import profileImg from '../assets/ME.jpg'; 

const Hero = ({ lang }) => {
  const content = {
    kh: {
      welcome: "សូមស្វាគមន៍មកកាន់វេបសាយរបស់ខ្ញុំ",
      greeting: "ខ្ញុំបាទ នី សារ៉ាត់",
      role: "អ្នកអភិវឌ្ឍន៍កម្មវិធី",
      desc: "ខ្ញុំជានិស្សិតជំនាន់ទី១៩ នៃសាកលវិទ្យាល័យគ្រប់គ្រង និងសេដ្ឋកិច្ច (UME) ដែលមានចំណង់ចំណូលចិត្តក្នុងការសរសេរកូដបង្កើតវេបសាយ និងប្រព័ន្ធគ្រប់គ្រង។",
      btnContact: "ទំនាក់ទំនងខ្ញុំ",
      btnPortfolio: "មើលស្នាដៃរបស់ខ្ញុំ"
    },
    en: {
      welcome: "Welcome to my website",
      greeting: "I am Ny Sarath",
      role: "Software Developer",
      desc: "I am a Gen 19 student at the University of Management and Economics (UME) with a strong passion for coding to build websites and management systems.",
      btnContact: "Contact Me",
      btnPortfolio: "View My Portfolio"
    }
  };
  
  const t = content[lang] || content.en;
  const isKh = lang === 'kh';

  return (
    <section 
      id="home" 
      className="w-full max-w-7xl mx-auto pt-16 md:pt-20 pb-12 px-4 scroll-mt-24 flex items-center"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 lg:gap-20 w-full">
        
        {/* ផ្នែកអត្ថបទ (ខាងឆ្វេង) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* Badge ស្វាគមន៍ មានពន្លឺរត់ និងពណ៌ស៊ីគ្នា */}
          <div className="inline-flex items-center px-5 py-2 mb-6 rounded-full bg-white/40 dark:bg-gray-800/40 backdrop-blur-md border border-blue-200/50 dark:border-blue-700/50 shadow-sm relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <svg 
              className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400 relative z-10" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
            <p className={`relative z-10 text-blue-600 dark:text-blue-400 tracking-wide text-base md:text-lg ${isKh ? 'font-normal' : 'font-medium'}`}>
              {t.welcome}
            </p>
          </div>
          
          {/* ចំណងជើងធំទី១ */}
          <h1 
            className={`text-4xl md:text-5xl lg:text-6xl text-gray-900 dark:text-white mb-4 ${isKh ? '' : 'font-extrabold tracking-tight'}`}
            style={isKh ? { fontFamily: '"Khmer OS Muol Light", serif', fontWeight: 'normal', lineHeight: '1.8' } : { lineHeight: '1.2' }}
          >
            {t.greeting}
          </h1>
          
          {/* ចំណងជើងធំទី២ (Role) */}
          <h2 
            className={`text-xl md:text-2xl lg:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-300% animate-gradient mb-6 ${isKh ? '' : 'font-bold'}`}
            style={isKh ? { fontFamily: '"Khmer OS Muol Light", serif', fontWeight: 'normal', lineHeight: '1.8' } : { lineHeight: '1.5' }}
          >
            {t.role}
          </h2>
          
          {/* អត្ថបទពិពណ៌នា */}
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0 font-normal" style={{ lineHeight: '1.8' }}>
            {t.desc}
          </p>
          
          {/* ប៊ូតុង */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <a 
              href="#contact" 
              className={`w-full sm:w-auto px-8 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-lg rounded-full shadow-md transition-all duration-300 hover:-translate-y-0.5 ${isKh ? 'font-normal' : 'font-semibold'}`}
            >
              {t.btnContact}
            </a>
            
            <a 
              href="#projects" 
              className={`w-full sm:w-auto px-8 py-3.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-800 dark:text-white text-lg rounded-full border border-gray-300 dark:border-gray-700 transition-all duration-300 hover:-translate-y-0.5 ${isKh ? 'font-normal' : 'font-semibold'}`}
            >
              {t.btnPortfolio}
            </a>
          </div>
          
        </div>

        {/* ផ្នែករូបភាព (ខាងស្តាំ) */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0 relative">
          <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 -z-10 animate-gradient"></div>
            <img 
              src={profileImg} 
              alt="Ny Sarath" 
              className="w-full h-full object-cover rounded-full border-4 border-white/80 dark:border-gray-800 shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;