import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounter } from "@/hooks/useCounter";
import { Users, TrendingUp, Building2, Clock, Award, Database } from "lucide-react";

const stats = [
  { icon: Database, value: 600, suffix: "+", label: "هوية مُدخلة في يوم واحد", color: "text-brand-primary" },
  { icon: TrendingUp, value: 91, suffix: "%", label: "تحسّن دقة البيانات", color: "text-brand-gold" },
  { icon: Users, value: 15, suffix: "+", label: "عميل راضٍ", color: "text-brand-primary" },
  { icon: Clock, value: 70, suffix: "%", label: "توفير في وقت العمل", color: "text-brand-gold" },
];

const achievements = [
  {
    icon: Database,
    title: "إدخال 600 هوية في يوم واحد",
    desc: "أنجزت مهمة إدخال ضخمة بمعالجة أكثر من 600 سجل هوية في 8 ساعات عمل مع دقة لا تتجاوز 0.1% خطأ.",
    badge: "إنجاز استثنائي",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
  },
  {
    icon: TrendingUp,
    title: "تحسين دقة البيانات بنسبة 91%",
    desc: "صمّمت وطبّقت نظام مراجعة بيانات ذكي في شركة متوسطة الحجم، ما أدى إلى تقليص معدل الخطأ من 18% إلى أقل من 1.7% وتوفير مئات ساعات العمل سنوياً.",
    badge: "نتيجة قياسية",
    badgeColor: "bg-green-50 text-green-700 border-green-200",
  },
  {
    icon: Building2,
    title: "تصميم أنظمة HR متكاملة",
    desc: "طوّرت أنظمة موارد بشرية شاملة تغطي إدارة الحضور والرواتب والتقييم الوظيفي، مع لوحات تحكم Excel تُولّد تقارير HR تلقائياً في ثوانٍ.",
    badge: "نظام متكامل",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: Award,
    title: "أتمتة تقارير KPIs للإدارة العليا",
    desc: "بنيت نظام KPIs أوتوماتيكي يُنتج تقارير أداء أسبوعية وشهرية وسنوية للإدارة العليا بضغطة واحدة، مع رسوم بيانية تفاعلية وتنبيهات آلية.",
    badge: "أتمتة ذكية",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
  },
];

function StatCard({ stat, isActive }: { stat: typeof stats[0]; isActive: boolean }) {
  const count = useCounter(stat.value, 2200, isActive);
  return (
    <div className="group bg-white rounded-3xl p-6 border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 text-center">
      <div className="w-12 h-12 rounded-2xl bg-primary-gradient flex items-center justify-center mx-auto mb-4 shadow-btn group-hover:scale-110 transition-transform duration-200">
        <stat.icon className="w-6 h-6 text-white" />
      </div>
      <div className={`text-4xl font-900 font-cairo ${stat.color} mb-1`} style={{ fontWeight: 900 }}>
        {count}{stat.suffix}
      </div>
      <p className="text-brand-text-light text-sm font-cairo leading-tight">{stat.label}</p>
    </div>
  );
}

export default function Achievements() {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.2 });

  return (
    <section id="achievements" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-brand-gold-light/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-accent-light/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-warm border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4">
            إنجازاتي
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            أرقام تتحدث عن نفسها
          </h2>
          <p className="text-brand-text-light max-w-xl mx-auto font-cairo">
            نتائج حقيقية حققتها مع عملاء وجهات متعددة خلال مسيرتي المهنية.
          </p>
        </div>

        {/* Stats Counter Grid */}
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} isActive={isVisible} />
          ))}
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((item, i) => (
            <div
              key={item.title}
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} group bg-gradient-to-br from-brand-warm to-white rounded-3xl p-7 border border-brand-border shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}
            >
              <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-brand-accent-light/20 blur-2xl pointer-events-none" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-primary-gradient flex items-center justify-center flex-shrink-0 shadow-btn group-hover:scale-110 transition-transform duration-200">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bold text-brand-text font-cairo">{item.title}</h3>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border font-cairo ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                  </div>
                  <p className="text-brand-text-light text-sm font-cairo leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
