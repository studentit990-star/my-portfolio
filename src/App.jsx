import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// ១. Import NetworkBackground ដែលទើបនឹងបង្កើត
import NetworkBackground from './components/NetworkBackground';

function App() {
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('kh');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    // បន្ថែម relative z-0 ដើម្បីកុំឱ្យផ្ទៃខាងក្រោយបាំង Canvas
    <div className="min-h-screen bg-gray-50 dark:bg-[#111827] font-sans transition-colors duration-300 relative z-0">
      
      {/* ២. ដាក់ NetworkBackground នៅទីនេះ ដើម្បីឱ្យវារត់ពេញផ្ទៃវិបសាយ */}
      <NetworkBackground />
      
      {/* ផ្នែក Navbar ខាងលើ */}
      <Navbar isDark={isDark} setIsDark={setIsDark} lang={lang} setLang={setLang} />
      
      {/* ទីតាំងប្រមូលផ្តុំ Components ទាំងអស់ (តម្រៀបតាម Navbar) */}
      <main className="pt-24 pb-10">
        <Hero lang={lang} />
        <About lang={lang} />
        <Experience lang={lang} />
        <Skills lang={lang} />
        <Projects lang={lang} />
        <Contact lang={lang} />
      </main>

      {/* ៣. ដាក់ប្រើប្រាស់ Footer Component ថ្មីដែលយើងទើបបង្កើត */}
      <Footer lang={lang} />

    </div>
  );
}

export default App;