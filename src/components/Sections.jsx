import { motion } from 'framer-motion';
import { Layout, PenTool, Workflow, Quote, MessageCircle, CaseSensitive } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20 sm:py-28">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>
    <div className="max-w-7xl mx-auto px-6">
      <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true, margin:"-100px"}} transition={{duration:0.7}} className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">{title}</h2>
        {subtitle && <p className="text-slate-300 mt-3 max-w-2xl">{subtitle}</p>}
      </motion.div>
      {children}
    </div>
  </section>
);

export function About() {
  return (
    <Section id="about" title="About Me" subtitle="Designer focused on building refined, emotive, and conversion-driven product experiences.">
      <div className="grid lg:grid-cols-12 gap-8">
        <motion.div initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="lg:col-span-7 text-slate-300 leading-relaxed">
          <p className="mb-4">Over the last 7+ years, I’ve partnered with startups and global brands to craft interfaces that balance aesthetics and performance. I lead with clarity, motion, and systems thinking.</p>
          <p>Tooling I love: Figma, Framer, ProtoPie, After Effects, Notion, Webflow. I collaborate closely with product and engineering to ship delightful, scalable UI systems.</p>
        </motion.div>
        <motion.ul initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="lg:col-span-5 grid grid-cols-2 gap-4">
          {["Product Design","Design Systems","Motion & Micro-Interactions","Prototyping"].map((item)=> (
            <li key={item} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-slate-200 text-sm shadow-[0_0_60px_-20px_rgba(59,130,246,0.35)]">{item}</li>
          ))}
        </motion.ul>
      </div>
    </Section>
  );
}

export function CaseStudies() {
  const cards = [
    {title: 'Fintech Dashboard', tag: 'Design System', cover: 'fintech'},
    {title: 'AI Health App', tag: 'Product Design', cover: 'health'},
    {title: 'Crypto Terminal', tag: 'Interaction Design', cover: 'crypto'},
    {title: 'SaaS Analytics', tag: 'UI Architecture', cover: 'saas'},
  ];
  return (
    <Section id="cases" title="Case Studies" subtitle="A selection of recent work revealing process, craft, and measured outcomes.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.a key={c.title} href="#" initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="group relative rounded-[24px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)]">
            <div className="aspect-[4/3]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(139,92,246,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.15),transparent_40%)]" />
              <div className="absolute inset-0 grid place-items-center text-slate-300">{c.title}</div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/50" />
            </div>
            <div className="relative p-4">
              <div className="text-xs text-teal-200">{c.tag}</div>
              <div className="text-white font-semibold mt-1">{c.title}</div>
            </div>
            <div className="absolute -inset-1 rounded-[26px] bg-gradient-to-r from-fuchsia-600/20 via-blue-600/20 to-teal-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

export function Services() {
  const items = [
    {icon: PenTool, title: 'Product & UI', desc: 'World-class interfaces with a focus on clarity, conversion, and delight.'},
    {icon: Layout, title: 'Design Systems', desc: 'Robust component libraries and tokens that scale across platforms.'},
    {icon: Workflow, title: 'Motion & Prototyping', desc: 'Micro-interactions, transitions, and high-fidelity prototyping.'},
  ];
  return (
    <Section id="services" title="Services" subtitle="Focused, high-impact engagements for teams who value craft and outcomes.">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map(({icon:Icon, title, desc}) => (
          <motion.div key={title} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-slate-300 shadow-[0_30px_80px_-20px_rgba(59,130,246,0.25)]">
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-tr from-fuchsia-600/30 via-blue-600/30 to-teal-400/30 border border-white/10">
              <Icon className="h-5 w-5 text-teal-200" />
            </div>
            <div className="text-white font-semibold text-lg">{title}</div>
            <p className="text-sm mt-2">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  const steps = [
    {step:'01', title:'Discovery', desc:'Understand goals, constraints, and success metrics.'},
    {step:'02', title:'Exploration', desc:'Moodboards, flows, and initial directions.'},
    {step:'03', title:'Design', desc:'Iterate on structure, system, and motion.'},
    {step:'04', title:'Handoff', desc:'Specs, prototypes, and engineering support.'},
  ];
  return (
    <Section id="process" title="Process" subtitle="A structured, collaborative approach tailored to your team and timeline.">
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((s, i)=> (
          <motion.div key={s.step} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6, delay:i*0.05}} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-slate-300">
            <div className="text-teal-200 text-xs">{s.step}</div>
            <div className="text-white font-semibold text-lg mt-1">{s.title}</div>
            <p className="text-sm mt-2">{s.desc}</p>
            <div className="absolute -inset-1 rounded-[18px] bg-gradient-to-r from-fuchsia-600/20 via-blue-600/20 to-teal-400/20 blur-xl" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

export function Testimonials() {
  const quotes = [
    {name:'Lena — PM, Fintech', text:'Ava elevates everything she touches. The craft and motion are next-level.'},
    {name:'Marcus — CTO, AI Startup', text:'World-class work delivered at startup speed. Our conversion improved 28%.'},
    {name:'Priya — Design Lead, SaaS', text:'Thoughtful systems and beautiful details. A true partner in product.'},
  ];
  return (
    <Section id="testimonials" title="Testimonials" subtitle="Trusted by teams who value premium craft and tangible results.">
      <div className="grid md:grid-cols-3 gap-6">
        {quotes.map((q, i)=> (
          <motion.blockquote key={i} initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-slate-300">
            <Quote className="h-5 w-5 text-teal-200" />
            <p className="mt-3 text-slate-200">“{q.text}”</p>
            <footer className="mt-4 text-sm text-slate-400">{q.name}</footer>
            <div className="absolute -inset-1 rounded-[18px] bg-gradient-to-r from-fuchsia-600/10 via-blue-600/10 to-teal-400/10 blur-xl" />
          </motion.blockquote>
        ))}
      </div>
    </Section>
  );
}

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="For new projects and collaborations, reach out below.">
      <motion.form initial={{opacity:0, y:10}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.6}} onSubmit={(e)=> e.preventDefault()} className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-4">
        <input placeholder="Name" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400/40" />
        <input placeholder="Email" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400/40" />
        <input placeholder="Company" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400/40" />
        <input placeholder="Budget" className="h-12 rounded-xl bg-white/5 border border-white/10 px-4 text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400/40" />
        <textarea placeholder="Project details" rows={5} className="sm:col-span-2 rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-slate-200 placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-teal-400/40" />
        <button className="relative sm:col-span-2 h-12 rounded-2xl text-white border border-white/10 bg-white/10 font-medium">
          <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-600/40 via-blue-600/40 to-teal-400/40 blur-xl" />
          <span className="relative">Send request</span>
        </button>
      </motion.form>
    </Section>
  );
}
