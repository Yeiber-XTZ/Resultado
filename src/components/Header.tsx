import { Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-primary shadow-xl fixed top-0 left-0 right-0 z-50">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto h-20">
        <div className="text-2xl font-bold italic tracking-tighter text-white font-headline">
          ELITE KINETIC
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a className="text-secondary border-b-2 border-secondary pb-1 font-bold italic font-label" href="#">
            Atletas
          </a>
          <a className="text-slate-300 hover:text-white transition-colors font-label" href="#">
            Equipos
          </a>
          <a className="text-slate-300 hover:text-white transition-colors font-label" href="#">
            Eventos
          </a>
          <a className="text-slate-300 hover:text-white transition-colors font-label" href="#">
            Rankings
          </a>
          <a className="text-slate-300 hover:text-white transition-colors font-label" href="#">
            Entrenamiento
          </a>
        </div>
        <div className="flex items-center gap-4">
          <button className="text-white hover:bg-white/10 p-2 rounded-full transition-all duration-200">
            <Bell className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-secondary">
            <img
              alt="Perfil"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD5TaS6hxwsLeaha_lAwKFg12Viu-NqxuUgAc6OM1ZKzrVi2ow237C72rDVWJwNT6AgzISJLkJn4e6gBPqgWVTVLPjo-FqI9GcqggIe-UIg3dK_UArBqjCCTLIuksQnMc6pao0PYltBsRFFxLBTjs61fHeOCO-hdKmo8zr7oRfiJ_U_EJ3OEBlVHAQVl93yX7FmlGooJsez7eJb-NTSmBWkCq5Qgpf-YUFRcja1zkQBYLhydKJpvLgumahKOZpw9AfI3U2_E5y8gVbq"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}
