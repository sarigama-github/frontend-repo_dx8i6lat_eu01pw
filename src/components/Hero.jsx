import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden bg-black">
      {/* Gradient aura background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-[20%] opacity-60 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.18),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.18),transparent_40%),radial-gradient(ellipse_at_center,rgba(45,212,191,0.12),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.06),transparent_20%)]" />
        <div className="absolute inset-0" style={{backgroundImage:'radial-gradient(1px 1px at 20px 30px, rgba(255,255,255,0.06) 0, transparent 1px), radial-gradient(1px 1px at 40px 60px, rgba(255,255,255,0.05) 0, transparent 1px)', backgroundSize:'80px 80px'}} />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20 grid lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 flex flex-col gap-6">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8}}>
            <span className="inline-flex items-center gap-2 text-teal-200/80 text-sm px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-teal-400 animate-pulse" />
              Available for select projects 2025
            </span>
          </motion.div>
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.05, duration:0.9}} className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Crafting premium, futuristic interfaces that feel effortless
          </motion.h1>
          <motion.p initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.1, duration:0.9}} className="text-lg sm:text-xl text-slate-300 max-w-2xl">
            I blend strategy, motion, and aesthetics to build world-class product experiences with a focus on clarity, emotion, and measurable impact.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.15, duration:0.9}} className="flex flex-wrap items-center gap-4 pt-2">
            <a href="#contact" className="relative inline-flex items-center justify-center rounded-2xl px-6 h-12 text-white font-medium border border-white/10 bg-white/10">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-600/40 via-blue-600/40 to-teal-400/40 blur-xl" />
              <span className="relative">Start a project</span>
            </a>
            <a href="#cases" className="text-slate-300 hover:text-white transition-colors">View case studies</a>
          </motion.div>
        </div>

        {/* Photo placeholder card with glassmorphism */}
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{delay:0.2, duration:0.9}} className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-[0_0_80px_-20px_rgba(59,130,246,0.35)]">
            <div className="aspect-[4/5] w-full grid place-items-center">
              <div className="h-32 w-32 rounded-full bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-teal-400 p-[2px]">
                <div className="h-full w-full rounded-full bg-black grid place-items-center text-slate-300 text-sm">
                  Your Photo
                </div>
              </div>
            </div>
            <div className="absolute -inset-2 rounded-[28px] bg-gradient-to-r from-fuchsia-600/20 via-blue-600/20 to-teal-400/20 blur-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Floating UI chips */}
      <div className="pointer-events-none absolute inset-0 z-10">
        {[
          {x: "10%", y: "20%", delay: 0},
          {x: "80%", y: "35%", delay: 0.2},
          {x: "25%", y: "70%", delay: 0.4},
        ].map((p, i) => (
          <motion.div key={i} initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} transition={{delay:p.delay, duration:1}} className="absolute" style={{left:p.x, top:p.y}}>
            <div className="px-4 py-2 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl text-slate-300 text-sm shadow-[0_10px_40px_-10px_rgba(59,130,246,0.35)]">
              Premium UI
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
