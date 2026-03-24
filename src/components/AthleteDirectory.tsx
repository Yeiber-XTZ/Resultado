import { ChevronLeft, ChevronRight } from "lucide-react";
import { MOCK_ATHLETES } from "../mockData";

export default function AthleteDirectory() {
  const athletes = MOCK_ATHLETES.filter((a) => !a.rank);

  return (
    <section className="py-24 px-6 max-w-screen-2xl mx-auto">
      <h2 className="font-headline italic text-4xl mb-12 uppercase">Directorio de Atletas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {athletes.map((athlete) => (
          <div
            key={athlete.id}
            className="bg-white rounded-lg p-4 shadow-sm hover:shadow-xl transition-all border border-slate-200"
          >
            <img
              className="w-full h-48 object-cover rounded-md mb-4"
              src={athlete.image}
              alt={athlete.name}
              referrerPolicy="no-referrer"
            />
            <div className="mb-4">
              <h4 className="font-bold font-body text-lg">{athlete.name}</h4>
              <p className="font-label text-xs text-accent font-semibold">
                {athlete.sport} | {athlete.delegation}
              </p>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between text-[10px] font-label uppercase">
                <span>Progreso PR</span>
                <span>{athlete.progress}%</span>
              </div>
              <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary"
                  style={{ width: `${athlete.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* PAGINACIÓN */}
      <div className="flex justify-center items-center gap-2">
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-primary hover:text-white transition-all">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">
          1
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200">
          2
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200">
          3
        </button>
        <span className="px-2">...</span>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-200">
          12
        </button>
        <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-primary hover:text-white transition-all">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
