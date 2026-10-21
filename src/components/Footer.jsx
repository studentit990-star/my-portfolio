import React from 'react';
import logoImg from '../assets/Logo.PNG';

const Footer = ({ lang }) => {
  const isKh = lang === 'kh';

  const content = {
    kh: {
      desc: "វេបសាយប្រវត្តិរូប និងស្នាដៃផ្ទាល់ខ្លួនរបស់ នី សារ៉ាត អ្នកអភិវឌ្ឍន៍ប្រព័ន្ធ និងវេបសាយទំនើប។",
      quickLinks: "តំណភ្ជាប់រហ័ស",
      home: "ទំព័រដើម",
      about: "អំពីខ្ញុំ",
      experience: "បទពិសោធន៍",
      skills: "ជំនាញ",
      projects: "ស្នាដៃ",
      contact: "ទំនាក់ទំនង"
    },
    en: {
      desc: "Personal portfolio and website of Ni Sarath, a passionate software and web developer.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    }
  };

  const t = content[lang] || content.en;

  return (
    <footer 
      className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-md border-t border-gray-100 dark:border-gray-800 transition-colors pt-12 pb-10 px-4 sm:px-6 lg:px-8 mt-8 shadow-sm"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">
        
        {/* ផ្នែក Logo និងការពិពណ៌នា */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <a href="#home" className="flex items-center gap-3 group w-max">
            <img 
              src={logoImg} 
              alt="Sarath Logo" 
              className="h-10 w-auto object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105" 
            />
            <span className="text-xl font-black tracking-wider whitespace-nowrap" style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}>
              <span className="text-gray-900 dark:text-white">SARATH</span>
              <span className="text-blue-600 dark:text-blue-400 ml-1.5 font-extrabold">DIGITAL</span>
            </span>
          </a>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-sm text-center md:text-left">
            {t.desc}
          </p>
        </div>

        {/* ផ្នែកតំណភ្ជាប់រហ័ស (Quick Links) - ប្តូរមកជាទម្រង់ប្រអប់ស្អាតៗ */}
        <div className="flex flex-col items-center">
          <h3 className={`text-base text-gray-900 dark:text-white mb-5 text-center w-full ${isKh ? 'font-normal' : 'font-bold tracking-wide'}`}>
            {t.quickLinks}
          </h3>
          <ul className="grid grid-cols-2 gap-2.5 text-sm w-full max-w-sm">
            <li>
              <a href="#home" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.home}
              </a>
            </li>
            <li>
              <a href="#about" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.about}
              </a>
            </li>
            <li>
              <a href="#experience" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.experience}
              </a>
            </li>
            <li>
              <a href="#skills" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.skills}
              </a>
            </li>
            <li>
              <a href="#projects" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.projects}
              </a>
            </li>
            <li>
              <a href="#contact" className="flex items-center justify-center px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200/60 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 transition-all shadow-sm">
                {t.contact}
              </a>
            </li>
          </ul>
        </div>

        {/* ផ្នែកទំនាក់ទំនង និង Icons */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className={`text-base text-gray-900 dark:text-white mb-5 text-center md:text-left w-full ${isKh ? 'font-normal' : 'font-bold tracking-wide'}`}>
            {t.contact}
          </h3>
          
          <div className="flex flex-col items-center md:items-start space-y-3 text-sm text-gray-600 dark:text-gray-400 w-full">
            {/* លេខទូរស័ព្ទ */}
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 flex-shrink-0">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">071 241 0777 / 096 847 5997</span>
            </div>

            {/* Social Media Icons (Telegram & Facebook) */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              {/* Telegram Icon & Link */}
              <a 
                href="https://t.me/ny_sarath777" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-sm hover:-translate-y-0.5"
                title="Telegram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.9 11.9 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                <span className="text-xs font-semibold">Telegram</span>
              </a>

              {/* Facebook Icon & Link */}
              <a 
                href="https://www.facebook.com/profile.php?id=61593668646035" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-all shadow-sm hover:-translate-y-0.5"
                title="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-xs font-semibold">Facebook</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;