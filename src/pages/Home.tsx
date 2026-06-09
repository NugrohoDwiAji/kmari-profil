import { useState } from "react";
import content from "../data/content.json";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function AnimatedSection({
  children,
  className = "",
  animation = "scroll-animate",
}: {
  children: React.ReactNode;
  className?: string;
  animation?: string;
}) {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <div
      ref={ref}
      className={`${animation} ${isVisible ? "visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default function Home() {
  const { hero, about, menu, whyUs, gallery, map } = content;

  const mapSrc = map.embedUrl.startsWith("http")
    ? map.embedUrl
    : map.embedUrl.match(/src="([^"]+)"/)?.[1] || "";
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <>
      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-100dvh md:min-h-screen flex items-center bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-8 left-2 w-40 h-40 md:top-20 md:left-10 md:w-72 md:h-72 bg-white rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-8 right-2 w-56 h-56 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-purple-300 rounded-full blur-3xl animate-float delay-300" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-6 lg:px-8 py-12 md:py-20">
          <div className="flex flex-col items-center text-center md:grid md:grid-cols-2 md:text-left md:items-center md:gap-12">
            {/* Mobile: Logo first, then text */}
            <div className="md:hidden order-1">
              <div className="animate-bounce-in animate-pulse-slow w-28 h-28 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <div className="w-20 h-20 bg-purple-400/30 rounded-full flex items-center justify-center">
                  <img
                    src="/logo.jpeg"
                    alt="KMari"
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2">
                {hero.badges.map((badge, i) => (
                  <span
                    key={badge.position}
                    className={`animate-fade-in-up delay-${(i + 2) * 100} inline-block bg-white text-purple-900 px-3 py-1 rounded-full text-[10px] font-semibold`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>

            <div className="order-2 md:order-1">
              <span className="animate-fade-in-up inline-block bg-purple-500/30 text-purple-200 text-[10px] md:text-sm font-semibold px-3 py-1.5 rounded-full mb-3 md:mb-6">
                {hero.badge}
              </span>

              <h1 className="animate-fade-in-up delay-300 text-[28px] md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] mb-2 md:mb-2 opacity-0">
                {hero.title}
                <span className="block text-purple-300">
                  {hero.titleHighlight}
                </span>
              </h1>

              <p className="animate-fade-in-up delay-350 text-sm md:text-lg text-purple-200/80 font-medium mb-4 md:mb-4 opacity-0 italic">
                ✦ New Place to Have Fun ✦
              </p>

              <p className="animate-fade-in-up delay-400 text-[13px] md:text-base text-purple-200 mb-5 md:mb-8 leading-relaxed max-w-[320px] md:max-w-none mx-auto md:mx-0 opacity-0">
                {hero.description}
              </p>

              <div className="animate-fade-in-up delay-500 flex flex-col gap-2.5 md:gap-4 w-full max-w-[280px] md:max-w-none mx-auto md:mx-0 opacity-0">
                <a
                  href={hero.primaryButton.href}
                  className="bg-white text-purple-900 font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-purple-100 transition-all hover:scale-105 text-center text-[13px] md:text-base"
                >
                  {hero.primaryButton.label}
                </a>
                <a
                  href={hero.secondaryButton.href}
                  className="border-2 border-white text-white font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full hover:bg-white/10 transition-all hover:scale-105 text-center text-[13px] md:text-base"
                >
                  {hero.secondaryButton.label}
                </a>
              </div>
            </div>

            {/* Desktop: Logo on right side */}
            <div className="hidden md:flex order-2 justify-center">
              <div className="relative">
                <div className="animate-bounce-in animate-pulse-slow w-48 h-48 lg:w-72 lg:h-72 bg-purple-500/30 rounded-full flex items-center justify-center">
                  <div className="w-36 h-36 lg:w-56 lg:h-56 bg-purple-400/30 rounded-full flex items-center justify-center">
                    <img
                      src="/logo.jpeg"
                      alt="KMari"
                      className="w-24 h-24 lg:w-36 lg:h-36 object-contain"
                    />
                  </div>
                </div>
                {hero.badges.map((badge, i) => (
                  <span
                    key={badge.position}
                    className={`animate-fade-in-up delay-${(i + 2) * 100} absolute bg-white text-purple-900 px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-semibold ${
                      badge.position === "top-right"
                        ? "-top-3 -right-3 md:-top-4 md:-right-4"
                        : "-bottom-3 -left-3 md:-bottom-4 md:-left-4"
                    }`}
                  >
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
          >
            <path
              d="M0 60L60 52C120 44 240 28 360 20C480 12 600 12 720 18C840 24 960 36 1080 40C1200 44 1320 40 1380 38L1440 36V60H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* TENTANG SECTION */}
      <section id="tentang" className="py-12 md:py-20 bg-white">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-purple-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                {about.badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
                {about.title}
              </h2>
              <p className="text-purple-600 text-sm md:text-base max-w-md md:max-w-2xl mx-auto">
                {about.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-10 md:mb-16">
            <AnimatedSection animation="scroll-animate-scale">
              <div className="relative">
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl md:rounded-3xl p-8 md:p-12 text-center">
                  <img
                    src="/logo.jpeg"
                    alt="KMari"
                    className="w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto object-contain mb-3 md:mb-4"
                  />
                  <p className="text-purple-700 font-medium text-sm md:text-base">
                    {about.imageAlt}
                  </p>
                </div>
                <div className="absolute -bottom-4 right-4 md:-bottom-6 md:-right-6 bg-purple-900 text-white px-4 py-2 md:px-6 md:py-3 rounded-xl md:rounded-2xl">
                  <span className="text-lg md:text-2xl font-bold">
                    {about.yearsValue}
                  </span>
                  <span className="block text-xs md:text-sm">
                    {about.yearsLabel}
                  </span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scroll-animate-right">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-purple-900 mb-3 md:mb-6">
                  {about.storyTitle}
                </h3>
                {about.story.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-purple-700 text-sm md:text-base leading-relaxed mb-3 md:mb-6"
                  >
                    {paragraph}
                  </p>
                ))}

                <div className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8">
                  {about.stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-purple-50 rounded-xl p-3 md:p-4 text-center"
                    >
                      <span className="text-2xl md:text-3xl font-bold text-purple-900 block">
                        {stat.value}
                      </span>
                      <span className="text-purple-600 text-xs md:text-sm">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
            {about.features.map((feature) => (
              <AnimatedSection
                key={feature.title}
                animation="scroll-animate-scale"
              >
                <div className="bg-purple-50 rounded-2xl p-5 md:p-8 text-center md:text-left flex md:flex-col gap-4 md:gap-0 items-center md:items-start">
                  <span className="text-3xl md:text-4xl shrink-0">
                    {feature.icon}
                  </span>
                  <div>
                    <h4 className="text-sm md:text-lg font-bold text-purple-900 mb-1 md:mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-purple-600 text-xs md:text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section id="menu" className="py-12 md:py-20 bg-purple-50">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-purple-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                {menu.badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
                {menu.title}
              </h2>
              <p className="text-purple-600 text-sm md:text-base max-w-md md:max-w-2xl mx-auto">
                {menu.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {["/menu-makanan.jpeg", "/menu-minuman.jpeg"].map((src, i) => (
              <AnimatedSection
                key={src}
                animation={
                  i % 2 === 0 ? "scroll-animate-left" : "scroll-animate-right"
                }
              >
                <div
                  onClick={() => setLightbox(src)}
                  className="relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out shadow-sm
                    md:hover:scale-[1.02] md:hover:shadow-xl"
                >
                  <img src={src} alt="Menu" className="w-full object-cover" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {lightbox && (
          <div
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-8 animate-fade-in"
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl leading-none"
            >
              ✕
            </button>
            <img
              src={lightbox}
              alt="Menu fullscreen"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        )}
      </section>

      {/* GALERI SECTION */}
      <section id="galeri" className="py-12 md:py-20 bg-white">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-purple-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                {gallery.badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
                {gallery.title}
              </h2>
              <p className="text-purple-600 text-sm md:text-base max-w-md md:max-w-2xl mx-auto">
                {gallery.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {gallery.items.map((item, i) => (
              <AnimatedSection
                key={item.caption}
                animation={
                  i % 2 === 0 ? "scroll-animate-left" : "scroll-animate-right"
                }
              >
                <div className="relative group overflow-hidden rounded-xl md:rounded-2xl aspect-square">
                  <img
                    src={item.image}
                    alt={item.caption}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-white text-xs md:text-sm font-semibold">
                      {item.caption}
                    </span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="py-12 md:py-16 bg-purple-900">
        <div className="px-4 md:px-6 lg:px-8 max-w-3xl mx-auto text-center">
          <AnimatedSection animation="scroll-animate-scale">
            <span className="text-4xl md:text-5xl text-purple-300 block mb-4 md:mb-6">
              "
            </span>
            <p className="text-lg md:text-2xl text-purple-100 leading-relaxed font-light italic">
              KMari sering melakukan kesalahan, namun tetap berusaha memberikan
              pelayanan yang terbaik
            </p>
            <span className="text-4xl md:text-5xl text-purple-300 block mt-4 md:mt-6">
              "
            </span>
          </AnimatedSection>
        </div>
      </section>

      {/* KENAPA HARUS KAMI SECTION */}
      <section id="kenapa-kami" className="py-12 md:py-20 bg-white">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10 md:mb-16">
              <span className="inline-block text-purple-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                {whyUs.badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
                {whyUs.title}
              </h2>
              <p className="text-purple-600 text-sm md:text-base max-w-md md:max-w-2xl mx-auto">
                {whyUs.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
            {whyUs.advantages.map((item) => (
              <AnimatedSection
                key={item.title}
                animation="scroll-animate-scale"
              >
                <div className="bg-purple-50 rounded-2xl p-4 md:p-6 lg:p-8 text-center hover:bg-purple-100 transition-colors">
                  <span className="text-3xl md:text-4xl lg:text-5xl block mb-2 md:mb-4">
                    {item.icon}
                  </span>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-purple-900 mb-1 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 text-xs md:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="scroll-animate-scale">
            <div className="mt-10 md:mt-16 bg-gradient-to-r from-purple-900 to-purple-700 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12 text-center text-white">
              <h3 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2 md:mb-4">
                {whyUs.cta.title}
              </h3>
              <p className="text-purple-200 text-sm md:text-base mb-6 md:mb-8 max-w-2xl mx-auto">
                {whyUs.cta.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <a
                  href={whyUs.cta.primaryButton.href}
                  className="bg-white text-purple-900 font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-purple-100 transition-all hover:scale-105 text-sm md:text-base"
                >
                  {whyUs.cta.primaryButton.label}
                </a>
                <a
                  href={whyUs.cta.secondaryButton.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white font-semibold py-3 md:py-4 px-8 md:px-10 rounded-full hover:bg-white/10 transition-all hover:scale-105 text-sm md:text-base"
                >
                  {whyUs.cta.secondaryButton.label}
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* MAP SECTION */}
      <section className="py-12 md:py-20 bg-purple-50">
        <div className="px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block text-purple-600 font-semibold text-xs md:text-sm tracking-wider uppercase mb-1 md:mb-2">
                {map.badge}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-purple-900 mb-2 md:mb-4">
                {map.title}
              </h2>
              <p className="text-purple-600 text-sm md:text-base max-w-md mx-auto">
                {map.subtitle}
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection animation="scroll-animate-scale">
            <div className="relative w-full h-[300px] md:h-[450px] rounded-2xl md:rounded-3xl overflow-hidden shadow-md bg-purple-200">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi KMari"
                className="absolute inset-0"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
