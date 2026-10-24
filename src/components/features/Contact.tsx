import { MessageCircle, MapPin, Phone, Linkedin, Facebook, ExternalLink } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "واتساب",
    value: "+966 537 010 835",
    href: "https://wa.me/966537010835",
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "إبراهيم الكميم",
    href: "https://www.linkedin.com/in/%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D9%83%D9%85%D9%8A%D9%85-9477243ab/",
    color: "text-[#0077B5]",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "إبراهيم أحمد",
    href: "https://www.facebook.com/profile.php?id=61559987219238&locale=ar_AR",
    color: "text-[#1877F2]",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
  {
    icon: MapPin,
    label: "الموقع",
    value: "المملكة العربية السعودية",
    href: "#",
    color: "text-brand-primary",
    bg: "bg-brand-warm",
    border: "border-brand-border",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-section-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-warm via-brand-section-alt to-[#EDD8C0]/30 pointer-events-none" />
      <div className="absolute top-10 left-20 w-64 h-64 rounded-full bg-brand-accent-light/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4 shadow-sm">
            تواصل معي
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            هل أنت مستعد للتحول الرقمي؟
          </h2>
          <p className="text-brand-text-light max-w-xl mx-auto font-cairo text-lg">
            تواصل معي الآن واحصل على استشارة مجانية لمعرفة كيف أستطيع تحسين إنتاجيتك بالذكاء الاصطناعي.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="animate-on-scroll mb-10">
          <div className="bg-primary-gradient rounded-3xl p-10 text-center relative overflow-hidden shadow-[0_20px_60px_rgba(139,94,60,0.3)]">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
              style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-5">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white font-cairo mb-3">تحدّث معي مباشرةً</h3>
              <p className="text-white/80 font-cairo mb-7 max-w-md mx-auto">
                استجابة سريعة، استشارة مجانية، وحلول مخصصة لاحتياجاتك. لا تتردد في التواصل!
              </p>
              <a
                href="https://wa.me/966537010835"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-white text-brand-primary font-bold text-lg shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:scale-105 hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] active:scale-95 transition-all duration-200 font-cairo"
              >
                <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                ابدأ المحادثة الآن
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid sm:grid-cols-3 gap-4">
          {contactInfo.map((info, i) => (
            <a
              key={info.label}
              href={info.href}
              target={info.href !== "#" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className={`animate-on-scroll animate-delay-${(i + 1) * 100} group flex items-center gap-4 p-5 rounded-2xl bg-white border ${info.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-200`}
            >
              <div className={`w-11 h-11 rounded-xl ${info.bg} border ${info.border} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200`}>
                <info.icon className={`w-5 h-5 ${info.color}`} />
              </div>
              <div>
                <p className="text-xs text-brand-text-subtle font-cairo">{info.label}</p>
                <p className={`font-semibold text-sm font-cairo ${info.color}`}>{info.value}</p>
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-brand-text-subtle mr-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
