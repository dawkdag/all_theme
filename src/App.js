import React, { useState } from 'react';

const tagColors = {
  Dark: 'bg-gray-700 text-gray-200',
  Gold: 'bg-yellow-700 text-yellow-100',
  Classic: 'bg-orange-900 text-orange-200',
  Amber: 'bg-amber-800 text-amber-100',
  Modern: 'bg-blue-900 text-blue-200',
  Pink: 'bg-pink-800 text-pink-100',
  'Rose Gold': 'bg-rose-700 text-rose-100',
  Feminine: 'bg-fuchsia-900 text-fuchsia-200',
  Red: 'bg-red-900 text-red-200',
  Bold: 'bg-red-800 text-red-100',
  Sport: 'bg-orange-800 text-orange-100',
  Luxury: 'bg-yellow-900 text-yellow-100',
  Yellow: 'bg-yellow-700 text-yellow-100',
  Clean: 'bg-zinc-600 text-zinc-100',
  Gradient: 'bg-rose-900 text-rose-100',
  Dynamic: 'bg-orange-900 text-orange-100',
};

const THEMES = [
  {
    id: '24h',
    name: '24H',
    slug: 'ufa24h-laos',
    tags: ['Dark', 'Gold', 'Classic'],
    colors: ['#1a1a1a', '#FFD700', '#8B0000', '#ffffff'],
    colorNames: ['Background', 'Gold Accent', 'CTA Red', 'Text'],
    description:
      'Dark gold theme สไตล์คาสิโนคลาสสิก เหมาะสำหรับ brand ที่ต้องการความหรูหราและน่าเชื่อถือ',
    noteUrl: 'https://ufa24h-laos.com/',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/f_auto,q_auto/24h_cthu4f",
  },
  {
    id: 'gg-golden-001',
    name: 'GG Golden 001',
    slug: 'goodgame-golden-001',
    tags: ['Dark', 'Amber', 'Modern'],
    colors: ['#111111', '#F59E0B', '#facc15', '#e5e7eb'],
    colorNames: ['Background', 'Amber Primary', 'Gold Highlight', 'Text'],
    description:
      'Modern dark theme กับ amber accent ดีไซน์สะอาด เหมาะกับ brand สาย premium',
    noteUrl: '#',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615307/gg-golden-001_ejatx4.webp",
  },
  {
    id: 'rose-gold-royal',
    name: 'Rose Gold Royal',
    slug: 'moowan-rose-gold',
    tags: ['Pink', 'Rose Gold', 'Feminine'],
    colors: ['#FF1493', '#FFB6C1', '#111111', '#ffffff'],
    colorNames: ['Hot Pink', 'Rose Gold', 'Background', 'Text'],
    description:
      'Pink & rose gold theme สดใสโดดเด่น เหมาะกับ brand ที่ต้องการจับกลุ่ม lifestyle หรือ feminine',
    noteUrl: '#',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615487/rose-gold-royal_ovjdr8.webp",
  },
  {
    id: 's2k',
    name: 'S2K',
    slug: 's2kbet',
    tags: ['Red', 'Bold', 'Sport'],
    colors: ['#8B0000', '#CC0000', '#FFD700', '#ffffff'],
    colorNames: ['Deep Red', 'Primary Red', 'Gold Accent', 'Text'],
    description:
      'Bold red theme พลังแรงสไตล์ sport betting เหมาะกับ brand ที่ต้องการความมั่นใจ',
    noteUrl: 'https://s2k-won.bet/',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615507/s2k_w69wht.webp",
  },
  {
    id: 'ufa-golden-001',
    name: 'UFA Golden 001',
    slug: 'ufabet-golden',
    tags: ['Dark', 'Gold', 'Luxury'],
    colors: ['#0a0a0a', '#B8860B', '#D4AF37', '#9e9e9e'],
    colorNames: ['Black', 'Dark Gold', 'Bright Gold', 'Muted Text'],
    description:
      'Ultra dark luxury theme สีดำลึกกับ dark gold accent ความหรูหราระดับ premium สุดๆ',
    noteUrl: 'https://ufa11k-laos.com/',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615549/gg-golden-001_sp6quk.webp",
  },
  {
    id: 'zeed',
    name: 'Zeed',
    slug: 'zeed-dark',
    tags: ['Dark', 'Yellow', 'Clean'],
    colors: ['#1c1c1c', '#F5C518', '#2a2a2a', '#ffffff'],
    colorNames: ['Background', 'Yellow Accent', 'Card BG', 'Text'],
    description:
      'Dark clean theme กับ yellow accent ดีไซน์โมเดิร์น เน้น UX ที่ดีและ readability',
    noteUrl: 'https://zeed888.co/',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615565/zeed_d4xcmf.webp",
  },
  {
    id: 'azor',
    name: 'Azor',
    slug: 'azor-red',
    tags: ['Red', 'Gradient', 'Dynamic'],
    colors: ['#CC0000', '#FF4444', '#8B0000', '#ffffff'],
    colorNames: ['Primary Red', 'Light Red', 'Dark Red', 'Text'],
    description:
      'Dynamic red gradient theme สไตล์ action ดูมีมิติ เหมาะกับ brand ที่ต้องการความ dynamic',
    noteUrl: 'https://fifa789laos.com/',
    img: "https://res.cloudinary.com/dx0uy9ozk/image/upload/v1781615577/Azor_u5lllo.webp",
  },
];

