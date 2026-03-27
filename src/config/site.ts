// GDC 2026 Website Configuration
export const siteConfig = {
  name: "GDC 2026",
  tagline: "游戏开发者大会",
  description: "GDC Festival of Gaming 2026 - 游戏行业最具影响力的年度盛会",
  url: "https://gdc2026.example.com",
  
  // Hero Section
  hero: {
    badge: "🎮 Festival of Gaming 2026",
    title: "GDC 2026",
    subtitle: "游戏开发者大会",
    date: "2026年3月9日 - 13日 | 美国旧金山",
    description: "全球游戏行业最具影响力的年度盛会，汇聚顶尖开发者、发行商与创新技术",
  },
  
  // Core Stats
  stats: [
    { value: "~30,000", label: "参会者" },
    { value: "200+", label: "讲座" },
    { value: "100+", label: "国家" },
    { value: "40", label: "周年庆" },
  ],
  
  // Keynotes
  keynotes: [
    {
      speaker: "小岛秀夫",
      title: "Restarting from Zero",
      subtitle: "KOJIMA PRODUCTIONS 创始人",
      description: "五年来首位进行主题演讲的嘉宾，分享从零开始建立工作室的历程与创业心得",
      day: "3月12日",
      highlight: true,
    },
    {
      speaker: "Rob Pardo",
      title: "An Odyssey in Building Games That Last",
      subtitle: "Bonfire Studios 创始人 / 暴雪前首席创意官",
      description: "暴雪黄金时代的缔造者，分享打造长寿游戏的秘诀与团队文化建设",
      day: "3月12日",
      highlight: true,
    },
  ],
  
  // Awards
  awards: {
    title: "🏆 奖项中心",
    subtitle: "GDCA & IGF 2026",
    gdca: {
      gameOfYear: "Clair Obscur: Expedition 33",
      winner: "Sandfall Interactive",
      awards: 5,
      items: [
        { name: "Game of the Year", winner: "Clair Obscur: Expedition 33" },
        { name: "Best Debut", winner: "Clair Obscur: Expedition 33" },
        { name: "Best Visual Art", winner: "Clair Obscur: Expedition 33" },
        { name: "Best Narrative", winner: "Clair Obscur: Expedition 33" },
        { name: "Best Audio", winner: "Clair Obscur: Expedition 33" },
        { name: "Best Design", winner: "Blue Prince" },
        { name: "Innovation Award", winner: "Blue Prince" },
        { name: "Best Technology", winner: "Death Stranding 2" },
      ],
    },
    igf: {
      grandPrize: "Titanium Court",
      audienceAward: "ChromaCorp",
      categories: [
        { name: "Grand Prize", winner: "Titanium Court" },
        { name: "Excellence in Design", winner: "Baby Steps" },
        { name: "Excellence in Narrative", winner: "Baby Steps" },
        { name: "Excellence in Audio", winner: "BALL X PIT" },
      ],
    },
  },
  
  // AI & Tech Trends
  trends: [
    {
      icon: "Bot",
      title: "AI担忧创历史新高",
      value: "52%",
      change: "+22%",
      description: "开发者认为生成式AI将对游戏行业产生负面影响",
      color: "red",
    },
    {
      icon: "Gamepad2",
      title: "Steam Deck崛起",
      value: "28%",
      change: "#4",
      description: "开发者为Steam Deck制作或优化游戏的比例",
      color: "blue",
    },
    {
      icon: "Code",
      title: "引擎格局",
      value: "Unreal 42%",
      change: "Unity 30%",
      description: "Unreal Engine成为最常用游戏引擎",
      color: "purple",
    },
    {
      icon: "Users",
      title: "工会化支持",
      value: "82%",
      change: "+18%",
      description: "美国开发者支持游戏行业工作者工会化",
      color: "green",
    },
  ],
  
  // Must-Watch Talks
  talks: [
    {
      title: "Tencent AI动画工具",
      speaker: "Elvis Liu",
      company: "MoreFun Studios",
      topic: "实时AI生成功夫动作",
      type: "AI",
    },
    {
      title: "Donkey Kong Bananza体素技术",
      speaker: "Kenta Motokura",
      company: "Nintendo EPD",
      topic: "体素碰撞与毁灭链设计",
      type: "Tech",
    },
    {
      title: "Despelote即兴开发",
      speaker: "Julián Cordero",
      company: "Panic",
      topic: "即兴表演驱动游戏真实性",
      type: "Design",
    },
    {
      title: "Battlefield 6动作编排",
      speaker: "Jac Carlsson",
      company: "DICE",
      topic: "舞蹈编排与游戏手感",
      type: "Design",
    },
    {
      title: "Peak独立游戏开发",
      speaker: "Nick Kaman",
      company: "Aggro Crab",
      topic: "文本即恶魔：开发文化变革",
      type: "Culture",
    },
    {
      title: "Gen Z市场营销",
      speaker: "Sharon Tal Yguado",
      company: "Astrid Entertainment",
      topic: "真实性是货币",
      type: "Marketing",
    },
  ],
  
  // Night Events
  nights: [
    { name: "Opening Night", place: "Oracle Park", date: "3月9日", icon: "Building2" },
    { name: "Developer's Concert", place: "Moscone Center", date: "3月10日", icon: "Music" },
    { name: "IGF Awards", place: "Moscone Center", date: "3月11日", icon: "Trophy" },
    { name: "GDCA", place: "Moscone Center", date: "3月12日", icon: "Award" },
  ],
  
  // Luminaries Speakers
  luminaries: [
    { name: "Bryan Catanzaro", title: "VP, Applied Deep Learning", company: "NVIDIA" },
    { name: "Julien Merceron", title: "CTO", company: "Bandai Namco" },
    { name: "Justin Scarpone", title: "EVP & Global Head of Transmedia", company: "SEGA" },
    { name: "Zhen Zhai", title: "Associate Director, Applied Science", company: "Blizzard" },
  ],
  
  // Navigation
  nav: [
    { label: "概览", href: "#hero" },
    { label: "主题演讲", href: "#keynotes" },
    { label: "奖项", href: "#awards" },
    { label: "趋势", href: "#trends" },
    { label: "讲座", href: "#talks" },
    { label: "活动", href: "#nights" },
  ],
};

export type SiteConfig = typeof siteConfig;
