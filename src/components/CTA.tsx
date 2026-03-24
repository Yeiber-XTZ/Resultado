export default function CTA() {
  return (
    <section className="relative py-32 overflow-hidden bg-primary">
      <div className="absolute inset-0 skew-y-3 bg-secondary origin-right transform scale-110"></div>
      <div className="relative z-10 max-w-screen-2xl mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
        <h2 className="font-headline italic text-5xl md:text-7xl text-primary leading-none uppercase max-w-2xl">
          ¿Eres el próximo imparable?
        </h2>
        <div className="flex flex-col gap-6 items-center md:items-start">
          <p className="text-primary font-body text-xl max-w-sm">
            Únete a la élite mundial y digitaliza tu rendimiento con las herramientas de Arena Velocity.
          </p>
          <button className="skew-button bg-primary text-white font-headline italic font-bold py-5 px-12 text-2xl hover:bg-slate-900 transition-all shadow-2xl">
            <span className="skew-fix">REGISTRARSE AHORA</span>
          </button>
        </div>
      </div>
    </section>
  );
}
