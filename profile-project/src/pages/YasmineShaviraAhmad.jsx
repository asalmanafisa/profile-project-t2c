import { Link } from 'react-router-dom'

const profile = {
  nama: 'Yasmine Shavira Ahmad',
  kelas: 'T2C',
  jurusan: 'Teknologi Informasi',
  universitas: 'Universitas Brawijaya',
  domisili: 'Malang, Jawa Timur',
  image: '/image/profile.png',   
  tentang: `Halo! Perkenalkan, saya Yasmine Shavira Ahmad, mahasiswi aktif program studi Teknologi Informasi. 
    Saya punya ketertarikan besar di dunia teknologi, terutama pada hal-hal yang bisa langsung dirasakan manfaatnya oleh orang lain. 
    Oleh karena itu saya suka belajar tentang pengembangan web, analisis data, dan yang paling menarik adalah UI/UX design, karena pada ui/ux saya bisa memahami bagaimana cara untuk menciptakan yang tidak hanya bagus dilihat tapi juga berfungsi dengan baik.
    Saya tidak ingin cuma paham teori, saya ingin benar-benar menerapkannya dalam proyek nyata. Misalnya, ikut membangun sistem untuk UMKM 
    atau merancang aplikasi yang membantu bisnis kecil lebih efisien. 
    Ke depannya, saya ingin menggunakan ilmu yang saya pelajari untuk menciptakan sesuatu yang berguna, 
    entah itu dalam bentuk usaha sendiri maupun kolaborasi dengan orang-orang hebat lainnya. 
    Buat saya, teknologi itu seru kalau dipraktikkan langsung, apalagi kalau dampaknya bisa dirasakan banyak orang.`,
  themeGradient: 'from-blue-900 to-sky-400 to-blue-300',
  themeText: 'text-sky-300',
  themeBorder: 'border-blue-900/30',
  themeBg: 'bg-black-800/10',
  backColor: 'text-sky-300 hover:text-sky-300',
}

function YasmineShaviraAhmad() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-8">
        <Link
          to="/"
          className={`inline-flex items-center gap-2 text-sm font-medium ${profile.backColor} transition`}>
          ← Kembali ke Home
        </Link>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* header */}
        <div className={`relative rounded-3xl overflow-hidden border ${profile.themeBorder} mb-6`}>
          {/* foto */}
          <div className={`bg-gradient-to-br ${profile.themeGradient} h-52 flex items-center justify-center`}>
            <img
              src={profile.image}
              alt={`Avatar ${profile.nama}`}
              className="w-40 h-40 rounded-full object-cover border-4 border-black/55 shadow-lg"/>
          </div>

          {/* nama area bagian atas */}
          <div className="bg-slate-900 px-8 py-6">
            <h1 className="text-3xl font-extrabold text-white">{profile.nama}</h1>
            <p className={`${profile.themeText} font-semibold text-lg mt-1`}>
              {profile.universitas}
            </p>
            {profile.jurusan && (
              <p className="text-slate-200 text-sm mt-0">
                {profile.jurusan} </p>
              )}
          </div>
        </div>

        {/* grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <InfoCard
            icon="👩‍💻" label="Kelas" value={profile.kelas}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}/>
          <InfoCard
            icon="🖥️" label="Jurusan / Prodi" value={profile.jurusan}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}/>
          <InfoCard
            icon="📍" label="Domisili" value={profile.domisili}
            themeBg={profile.themeBg} themeBorder={profile.themeBorder} themeText={profile.themeText}/>
        </div>

        {/* tentang */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">👩‍🎓 Tentang Saya</h2>
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

export default YasmineShaviraAhmad