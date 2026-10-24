import { useEffect, useRef } from "react";
import { ArrowDown, Sparkles, Brain, BarChart3, Linkedin } from "lucide-react";

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [headingRef, subRef, ctaRef, badgesRef];
    els.forEach((ref, i) => {
      if (ref.current) {
        ref.current.style.opacity = "0";
        ref.current.style.transform = "translateY(28px)";
        setTimeout(() => {
          if (ref.current) {
            ref.current.style.transition = "opacity 0.7s ease-out, transform 0.7s ease-out";
            ref.current.style.opacity = "1";
            ref.current.style.transform = "translateY(0)";
          }
        }, 200 + i * 150);
      }
    });
    if (imgRef.current) {
      imgRef.current.style.opacity = "0";
      imgRef.current.style.transform = "translateX(40px)";
      setTimeout(() => {
        if (imgRef.current) {
          imgRef.current.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
          imgRef.current.style.opacity = "1";
          imgRef.current.style.transform = "translateX(0)";
        }
      }, 300);
    }
  }, []);

  const handleScrollDown = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient grain-overlay"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-brand-accent-light/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-brand-gold-light/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-border-light/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <div ref={badgesRef as React.RefObject<HTMLDivElement>} className="flex flex-wrap gap-2 mb-6">
              {[
                { icon: Brain, label: "ذكاء اصطناعي" },
                { icon: BarChart3, label: "محاسبة" },
                { icon: Sparkles, label: "أتمتة" },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary text-xs font-semibold shadow-sm font-cairo"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label}
                </span>
              ))}
            </div>

            <h1
              ref={headingRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-900 leading-tight mb-4 font-cairo"
              style={{ fontWeight: 900 }}
            >
              <span className="text-brand-text">إبراهيم أحمد</span>
              <br />
              <span className="gradient-text text-3xl sm:text-4xl lg:text-5xl">
                خبير أتمتة & ذكاء اصطناعي
              </span>
              <br />
              <span className="text-brand-text-light text-2xl sm:text-3xl">
                ومحاسبة
              </span>
            </h1>

            <p
              ref={subRef}
              className="text-brand-text-light text-lg leading-relaxed mb-8 max-w-lg font-cairo"
            >
              أحوّل أعمالك إلى منظومة رقمية ذكية — من هندسة الأوامر وأتمتة Excel والـ KPIs،
              إلى إدخال البيانات بدقة تصل 100%. نتائج حقيقية، وتوفير فعلي في الوقت والجهد.
            </p>

            <div ref={ctaRef as React.RefObject<HTMLDivElement>} className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/966537010835"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl shimmer-btn text-white font-bold text-base shadow-btn hover:shadow-btn-hover hover:scale-105 active:scale-95 transition-all duration-200 font-cairo"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                تواصل عبر واتساب
              </a>
              <a
                href="https://www.linkedin.com/in/%D8%A5%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85-%D8%A7%D9%84%D9%83%D9%85%D9%8A%D9%85-9477243ab/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white border-2 border-brand-border text-brand-primary font-bold text-base hover:border-brand-primary hover:bg-brand-warm hover:scale-105 active:scale-95 transition-all duration-200 shadow-card font-cairo"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div ref={imgRef as React.RefObject<HTMLDivElement>} className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full bg-gold-gradient opacity-20 blur-xl scale-110" />
              <div className="absolute inset-0 rounded-full border-4 border-brand-gold/40 scale-105 animate-[spin-slow_12s_linear_infinite]" style={{ borderStyle: "dashed" }} />

              {/* Image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-[0_20px_60px_rgba(74,46,27,0.20)] ring-4 ring-brand-border">
                <img
                  src="https://cdn-ai.onspace.ai/onspace/project/uploads/9tWKwvmfXvfuNcDUtkoSQJ/صورة_شخصية_.jpeg"
                  alt="إبراهيم أحمد"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl px-4 py-2 shadow-card border border-brand-border flex items-center gap-2 animate-float">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-brand-text font-cairo">متاح للعمل</span>
              </div>
              <div className="absolute -top-4 -left-4 bg-white rounded-2xl px-4 py-2 shadow-card border border-brand-border animate-float" style={{ animationDelay: "1.5s" }}>
                <span className="text-xs font-bold text-brand-primary font-cairo">خبرة +3 سنوات</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="flex justify-center mt-16">
          <button
            onClick={handleScrollDown}
            className="flex flex-col items-center gap-2 text-brand-text-subtle hover:text-brand-primary transition-colors duration-200 group"
          >
            <span className="text-xs font-medium font-cairo">اكتشف المزيد</span>
            <ArrowDown className="w-5 h-5 animate-bounce group-hover:text-brand-primary" />
          </button>
        </div>
      </div>
    </section>
  );
}
