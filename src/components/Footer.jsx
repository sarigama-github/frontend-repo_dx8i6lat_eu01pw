export default function Footer(){
  return (
    <footer className="relative py-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-gradient-to-r from-fuchsia-500 via-blue-500 to-teal-400 animate-pulse" />
          <span>© {new Date().getFullYear()} Ava Monroe — UI/UX Designer</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Behance</a>
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
