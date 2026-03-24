import { BarChart3 } from "lucide-react";
import { MOCK_DELEGATIONS } from "../mockData";

export default function DelegationRanking() {
  return (
    <section className="py-20 px-6 max-w-screen-2xl mx-auto">
      <h2 className="font-headline italic text-4xl mb-12 border-l-8 border-secondary pl-6 uppercase">
        Ranking de Delegaciones
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Leaderboard Table */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-200">
          <div className="grid grid-cols-5 bg-primary text-white p-4 font-label text-xs uppercase tracking-wider">
            <div className="col-span-2">Delegación</div>
            <div className="text-center">Oro</div>
            <div className="text-center">Plata</div>
            <div className="text-center">Bronce</div>
          </div>
          <div className="divide-y divide-slate-100">
            {MOCK_DELEGATIONS.map((delegation) => (
              <div
                key={delegation.id}
                className="grid grid-cols-5 p-4 items-center font-body hover:bg-slate-50 transition-colors"
              >
                <div className="col-span-2 flex items-center gap-3">
                  <span className="font-headline italic text-xl text-primary">
                    0{delegation.rank}
                  </span>
                  <span className="font-bold">{delegation.name}</span>
                </div>
                <div className="text-center font-label font-bold text-yellow-500">
                  {delegation.gold}
                </div>
                <div className="text-center font-label font-bold text-slate-400">
                  {delegation.silver}
                </div>
                <div className="text-center font-label font-bold text-amber-700">
                  {delegation.bronze}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Chart/Stat */}
        <div className="bg-primary p-8 rounded-xl flex flex-col justify-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-headline italic text-3xl mb-4 text-secondary">
              DOMINIO TOTAL
            </h3>
            <p className="font-body text-slate-300 max-w-xs mb-8">
              Team España lidera el medallero por tercer trimestre consecutivo con un rendimiento del 94% en finales.
            </p>
            <div className="flex gap-4 items-end">
              <div className="w-12 bg-yellow-500" style={{ height: "120px" }}></div>
              <div className="w-12 bg-slate-400" style={{ height: "80px" }}></div>
              <div className="w-12 bg-amber-700" style={{ height: "50px" }}></div>
            </div>
          </div>
          <BarChart3 className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-10" />
        </div>
      </div>
    </section>
  );
}
