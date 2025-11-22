import { Menu, Star, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/30 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-fuchsia-500 via-blue-500 to-teal-400 opacity-70 blur-md" />
            <div className="relative h-9 w-9 rounded-xl bg-black/70 border border-white/10 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-teal-200" />
            </div>
          </div>
          <span className="font-semibold tracking-tight text-white text-lg">Ava Monroe</span>
          <span className="px-2 py-0.5 text-xs rounded-full bg-white/5 text-teal-200 border border-white/10 hidden sm:inline-flex">
            UI/UX Designer
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          {[
            ["About", "#about"],
            ["Case Studies", "#cases"],
            ["Services", "#services"],
            ["Process", "#process"],
            ["Testimonials", "#testimonials"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="hover:text-white transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.a
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="relative inline-flex items-center gap-2 px-4 h-10 rounded-xl text-sm font-medium text-white border border-white/10 bg-white/5"
          >
            <div className="absolute inset-0 -z-0 rounded-xl bg-gradient-to-r from-fuchsia-600/30 via-blue-600/30 to-teal-400/30 blur-xl" />
            <Star className="h-4 w-4 text-amber-300" />
            Hire Me
          </motion.a>
          <button className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
