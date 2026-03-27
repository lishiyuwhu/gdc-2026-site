"use client";

import { siteConfig } from "@/config/site";
import { siteNav } from "@/config/navigation";
import { 
  Trophy, Bot, Gamepad2, Code, Users, Calendar, 
  MapPin, ChevronRight, Play, Star, Sparkles,
  Music, Award, Monitor, Brain, Zap, Building2
} from "lucide-react";

// Icon mapping
const iconMap: Record<string, any> = {
  Bot, Gamepad2, Code, Users, Calendar, MapPin, 
  Music, Building2, Award, Monitor, Brain, Zap, Sparkles, Trophy
};

export default function Home() {
  return (
    <main className="relative">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-lg">
                GDC
              </div>
              <span className="text-xl font-bold">2026</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              {siteConfig.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <a
              href="#hero"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              开始探索
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-20">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-background" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="animate-fade-in">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-8">
              {siteConfig.hero.badge}
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 animate-slide-up">
            <span className="gradient-text">{siteConfig.hero.title}</span>
          </h1>
          
          <p className="text-2xl md:text-4xl font-bold text-white mb-4 animate-slide-up delay-100">
            {siteConfig.hero.subtitle}
          </p>
          
          <p className="text-lg text-slate-400 mb-8 animate-slide-up delay-200">
            {siteConfig.hero.date} · {siteConfig.hero.description}
          </p>
          
          <div className="flex items-center justify-center gap-4 animate-slide-up delay-300">
            <a 
              href="#keynotes"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg hover:scale-105 transition-transform glow-border"
            >
              探索主题演讲
            </a>
            <a 
              href="#trends"
              className="px-8 py-4 border border-slate-700 rounded-xl font-medium hover:bg-slate-800 transition-colors"
            >
              查看趋势分析
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 animate-slide-up delay-400">
            {siteConfig.stats.map((stat, i) => (
              <div key={i} className="glass rounded-xl p-6 glow-border">
                <div className="text-3xl md:text-4xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronRight className="w-6 h-6 text-slate-500 rotate-90" />
        </div>
      </section>

      {/* Keynotes Section */}
      <section id="keynotes" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">主题演讲</span>
            </h2>
            <p className="text-slate-400 text-lg">Keynotes</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {siteConfig.keynotes.map((keynote, i) => (
              <div 
                key={i}
                className={`relative rounded-2xl overflow-hidden glass card-hover ${
                  keynote.highlight ? 'glow-border animate-pulse-glow' : ''
                }`}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-bl-full" />
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-cyan-400">{keynote.day}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{keynote.speaker}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{keynote.title}</p>
                  <p className="text-slate-400 text-sm mb-4">{keynote.subtitle}</p>
                  <p className="text-slate-300">{keynote.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">{siteConfig.awards.title}</span>
            </h2>
            <p className="text-slate-400 text-lg">{siteConfig.awards.subtitle}</p>
          </div>
          
          {/* GDCA Highlight */}
          <div className="mb-16">
            <div className="glass rounded-2xl p-8 glow-border">
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-8 h-8 text-yellow-500" />
                <h3 className="text-2xl font-bold">Game of the Year</h3>
              </div>
              <h4 className="text-3xl font-black mb-2 gradient-text">
                {siteConfig.awards.gdca.gameOfYear}
              </h4>
              <p className="text-slate-400 mb-4">{siteConfig.awards.gdca.winner}</p>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/10 rounded-full">
                <Star className="w-4 h-4 text-yellow-500" />
                <span className="text-yellow-500 font-medium">狂揽 {siteConfig.awards.gdca.awards} 项大奖</span>
              </div>
            </div>
          </div>
          
          {/* Awards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.awards.gdca.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between p-4 glass rounded-xl">
                <span className="text-slate-400">{item.name}</span>
                <span className="font-medium text-white">{item.winner}</span>
              </div>
            ))}
          </div>
          
          {/* IGF Section */}
          <div className="mt-16 pt-16 border-t border-slate-800">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <Sparkles className="w-6 h-6 text-purple-400" />
              IGF 独立游戏节
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 glass rounded-xl">
                <p className="text-slate-400 text-sm mb-2">Grand Prize</p>
                <p className="text-xl font-bold text-purple-400">{siteConfig.awards.igf.grandPrize}</p>
              </div>
              <div className="p-6 glass rounded-xl">
                <p className="text-slate-400 text-sm mb-2">Audience Award</p>
                <p className="text-xl font-bold text-purple-400">{siteConfig.awards.igf.audienceAward}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trends Section */}
      <section id="trends" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">行业趋势</span>
            </h2>
            <p className="text-slate-400 text-lg">2026 State of the Game Industry</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {siteConfig.trends.map((trend, i) => {
              const IconComponent = iconMap[trend.icon] || Bot;
              const colorClass = {
                red: "text-red-400 bg-red-500/10",
                blue: "text-blue-400 bg-blue-500/10",
                purple: "text-purple-400 bg-purple-500/10",
                green: "text-green-400 bg-green-500/10",
              }[trend.color] || "text-cyan-400 bg-cyan-500/10";
              
              return (
                <div key={i} className="p-6 glass rounded-xl card-hover">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-lg ${colorClass}`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-white">{trend.value}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{trend.title}</h3>
                  <p className="text-sm text-slate-400 mb-3">{trend.description}</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded ${
                      trend.change.includes('+') ? 'bg-green-500/20 text-green-400' : 
                      trend.change.includes('#') ? 'bg-blue-500/20 text-blue-400' : 
                      'bg-slate-700 text-slate-300'
                    }`}>
                      {trend.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Talks Section */}
      <section id="talks" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">精彩讲座</span>
            </h2>
            <p className="text-slate-400 text-lg">Must-Watch Sessions at GDC 2026</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteConfig.talks.map((talk, i) => (
              <div key={i} className="group glass rounded-xl p-6 card-hover cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs px-2 py-1 rounded ${
                    talk.type === 'AI' ? 'bg-red-500/20 text-red-400' :
                    talk.type === 'Tech' ? 'bg-blue-500/20 text-blue-400' :
                    talk.type === 'Design' ? 'bg-purple-500/20 text-purple-400' :
                    talk.type === 'Culture' ? 'bg-green-500/20 text-green-400' :
                    'bg-cyan-500/20 text-cyan-400'
                  }`}>
                    {talk.type}
                  </span>
                  <Play className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg font-bold mb-2">{talk.title}</h3>
                <p className="text-sm text-cyan-400 mb-1">{talk.speaker}</p>
                <p className="text-xs text-slate-500">{talk.company}</p>
                <p className="text-sm text-slate-400 mt-3">{talk.topic}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GDC Nights Section */}
      <section id="nights" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">GDC Nights</span>
            </h2>
            <p className="text-slate-400 text-lg">每晚精彩不断的社交活动</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.nights.map((event, i) => {
              const IconComponent = iconMap[event.icon] || Music;
              const iconName = event.icon === 'Baseball' ? 'Stadium' : event.icon;
              const TheIcon = iconMap[iconName] || Music;
              return (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center glass glow-border">
                    <TheIcon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="font-bold mb-1">{event.name}</h3>
                  <p className="text-sm text-slate-400 mb-1">{event.place}</p>
                  <p className="text-xs text-cyan-400">{event.date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luminaries Section */}
      <section id="luminaries" className="py-24 px-6 bg-slate-950/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              <span className="gradient-text">Luminaries</span>
            </h2>
            <p className="text-slate-400 text-lg">高级决策者论坛 · 3月10-12日</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteConfig.luminaries.map((speaker, i) => (
              <div key={i} className="p-6 glass rounded-xl text-center card-hover">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-bold">
                  {speaker.name.charAt(0)}
                </div>
                <h3 className="font-bold mb-1">{speaker.name}</h3>
                <p className="text-sm text-slate-400 mb-1">{speaker.title}</p>
                <p className="text-xs text-cyan-400">{speaker.company}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold">
                GDC
              </div>
              <span className="text-xl font-bold">2026</span>
            </div>
            <p className="text-slate-500 text-sm">
              GDC Festival of Gaming 2026 · 旧金山Moscone Center
            </p>
            <div className="flex items-center gap-4">
              <a href="https://gdconf.com" target="_blank" rel="noopener" className="text-sm text-slate-400 hover:text-white transition-colors">
                官方网站
              </a>
              <a href="https://gdcvault.com" target="_blank" rel="noopener" className="text-sm text-slate-400 hover:text-white transition-colors">
                视频回放
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
