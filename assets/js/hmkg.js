AOS.init({ duration: 700, once: true, offset: 60 });

// NAVBAR scroll
window.addEventListener("scroll", () => {
  document
    .getElementById("navbar")
    .classList.toggle("scrolled", window.scrollY > 40);
  // Active nav
  const sections = [
    "beranda",
    "lomba",
    "galeri",
    "sponsor",
    "jadwal",
    "tahapan",
    "kontak",
  ];
  let cur = "";
  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) cur = id;
  });
  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === "#" + cur);
  });
});

// Mobile menu
function toggleMenu() {
  document.getElementById("mobileMenu").classList.toggle("open");
}
function closeMenu() {
  document.getElementById("mobileMenu").classList.remove("open");
}

// COUNTDOWN
const targetDate = new Date("2026-08-19T09:00:00");
function updateCountdown() {
  const now = new Date();
  const diff = targetDate - now;
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML =
      '<div class="cd-box"><span class="cd-num">🎉</span><span class="cd-text">Hari H!</span></div>';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById("cd-hari").textContent = String(d).padStart(2, "0");
  document.getElementById("cd-jam").textContent = String(h).padStart(2, "0");
  document.getElementById("cd-menit").textContent = String(m).padStart(2, "0");
  document.getElementById("cd-detik").textContent = String(s).padStart(2, "0");
}
updateCountdown();
setInterval(updateCountdown, 1000);

