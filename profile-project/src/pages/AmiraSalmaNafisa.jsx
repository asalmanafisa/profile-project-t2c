import { Link } from 'react-router-dom'

// ============================================================
//  GANTI DATA DI BAWAH INI DENGAN DATA KAMU SENDIRI
// ============================================================
const profile = {
  nama: 'Amira Salma Nafisa',
  kelas: 'T2C',
  jurusan: 'Teknologi Informasi',
  domisili: 'Malang',
  image: '/image-amira/pasfoto.png',   // letakkan file profile.png di folder public/
  tentang: `Amira Salma Nafisa is an 18-year-old student of Information Technology at the Vocational Faculty of Brawijaya University. Her interests span across two distinct yet complementary worlds — technology and the arts — which she believes can be beautifully merged in fields like UI/UX design, creative coding, and digital media. She is passionate about building things that are not only functional but also aesthetically meaningful. Her career aspiration is to become a professional in IT consulting or web development, where she can contribute her technical skills alongside her creative sensibility. Amira is driven by curiosity and a desire to continuously learn, adapting to the ever-evolving landscape of the tech industry. She believes that great technology is not just about solving problems but about crafting experiences that genuinely make people's lives better and more beautiful.`,
  themeGradient: 'from-yellow-400 to-yellow-600',
  themeText: 'text-yellow-400',
  themeBorder: 'border-yellow-500/30',
  themeBg: 'bg-yellow-500/10',
  backColor: 'text-yellow-400 hover:text-yellow-300',
}
// ============================================================

function AmiraSalmaNafisa() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">

      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-sm font-medium ${profile.backColor} transition`}
        >
          ← Kembali ke Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">

        {/* Header Card */}
        <div className={`relative rounded-3xl overflow-hidden border ${profile.themeBorder} mb-6`}>
          {/* Banner dengan gambar avatar */}
          <div className={`bg-gradient-to-br ${profile.themeGradient} h-44 flex items-center justify-center`}>
            <img
              src={profile.image}
              alt={`Avatar ${profile.nama}`}
              className="w-28 h-28 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>

          {/* Name area */}
          <div className="bg-slate-900 px-8 py-6">
            <h1 className="text-3xl font-extrabold text-white">{profile.nama}</h1>
            <p className={`${profile.themeText} font-semibold text-lg mt-1`}>{profile.jurusan}</p>
          </div>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <InfoCard
            icon="🎓" label="Kelas" value={profile.kelas}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}
          />
          <InfoCard
            icon="📚" label="Jurusan / Prodi" value={profile.jurusan}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}
          />
          <InfoCard
            icon="📍" label="Domisili" value={profile.domisili}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}
          />
        </div>

        {/* About */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">📝 Tentang Saya</h2>
          <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">
            {profile.tentang}
          </p>
        </div>

      </div>
    </div>
  )
}

function InfoCard({ icon, label, value, themeBg, themeBorder, themeText }) {
  return (
    <div className={`${themeBg} border ${themeBorder} rounded-2xl p-5`}>
      <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">{icon} {label}</p>
      <p className={`font-bold text-sm ${themeText}`}>{value}</p>
    </div>
  )
}

export default AmiraSalmaNafisa