export default function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const allTags = [
    'All',
    ...Array.from(new Set(THEMES.flatMap((t) => t.tags))),
  ];

  const filtered = THEMES.filter((t) => {
    const matchSearch =
      t.name.toLowerCase().includes(search.toLowerCase()) ||
      t.tags.some((tag) => tag.toLowerCase().includes(search.toLowerCase()));
    const matchTag = activeTag === 'All' || t.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div
      className="min-h-screen bg-zinc-950 text-white"
      style={{ fontFamily: 'system-ui, sans-serif' }}
    >
      {/* Header */}
      <div className="border-b border-zinc-800 px-6 py-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-bold tracking-tight text-white">
              🎨 Theme Gallery
            </h1>
            <p className="text-zinc-400 text-sm mt-0.5">
              {THEMES.length} themes available
            </p>
          </div>
          <input
            type="text"
            placeholder="Search themes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-zinc-800 border border-zinc-700 text-white text-sm rounded-lg px-4 py-2 w-52 focus:outline-none focus:ring-2 focus:ring-amber-500 placeholder-zinc-500"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                activeTag === tag
                  ? 'bg-amber-500 text-black'
                  : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map((theme) => (
          <div
            key={theme.id}
            onClick={() => setSelected(theme)}
            className="group cursor-pointer rounded-xl overflow-hidden border border-zinc-800 hover:border-amber-500 transition-all duration-200 bg-zinc-900 hover:shadow-xl"
          >
            <div className="relative overflow-hidden h-40">
              <img
                src={theme.img}
                alt={theme.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end p-3">
                <span className="text-white text-xs font-medium">
                  Click to preview →
                </span>
              </div>
            </div>
            <div className="p-4">
              <h2 className="font-semibold text-white text-sm mb-0.5">
                {theme.name}
              </h2>
              <p className="text-zinc-500 text-xs font-mono mb-2">
                {theme.slug}
              </p>
              <p className="text-zinc-400 text-xs leading-relaxed mb-3">
                {theme.description}
              </p>
              {theme.noteUrl && (
                <p className="text-xs mb-3">
                  <span className="text-zinc-500">หมายเหตุ: </span>
                  <a
                    href={theme.noteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                  >
                    {theme.noteUrl}
                  </a>
                </p>
              )}
              <div className="flex flex-wrap gap-1 mb-3">
                {theme.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                      tagColors[tag] || 'bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-1.5">
                {theme.colors.map((color, i) => (
                  <div
                    key={i}
                    title={theme.colorNames[i]}
                    className="w-4 h-4 rounded-full border border-zinc-700"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{
            backgroundColor: 'rgba(0,0,0,0.85)',
            backdropFilter: 'blur(4px)',
          }}
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
              <div>
                <h2 className="font-bold text-lg text-white">
                  {selected.name}
                </h2>
                <p className="text-zinc-400 text-xs font-mono">
                  {selected.slug}
                </p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-zinc-500 hover:text-white text-2xl w-8 h-8 flex items-center justify-center"
              >
                ✕
              </button>
            </div>
            <div className="bg-zinc-950 p-4">
              <img
                src={selected.img}
                alt={selected.name}
                className="rounded-lg w-full object-cover object-top border border-zinc-800"
                style={{ maxHeight: '420px' }}
              />
            </div>
            <div className="px-6 py-4 border-t border-zinc-800 flex flex-wrap gap-6 items-start">
              <div className="flex-1 min-w-48">
                <p className="text-zinc-300 text-sm leading-relaxed mb-3">
                  {selected.description}
                </p>
                {selected.noteUrl && (
                  <p className="text-sm mb-3">
                    <span className="text-zinc-500">หมายเหตุ: </span>
                    <a
                      href={selected.noteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                    >
                      {selected.noteUrl}
                    </a>
                  </p>
                )}
                <div className="flex flex-wrap gap-1.5">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        tagColors[tag] || 'bg-zinc-700 text-zinc-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-zinc-500 text-xs mb-2 uppercase tracking-wide">
                  Color Palette
                </p>
                <div className="flex gap-2 flex-wrap">
                  {selected.colors.map((color, i) => (
                    <div key={i} className="text-center">
                      <div
                        className="w-8 h-8 rounded-md border border-zinc-700 mb-1"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-zinc-500 text-xs block">
                        {selected.colorNames[i]}
                      </span>
                      <span className="text-zinc-600 text-xs font-mono">
                        {color}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-6 py-3 border-t border-zinc-800 flex justify-between">
              <button
                onClick={() => {
                  const idx = THEMES.findIndex((t) => t.id === selected.id);
                  setSelected(
                    THEMES[(idx - 1 + THEMES.length) % THEMES.length]
                  );
                }}
                className="text-zinc-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-zinc-800"
              >
                ← Prev
              </button>
              <span className="text-zinc-600 text-xs self-center">
                {THEMES.findIndex((t) => t.id === selected.id) + 1} /{' '}
                {THEMES.length}
              </span>
              <button
                onClick={() => {
                  const idx = THEMES.findIndex((t) => t.id === selected.id);
                  setSelected(THEMES[(idx + 1) % THEMES.length]);
                }}
                className="text-zinc-400 hover:text-white text-sm px-3 py-1.5 rounded-lg hover:bg-zinc-800"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
