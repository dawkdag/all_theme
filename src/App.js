import React, { useState } from 'react';

import imgAzorDarkGold from './assets/azor-dark-gold.jpg';
import imgazor from './assets/azor.jpg';
import imgDarkMaroon from './assets/dark-maroon.jpg';
import imgDarkOrange from './assets/dark-orange.jpg';
import imgGGGolden001 from './assets/goodgame-golden-001.jpg';
import imgZeed from './assets/goodgame-zeed.jpg';
import imgHuayChokdy from './assets/huay-chokdy.jpg';
import imgRoseGoldRoyal from './assets/rose-gold-royal.jpg';
import imgS2KDark from './assets/s2k-dark-gold.jpg';
import imgS2KOrange from './assets/s2k-orange.jpg';
import imgS2K from './assets/s2kauto.jpg';
import imgSingGreenGold from './assets/sing-green-gold.jpg';
import imgUfaGolden001 from './assets/ufa-golden-001.jpg';
import imgUfaWin from './assets/ufa-win.jpg';
import imgUfa24 from './assets/ufa24.jpg';
import imgWhiteOrange from './assets/white-orange.jpg';

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
  Elegant: 'bg-yellow-800 text-yellow-100',
  Green: 'bg-green-800 text-green-100',
  Orange: 'bg-orange-700 text-orange-100',
  Light: 'bg-zinc-400 text-zinc-900',
  Blue: 'bg-blue-800 text-blue-100',
  Maroon: 'bg-red-950 text-red-200',
  Black: 'bg-zinc-800 text-zinc-100',
  Lottery: 'bg-sky-800 text-sky-100',
  Crimson: 'bg-red-900 text-red-100',
};