// PARTICLES
const canvas = document.getElementById("particles-canvas");
const ctx = canvas.getContext("2d");
let particles = [];
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = canvas.closest("section").offsetHeight || window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1.5 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.3;
    this.vy = (Math.random() - 0.5) * 0.3;
    this.alpha = Math.random() * 0.5 + 0.1;
    const colors = ["#4D99D3", "#8DC341", "#FAC016", "#ffffff"];
    this.color = colors[Math.floor(Math.random() * colors.length)];
  }
  draw() {
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.restore();
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (
      this.x < 0 ||
      this.x > canvas.width ||
      this.y < 0 ||
      this.y > canvas.height
    )
      this.reset();
  }
}
for (let i = 0; i < 120; i++) particles.push(new Particle());
function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // Draw connections
  particles.forEach((p, i) => {
    particles.slice(i + 1).forEach((q) => {
      const dx = p.x - q.x,
        dy = p.y - q.y,
        dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 100) {
        ctx.save();
        ctx.globalAlpha = (1 - dist / 100) * 0.08;
        ctx.strokeStyle = "#4D99D3";
        ctx.lineWidth = 0.5;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
        ctx.restore();
      }
    });
  });
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// LOMBA DATA
const lombaData = [
  {
    icon: "🏸",
    icone: "assets/icon/Icon HMKG 2026 - Badminton.png",
    cat: "Olahraga",
    title: "Lomba Bulu Tangkis",
    flyer: "assets/flyer/badminton.png",
    link: "",
    desc: "Pertandingan bulu tangkis antar pegawai dan unit kerja BMKG, mengusung sportivitas dan kebersamaan dalam perayaan HUT HMKG ke-79.",
  },
  {
    icon: "🏓",
    icone: "assets/icon/Icon HMKG 2026 - Tenis Meja.png",
    cat: "Olahraga",
    title: "Lomba Tenis Meja",
    flyer: "assets/flyer/tenis_meja.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSf8ivilkv5Y5I77qmgLd8f_XnxGaUB2-3BvOdUy4CJaElFakA/viewform",
    desc: "Kompetisi tenis meja terbuka untuk seluruh pegawai BMKG sebagai bagian dari rangkaian olahraga HUT HMKG ke-79.",
  },
  {
    icon: "♟️",
    icone: "assets/icon/Icon HMKG 2026 - Catur.png",
    cat: "Olahraga",
    title: "Lomba Catur",
    flyer: "assets/flyer/lomba catur.png",
    link: "",
    desc: "Adu strategi dan ketenangan berpikir dalam turnamen catur antar pegawai dan unit kerja BMKG.",
  },
  {
    icon: "🎮",
    icone: "assets/icon/Icon HMKG 2026 - E-Sport.png",
    cat: "Hiburan",
    title: "Lomba E-Sports",
    flyer: "assets/flyer/esport.png",
    link: "https://link.bmkg.go.id/hmkg-esports26",
    desc: "Turnamen game kompetitif bagi pegawai muda BMKG, menghadirkan keseruan dan kekompakan tim dalam suasana santai.",
  },
  {
    icon: "🎤",
    icone: "assets/icon/Icon HMKG 2026 - Karaoke.png",
    cat: "Hiburan",
    title: "Lomba Karaoke / BMKG Idol",
    flyer: "assets/flyer/bmkg_idol.png",
    link: "https://link.bmkg.go.id/daftaridol",
    desc: "Unjuk bakat menyanyi bagi pegawai BMKG dalam kompetisi karaoke yang penuh semangat dan keceriaan.",
  },
  {
    icon: "🛡️",
    icone: "assets/icon/Icon HMKG 2026 - Cyber Security.png",
    cat: "Teknologi",
    title: "Lomba Cyber Security",
    flyer: "assets/flyer/lomba cyber security.png",
    link: "",
    desc: "Kompetisi keamanan siber yang menguji kemampuan pegawai dalam mengidentifikasi dan menangani ancaman digital.",
  },
  {
    icon: "👨‍👩‍👧‍👦",
    icone: "assets/icon/Icon HMKG 2026 - Family HMKG.png",
    cat: "Keluarga",
    title: "Lomba Family HMKG",
    flyer: "assets/flyer/family.png",
    link: "https://link.bmkg.go.id/surveifamhmkg2026 ",
    desc: "Rangkaian permainan keluarga yang melibatkan pegawai beserta keluarga, mempererat kebersamaan di lingkungan BMKG.",
  },
  {
    icon: "🥎",
    icone: "assets/icon/Icon HMKG 2026 - Bakiak & Balap karung.png",
    cat: "Olahraga Tradisional",
    title: "Lomba Bakiak dan Balap Karung",
    flyer: "assets/flyer/lomba bakiak dan balap karung.png",
    link: "",
    desc: "Permainan tradisional khas perayaan kemerdekaan yang menghadirkan keseruan dan kekompakan antar tim.",
  },
  {
    icon: "📱",
    icone: "assets/icon/Icon HMKG 2026 - Konten Tiktok.png",
    cat: "Konten Digital",
    title: "Lomba Konten TikTok",
    flyer: "assets/flyer/lomba konten tiktok.png",
    link: "",
    desc: "Ajang kreativitas konten video pendek bertema BMKG, meteorologi, klimatologi, dan geofisika untuk media sosial.",
  },
  {
    icon: "🎣",
    icone: "assets/icon/Icon HMKG 2026 - Mancing Mania.png",
    cat: "Hiburan",
    title: "Lomba Mancing Mania",
    flyer: "assets/flyer/lomba mancing mania.png",
    link: "",
    desc: "Kegiatan memancing santai sebagai sarana refreshing dan kebersamaan antar pegawai BMKG.",
  },
  {
    icon: "🎙️",
    icone: "assets/icon/Icon HMKG 2026 - MC.png",
    cat: "Komunikasi",
    title: "Lomba Master of Ceremony",
    flyer: "assets/flyer/lomba master of ceremony.png",
    link: "",
    desc: "Kompetisi kepemimpinan acara yang menguji keterampilan public speaking dan keberanian tampil di depan umum.",
  },
  {
    icon: "🏃",
    icone: "assets/icon/Icon HMKG 2026 - Virtual Run.png",
    cat: "Olahraga",
    title: "Lomba Virtual Run",
    flyer: "assets/flyer/lomba virtual run.png",
    link: "",
    desc: "Lari virtual yang dapat diikuti pegawai BMKG dari berbagai lokasi, mendukung gaya hidup sehat dan aktif.",
  },
  {
    icon: "📊",
    icone: "assets/icon/Icon HMKG 2026 - Infografis.png",
    cat: "Desain Grafis",
    title: "Lomba Infografis MKG",
    flyer: "assets/flyer/lomba infografis mkg.png",
    link: "",
    desc: "Visualisasikan data dan informasi seputar meteorologi, klimatologi, dan geofisika dalam desain infografis yang menarik.",
  },
  {
    icon: "🎬",
    icone: "assets/icon/Icon HMKG 2026 - Video Compro.png",
    cat: "Multimedia",
    title: "Lomba Video Compro Unit Kerja",
    flyer: "assets/flyer/compro.png",
    link: "",
    desc: "Produksi video company profile yang menampilkan keunikan dan capaian masing-masing unit kerja BMKG.",
  },
  {
    icon: "📖",
    icone: "assets/icon/Icon HMKG 2026 - MTQ.png",
    cat: "Keagamaan",
    title: "Lomba MTQ",
    flyer: "assets/flyer/mtq.png",
    link: "link.bmkg.go.id/mtqhmkg2026",
    desc: "Rangkaian lomba bernuansa keagamaan dalam semangat Musabaqah Tilawatil Quran.",
  },
  {
    icon: "✍️",
    icone: "assets/icon/Icon HMKG 2026 - Penulisan Artikel MKG.png",
    cat: "Akademik",
    title: "Lomba Penulisan Artikel MKG Populer",
    flyer: "assets/flyer/artikel.png",
    link: "https://link.bmkg.go.id/submitartikelhmkg79",
    desc: "Tuangkan gagasan tentang meteorologi, klimatologi, dan geofisika dalam artikel populer.",
  },
  {
    icon: "⚽",
    icone: "assets/icon/Icon HMKG 2026 - Mini Soccer.png",
    cat: "Olahraga",
    title: "Mini Soccer",
    flyer: "assets/flyer/mini_soccer.png",
    link: "https://bit.ly/hmkgminisoccertournament2026",
    desc: "Pertandingan sepak bola mini antar unit kerja BMKG.",
  },
  {
    icon: "🏀",
    icone: "assets/icon/Icon HMKG 2026 - Basket.png",
    cat: "Olahraga",
    title: "Basket",
    flyer: "assets/flyer/basket.png",
    link: " https://link.bmkg.go.id/basketbmkg2026",
    desc: "Turnamen bola basket antar pegawai dan unit kerja BMKG.",
  },
  {
    icon: "🏐",
    icone: "assets/icon/Icon HMKG 2026 - Volley.png",
    cat: "Olahraga",
    title: "Volley Ball",
    flyer: "assets/flyer/volley_ball.jpg",
    link: "link.bmkg.go.id/daftarvolihmkg2026",
    desc: "Pertandingan bola voli yang menghadirkan semangat juang dan kekompakan antar tim pegawai BMKG.",
  },
  {
    icon: "🎭",
    icone: "assets/icon/Icon HMKG 2026 - Stand Up Comedy.png",
    cat: "Hiburan",
    title: "Stand Up Comedy",
    flyer: "assets/flyer/stand up comedy.png",
    link: "https://forms.gle/enhEeu87WruKT5Dw9",
    desc: "Unjuk kemampuan komedi tunggal yang menghibur sekaligus menyelipkan kisah keseharian dunia BMKG.",
  },

  {
    icon: "📦",
    icone: "",
    cat: "Dharma Wanita",
    title: "Lomba Kreasi Kardus by DWP",
    flyer: "assets/flyer/kreasi_kardus.png",
    link: "https://docs.google.com/forms/d/1gRXXTOYtSpdtWcUTb0d0UPpr8d6jsulOZeME0rrqZRI/viewform?edit_requested=true",
    desc: "Ubah kardus bekas menjadi karya seni atau produk fungsional yang kreatif dan inovatif bersama Dharma Wanita Persatuan BMKG.",
  },
  {
    icon: "🍽️",
    icone: "",
    cat: "Dharma Wanita",
    title: "Lomba Kantin by DWP",
    flyer: "assets/flyer/kantin.png",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScz594VvpxWgqjNXj4kFgBC_Mwltvojira5whQDccS5CfJ4pw/viewform?pli=1",
    desc: "Membuat kantin yang kreatif dan inovatif bersama Dharma Wanita Persatuan BMKG.",
  },
  {
    icon: "🥗",
    icone: "",
    cat: "Dharma Wanita",
    title: "Lomba Sarapan Sehat by DWP",
    flyer: "assets/flyer/sarapan_sehat.png",
    link: "https://docs.google.com/forms/d/1lbpEGMcmH6V-9eiVR-LQw1wR17bVLAIZ3d_NEDKKiLE/viewform?edit_requested=true",
    desc: "Sajikan menu sarapan sehat, bergizi, dan menarik sebagai wujud kepedulian terhadap pola hidup sehat keluarga BMKG.",
  },
  {
    icon: "🤸",
    icone: "",
    cat: "Dharma Wanita",
    title: "Lomba Senam Kreasi by DWP",
    flyer: "assets/flyer/senam_kreasi.png",
    link: "https://wa.me/+6281286098725",
    desc: "Unjuk gerakan senam kreasi yang energik dan kompak bersama tim Dharma Wanita Persatuan BMKG dalam semangat HUT HMKG ke-79.",
  },
  {
    icon: "📣",
    icone: "",
    cat: "Dharma Wanita",
    title: "Lomba Yel-Yel DWP",
    flyer: "assets/flyer/yel_yel_dwp.png",
    link: "https://bit.ly/Video_YelYel_DWP2026",
    desc: "Tampilkan yel-yel penuh semangat dan kreativitas yang mencerminkan kebanggaan dan kekompakan Dharma Wanita Persatuan BMKG.",
  },
];

