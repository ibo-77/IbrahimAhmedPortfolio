import { CheckCircle2, GraduationCap, Target, Zap } from "lucide-react";

const highlights = [
  "متخصص في تطبيقات الذكاء الاصطناعي وهندسة الأوامر",
  "خبرة إدارية في تنظيم الفرق وإدارة العمليات اليومية",
  "خبرة عملية في أتمتة Excel والـ KPIs وتقارير الأداء",
  "خلفية محاسبية قوية مع فهم عميق للبيانات المالية",
  "قدرة فائقة على إدخال البيانات بدقة 100% وسرعة عالية",
];

const values = [
  { icon: Target, title: "الدقة أولاً", desc: "أعمل بمعايير لا تقبل الخطأ لأن بياناتك هي أساس قراراتك." },
  { icon: Zap, title: "السرعة والكفاءة", desc: "أتمتة ذكية تنجز في ساعات ما يستغرقه غيره أسابيع." },
  { icon: GraduationCap, title: "تعلم مستمر", desc: "أواكب أحدث تقنيات الذكاء الاصطناعي وأطبّقها فوراً." },
  { icon: CheckCircle2, title: "خبرة إدارية", desc: "أدير الفرق والعمليات اليومية بكفاءة عالية وأُنجز المهام ضمن المواعيد المحددة." },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-brand-accent-light/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-brand-gold-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-warm border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4">
            من أنا
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            أُحوِّل البيانات إلى قرارات
          </h2>
          <p className="text-brand-text-light max-w-2xl mx-auto text-lg font-cairo">
            مزيج نادر من الخبرة المحاسبية والذكاء الاصطناعي يجعلني الشريك المثالي لتحويل أعمالك رقمياً.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Story */}
          <div className="animate-on-scroll-left">
            <div className="bg-brand-warm rounded-3xl p-8 border border-brand-border-light relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-brand-accent-light/30 blur-2xl pointer-events-none" />
              <h3 className="text-2xl font-bold text-brand-text font-cairo mb-4">قصتي مع التقنية</h3>
              <p className="text-brand-text-light font-cairo leading-relaxed mb-6">
                بدأت مسيرتي في المحاسبة، ثم اكتشفت قوة الذكاء الاصطناعي في تحويل المهام الروتينية إلى أنظمة
                ذكية. اليوم أجمع بين الدقة المحاسبية وأحدث أدوات الأتمتة لتقديم حلول تُوفّر وقتاً وجهداً
                وأموالاً حقيقية.
              </p>
              <div className="space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-brand-text-light text-sm font-cairo">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Values */}
          <div className="space-y-5 animate-on-scroll-right">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-btn group-hover:scale-110 transition-transform duration-200">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-text font-cairo mb-1">{title}</h4>
                  <p className="text-brand-text-light text-sm font-cairo leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
