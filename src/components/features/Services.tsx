import { Brain, TableProperties, ClipboardList, TrendingUp, Settings, FileSearch } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "هندسة الأوامر (Prompt Engineering)",
    desc: "أصمّم أوامر ذكاء اصطناعي دقيقة تُخرج نتائج مذهلة من ChatGPT وGemini وغيرهما، لأتمتة المحتوى والتحليلات والتقارير.",
    tags: ["ChatGPT", "Gemini", "Automation"],
    color: "from-[#8B5E3C] to-[#6B4428]",
    highlight: true,
  },
  {
    icon: TableProperties,
    title: "أتمتة Excel والـ KPIs",
    desc: "أبني لوحات تحكم Excel متقدمة لرسم مؤشرات الأداء تلقائياً وتوليد تقارير ذكية بضغطة واحدة.",
    tags: ["Excel", "KPIs", "Dashboards"],
    color: "from-[#C49A5A] to-[#A07840]",
    highlight: false,
  },
  {
    icon: ClipboardList,
    title: "إدخال البيانات بدقة 100%",
    desc: "أُدخل وأنظّم كميات ضخمة من البيانات بدقة لا تقبل الخطأ مع مراجعة دقيقة لضمان جودة المعلومات.",
    tags: ["Data Entry", "Accuracy", "Quality"],
    color: "from-[#D4936A] to-[#B07050]",
    highlight: false,
  },
  {
    icon: TrendingUp,
    title: "تحليل البيانات المالية",
    desc: "أُحوّل بيانات محاسبية خام إلى رؤى استراتيجية بتقارير مرئية تساعدك على اتخاذ قرارات مبنية على أرقام حقيقية.",
    tags: ["Financial Analysis", "Reporting", "Dashboards"],
    color: "from-[#8B5E3C] to-[#C49A5A]",
    highlight: false,
  },
  {
    icon: Settings,
    title: "أتمتة العمليات الإدارية",
    desc: "أُصمّم سير عمل آلية بأداة n8n تربط تطبيقاتك المختلفة وتُقلّص المهام اليدوية المتكررة لزيادة الإنتاجية.",
    tags: ["n8n", "Workflow", "Automation"],
    color: "from-[#6B4428] to-[#8B5E3C]",
    highlight: false,
  },
  {
    icon: FileSearch,
    title: "مراجعة وتنظيف البيانات",
    desc: "أكتشف وأُصحّح أخطاء البيانات المخفية، وأوحّد التنسيقات لضمان جودة البيانات قبل أي تحليل أو تقرير.",
    tags: ["Data Cleaning", "Quality", "Normalization"],
    color: "from-[#C49A5A] to-[#8B5E3C]",
    highlight: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-brand-section-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #8B5E3C 1px, transparent 0)", backgroundSize: "32px 32px" }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4 shadow-sm">
            ماذا أُقدّم
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            خدماتي المتخصصة
          </h2>
          <p className="text-brand-text-light max-w-2xl mx-auto text-lg font-cairo">
            حلول متكاملة تجمع بين دقة المحاسبة وذكاء الأتمتة لتُحدث فارقاً حقيقياً في أعمالك.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`animate-on-scroll animate-delay-${Math.min((i + 1) * 100, 600)} group relative bg-white rounded-3xl p-7 border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 overflow-hidden ${service.highlight ? "ring-2 ring-brand-primary ring-offset-2" : ""}`}
            >
              {service.highlight && (
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-primary-gradient text-white text-xs font-bold font-cairo">
                  الأكثر طلباً
                </div>
              )}

              {/* Gradient blob */}
              <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity duration-300 pointer-events-none`} />

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-btn group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-brand-text font-cairo mb-3 leading-tight">
                {service.title}
              </h3>
              <p className="text-brand-text-light text-sm font-cairo leading-relaxed mb-5">
                {service.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 rounded-lg bg-brand-warm text-brand-primary text-xs font-medium font-cairo border border-brand-border-light">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
