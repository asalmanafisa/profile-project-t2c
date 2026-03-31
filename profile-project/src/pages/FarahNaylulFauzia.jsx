import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const profile = {
  nama: 'Farah Naylul Fauzia',
  kelas: 'T2C',
  jurusan: 'Teknologi Informasi',
  universitas: 'Universitas Brawijaya',
  domisili: 'Blitar, Jawa Timur',
  image: '/image/profile.png',
  tentang: `Halo! Perkenalkan saya Farah Naylul Fauzia mahasiswa Teknologi Informasi di Fakultas Vokasi Universitas Brawijaya. Ketertarikan saya terhadap dunia teknologi mulai berkembang sejak memasuki masa perkuliahan. Saya memiliki minat khusus pada bidang desain UI/UX, terutama dalam merancang tampilan yang menarik dan memberikan pengalaman pengguna yang optimal. Selain itu, saya memiliki latar belakang pendidikan di bidang bisnis sejak Sekolah Menengah Kejuruan. Hal ini membantu saya memahami kebutuhan pengguna dari sisi pasar serta menggabungkan aspek teknologi dan bisnis dalam pengembangan produk digital yang efektif, inovatif, dan berorientasi pada pengguna di berbagai kebutuhan industri saat ini.`,
  themeGradient: 'from-pink-400 to-pink-600',
  themeText: 'text-pink-400',
  themeBorder: 'border-pink-400/30',
  themeBg: 'bg-pink-400/10',
  backColor: 'text-pink-400 hover:text-pink-300',
}

function FarahNaylulFauzia() {
  return (
    <div className="min-h-screen bg-black text-white">
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
        {/* Header Section */}
        <div className={`relative rounded-3xl overflow-hidden border ${profile.themeBorder} mb-6`}>
          {/* Cover Photo Area */}
          <div className={`bg-gradient-to-br ${profile.themeGradient} h-44 flex items-center justify-center`}>
            <img
              src={profile.image}
              alt={`Avatar ${profile.nama}`}
              className="w-28 h-28 rounded-full object-cover border-4 border-white/30 shadow-lg"
            />
          </div>

          {/* Profile Info Area */}
          <div className="bg-black-900 px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-extrabold text-white">{profile.nama}</h1>
                <p className={`${profile.themeText} font-semibold text-lg mt-1`}>
                  {profile.universitas}
                </p>
                {profile.jurusan && (
                  <p className="text-slate-200 text-sm mt-0">
                    {profile.jurusan}</p>
                )}
              </div>

              {/* Social Media Icons Area */}
              <div className="flex gap-4 pb-1">
                <a
                  href="https://instagram.com/farnyyzia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-500 hover:scale-110 transition-all duration-300"
                  title="Instagram"
                >
                  <FaInstagram size={26} />
                </a>
                <a
                  href="https://github.com/farahfauzia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white hover:scale-110 transition-all duration-300"
                  title="Github"
                >
                  <FaGithub size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <InfoCard
            icon="👩‍💻"
            label="Kelas"
            value={profile.kelas}
            themeBg={profile.themeBg}
            themeBorder={profile.themeBorder}
            themeText={profile.themeText}
          />
          <InfoCard
            icon="🖥️"
            label="Jurusan / Prodi"
            value={profile.jurusan}
            themeBg={profile.themeBg}
            themeBorder={profile.themeBorder}
            themeText={profile.themeText}
          />
          <InfoCard
            icon="📍"
            label="Domisili"
            value={profile.domisili}
            themeBg={profile.themeBg}
            themeBorder={profile.themeBorder}
            themeText={profile.themeText}
          />
        </div>

        {/* Tentang Section */}
        <div className="bg-black border border-neutral-800 rounded-3xl p-8">
          <h2 className="text-xl font-bold text-white mb-4">
            <span>👩‍🎓</span> Tentang Saya
          </h2>
          <p className="text-slate-400 leading-relaxed whitespace-pre-line text-sm">
            {profile.tentang}
          </p>
        </div>
      </div>
    </div>
  );
}

// Sub-component untuk Card agar kode utama tetap rapi
function InfoCard({ icon, label, value, themeBg, themeBorder, themeText }) {
  return (
    <div className={`${themeBg} border ${themeBorder} rounded-2xl p-5 hover}:bg-opacity-20 transition`}>
      <p className="text-slate-500 text-xs uppercase tracking-widest mb-2">
        {icon} {label}
      </p>
      <p className={`font-bold text-sm ${themeText}`}>{value}</p>
    </div>
  );
}

export default FarahNaylulFauzia