import { useEffect, useRef } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const skillGroups = [
  {
    category: "الذكاء الاصطناعي",
    color: "#8B5E3C",
    skills: [
      { name: "Prompt Engineering", level: 95 },
      { name: "ChatGPT & Gemini", level: 92 },
      { name: "AI Automation", level: 88 },
      { name: "AI Content Creation", level: 85 },
    ],
  },
  {
    category: "Excel & البيانات",
    color: "#C49A5A",
    skills: [
      { name: "Excel Advanced", level: 98 },
      { name: "n8n Automation", level: 88 },
      { name: "KPIs Dashboard", level: 93 },
      { name: "Data Analysis", level: 90 },
    ],
  },
  {
    category: "المحاسبة والإدارة",
    color: "#D4936A",
    skills: [
      { name: "إدخال البيانات", level: 99 },
      { name: "الإدارة والتنظيم", level: 88 },
      { name: "HR Systems", level: 82 },
      { name: "Financial Reporting", level: 88 },
    ],
  },
];

const tools = [
  "ChatGPT", "Excel", "Google Sheets", "Gemini",
  "n8n", "Notion", "Zapier", "Make",
  "Canva", "Word",
];

function SkillBar({ name, level, color, isActive }: { name: string; level: number; color: string; isActive: boolean }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive && barRef.current) {
      setTimeout(() => {
        if (barRef.current) {
          barRef.current.style.width = `${level}%`;
        }
      }, 100);
    }
  }, [isActive, level]);

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-brand-text font-cairo">{name}</span>
        <span className="text-xs font-bold font-cairo" style={{ color }}>{level}%</span>
      </div>
      <div className="h-2 bg-brand-border-light rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{ width: 0, background: `linear-gradient(90deg, ${color}CC, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.15 });

  return (
    <section id="skills" className="py-24 bg-brand-section-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C49A5A 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4 shadow-sm">
            مهاراتي
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            مستوى الكفاءة
          </h2>
          <p className="text-brand-text-light max-w-xl mx-auto font-cairo">
            مهارات مُشكَّلة من تجارب حقيقية وتدريب مكثف تجعلني قادراً على إنجاز أي مشروع.
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8 mb-14">
          {skillGroups.map((group, gi) => (
            <div
              key={group.category}
              className={`animate-on-scroll animate-delay-${(gi + 1) * 200} bg-white rounded-3xl p-7 border border-brand-border shadow-card`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full" style={{ background: group.color }} />
                <h3 className="font-bold text-brand-text font-cairo">{group.category}</h3>
              </div>
              {group.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} color={group.color} isActive={isVisible} />
              ))}
            </div>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="animate-on-scroll">
          <h3 className="text-center text-lg font-bold text-brand-text font-cairo mb-6">الأدوات التي أعمل بها</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool, i) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-xl bg-white border border-brand-border text-brand-primary font-semibold text-sm font-cairo shadow-sm hover:shadow-card hover:-translate-y-1 hover:border-brand-primary transition-all duration-200 cursor-default"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