const THEMES = [
  {
    id: 'ufa24',
    name: 'UFA 24',
    slug: 'ufa24',
    tags: ['Dark', 'Gold', 'Classic'],
    colors: ['#1a1a1a', '#FFD700', '#8B0000', '#ffffff'],
    colorNames: ['Background', 'Gold Accent', 'CTA Red', 'Text'],
    description:
      'Dark gold theme สไตล์คาสิโนคลาสสิก เหมาะสำหรับ brand ที่ต้องการความหรูหราและน่าเชื่อถือ',
    noteUrl: 'https://ufa24h-laos.com/',
    img: imgUfa24,
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
    img: imgGGGolden001,
  },
  {
    id: 'rose-gold-royal',
    name: 'Rose Gold Royal',
    slug: 'rose-gold-royal',
    tags: ['Pink', 'Rose Gold', 'Feminine'],
    colors: ['#FF1493', '#FFB6C1', '#111111', '#ffffff'],
    colorNames: ['Hot Pink', 'Rose Gold', 'Background', 'Text'],
    description:
      'Pink & rose gold theme สดใสโดดเด่น เหมาะกับ brand ที่ต้องการจับกลุ่ม lifestyle หรือ feminine',
    noteUrl: '#',
    img: imgRoseGoldRoyal,
  },
  {
    id: 's2kauto',
    name: 'S2K Auto',
    slug: 's2kauto',
    tags: ['Red', 'Bold', 'Sport'],
    colors: ['#8B0000', '#CC0000', '#FFD700', '#ffffff'],
    colorNames: ['Deep Red', 'Primary Red', 'Gold Accent', 'Text'],
    description:
      'Bold red theme พลังแรงสไตล์ sport betting เหมาะกับ brand ที่ต้องการความมั่นใจ',
    noteUrl: 'https://s2k-won.bet/',
    img: imgS2K,
  },
  {
    id: 'ufa-golden-001',
    name: 'UFA Golden 001',
    slug: 'ufa-golden-dark-001',
    tags: ['Dark', 'Gold', 'Luxury'],
    colors: ['#0a0a0a', '#B8860B', '#D4AF37', '#9e9e9e'],
    colorNames: ['Black', 'Dark Gold', 'Bright Gold', 'Muted Text'],
    description:
      'Ultra dark luxury theme สีดำลึกกับ dark gold accent ความหรูหราระดับ premium สุดๆ',
    noteUrl: 'https://ufa11k-laos.com/',
    img: imgUfaGolden001,
  },
  {
    id: 'zeed',
    name: 'GG Zeed',
    slug: 'goodgame-zeed',
    tags: ['Dark', 'Yellow', 'Clean'],
    colors: ['#1c1c1c', '#F5C518', '#2a2a2a', '#ffffff'],
    colorNames: ['Background', 'Yellow Accent', 'Card BG', 'Text'],
    description:
      'Dark clean theme กับ yellow accent ดีไซน์โมเดิร์น เน้น UX ที่ดีและ readability',
    noteUrl: 'https://zeed888.co/',
    img: imgZeed,
  },
  {
    id: 'azor',
    name: 'Azor',
    slug: 'azor',
    tags: ['Red', 'Gradient', 'Dynamic'],
    colors: ['#CC0000', '#FF4444', '#8B0000', '#ffffff'],
    colorNames: ['Primary Red', 'Light Red', 'Dark Red', 'Text'],
    description:
      'Dynamic red gradient theme สไตล์ action ดูมีมิติ เหมาะกับ brand ที่ต้องการความ dynamic',
    noteUrl: 'https://fifa789laos.com/',
    img: imgazor,
  },
  {
    id: 's2k-dark-gold',
    name: 'S2K Dark Gold',
    slug: 's2k-dark-gold',
    tags: ['Black', 'Gold', 'Elegant'],
    colors: ['#0D0D0D', '#FFC107', '#1A1A1A', '#ffffff'],
    colorNames: ['Deep Black', 'Gold Accent', 'Dark Panel', 'Text'],
    description:
      'ธีมดำ-ทองหรูหรา พื้นหลังดำสนิทตัดกับเส้นขอบและจุดไฮไลต์สีทอง ให้ความรู้สึกพรีเมียม เหมาะกับ brand ที่ต้องการความ exclusive',
    noteUrl: '#',
    img: imgS2KDark,
  },
  {
    id: 'azor-dark-gold',
    name: 'Azor Dark Gold',
    slug: 'azor-dark-gold',
    tags: ['Crimson', 'Gold', 'Elegant'],
    colors: ['#1a0505', '#ffd700', '#8B0000', '#ffffff'],
    colorNames: ['Dark Crimson BG', 'Gold Accent', 'Deep Red', 'Text'],
    description:
      'Crimson dark theme กับ gold accent หรูหราแบบ dark luxury เหมาะกับ brand ที่ต้องการความ exclusive สไตล์ dark casino',
    noteUrl: '#',
    img: imgAzorDarkGold,
  },
  {
    id: 'sing-green-gold',
    name: 'Sing Green Gold',
    slug: 'sing-green-gold',
    tags: ['Dark', 'Green', 'Gold'],
    colors: ['#0a1a0a', '#22c55e', '#facc15', '#ffffff'],
    colorNames: ['Dark Green BG', 'Green Accent', 'Gold Highlight', 'Text'],
    description:
      'Dark green & gold theme ความสดชื่นพร้อมความหรูหรา เหมาะกับ brand ที่ต้องการความแตกต่างจากธีมแดง-ทองทั่วไป',
    noteUrl: '#',
    img: imgSingGreenGold,
  },
  {
    id: 'dark-orange',
    name: 'Dark Orange',
    slug: 'dark-orange',
    tags: ['Dark', 'Orange', 'Bold'],
    colors: ['#0a0a0c', '#ff6b35', '#1a1a1d', '#ffffff'],
    colorNames: ['Dark BG', 'Orange Accent', 'Card BG', 'Text'],
    description:
      'Dark theme กับ vibrant orange accent พลังงานสูง ดูมีพลัง เหมาะกับ brand ที่ต้องการโทนสีที่ดูแตกต่างและโดดเด่น',
    noteUrl: '#',
    img: imgDarkOrange,
  },
  {
    id: 'white-orange',
    name: 'White Orange',
    slug: 'white-orange',
    tags: ['Light', 'Orange', 'Clean'],
    colors: ['#ffffff', '#ff6b35', '#f5f5f5', '#111111'],
    colorNames: ['White BG', 'Orange Accent', 'Light Card', 'Text'],
    description:
      'Light theme สะอาดสดใสกับ orange accent เหมาะกับ brand ที่ต้องการ UI ที่ดูเปิดโล่ง อ่านง่าย ไม่หนักตา',
    noteUrl: '#',
    img: imgWhiteOrange,
  },
  {
    id: 'dark-maroon',
    name: 'Dark Maroon',
    slug: 'dark-maroon',
    tags: ['Dark', 'Maroon', 'Luxury'],
    colors: ['#0d0505', '#800020', '#5c0018', '#f5e6e8'],
    colorNames: ['Almost Black', 'Maroon', 'Deep Maroon', 'Warm White'],
    description:
      'Deep maroon & dark theme ความหรูหราแบบ wine & dine สไตล์ exclusive VIP ให้ความรู้สึก upscale สุดๆ',
    noteUrl: '#',
    img: imgDarkMaroon,
  },
  {
    id: 'huay-chokdy',
    name: 'Huay Chokdy',
    slug: 'huay-chokdy',
    tags: ['Blue', 'Light', 'Lottery'],
    colors: ['#dff5ff', '#359cf6', '#0057b7', '#111820'],
    colorNames: ['Light Blue BG', 'Blue Accent', 'Deep Blue', 'Dark Text'],
    description:
      'Light blue lottery theme สะอาดสดใส เน้น lottery/lotto สไตล์ไทย เหมาะกับเว็บหวยหรือเกมส์ที่ต้องการ UI สว่างอ่านง่าย',
    noteUrl: '#',
    img: imgHuayChokdy,
  },
  {
    id: 'ufa-win',
    name: 'UFA Win',
    slug: 'ufa-win',
    tags: ['Dark', 'Gold', 'Luxury'],
    colors: ['#09070d', '#f5c76b', '#c49a2e', '#fff7df'],
    colorNames: ['Deep Dark BG', 'Gold Accent', 'Dark Gold', 'Warm White Text'],
    description:
      'Dark luxury gold theme สไตล์ UFA premium พื้นหลังดำอบอุ่น ตัดกับ gold ที่หรูหรา เหมาะกับ brand UFA ระดับสูง',
    noteUrl: '#',
    img: imgUfaWin,
  },
  {
    id: 's2k-orange',
    name: 'S2K Orange',
    slug: 's2k-orange',
    tags: ['Dark', 'Orange', 'Sport'],
    colors: ['#0a0a0c', '#ff6600', '#ce4402', '#ffffff'],
    colorNames: ['Dark BG', 'Vivid Orange', 'Deep Orange', 'Text'],
    description:
      'S2K brand theme สไตล์ sporty กับ vivid orange ดูมีพลัง แข็งแกร่ง เหมาะกับ brand S2K ที่ต้องการความ bold และ dynamic',
    noteUrl: '#',
    img: imgS2KOrange,
  },
];

const ITEMS_PER_PAGE = 8;

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
            <div className="relative overflow-hidden  bg-black">
              <img
                src={theme.img}
                alt={theme.name}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
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

      {filtered.length === 0 && (
        <p className="px-6 pb-6 text-sm text-zinc-500">No themes found.</p>
      )}

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
            className="bg-zinc-900 border border-zinc-700 rounded-2xl w-full max-w-5xl overflow-hidden shadow-2xl"
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
                className="rounded-lg w-full object-contain border border-zinc-800 bg-black"
                style={{ maxHeight: 'calc(100vh - 240px)' }}
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