const grid = document.getElementById("lombaGrid");
lombaData.forEach((l, i) => {
  const iconHtml = l.icone
    ? `<img src="${l.icone}" alt="${l.title}" style="width:100%;height:100%;object-fit:contain;" onerror="this.outerHTML='${l.icon}'">`
    : l.icon;
  grid.innerHTML += `
    <div class="lomba-card reveal" data-index="${i}" style="transition-delay:${i * 60}ms" onclick="openModal(${i})">
      <div class="lc-icon">${iconHtml}</div>
      <div class="lc-badge">${l.cat}</div>
      <div class="lc-title">${l.title}</div>
      <div class="lc-desc">${l.desc}</div>
      <div class="lc-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#182168" stroke-width="3"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
    </div>`;
});

function openModal(i) {
  const l = lombaData[i];

  const flyer = document.getElementById("modalFlyer");

  // Reset handler agar tidak loop jika default.png juga tidak ada
  flyer.onerror = function () {
    this.onerror = null;
    this.src = "assets/flyer/default_image.png";
  };

  flyer.src = l.flyer;

  document.getElementById("modalCat").textContent = l.cat;
  document.getElementById("modalTitle").textContent = l.title;
  document.getElementById("modalDesc").textContent = l.desc;
  document.getElementById("modalOverlay").classList.add("open");

  const btn = document.getElementById("modalLink");

  if (l.link) {
    btn.href = l.link;
    btn.style.pointerEvents = "auto";
    btn.style.opacity = "1";
    btn.textContent = "Daftar Sekarang";
  } else {
    btn.href = "#";
    btn.style.pointerEvents = "none";
    btn.style.opacity = ".5";
    btn.textContent = "Pendaftaran Belum Dibuka";
  }
}

