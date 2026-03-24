import { Trophy } from "lucide-react";
import { MOCK_ATHLETES } from "../mockData";

export default function TopRanking() {
  const top3 = MOCK_ATHLETES.filter((a) => a.rank && a.rank <= 3).sort(
    (a, b) => (a.rank || 0) - (b.rank || 0)
  );

  return (
    <section className="py-20 bg-slate-100 px-6">
      <div className="max-w-screen-2xl mx-auto">
        <h2 className="font-headline italic text-4xl mb-16 text-center uppercase tracking-tighter">
          Top 3 Ranking Mundial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
          {/* Rank 2 */}
          <div className="bg-white p-1 rounded-xl shadow-lg order-2 md:order-1 h-[450px] relative group overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
              src={top3[1].image}
              alt={top3[1].name}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="font-headline italic text-5xl opacity-50 block">02</span>
              <h3 className="font-headline italic text-2xl">{top3[1].name}</h3>
              <p className="font-label text-xs uppercase tracking-widest text-secondary">
                {top3[1].sport} | {top3[1].delegation}
              </p>
            </div>
          </div>

          {/* Rank 1 */}
          <div className="bg-white p-1 rounded-xl shadow-2xl order-1 md:order-2 h-[550px] relative group overflow-hidden border-4 border-secondary">
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
              src={top3[0].image}
              alt={top3[0].name}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="absolute top-6 right-6">
              <Trophy className="text-secondary w-12 h-12 fill-secondary" />
            </div>
            <div className="absolute bottom-8 left-8 text-white">
              <span className="font-headline italic text-7xl opacity-50 block">01</span>
              <h3 className="font-headline italic text-4xl">{top3[0].name}</h3>
              <p className="font-label text-sm uppercase tracking-widest text-secondary">
                {top3[0].sport} | {top3[0].delegation}
              </p>
            </div>
          </div>

          {/* Rank 3 */}
          <div className="bg-white p-1 rounded-xl shadow-lg order-3 md:order-3 h-[400px] relative group overflow-hidden">
            <img
              className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-transform duration-700"
              src={top3[2].image}
              alt={top3[2].name}
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <span className="font-headline italic text-4xl opacity-50 block">03</span>
              <h3 className="font-headline italic text-2xl">{top3[2].name}</h3>
              <p className="font-label text-xs uppercase tracking-widest text-secondary">
                {top3[2].sport} | {top3[2].delegation}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
