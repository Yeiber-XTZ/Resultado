export default function Footer() {
  return (
    <footer className="bg-primary text-secondary border-t border-white/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 py-12 gap-6 max-w-screen-2xl mx-auto">
        <div className="text-lg font-bold italic text-white font-headline">
          ELITE KINETIC
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase" href="#">
            Aviso Legal
          </a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase" href="#">
            Política de Privacidad
          </a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase" href="#">
            Contacto
          </a>
          <a className="text-slate-400 hover:text-white transition-colors font-label text-sm uppercase" href="#">
            Términos de Servicio
          </a>
        </div>
        <p className="text-slate-400 font-body text-sm">
          © 2024 Elite Athletic Editorial. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
