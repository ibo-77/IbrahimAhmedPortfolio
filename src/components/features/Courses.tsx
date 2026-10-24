import { BookOpen, CheckCircle2, Star, Zap } from "lucide-react";

const courses = [
  {
    title: "هندسة الأوامر من الصفر إلى الاحتراف",
    platform: "دورة ذاتية",
    modules: ["أساسيات Prompt Engineering", "تقنيات Chain-of-Thought", "أتمتة المهام بالذكاء الاصطناعي", "بناء Prompts للمحاسبة والـ HR"],
    level: "متقدم",
    levelColor: "bg-red-50 text-red-700 border-red-200",
    stars: 5,
    featured: true,
  },
  {
    title: "أتمتة Excel المتقدمة والـ KPIs",
    platform: "دورة تطبيقية",
    modules: ["لوحات KPIs الديناميكية", "تقارير الأداء التلقائية", "تحليل البيانات المتقدم", "إدارة البيانات الضخمة"],
    level: "متوسط-متقدم",
    levelColor: "bg-orange-50 text-orange-700 border-orange-200",
    stars: 5,
    featured: false,
  },
  {
    title: "إدخال البيانات الاحترافي",
    platform: "تدريب ميداني",
    modules: ["تقنيات الإدخال السريع", "معايير الجودة والدقة", "إدارة البيانات الضخمة", "ضمان سلامة البيانات"],
    level: "مبتدئ-متوسط",
    levelColor: "bg-green-50 text-green-700 border-green-200",
    stars: 4,
    featured: false,
  },
  {
    title: "أتمتة سير العمل بـ n8n",
    platform: "دورة متخصصة",
    modules: ["أساسيات n8n وإعداد البيئة", "ربط التطبيقات والأنظمة", "بناء تدفقات عمل ذكية", "أتمتة المهام الإدارية"],
    level: "متوسط",
    levelColor: "bg-purple-50 text-purple-700 border-purple-200",
    stars: 5,
    featured: false,
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-brand-gold-light/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-warm border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4">
            الدورات التدريبية
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            تعلّم معي خطوة بخطوة
          </h2>
          <p className="text-brand-text-light max-w-2xl mx-auto font-cairo text-lg">
            دورات مُصمَّمة من تجربة حقيقية تأخذك من الصفر إلى الاحتراف في الذكاء الاصطناعي والمحاسبة الرقمية.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-7">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} group relative bg-gradient-to-br from-brand-warm to-white rounded-3xl border overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-2 ${course.featured ? "border-brand-primary shadow-btn" : "border-brand-border shadow-card"}`}
            >
              {course.featured && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient" />
              )}

              <div className="p-7">
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-5">
                  <div className="flex-1">
                    {course.featured && (
                      <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary-gradient text-white text-xs font-bold font-cairo mb-2">
                        <Zap className="w-3 h-3" /> الأكثر شيوعاً
                      </div>
                    )}
                    <h3 className="font-bold text-brand-text text-lg font-cairo leading-tight">{course.title}</h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-btn group-hover:scale-110 transition-transform duration-200">
                    <BookOpen className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 flex-wrap mb-5">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border font-cairo ${course.levelColor}`}>
                    {course.level}
                  </span>
                  <span className="flex items-center gap-0.5">
                    {[...Array(course.stars)].map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                    {[...Array(5 - course.stars)].map((_, si) => (
                      <Star key={si} className="w-3.5 h-3.5 text-brand-border" />
                    ))}
                  </span>
                </div>

                {/* Modules */}
                <div className="grid grid-cols-2 gap-2">
                  {course.modules.map((mod) => (
                    <div key={mod} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-brand-primary flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-brand-text-light font-cairo">{mod}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href="https://wa.me/966537010835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-primary-gradient text-white font-semibold text-sm font-cairo shadow-btn hover:shadow-btn-hover hover:scale-[1.02] active:scale-95 transition-all duration-200"
                >
                  استفسر عن الدورة
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
