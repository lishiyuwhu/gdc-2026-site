"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import { Trophy, Calendar, MapPin, Users, ArrowRight, Star, ChevronDown, Play, Sparkles, Mic, Monitor, Music } from "lucide-react";

// ─── Section IDs ─────────────────────────────────────────────────────────────
const SECTIONS = ["hero", "keynotes", "awards", "trends", "talks", "nights", "luminaries"];

// ─── Icon map ─────────────────────────────────────────────────────────────────
const iconMap: Record<string, any> = {
  Trophy, Calendar, MapPin, Users, Star, Play, Sparkles, Mic, Monitor, Music
};

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#FF4D00] flex items-center justify-center">
            <span className="text-white font-black text-sm font-display tracking-tight">G</span>
          </div>
          <span className="font-display font-bold text-lg tracking-tight">GDC 2026</span>
        </div>
        <div className="hidden md:flex items-center gap-1">
          {[
            { label: "主题演讲", href: "#keynotes" },
            { label: "奖项", href: "#awards" },
            { label: "趋势", href: "#trends" },
            { label: "讲座", href: "#talks" },
            { label: "活动", href: "#nights" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-100 rounded-lg transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
        <a href="#keynotes" className="btn-primary text-sm py-2.5 px-5">
          立即探索
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-orange-100 via-amber-50 to-transparent rounded-full blur-3xl opacity-70 -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-zinc-100 to-transparent rounded-full blur-3xl opacity-80 translate-y-1/3" />
      
      <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="animate-fade-up opacity-0 delay-100 mb-8">
            <span className="tag tag-dark">
              <Sparkles className="w-3 h-3" />
              Festival of Gaming · 40th Anniversary
            </span>
          </div>
          
          {/* Eyebrow */}
          <p className="animate-fade-up opacity-0 delay-200 text-base font-semibold text-[#FF4D00] mb-4 tracking-wide">
            2026年3月9日—13日 · 美国旧金山
          </p>
          
          {/* Title */}
          <h1 className="animate-fade-up opacity-0 delay-300 font-display font-black text-6xl md:text-8xl lg:text-9xl tracking-tight leading-none mb-6">
            GDC
            <br />
            <span className="text-[#FF4D00]">2026</span>
          </h1>
          
          {/* Subtitle */}
          <p className="animate-fade-up opacity-0 delay-400 text-xl md:text-2xl text-zinc-500 font-medium mb-10 max-w-xl leading-relaxed">
            游戏开发者大会 · 全球游戏行业最具影响力的年度盛会
          </p>
          
          {/* CTAs */}
          <div className="animate-fade-up opacity-0 delay-500 flex flex-wrap gap-3 mb-16">
            <a href="#keynotes" className="btn-primary">
              探索主题演讲
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#awards" className="btn-outline">
              查看奖项
            </a>
          </div>
          
          {/* Stats row */}
          <div className="animate-fade-up opacity-0 delay-600 flex flex-wrap gap-8 md:gap-12">
            {siteConfig.stats.map((stat, i) => (
              <div key={i}>
                <div className="font-display font-black text-3xl md:text-4xl text-zinc-900">{stat.value}</div>
                <div className="text-sm text-zinc-500 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-fade-in opacity-0 delay-700">
        <span className="text-xs text-zinc-400 font-medium">向下滚动</span>
        <ChevronDown className="w-4 h-4 text-zinc-400 animate-float" />
      </div>
    </section>
  );
}

// ─── KEYNOTES ─────────────────────────────────────────────────────────────────
function Keynotes() {
  return (
    <section id="keynotes" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label">Keynotes</p>
          <h2 className="section-title mb-4">主题演讲</h2>
          <p className="text-zinc-500 text-lg max-w-xl">
            来自游戏行业最具影响力的人物，分享前沿洞察与深刻洞见
          </p>
        </div>
        
        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {siteConfig.keynotes.map((k, i) => (
            <div key={i} className={`card p-8 group cursor-pointer ${i === 0 ? 'md:col-span-2' : ''}`}>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="tag tag-accent">
                    <Calendar className="w-3 h-3" />
                    {k.day}
                  </span>
                  {k.highlight && (
                    <span className="tag bg-zinc-900 text-white">
                      <Star className="w-3 h-3" />
                      头条演讲
                    </span>
                  )}
                </div>
                <ArrowRight className="w-5 h-5 text-zinc-300 group-hover:text-[#FF4D00] group-hover:translate-x-1 transition-all" />
              </div>
              
              <h3 className="font-display font-bold text-2xl md:text-3xl text-zinc-900 mb-2 leading-tight">
                {k.speaker}
              </h3>
              <p className="text-[#FF4D00] font-semibold text-lg mb-3">{k.title}</p>
              <p className="text-zinc-400 font-medium text-sm mb-4">{k.subtitle}</p>
              <p className="text-zinc-600 leading-relaxed">{k.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── AWARDS ───────────────────────────────────────────────────────────────────
function Awards() {
  const gdca = siteConfig.awards.gdca;
  const igf = siteConfig.awards.igf;
  
  return (
    <section id="awards" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="section-label text-orange-400">Awards 2026</p>
          <h2 className="section-title text-white mb-4">🏆 奖项中心</h2>
          <p className="text-zinc-400 text-lg">GDCA & IGF 2026 获奖名单</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* GOTY Feature */}
          <div className="lg:col-span-2 card bg-zinc-800 border-zinc-700 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-bold text-sm uppercase tracking-wider">Game of the Year</span>
            </div>
            <h3 className="font-display font-black text-4xl md:text-5xl text-white mb-2 leading-none">
              {gdca.gameOfYear}
            </h3>
            <p className="text-zinc-400 font-medium mb-6">{gdca.winner}</p>
            <div className="flex flex-wrap gap-2">
              {gdca.items.slice(0, 5).map((item, i) => (
                <span key={i} className="text-xs px-3 py-1.5 bg-zinc-700 text-zinc-300 rounded-full font-medium">
                  {item.winner}
                </span>
              ))}
              <span className="text-xs px-3 py-1.5 bg-orange-500/20 text-orange-400 rounded-full font-bold">
                +{gdca.awards} 项大奖
              </span>
            </div>
          </div>
          
          {/* IGF */}
          <div className="card bg-zinc-800 border-zinc-700 p-8">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-bold text-sm uppercase tracking-wider">IGF Grand Prize</span>
            </div>
            <h4 className="font-display font-bold text-2xl text-white mb-1">{igf.grandPrize}</h4>
            <p className="text-zinc-500 text-sm mb-6">独立游戏节最高奖</p>
            <div className="border-t border-zinc-700 pt-4">
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-1">Audience Award</p>
              <p className="font-semibold text-zinc-200">{igf.audienceAward}</p>
            </div>
          </div>
        </div>
        
        {/* Full awards list */}
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {siteConfig.awards.gdca.items.map((item, i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-zinc-800/50 rounded-xl border border-zinc-700/50">
              <span className="text-zinc-500 text-sm">{item.name}</span>
              <span className="font-semibold text-white text-sm text-right max-w-[140px]">{item.winner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── TRENDS ───────────────────────────────────────────────────────────────────
function Trends() {
  return (
    <section id="trends" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Industry Trends</p>
          <h2 className="section-title mb-4">行业趋势</h2>
          <p className="text-zinc-500 text-lg">GDC 2026 游戏行业现状报告</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.trends.map((trend, i) => {
            const colors: Record<string, string> = {
              red: "bg-red-50 text-red-600",
              blue: "bg-blue-50 text-blue-600",
              purple: "bg-purple-50 text-purple-600",
              green: "bg-green-50 text-green-600",
              orange: "bg-orange-50 text-orange-600",
            };
            const color = colors[trend.color] || colors.blue;
            const IconComponent = iconMap[trend.icon] || Star;
            
            return (
              <div key={i} className="card p-6">
                <div className="flex items-start justify-between mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${color}`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>
                <div className="text-3xl font-display font-black text-zinc-900 mb-1">{trend.value}</div>
                <h3 className="font-semibold text-zinc-800 mb-2 leading-snug">{trend.title}</h3>
                <p className="text-sm text-zinc-500 leading-relaxed mb-4">{trend.description}</p>
                <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full ${
                  trend.change.includes('+') ? 'bg-green-100 text-green-700' :
                  trend.change.includes('#') ? 'bg-blue-100 text-blue-700' :
                  'bg-zinc-100 text-zinc-600'
                }`}>
                  {trend.change}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── TALKS ────────────────────────────────────────────────────────────────────
function Talks() {
  const typeColors: Record<string, string> = {
    AI: "bg-red-50 text-red-600 border-red-100",
    Tech: "bg-blue-50 text-blue-600 border-blue-100",
    Design: "bg-purple-50 text-purple-600 border-purple-100",
    Culture: "bg-green-50 text-green-600 border-green-100",
    Marketing: "bg-amber-50 text-amber-600 border-amber-100",
  };
  
  return (
    <section id="talks" className="py-24 md:py-32 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Must-Watch Sessions</p>
          <h2 className="section-title mb-4">精彩讲座</h2>
          <p className="text-zinc-500 text-lg">GDC 2026 最值得关注的技术与创意分享</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {siteConfig.talks.map((talk, i) => (
            <div key={i} className="card p-6 group cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${typeColors[talk.type] || typeColors.Tech}`}>
                  {talk.type}
                </span>
                <Play className="w-4 h-4 text-zinc-300 group-hover:text-[#FF4D00] transition-colors" />
              </div>
              <h3 className="font-semibold text-zinc-900 mb-2 leading-snug">{talk.title}</h3>
              <p className="text-sm text-[#FF4D00] font-semibold mb-0.5">{talk.speaker}</p>
              <p className="text-xs text-zinc-400 mb-3">{talk.company}</p>
              <p className="text-sm text-zinc-500 leading-relaxed border-t border-zinc-100 pt-3">
                {talk.topic}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── NIGHTS ───────────────────────────────────────────────────────────────────
function Nights() {
  return (
    <section id="nights" className="py-24 md:py-32 bg-zinc-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label text-orange-400">GDC Nights</p>
          <h2 className="section-title text-white mb-4">社交活动</h2>
          <p className="text-zinc-400 text-lg">每晚与同行交流的绝佳机会</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.nights.map((event, i) => {
            const IconComponent = iconMap[event.icon] || Music;
            return (
              <div key={i} className="relative p-6 bg-zinc-800 rounded-2xl border border-zinc-700 overflow-hidden group hover:bg-zinc-700 transition-colors">
                {/* Decorative */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-orange-500/20 to-transparent rounded-bl-full" />
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                    <IconComponent className="w-6 h-6 text-orange-400" />
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-1">{event.name}</h3>
                  <p className="text-zinc-400 text-sm mb-0.5">{event.place}</p>
                  <p className="text-orange-400 text-xs font-semibold">{event.date}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── LUMINARIES ────────────────────────────────────────────────────────────────
function Luminaries() {
  return (
    <section id="luminaries" className="py-24 md:py-32 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="section-label">Luminaries</p>
          <h2 className="section-title mb-4">领袖论坛</h2>
          <p className="text-zinc-500 text-lg">高级决策者论坛 · 3月10-12日</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.luminaries.map((speaker, i) => (
            <div key={i} className="card p-6 text-center group">
              {/* Avatar */}
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF4D00] to-amber-400 flex items-center justify-center">
                <span className="text-2xl font-black text-white font-display">
                  {speaker.name.charAt(0)}
                </span>
              </div>
              <h3 className="font-display font-bold text-zinc-900 mb-1">{speaker.name}</h3>
              <p className="text-sm text-zinc-600 mb-1 leading-snug">{speaker.title}</p>
              <p className="text-xs text-[#FF4D00] font-semibold">{speaker.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="py-12 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FF4D00] flex items-center justify-center">
              <span className="text-white font-black text-sm font-display">G</span>
            </div>
            <span className="font-display font-bold text-white text-lg">GDC 2026</span>
          </div>
          <p className="text-zinc-500 text-sm">
            GDC Festival of Gaming 2026 · 旧金山 Moscone Center
          </p>
          <div className="flex items-center gap-6">
            <a href="https://gdconf.com" target="_blank" rel="noopener" className="text-sm text-zinc-400 hover:text-white transition-colors">
              官方网站
            </a>
            <a href="https://gdcvault.com" target="_blank" rel="noopener" className="text-sm text-zinc-400 hover:text-white transition-colors">
              视频回放
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="noise">
      <Nav />
      <Hero />
      <Keynotes />
      <Awards />
      <Trends />
      <Talks />
      <Nights />
      <Luminaries />
      <Footer />
    </main>
  );
}