function closeModal(event, force = false) {
  const overlay = document.getElementById("modalOverlay");

  if (force) {
    overlay.classList.remove("open");
    return;
  }

  // Tutup hanya jika klik area gelap (overlay)
  if (event.target === overlay) {
    overlay.classList.remove("open");
  }
}
// GALLERY
const galleryData = [
  { cat: "upacara", label: "Upacara Pembukaan", color: "#182168", h: 280 },
  { cat: "pembukaan", label: "Seminar Nasional", color: "#1A499A", h: 200 },
  { cat: "lomba", label: "Kompetisi Fotografi", color: "#4D99D3", h: 240 },
  { cat: "penutupan", label: "Penutupan", color: "#8DC341", h: 180 },
  {
    cat: "dokumentasi",
    label: "Dokumentasi Lapangan",
    color: "#FAC016",
    h: 300,
  },
  { cat: "seminar", label: "Workshop Data Cuaca", color: "#60A945", h: 220 },
  { cat: "lomba", label: "Perlombaan", color: "#182168", h: 260 },
  { cat: "pembukaan", label: "Sambutan Kepala BMKG", color: "#1A499A", h: 190 },
  { cat: "pameran", label: "Perlombaan", color: "#4D99D3", h: 240 },
  { cat: "dokumentasi", label: "Tim Panitia", color: "#FAC016", h: 200 },
  { cat: "lomba", label: "Pengumuman Pemenang", color: "#8DC341", h: 280 },
  { cat: "pameran", label: "Inovasi Peserta", color: "#182168", h: 220 },
];
const gg = document.getElementById("galleryGrid");
function renderGallery(filter) {
  gg.innerHTML = "";
  galleryData
    .filter((g) => filter === "semua" || g.cat === filter)
    .forEach((g, i) => {
      const svg = `<svg width="100%" height="${g.h}" viewBox="0 0 400 ${g.h}" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="gg${i}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${g.color}"/><stop offset="100%" stop-color="${g.color}88"/>
      </linearGradient></defs>
      <rect width="400" height="${g.h}" fill="url(#gg${i})"/>
      <text x="200" y="${g.h / 2 - 20}" text-anchor="middle" font-family="Rubik" font-size="40" fill="rgba(255,255,255,0.15)" font-weight="900">HMKG</text>
      <text x="200" y="${g.h / 2 + 10}" text-anchor="middle" font-family="Poppins" font-size="13" fill="rgba(255,255,255,0.7)">${g.label}</text>
      <text x="200" y="${g.h / 2 + 30}" text-anchor="middle" font-family="Poppins" font-size="10" fill="rgba(255,255,255,0.4)">HUT Ke-79</text>
    </svg>`;
      const blob = new Blob([svg], { type: "image/svg+xml" });
      const url = URL.createObjectURL(blob);
      gg.innerHTML += `<div class="gallery-item" data-cat="${g.cat}" onclick="openLightbox('${url}')">
      <img src="${url}" alt="${g.label}" loading="lazy">
      <div class="gallery-overlay"><div class="gallery-overlay-text">${g.label}</div></div>
    </div>`;
    });
}
renderGallery("semua");
function filterGallery(cat) {
  document
    .querySelectorAll(".gf-btn")
    .forEach((b) => b.classList.remove("active"));
  event.target.classList.add("active");
  renderGallery(cat);
}

