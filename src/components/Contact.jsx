import React, { useState } from 'react';

const Contact = ({ lang }) => {
  const content = {
    kh: {
      title: "ទំនាក់ទំនង",
      subtitle: "មានគម្រោងចង់សហការ ឬមានសំណួរ? សូមផ្ញើសារមកកាន់ខ្ញុំខាងក្រោម៖",
      name: "ឈ្មោះរបស់អ្នក",
      email: "អ៊ីមែលរបស់អ្នក",
      message: "សាររបស់អ្នក...",
      send: "ផ្ញើសារ",
      sending: "កំពុងផ្ញើ...",
      success: "សារបានផ្ញើជោគជ័យ!",
      error: "មានបញ្ហាពេលផ្ញើសារ សូមព្យាយាមម្តងទៀត។",
      emptyFields: "សូមបំពេញព័ត៌មានឲ្យបានគ្រប់ជ្រុងជ្រោយ!",
      telegram: "Telegram",
      locationLabel: "ទីតាំង (Location)",
      locationText: "ក្រុងបាត់ដំបង ខេត្តបាត់ដំបង",
      phoneLabel: "លេខទូរស័ព្ទ (Phone)",
      phoneText: "071 241 0777 / 096 847 5997"
    },
    en: {
      title: "Contact",
      subtitle: "Have a project in mind or any questions? Send me a message below:",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message...",
      send: "Send Message",
      sending: "Sending...",
      success: "Message sent successfully!",
      error: "Failed to send message. Please try again.",
      emptyFields: "Please fill in all fields!",
      telegram: "Telegram",
      locationLabel: "Location",
      locationText: "Battambang City, Battambang Province",
      phoneLabel: "Phone",
      phoneText: "071 241 0777 / 096 847 5997"
    }
  };
  
  const t = content[lang];
  const isKh = lang === 'kh';

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const BOT_TOKEN = "8741894285:AAG0L4M_x24QcnVvtUHLxmRHvEtG8fbQ2Fo"; 
  const CHAT_ID = "5350492703"; 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!formData.name || !formData.email || !formData.message) {
      alert(t.emptyFields);
      return;
    }

    setStatus({ submitting: true, success: false, error: null });

    const text = `
📩 <b>សារថ្មីពីវេបសាយ (Portfolio)</b>
👤 <b>ឈ្មោះ:</b> ${formData.name}
📧 <b>អ៊ីមែល:</b> ${formData.email}
💬 <b>សារ:</b>
${formData.message}
    `;

    try {
      const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text,
          parse_mode: 'HTML' 
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, success: true, error: null });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: t.error });
    }
  };

  return (
    <section 
      id="contact" 
      // កាត់បន្ថយ Padding ខាងលើ និងខាងក្រោម ដើម្បីទាញ Form ឱ្យជិត Footer និងមិនឱ្យមានចន្លោះទំនេរធំ
      className="max-w-6xl mx-auto pt-2 pb-2 px-4 scroll-mt-24"
      style={isKh ? { fontFamily: '"Khmer OS Niroth", sans-serif' } : { fontFamily: 'ui-sans-serif, system-ui, sans-serif' }}
    >
      
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

        <p className={`mt-2 text-gray-600 dark:text-gray-400 text-base ${isKh ? 'font-normal' : ''}`}>
          {t.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 bg-white/70 dark:bg-gray-800/60 backdrop-blur-md p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors">
        
        <div className="flex flex-col space-y-6">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className={`text-xl text-gray-800 dark:text-white ${isKh ? 'font-medium' : 'font-bold'}`}>
                {t.locationLabel}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base ml-13 pl-13 sm:pl-13 mb-3">
              {t.locationText}
            </p>
            
            <div className="w-full h-32 sm:h-36 ml-0 sm:ml-13 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-inner bg-gray-100 dark:bg-gray-800">
              <iframe 
                title="Map of Battambang"
                src="https://maps.google.com/maps?q=Battambang,Cambodia&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                className="filter dark:brightness-90 dark:contrast-125 transition-all duration-300"
              ></iframe>
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className={`text-xl text-gray-800 dark:text-white ${isKh ? 'font-medium' : 'font-bold'}`}>
                {t.phoneLabel}
              </h3>
            </div>
            <p className="text-blue-600 dark:text-blue-400 text-base font-medium ml-13 pl-13 sm:pl-13">
              {t.phoneText}
            </p>
          </div>
          
          <div>
            <a 
              href="https://t.me/ny_sarath777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-800 px-5 py-2.5 rounded-xl font-semibold hover:bg-blue-100 dark:hover:bg-blue-900/50 hover:shadow-sm hover:-translate-y-1 transition-all duration-300 w-full justify-center sm:w-auto sm:justify-start"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a11.9 11.9 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.5.5 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
              {t.telegram}
            </a>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-50/50 dark:bg-gray-900/50 p-6 md:p-8 rounded-2xl border border-gray-100 dark:border-gray-700 h-full justify-center">
          
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t.name} 
            disabled={status.submitting}
            required
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm ${isKh ? 'font-normal' : ''}`}
          />
          
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t.email} 
            disabled={status.submitting}
            required
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm ${isKh ? 'font-normal' : ''}`}
          />
          
          <textarea 
            name="message"
            rows="4" 
            value={formData.message}
            onChange={handleChange}
            placeholder={t.message} 
            disabled={status.submitting}
            required
            className={`w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all shadow-sm resize-none ${isKh ? 'font-normal' : ''}`}
          ></textarea>
          
          {status.error && <p className="text-red-500 text-sm font-medium">{status.error}</p>}
          {status.success && <p className="text-green-500 text-sm font-medium">{t.success}</p>}

          <button 
            type="submit" 
            disabled={status.submitting}
            className={`w-full bg-blue-600 text-white py-3.5 rounded-xl hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 ${isKh ? 'font-medium' : 'font-bold'} ${status.submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {status.submitting ? (
              <span className="flex items-center gap-2">
                <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t.sending}
              </span>
            ) : (
              <>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                {t.send}
              </>
            )}
          </button>

        </form>
        
      </div>
    </section>
  );
};

export default Contact;