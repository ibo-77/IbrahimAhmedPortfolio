import { useState } from "react";
import { X, ChevronRight, ChevronLeft, Award, ExternalLink } from "lucide-react";

const certificates = [
  {
    id: 1,
    workshop: "شهادة إتمام المعسكر",
    title: "الذكاء الاصطناعي وأدواته: من الفهم إلى التطبيق",
    titleEn: "Artificial Intelligence & Its Tools: From Understanding to Application",
    date: "يوليو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-GRAD-0225",
    img: "https://cdn-ai.onspace.ai/onspace/files/7dHz2dy8zTftCjwAWixqY4/شهادة_اتمام_معسكر_EMC_للذكاء_الاصطناعي.jpg",
    type: "إتمام",
    badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
    featured: true,
  },
  {
    id: 2,
    workshop: "الورشة الأولى",
    title: "مقدمة إلى الذكاء الاصطناعي – الخريطة الكاملة",
    titleEn: "Introduction to Artificial Intelligence — The Complete Map",
    date: "20 يونيو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-06-0268",
    img: "https://cdn-ai.onspace.ai/onspace/files/A8gzo5rJfjVdQV889nBLGR/1.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 3,
    workshop: "الورشة الثانية",
    title: "فن مخاطبة الذكاء الاصطناعي – هندسة الأوامر",
    titleEn: "The Art of Speaking to AI — Prompt Engineering",
    date: "24 يونيو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W2-0250",
    img: "https://cdn-ai.onspace.ai/onspace/files/ZAUD8hMZWjMYAVVHdt7APc/2.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 4,
    workshop: "الورشة الثالثة",
    title: "استخدام الذكاء الاصطناعي في تنظيم الوقت وزيادة الإنتاجية",
    titleEn: "Using AI to Organize Your Time & Boost Productivity",
    date: "27 يونيو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W3-0205",
    img: "https://cdn-ai.onspace.ai/onspace/files/WrDAVSwMo2S4QUnewvZoAs/3.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 5,
    workshop: "الورشة الرابعة",
    title: "استخدام الذكاء الاصطناعي في بناء الهوية وصناعة المحتوى",
    titleEn: "Using AI to Build Your Identity & Create Your Content",
    date: "1 يوليو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W4-0916",
    img: "https://cdn-ai.onspace.ai/onspace/files/DdaKVwJ2eMqpGP4mYPawvU/4.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 6,
    workshop: "الورشة السادسة",
    title: "مسارك المهني بالذكاء الاصطناعي",
    titleEn: "Your Professional Path with AI",
    date: "8 يوليو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W6-0501",
    img: "https://cdn-ai.onspace.ai/onspace/files/LDm2yffW8AXftUHpPLcvHW/6.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 7,
    workshop: "الورشة السابعة",
    title: "من فكرة إلى تطبيق بالذكاء الاصطناعي",
    titleEn: "From Idea to Application with AI",
    date: "11 يوليو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W7-0510",
    img: "https://cdn-ai.onspace.ai/onspace/files/PKXVEFpLKETMG6WGnPBj6m/7.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
  {
    id: 8,
    workshop: "الورشة الثامنة – الختامية",
    title: "المشروع المتكامل – من الفكرة إلى الإطلاق",
    titleEn: "The Capstone Project: From Idea to Launch",
    date: "15 يوليو 2026",
    issuer: "مركز ماستر التعليمي - EMC",
    code: "EMC-2026-W8-0706",
    img: "https://cdn-ai.onspace.ai/onspace/files/4gWRziQXMMYhW4fWMz3MRu/8.jpg",
    type: "حضور",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    featured: false,
  },
];

export default function Certificates() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + certificates.length) % certificates.length : 0));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % certificates.length : 0));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") next();
    if (e.key === "ArrowRight") prev();
  };

  const featured = certificates[0];
  const rest = certificates.slice(1);

  return (
    <section id="certificates" className="py-24 bg-brand-section-alt relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #8B5E3C 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-brand-gold-light/20 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-brand-accent-light/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white border border-brand-border text-brand-primary text-sm font-semibold font-cairo mb-4 shadow-sm">
            شهاداتي
          </span>
          <h2 className="text-3xl sm:text-4xl font-900 text-brand-text font-cairo mb-4" style={{ fontWeight: 900 }}>
            شهادات معتمدة من EMC
          </h2>
          <p className="text-brand-text-light max-w-2xl mx-auto font-cairo text-lg">
            شهادات حضور وإتمام من المعسكر الصيفي المكثف لتعلّم الذكاء الاصطناعي 2026 — مركز ماستر التعليمي.
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 flex-wrap">
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-border shadow-sm">
              <Award className="w-4 h-4 text-brand-primary" />
              <span className="text-sm font-semibold text-brand-text font-cairo">8 ورش تطبيقية</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-brand-border shadow-sm">
              <Award className="w-4 h-4 text-brand-gold" />
              <span className="text-sm font-semibold text-brand-text font-cairo">16 ساعة تدريبية</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 shadow-sm">
              <Award className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-semibold text-amber-700 font-cairo">شهادة إتمام معتمدة</span>
            </div>
          </div>
        </div>

        {/* Featured Certificate */}
        <div className="animate-on-scroll mb-8">
          <button
            onClick={() => openLightbox(0)}
            className="group w-full relative bg-white rounded-3xl border-2 border-brand-primary shadow-btn overflow-hidden hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary-gradient" />
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative overflow-hidden rounded-r-3xl md:rounded-r-none md:rounded-tr-3xl md:rounded-br-none bg-gray-50 aspect-[16/9] md:aspect-auto min-h-[200px]">
                <img
                  src={featured.img}
                  alt={featured.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1.5 rounded-full bg-amber-500 text-white text-xs font-bold font-cairo shadow-sm">
                    شهادة إتمام
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-8 text-right flex flex-col justify-center">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold font-cairo mb-4 w-fit">
                  <Award className="w-3.5 h-3.5" />
                  {featured.workshop}
                </div>
                <h3 className="text-xl font-bold text-brand-text font-cairo mb-2 leading-tight">{featured.title}</h3>
                <p className="text-brand-text-subtle text-sm font-cairo mb-4">{featured.titleEn}</p>
                <div className="space-y-2 text-sm font-cairo text-brand-text-light">
                  <p><span className="font-semibold text-brand-text">الجهة:</span> {featured.issuer}</p>
                  <p><span className="font-semibold text-brand-text">التاريخ:</span> {featured.date}</p>
                  <p><span className="font-semibold text-brand-text">الكود:</span> {featured.code}</p>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-brand-primary font-semibold text-sm font-cairo group-hover:gap-3 transition-all duration-200">
                  <ExternalLink className="w-4 h-4" />
                  عرض الشهادة كاملة
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {rest.map((cert, i) => (
            <button
              key={cert.id}
              onClick={() => openLightbox(i + 1)}
              className={`animate-on-scroll animate-delay-${Math.min((i + 1) * 100, 600)} group bg-white rounded-2xl border border-brand-border shadow-card overflow-hidden hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-right`}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-gray-50">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-2 right-2">
                  <span className={`px-2 py-0.5 rounded-full text-xs font-semibold border font-cairo ${cert.badgeColor} bg-white/90`}>
                    {cert.type}
                  </span>
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <p className="text-xs text-brand-primary font-semibold font-cairo mb-1">{cert.workshop}</p>
                <h4 className="font-bold text-brand-text font-cairo text-sm leading-snug line-clamp-2 mb-2">{cert.title}</h4>
                <p className="text-xs text-brand-text-subtle font-cairo">{cert.date}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute -top-12 left-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors duration-200 z-10"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Counter */}
            <div className="absolute -top-12 right-0 text-white/70 text-sm font-cairo">
              {lightboxIndex + 1} / {certificates.length}
            </div>

            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden bg-white shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img
                src={certificates[lightboxIndex].img}
                alt={certificates[lightboxIndex].title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white font-bold font-cairo text-lg">{certificates[lightboxIndex].title}</p>
              <p className="text-white/60 text-sm font-cairo mt-1">{certificates[lightboxIndex].workshop} · {certificates[lightboxIndex].date}</p>
            </div>

            {/* Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 flex items-center justify-between pointer-events-none px-2">
              <button
                onClick={(e) => { e.stopPropagation(); prev(); }}
                className="pointer-events-auto w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); next(); }}
                className="pointer-events-auto w-11 h-11 rounded-full bg-white/10 hover:bg-white/25 flex items-center justify-center transition-colors duration-200 backdrop-blur-sm"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
