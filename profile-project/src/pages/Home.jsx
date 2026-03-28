import React from 'react';
import { Link } from 'react-router-dom';

const members = [
  {
    name: 'Amira Salma Nafisa',
    role: 'Teknologi Informasi',
    kelas: 'T2C',
    domisili: 'Malang, Jawa Timur',
    path: '/amira-salma-nafisa',
    accent: '#D4A853',
    tag: 'Ketua Tim',
    image: '/image-amira/pasfoto.png',
  },
  {
    name: 'Farah Naylul Fauzia',
    role: 'Teknologi Informasi',
    kelas: 'T2C',
    domisili: 'Blitar, Jawa Timur',
    path: '/farah-naylul-fauzia',
    accent: '#C47EB5',
    tag: 'Anggota',
    image: '/image/profile.png',
  },
  {
    name: 'Yasmine Shavira Ahmad',
    role: 'Teknologi Informasi',
    kelas: 'T2C',
    domisili: 'Malang, Jawa Timur',
    path: '/yasmine-shavira-ahmad',
    accent: '#4680ba',
    tag: 'Anggota',
    image: '/image-yasmine/yasmine.png',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece4]">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />

      <header className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">
        <p
          className="text-xs tracking-[0.4em] uppercase mb-4"
          style={{ color: '#D4A853', fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
        >
          Universitas Brawijaya · Fakultas Vokasi · 2024/2025
        </p>
        <h1
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.05, fontWeight: 700 }}
        >
          Tim <span style={{ color: '#D4A853', fontStyle: 'italic' }}>T2C</span>
        </h1>
        <p className="mt-4 text-[#888] text-base tracking-wide" style={{ fontFamily: 'Outfit, sans-serif' }}>
          Teknologi Informasi · Project Implementation
        </p>
        <div className="flex items-center gap-4 mt-10 justify-center">
          <div className="h-px flex-1 max-w-[80px] bg-[#333]" />
          <span className="text-[#D4A853] text-lg">✦</span>
          <div className="h-px flex-1 max-w-[80px] bg-[#333]" />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {members.map((m, i) => (
            <Link
              key={i}
              to={m.path}
              className="group relative block rounded-2xl overflow-hidden border border-[#1e1e1e] hover:border-[#333] transition-all duration-500"
              style={{ background: '#141414' }}
            >
              <div className="h-[3px] w-full" style={{ background: m.accent }} />
              <div className="p-8">
                <div
                  className="w-16 h-16 rounded-xl overflow-hidden mb-6"
                  style={{ border: `2px solid ${m.accent}` }}
                >
                  {m.image ? (
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ background: m.accent }}
                    >
                      <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 700, color: '#0e0e0e' }}>
                        {m.initials}
                      </span>
                    </div>
                  )}
                </div>
                <span
                  className="text-[10px] tracking-[0.3em] uppercase px-2 py-1 rounded-full"
                  style={{ color: m.accent, background: m.accent + '18', fontFamily: 'Outfit, sans-serif' }}
                >
                  {m.tag}
                </span>
                <h2
                  className="mt-3 text-[#f0ece4] leading-tight group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 600 }}
                >
                  {m.name}
                </h2>
                <div className="mt-3 space-y-1">
                  <p className="text-[#666] text-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    {m.role} · Kelas {m.kelas}
                  </p>
                  <p className="text-[#555] text-xs" style={{ fontFamily: 'Outfit, sans-serif' }}>
                    📍 {m.domisili}
                  </p>
                </div>
                <div
                  className="mt-6 flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300"
                  style={{ color: m.accent, fontFamily: 'Outfit, sans-serif' }}
                >
                  Lihat Profil <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center py-8 text-[#444] text-xs tracking-widest border-t border-[#1a1a1a]"
        style={{ fontFamily: 'Outfit, sans-serif' }}>
        PROJECT-BASED TASK · REACTJS + GITHUB · BRAWIJAYA 2025
      </footer>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
    </div>
  );
}