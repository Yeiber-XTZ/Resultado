import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-80px)] w-full overflow-hidden bg-primary">
      <img
        className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAPOWQWevgUm0_9J5dwmNALh2M1ekIfOWc_g4MPqcqO-fwLxYvx6cIw7_ecYnC8rSQjqNlO2JGewJTH0ld7BDbM52dDqwC3ZL3w9mTnhOugSs1ix8-qE10hOVuqZ46pEN2qYkaXXVWXiV-KZYTJZf99b4ObqXtYld4hl-w9Zdt0UxKPBcaYDfs1XWBINYVVvxMDTgKJgdI-BsobulvdBx5ASCC-zoOGXf05ZPYK1pLaGumULVRYjL1-1lvC6uMUTTW5KVP65ZnPNzY"
        alt="Featured Athlete"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/40 to-transparent"></div>
      
      <div className="relative z-10 h-full max-w-screen-2xl mx-auto px-6 flex flex-col justify-center">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary font-label font-bold tracking-widest uppercase mb-4"
        >
          ATLETA DEL MES
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white font-headline italic text-7xl md:text-9xl leading-none mb-6"
        >
          MARCOS<br />VELOZ
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-12 mb-10"
        >
          <div className="flex flex-col">
            <span className="text-slate-300 font-label text-sm uppercase">Récord Mundial</span>
            <span className="text-white font-headline italic text-4xl">9.58s</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-300 font-label text-sm uppercase">Ranking</span>
            <span className="text-white font-headline italic text-4xl">#1 Global</span>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-300 font-label text-sm uppercase">Delegación</span>
            <span className="text-white font-headline italic text-4xl">Team España</span>
          </div>
        </motion.div>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          className="skew-button bg-secondary text-primary font-headline italic font-bold py-4 px-10 text-xl w-fit hover:bg-white transition-all"
        >
          <span className="skew-fix">VER PERFIL COMPLETO</span>
        </motion.button>
      </div>
    </section>
  );
}
