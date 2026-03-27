import React from 'react';
import { Header } from './components/Header';
import { USPBar } from './components/USPBar';
import { Breadcrumb } from './components/Breadcrumb';
import { Sidebar } from './components/Sidebar';
import { ProductGrid } from './components/ProductGrid';
import { SEOContent } from './components/SEOContent';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen w-full bg-white flex flex-col font-poppins">
      <Header />
      <USPBar />

      <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-8 flex flex-col">
        <Breadcrumb />

        <div className="flex flex-col lg:flex-row gap-8 mt-4">
          <Sidebar />

          <div className="flex-1 flex flex-col min-w-0">
            <ProductGrid />
            <SEOContent />
          </div>
        </div>
      </main>

      <Footer />
    </div>);

}