// Lightbox
let currentLbSrc = "";
function openLightbox(src) {
  currentLbSrc = src;
  document.getElementById("lbImg").src = src;
  document.getElementById("lightbox").classList.add("open");
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("open");
}
function lbPrev() {}
function lbNext() {}
document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});

// TIMELINE
const jadwalData = [
  {
    day: "21",
    month: "Jul",
    time: "07.30 WIB",
    name: "Upacara peringatan HMKG ke 79",
    loc: "Kantor Pusat BMKG",
    status: "highlight",
  },
  {
    day: "21",
    month: "Jul",
    time: "08.00 WIB",
    name: "Pembukaan Kegiatan HMKG ke 79",
    loc: "Kantor Pusat BMKG",
    status: "upcoming",
  },
  {
    day: "21",
    month: "Jul",
    time: "09.00 WIB",
    name: "Lomba Masak Eksebisi Eselon 1 dan 2 , Bazar HMKG",
    loc: "Kantor BMKG Pusat",
    status: "upcoming",
  },
  {
    day: "22",
    month: "Jul",
    time: "08.00 WIB",
    name: "Jalan Sehat & Senam Bersama",
    loc: "Kantor Pusat BMKG",
    status: "upcoming",
  },
  {
    day: "22",
    month: "Jul",
    time: "09.00 WIB",
    name: "Bazar dan Hiburan",
    loc: "Kantor Pusat BMKG",
    status: "upcoming",
  },

  {
    day: "19",
    month: "Agust",
    time: "08.00 WIB",
    name: "Puncak Acara dan Penutupan HMKG 2026",
    loc: "Kantor BMKG Pusat",
    status: "highlight",
  },
];
const tl = document.getElementById("timelineEl");

const grouped = jadwalData.reduce((obj, item) => {
  const key = `${item.day} ${item.month}`;
  if (!obj[key]) obj[key] = [];
  obj[key].push(item);
  return obj;
}, {});

let html = "";
let delay = 0;

