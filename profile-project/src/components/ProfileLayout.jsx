import React from 'react';
import { Link } from 'react-router-dom';

export default function ProfileLayout({
  name, age, kelas, prodi, domisili, about, accent,
}) {
  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f0ece4]">
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }} />

      <nav className="max-w-4xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: '#666', fontFamily: 'Outfit, sans-serif' }}
          onMouseEnter={e => e.currentTarget.style.color = accent}
          onMouseLeave={e => e.currentTarget.style.color = '#666'}
        >
          ← Kembali ke Tim
        </Link>
      </nav>

      <header className="max-w-4xl mx-auto px-6 pt-12 pb-10">
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          <div
            className="w-28 h-28 rounded-2xl flex-shrink-0 flex items-center justify-center shadow-2xl"
            style={{ background: `linear-gradient(135deg, ${accent}99, ${accent})` }}
          >
            <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.2rem', fontWeight: 700, color: '#0e0e0e' }}>
              {initials}
            </span>
          </div>
          <div className="flex-1">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-2"
              style={{ color: accent, fontFamily: 'Outfit, sans-serif', fontWeight: 500 }}
            >
              {prodi} · Kelas {kelas}
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.2rem, 5vw, 3.8rem)', fontWeight: 700, lineHeight: 1.05, color: '#f0ece4' }}>
              {name}
            </h1>
            <p className="mt-1 text-sm" style={{ color: '#555', fontFamily: 'Outfit, sans-serif' }}>
              {age} tahun
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-8">
          {[
            { icon: '🎓', label: prodi },
            { icon: '📍', label: domisili },
            { icon: '🏫', label: 'Universitas Brawijaya' },
            { icon: '📚', label: `Kelas ${kelas}` },
            { icon: '🔬', label: 'Fakultas Vokasi' },
          ].map((chip, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm border"
              style={{ fontFamily: 'Outfit, sans-serif', color: '#aaa', borderColor: '#222', background: '#141414' }}
            >
              {chip.icon} {chip.label}
            </span>
          ))}
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent" />
      </div>

      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="flex items-center gap-4 mb-8">
          <div className="w-8 h-[2px]" style={{ background: accent }} />
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 600, fontStyle: 'italic', color: '#f0ece4' }}>
            Tentang Diri
          </h2>
          <div className="flex-1 h-px" style={{ background: '#1e1e1e' }} />
        </div>

        <div
          className="rounded-2xl p-8 md:p-12 leading-relaxed text-[#b0a898] text-base md:text-lg border"
          style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 300, background: '#111', borderColor: '#1e1e1e', lineHeight: 1.9 }}
        >
          <span
            className="block mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '5rem', lineHeight: 0.5, color: accent + '40' }}
          >
            "
          </span>
          {about}
        </div>
      </section>

      <footer className="text-center py-8 text-[#333] text-xs tracking-widest border-t border-[#1a1a1a]"
        style={{ fontFamily: 'Outfit, sans-serif' }}>
        PROJECT-BASED TASK · REACTJS + GITHUB · BRAWIJAYA 2025
      </footer>
      <div className="h-[3px] w-full" style={{ background: `linear-gradient(to right, transparent, ${accent}, transparent)` }} />
    </div>
  );
}