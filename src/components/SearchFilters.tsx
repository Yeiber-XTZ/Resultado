import { Search } from "lucide-react";

export default function SearchFilters() {
  return (
    <section className="bg-slate-100 py-12 px-6">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
          <input
            className="w-full pl-12 pr-4 py-4 bg-white border-none shadow-sm focus:ring-2 focus:ring-primary rounded-lg font-body"
            placeholder="Buscar por nombre, país o récord..."
            type="text"
          />
        </div>
        <div className="flex flex-wrap gap-3">
          <select className="bg-white border-none shadow-sm py-4 px-6 rounded-lg font-label text-sm focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
            <option>Todos los Deportes</option>
            <option>Atletismo</option>
            <option>Boxeo</option>
            <option>Ciclismo</option>
            <option>Natación</option>
            <option>Pesas</option>
          </select>
          <select className="bg-white border-none shadow-sm py-4 px-6 rounded-lg font-label text-sm focus:ring-2 focus:ring-primary appearance-none cursor-pointer">
            <option>Todas las Delegaciones</option>
            <option>Team España</option>
            <option>Team México</option>
            <option>Team USA</option>
            <option>Team Argentina</option>
          </select>
        </div>
      </div>
    </section>
  );
}
