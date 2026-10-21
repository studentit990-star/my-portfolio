import React, { useState } from 'react';
import { HomeIcon, AboutIcon, ExperienceIcon, SkillsIcon, ProjectsIcon, ContactIcon, SunIcon, MoonIcon } from './Icons';
// សូមប្រាកដថា path ទៅកាន់ folder assets និងឈ្មោះ Logo.PNG គឺត្រឹមត្រូវ
import logoImg from '../assets/Logo.PNG'; 

const navTexts = {
  kh: { home: "ទំព័រដើម", about: "អំពីខ្ញុំ", experience: "បទពិសោធន៍", skills: "ជំនាញ", projects: "ស្នាដៃ", contact: "ទំនាក់ទំនង" },
  en: { home: "Home", about: "About", experience: "Experience", skills: "Skills", projects: "Projects", contact: "Contact" }
};

const Navbar = ({ isDark, setIsDark, lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = navTexts[lang];
  
  // បង្កើតលក្ខខណ្ឌឆែកមើលថាតើកំពុងប្រើភាសាខ្មែរឬអត់
  const isKh = lang === 'kh';

  return (
    <nav 
      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800 fixed w-full z-50 top-0 transition-all duration-300"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          
          {/* ផ្នែក Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-3 group">
              <img 
                src={logoImg} 
                alt="Sarath Logo" 
                className="h-9 md:h-11 w-auto object-contain rounded-xl shadow-sm transition-transform group-hover:scale-105" 
              />
              <span 
                className="text-lg md:text-xl lg:text-2xl font-black tracking-wider whitespace-nowrap" 
                style={{ fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
              >
                <span className="text-gray-900 dark:text-white">SARATH</span>
                <span className="text-blue-600 dark:text-blue-400 ml-1.5 font-extrabold">DIGITAL</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="#home" className={`flex items-center gap-2 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
              <HomeIcon className="w-5 h-5" />
              {t.home}
            </a>
            <a href="#about" className={`flex items-center gap-2 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
              <AboutIcon className="w-5 h-5" />
              {t.about}
            </a>
            <a href="#experience" className={`flex items-center gap-2 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
              <ExperienceIcon className="w-5 h-5" />
              {t.experience}
            </a>
            <a href="#skills" className={`flex items-center gap-2 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
              <SkillsIcon className="w-5 h-5" />
              {t.skills}
            </a>
            <a href="#projects" className={`flex items-center gap-2 text-base text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
              <ProjectsIcon className="w-5 h-5" />
              {t.projects}
            </a>
            
            <div className="h-6 w-px bg-gray-200 dark:bg-gray-700 mx-2"></div>
            
            {/* ប៊ូតុងប្តូរភាសា (មានតែរូបទង់ជាតិ) សម្រាប់ Desktop */}
            <button 
              onClick={() => setLang(lang === 'kh' ? 'en' : 'kh')} 
              className="p-2 border-2 border-gray-200 dark:border-gray-700 rounded-lg hover:border-blue-500 dark:hover:border-blue-500 transition-colors flex items-center justify-center"
              title={lang === 'kh' ? 'Switch to English' : 'ប្តូរទៅភាសាខ្មែរ'}
            >
              <img 
                src={lang === 'kh' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/kh.png'} 
                alt="flag" 
                className="w-5 md:w-6 h-auto object-contain shadow-sm rounded-sm" 
              />
            </button>

            {/* ប្តូរពណ៌ស/ខ្មៅ */}
            <button 
              onClick={() => setIsDark(!isDark)} 
              className="p-2.5 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-colors flex items-center justify-center"
            >
              {isDark ? <SunIcon className="w-5 h-5 text-yellow-500" /> : <MoonIcon className="w-5 h-5 text-gray-500" />}
            </button>

            {/* ទំនាក់ទំនង */}
            <a 
              href="#contact" 
              className={`flex items-center gap-2 bg-blue-600 text-white px-6 py-2.5 rounded-full hover:bg-blue-700 transition-transform hover:scale-105 whitespace-nowrap shadow-md shadow-blue-500/20 ${isKh ? 'font-medium' : 'font-semibold'}`}
            >
              <ContactIcon className="w-5 h-5" />
              {t.contact}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-3">
            <button onClick={() => setIsDark(!isDark)} className="p-2 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center">
              {isDark ? <SunIcon className="w-5 h-5 text-yellow-500" /> : <MoonIcon className="w-5 h-5 text-gray-500" />}
            </button>
            
            {/* ប៊ូតុងប្តូរភាសា (មានតែរូបទង់ជាតិ) សម្រាប់ Mobile */}
            <button 
              onClick={() => setLang(lang === 'kh' ? 'en' : 'kh')} 
              className="p-1.5 border border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center"
              title={lang === 'kh' ? 'Switch to English' : 'ប្តូរទៅភាសាខ្មែរ'}
            >
              <img 
                src={lang === 'kh' ? 'https://flagcdn.com/w40/gb.png' : 'https://flagcdn.com/w40/kh.png'} 
                alt="flag" 
                className="w-6 h-auto object-contain rounded-sm" 
              />
            </button>
            
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 dark:text-gray-300 text-2xl p-1 ml-1 flex items-center justify-center">
              {isOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 shadow-xl absolute w-full transition-all">
          <div className="px-4 pt-4 pb-6 space-y-2">
            <a onClick={() => setIsOpen(false)} href="#home" className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl whitespace-nowrap transition-colors ${isKh ? 'font-normal' : 'font-medium'}`}>
              <HomeIcon className="w-5 h-5" />
              {t.home}
            </a>
            <a onClick={() => setIsOpen(false)} href="#about" className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl whitespace-nowrap transition-colors ${isKh ? 'font-normal' : 'font-medium'}`}>
              <AboutIcon className="w-5 h-5" />
              {t.about}
            </a>
            <a onClick={() => setIsOpen(false)} href="#experience" className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl whitespace-nowrap transition-colors ${isKh ? 'font-normal' : 'font-medium'}`}>
              <ExperienceIcon className="w-5 h-5" />
              {t.experience}
            </a>
            <a onClick={() => setIsOpen(false)} href="#skills" className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl whitespace-nowrap transition-colors ${isKh ? 'font-normal' : 'font-medium'}`}>
              <SkillsIcon className="w-5 h-5" />
              {t.skills}
            </a>
            <a onClick={() => setIsOpen(false)} href="#projects" className={`flex items-center gap-3 px-4 py-3 text-gray-600 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 rounded-xl whitespace-nowrap transition-colors ${isKh ? 'font-normal' : 'font-medium'}`}>
              <ProjectsIcon className="w-5 h-5" />
              {t.projects}
            </a>
            <div className="pt-2">
              <a onClick={() => setIsOpen(false)} href="#contact" className={`flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition whitespace-nowrap ${isKh ? 'font-medium' : 'font-semibold'}`}>
                <ContactIcon className="w-5 h-5" />
                {t.contact}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;