Object.entries(grouped).forEach(([tanggal, items]) => {
  html += `
    <div class="timeline-group">
        <div class="timeline-heading">${tanggal}</div>
    `;

  items.forEach((j) => {
    html += `
        <div class="tl-item" data-aos="fade-up" data-aos-delay="${delay}">
            <div class="tl-dot"></div>

            <div class="tl-card">
                <div class="tl-date">
                    <div class="tl-time">${j.time}</div>
                </div>

                <div class="tl-info">
                    <span class="tl-status ${j.status}">
                        ${
                          j.status === "highlight"
                            ? "⭐ Acara Utama"
                            : "📌 Upcoming"
                        }
                    </span>

                    <div class="tl-name">${j.name}</div>
                    <div class="tl-loc">📍 ${j.loc}</div>
                </div>
            </div>
        </div>
        `;

    delay += 60;
  });

  html += `</div>`;
});

tl.innerHTML = html;

// TAHAPAN
const steps = [
  { num: 1, icon: "📝", name: "Pendaftaran", sub: "Isi formulir online" },
  { num: 2, icon: "✅", name: "Verifikasi", sub: "Review berkas" },
  { num: 3, icon: "📋", name: "Tech Meeting", sub: "Briefing peserta" },
  { num: 4, icon: "🏁", name: "Pelaksanaan", sub: "Hari kompetisi" },
  { num: 5, icon: "⚖️", name: "Penjurian", sub: "Evaluasi karya" },
  { num: 6, icon: "📢", name: "Pengumuman", sub: "Hasil penilaian" },
  { num: 7, icon: "🏆", name: "Awarding", sub: "Penghargaan" },
];
const sg = document.getElementById("stepsGrid");
steps.forEach((s, i) => {
  sg.innerHTML += `<div class="step-item" data-aos="fade-up" data-aos-delay="${i * 80}">
    <div class="step-num">${s.num}</div>
    <div class="step-icon">${s.icon}</div>
    <div class="step-name">${s.name}</div>
    <div class="step-sub">${s.sub}</div>
  </div>`;
});

// STATS
const statsData = [
  { icon: "👥", num: 1500, suf: "+", label: "Total Peserta" },
  { icon: "🏆", num: 21, suf: "", label: "Kategori Lomba" },
  // { icon: "🤝", num: 25, suf: "+", label: "Total Sponsor" },
  { icon: "👁️", num: 50000, suf: "+", label: "Total Pengunjung" },
];
const stg = document.getElementById("statsGrid");
statsData.forEach((s) => {
  stg.innerHTML += `<div class="stat-card" data-aos="fade-up">
    <div class="stat-icon">${s.icon}</div>
    <div class="stat-num" data-target="${s.num}" data-suf="${s.suf}">0${s.suf}</div>
    <div class="stat-label">${s.label}</div>
  </div>`;
});

// Counter animation
function animateCounter(el) {
  const target = +el.dataset.target;
  const suf = el.dataset.suf;
  const dur = 2000;
  const step = target / (dur / 16);
  let cur = 0;
  const t = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent =
      (cur >= 1000 ? (cur / 1000).toFixed(1) + "K" : Math.floor(cur)) + suf;
    if (cur >= target) clearInterval(t);
  }, 16);
}
const obs = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.querySelectorAll(".stat-num").forEach(animateCounter);
        obs.unobserve(e.target);
      }
    });
  },
  { threshold: 0.4 },
);
obs.observe(document.getElementById("statsGrid"));

// ======================================
// KONTROL MANUAL STREAMING
// ======================================
const streamConfig = {
  isLive: false, // ubah jadi true saat sedang live
  videoId: "S5FTiQ_DjTM", // isi dengan ID video YouTube, contoh: "dQw4w9WgXcQ"
};
// ======================================

document.addEventListener("DOMContentLoaded", () => {
  const section = document.getElementById("liveStreamSection");
  const iframe = document.getElementById("liveVideoFrame");
  const watchLink = document.getElementById("liveWatchLink");

  if (streamConfig.isLive && streamConfig.videoId) {
    iframe.src = `https://www.youtube.com/embed/${streamConfig.videoId}?autoplay=0`;
    watchLink.href = `https://www.youtube.com/watch?v=${streamConfig.videoId}`;
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
});
