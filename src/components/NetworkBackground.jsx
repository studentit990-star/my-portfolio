import React, { useEffect, useRef } from 'react';

const NetworkBackground = () => {
  const canvasRef = useRef(null);

  // ផ្នែកទី៣៖ សរសៃ Network រត់តភ្ជាប់គ្នា (យឺតៗ និងស្រាលៗ មិនរញ៉េរញ៉ៃ)
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrameId;

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      // បន្ថយចំនួនចំណុចបន្តិចកុំឱ្យញឹកពេក
      const numParticles = Math.floor((window.innerWidth * window.innerHeight) / 15000); 
      for (let i = 0; i < numParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4, // ល្បឿនរត់យឺតៗខ្លាំង
          vy: (Math.random() - 0.5) * 0.4, 
          radius: Math.random() * 1.5 + 0.5,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains('dark');
      
      // ពណ៌ខៀវសម្រាប់ Light Mode, ពណ៌សស្រាលសម្រាប់ Dark Mode
      const dotColor = isDark ? 'rgba(255, 255, 255, 0.4)' : 'rgba(59, 130, 246, 0.5)';
      const lineColor = isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(59, 130, 246, 0.12)';

      for (let i = 0; i < particles.length; i++) {
        let p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        // ឱ្យលោតត្រឡប់វិញពេលប៉ះគែម
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }

      // គូរបន្ទាត់តភ្ជាប់គ្នា (Network Lines)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // ភ្ជាប់បន្ទាត់ពេលនៅជិតគ្នាក្នុងចម្ងាយ 120px
          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.6; // បន្ទាត់ស្តើងស្អាត
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    initCanvas();
    draw();

    window.addEventListener('resize', initCanvas);
    return () => {
      window.removeEventListener('resize', initCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
      
      {/* ផ្នែកទី១៖ ក្រឡាអុក (Grid Background) បែប Developer */}
      <div 
        className="absolute inset-0 w-full h-full bg-transparent"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(96, 165, 250, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(96, 165, 250, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/70 to-gray-50 dark:via-[#111827]/70 dark:to-[#111827]"></div>
      </div>

      {/* ផ្នែកទី២៖ ពន្លឺផ្លាស់ទីយឺតៗ (Fluid/Blob Animation) បែប Premium */}
      <style>
        {`
          @keyframes blob {
            0% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
            100% { transform: translate(0px, 0px) scale(1); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
      <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10 animate-blob animation-delay-4000"></div>

      {/* Canvas សម្រាប់បង្ហាញសរសៃ Network ខាងលើ */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

    </div>
  );
};

export default NetworkBackground;