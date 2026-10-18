import React, { useState } from 'react';
import { 
  Building2, 
  Coins, 
  Home, 
  HardHat, 
  Factory, 
  Boxes, 
  BadgePercent, 
  Users, 
  Cpu, 
  ArrowRight, 
  Globe, 
  Menu, 
  X, 
  ShieldCheck, 
  TrendingUp,
  Mail,
  MapPin,
  ChevronRight
} from 'lucide-react';

const businesses = [
  {
    category: "HOLDING COMPANY",
    title: "Blue Line Capital Group",
    desc: "The strategic holding company coordinating governance, capital allocation, shared services and consolidated reporting across the Group.",
    icon: Building2,
    href: "https://bluelinecapitale.com/companies/blue_line_capital_group",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80"
  },
  {
    category: "BUREAU DE CHANGE",
    title: "Blue Line Exchange (BLEX)",
    desc: "Foreign exchange operations supporting XAF, USD, EUR and AED transactions with internal controls, treasury visibility and compliance support.",
    icon: Coins,
    href: "https://bluelinecapitale.com/companies/blue_line_exchange_blex",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=900&q=80"
  },
  {
    category: "REAL ESTATE",
    title: "Blue Line Property Management",
    desc: "Management of residential and commercial property assets, leases, tenants, rent billing, occupancy and maintenance across the Group's portfolio.",
    icon: Home,
    href: "https://bluelinecapitale.com/companies/blue_line_property_management",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80"
  },
  {
    category: "CONSTRUCTION & INFRASTRUCTURE",
    title: "Blue Line Construction",
    desc: "Construction project management, site control, subcontractor coordination, procurement, progress tracking and project cost visibility across infrastructure developments.",
    icon: HardHat,
    href: "https://bluelinecapitale.com/companies/blue_line_construction",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
  },
  {
    category: "INDUSTRIAL MANUFACTURING",
    title: "Blue Line Sugar Manufacturing",
    desc: "Sugar production operations supported by production planning, quality control, inventory visibility and manufacturing cost tracking from raw material to finished goods.",
    icon: Factory,
    href: "https://bluelinecapitale.com/companies/blue_line_sugar_manufacturing",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80"
  },
  {
    category: "TRADE & SUPPLY CHAIN",
    title: "Blue Line Importation, Assembly & Trade",
    desc: "Import order management, container tracking, warehousing, SKD and CKD assembly, landed cost visibility and CEMAC export documentation support.",
    icon: Boxes,
    href: "https://bluelinecapitale.com/companies/blue_line_import_assembly_trade",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=900&q=80"
  },
  {
    category: "FINANCIAL CONTROL",
    title: "Group Finance & Accounting",
    desc: "Multi-entity accounting, treasury visibility, OHADA and SYSCOHADA aligned reporting, intercompany transactions and group consolidation.",
    icon: BadgePercent,
    href: "https://bluelinecapitale.com/companies/blue_line_finance_accounting",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80"
  },
  {
    category: "PEOPLE OPERATIONS",
    title: "HR & Payroll",
    desc: "Employee records, payroll support, leave, attendance, expenses, CNPS aligned reporting and workforce visibility across the Group.",
    icon: Users,
    href: "https://bluelinecapitale.com/companies/blue_line_hr_payroll",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
  },
  {
    category: "ENTERPRISE TECHNOLOGY",
    title: "Digital Transformation & AI Copilot",
    desc: "The internal digital backbone helping the Group unify reporting, workflows, executive dashboards and AI-assisted decision support across all businesses.",
    icon: Cpu,
    href: "https://bluelinecapitale.com/platform/ai_copilot",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
  }
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');

  return (
    <div className="min-h-screen bg-[#071A33] text-slate-100 flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-white">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-[#071A33]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/blue-line-logo.png" 
              alt="Blue Line Capital Group" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-[#C9A227] transition-colors">About</a>
            <a href="#businesses" className="hover:text-[#C9A227] transition-colors">Businesses</a>
            <a href="#investments" className="hover:text-[#C9A227] transition-colors">Investments</a>
            <a href="#digital-transformation" className="hover:text-[#C9A227] transition-colors">Digital Transformation</a>
            <a href="#compliance" className="hover:text-[#C9A227] transition-colors">Compliance</a>
            <a href="#contact" className="hover:text-[#C9A227] transition-colors">Contact</a>
          </nav>

          {/* Right Action */}
          <div className="hidden lg:flex items-center gap-4">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
              className="px-3 py-1.5 rounded-md border border-white/15 text-xs font-semibold tracking-wider hover:border-[#C9A227] hover:text-[#C9A227] transition-colors flex items-center gap-1.5 text-slate-200"
            >
              <Globe className="w-3.5 h-3.5 text-[#C9A227]" />
              {lang}
            </button>
            <a 
              href="#contact" 
              className="px-5 py-2.5 rounded-lg bg-[#C9A227] text-[#071A33] text-sm font-bold shadow-lg shadow-[#C9A227]/20 hover:bg-[#b59020] transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Contact Group
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            <button 
              onClick={() => setLang(lang === 'EN' ? 'FR' : 'EN')}
              className="px-2.5 py-1 rounded border border-white/20 text-xs font-bold text-[#C9A227]"
            >
              {lang}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0D2545] border-b border-white/10 px-6 py-6 space-y-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">About</a>
            <a href="#businesses" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">Businesses</a>
            <a href="#investments" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">Investments</a>
            <a href="#digital-transformation" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">Digital Transformation</a>
            <a href="#compliance" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">Compliance</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-medium text-slate-200">Contact</a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center py-3 rounded-lg bg-[#C9A227] text-[#071A33] font-bold mt-4"
            >
              Contact Group
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105 transform"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071A33] via-[#071A33]/90 to-[#071A33]/70" />

        <div className="relative max-w-7xl mx-auto w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] text-xs font-bold tracking-widest uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#C9A227] animate-pulse"></span>
              Blue Line Capital Group
            </div>
            
            <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Building capital, industry and infrastructure across <span className="text-[#C9A227]">Cameroon.</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-10 max-w-2xl">
              Blue Line Capital Group is a diversified corporate group with interests in finance, foreign exchange, property, construction, manufacturing, importation, assembly and enterprise technology.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#businesses"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#C9A227] text-[#071A33] font-extrabold text-base shadow-xl shadow-[#C9A227]/25 hover:bg-[#b59020] transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Explore Our Businesses
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold text-base transition-all backdrop-blur-sm"
              >
                Contact the Group
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* KPI Stats Bar */}
      <section id="stats" className="bg-[#0D2545] py-12 border-y border-[#C9A227]/20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-[#C9A227]">7</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Legal Entities</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white">9</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Business Lines</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-[#C9A227]">4</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Currencies Tracked</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-black text-white">CEMAC</div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold">Regional Ambition</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="text-xs uppercase font-extrabold tracking-widest text-[#C9A227]">
                About Blue Line Capital Group
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight leading-tight">
                Disciplined capital deployment, industrial execution, and regional leadership.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Headquartered in Douala, Cameroon, Blue Line Capital Group operates across finance, real estate, construction, manufacturing, foreign exchange, importation, assembly and trade.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Its ambition is to build disciplined, technology-enabled commercial enterprises that contribute to industrial capacity, infrastructure delivery, foreign exchange liquidity and enterprise productivity throughout the CEMAC region and international trade corridors.
              </p>
              <div className="pt-2">
                <a 
                  href="#investments" 
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0D2545] hover:text-[#C9A227] transition-colors"
                >
                  Learn About Our Strategy <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80" 
                  alt="Blue Line Corporate Operations" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#071A33] text-white p-6 rounded-xl shadow-xl max-w-xs border border-white/10 hidden sm:block">
                <div className="text-xs uppercase tracking-wider text-[#C9A227] font-bold mb-1">Corporate HQ</div>
                <div className="text-sm font-semibold">Douala, Littoral Region, Cameroon</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Businesses Grid */}
      <section id="businesses" className="py-24 bg-[#F1F4F8] text-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="text-xs uppercase font-extrabold tracking-widest text-[#C9A227]">
              OUR BUSINESSES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              A Diversified Group of Companies
            </h2>
            <p className="text-base text-slate-600">
              From financial services and real estate to manufacturing, trade and enterprise technology — Blue Line operates across the full value chain.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {businesses.map((b, idx) => {
              const IconComp = b.icon;
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img 
                      src={b.image} 
                      alt={b.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 p-2.5 rounded-lg bg-[#071A33]/90 text-[#C9A227] backdrop-blur-sm">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                        {b.category}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0D2545] transition-colors">
                        {b.title}
                      </h3>
                      <p className="text-sm text-slate-600 mt-2.5 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>

                    <a 
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0D2545] hover:text-[#C9A227] transition-colors pt-2"
                    >
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Governance & Compliance */}
      <section id="compliance" className="py-20 bg-[#0D2545] border-t border-white/10 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <ShieldCheck className="w-12 h-12 text-[#C9A227] mx-auto mb-4" />
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Governance, Compliance & Regulatory Standards
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
            The Group's operating entities align with OHADA corporate law, SYSCOHADA accounting standards, BEAC currency regulations, COBAC banking frameworks, and CNPS statutory reporting.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-bold text-slate-200">
            {['OHADA', 'SYSCOHADA', 'BEAC', 'COBAC', 'CNPS'].map((badge) => (
              <span key={badge} className="px-4 py-2 rounded-lg bg-white/5 border border-white/15 tracking-wider">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-24 bg-gradient-to-br from-[#071A33] via-[#0D2545] to-[#071A33] text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-xs uppercase tracking-widest text-[#C9A227] font-bold">
            Connect With Blue Line
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Partner with a Group built for disciplined growth.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl mx-auto">
            Connect with Blue Line Capital Group to explore investment opportunities, strategic partnerships or corporate services across Cameroon and CEMAC.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="mailto:contact@bluelinecapitale.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#C9A227] text-[#071A33] font-bold text-base hover:bg-[#b59020] transition-transform hover:scale-105 shadow-xl"
            >
              <Mail className="w-5 h-5" />
              contact@bluelinecapitale.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#040E1C] text-slate-400 py-12 border-t border-white/5 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/blue-line-logo.png" alt="Blue Line" className="h-8 w-auto opacity-75" />
            <span>&copy; {new Date().getFullYear()} Blue Line Capital Group. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-[#C9A227]" /> Douala, Cameroon</span>
            <a href="https://bluelinecapitale.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Live Portal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
