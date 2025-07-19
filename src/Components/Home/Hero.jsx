import React, { useState, useEffect } from 'react';
import { Scale, Shield, BookOpen, Users, Award, Briefcase, UserCheck, TrendingUp } from 'lucide-react';

const stats = [
  {
    label: "Yutilgan Ishlar",
    value: "500+",
    icon: <Award className="w-7 h-7 text-amber-500" />,
  },
  {
    label: "Yil Tajriba",
    value: "15+",
    icon: <Scale className="w-7 h-7 text-amber-500" />,
  },
  {
    label: "Mutaxassis Yurist",
    value: "50+",
    icon: <UserCheck className="w-7 h-7 text-amber-500" />,
  },
  {
    label: "Muvaffaqiyat",
    value: "98%",
    icon: <TrendingUp className="w-7 h-7 text-amber-500" />,
  },
];

const useAnimation = (duration = 1000, delay = 0) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return isVisible;
};

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isLoaded = useAnimation(500);
  const titleAnimation = useAnimation(800, 200);
  const subtitleAnimation = useAnimation(1000, 400);
  const buttonAnimation = useAnimation(1200, 600);
  const imageAnimation = useAnimation(1400, 800);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#fff] to-[#fef6e4] overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-amber-400/30 via-amber-100/40 to-white rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-40 right-0 w-[400px] h-[400px] bg-gradient-to-tr from-amber-600/20 via-white/40 to-slate-200/30 rounded-full blur-2xl z-0"></div>

      <div className="relative max-w-7xl mx-auto px-8 pt-20 pb-16 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className="space-y-10">
            <div
              className={`transform transition-all duration-1000 ${
                titleAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Scale className="w-9 h-9 text-amber-600 drop-shadow-lg" />
                <span className="text-base font-semibold text-amber-600 tracking-widest uppercase">AllLegal</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight drop-shadow-xl">
                Huquqiy Masalalarda{' '}
                <span className="text-transparent bg-clip-text bg-amber-600 via-amber-500 to-amber-700 animate-gradient-move">
                  Professional Yordam
                </span>
              </h1>
              <div className="w-28 h-1 bg-amber-600 to-amber-700 mt-7 rounded-full"></div>
            </div>

            <div
              className={`transform transition-all duration-1000 ${
                subtitleAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <p className="text-xl text-slate-600 leading-relaxed max-w-xl mb-8">
                Yuridik xizmatlar sohasida 15 yildan ortiq tajribaga ega bo'lgan jamoamiz sizning huquqlaringizni himoya qilishga tayyor. Har bir ishga individual yondashuv va yuqori natija kafolatlanadi.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 ${
                buttonAnimation ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <button className="bg-amber-600 hover:amber-400 hover:to-amber-800 text-white px-10 py-4 font-bold rounded-xl transition-all duration-300 hover:shadow-amber-500/30 shadow-lg flex items-center space-x-2 text-lg">
                  <Briefcase className="w-6 h-6" />
                  <span>Konsultatsiya Olish</span>
                </button>
                <button className="border-2 border-slate-300 hover:border-amber-600 text-slate-700 hover:text-amber-700 px-10 py-4 font-bold rounded-xl transition-all duration-300 hover:shadow-lg flex items-center space-x-2 text-lg bg-white/80 backdrop-blur-md">
                  <BookOpen className="w-6 h-6" />
                  <span>Xizmatlar</span>
                </button>
              </div>
            </div>
          </div>

          <div className="relative h-[600px] lg:h-[700px] flex items-center justify-center z-10">
            <div
              className={`org_img relative w-full h-full flex flex-col justify-center items-end space-y-8 transform transition-all duration-1000 ${
                imageAnimation ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
            >
           

              {/* Rasm 2 */}
              <div className="w-[90%] max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm hover:scale-105 transition-transform duration-500 animate-float" style={{ animationDelay: "0.5s" }}>
                <img
                  src="https://optim.tildacdn.one/tild3932-3033-4833-b065-663763386463/-/resize/800x600/-/format/webp/f15343ee-8ead-45d5-a.jpeg.webp "
                  alt="Yurist 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Rasm 3 */}
              <div className="w-[90%] max-w-md aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white/30 backdrop-blur-sm hover:scale-105 transition-transform duration-500 animate-float" style={{ animationDelay: "1s" }}>
                <img
                  src="https://optim.tildacdn.one/tild6235-3565-4437-b435-663339383061/-/format/webp/IMG_3465.JPG.webp "
                  alt="Yurist 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div
              className="absolute top-16 left-8 w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-xl flex items-center justify-center animate-float"
              style={{
                animation: 'float 3s ease-in-out infinite',
                boxShadow: '0 0 32px 8px #fbbf24aa',
                transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
              }}
            >
              <Shield className="w-8 h-8 text-white" />
            </div>

          <div
              className="absolute bottom-32 right-8 w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-xl flex items-center justify-center animate-float"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '2s',
                boxShadow: '0 0 16px 2px #f59e42aa',
                transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`
              }}
            >
              <Scale className="w-6 h-6 text-white" />
            </div>

            <div
              className="absolute top-1/2 left-4 w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full shadow-xl flex items-center justify-center animate-float"
              style={{
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '2s',
                boxShadow: '0 0 16px 2px #f59e42aa',
                transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`
              }}
            >
              <Users className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Statistika qismi (pastki qism)
      <div
        className={`absolute bottom-0 left-0 right-0 flex justify-center bg-transparent pointer-events-none z-20`}
      >
        <div
          className={`max-w-5xl w-full px-8 py-8 grid grid-cols-2 md:grid-cols-4 gap-8
            transition-all duration-1000 delay-1000
            ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}
          `}
        >
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="pointer-events-auto text-center group cursor-pointer rounded-2xl bg-white/60 backdrop-blur-lg border border-amber-100/60 shadow-xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/80 hover:shadow-amber-200/40"
            >
              <div className="flex justify-center mb-2">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-amber-600 mb-1 group-hover:scale-110 transition-transform">
                {stat.value}
              </div>
              <div className="text-base text-slate-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Animatsiya va stil */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 3s linear infinite alternate;
        }
      `}</style>
    </div>
  );
}