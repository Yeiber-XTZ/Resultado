/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchFilters from "./components/SearchFilters";
import DelegationRanking from "./components/DelegationRanking";
import TopRanking from "./components/TopRanking";
import AthleteDirectory from "./components/AthleteDirectory";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-20">
        <Hero />
        <SearchFilters />
        <DelegationRanking />
        <TopRanking />
        <AthleteDirectory />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

