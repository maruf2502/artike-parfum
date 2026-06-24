"use client";

import { useEffect, useRef } from "react";

export default function Home() {
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll(".article-section");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <section className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <h1 className="hero-title">
            Parfum Unisex: <span className="text-gradient">Wangi Tanpa Batas Gender</span> yang Wajib Kamu Coba
          </h1>
          <p className="hero-subtitle">
            Ketika wewangian tak lagi mengenal batas. Temukan revolusi aroma yang membebaskan ekspresi dan identitasmu.
          </p>
          <div style={{ marginTop: '1.5rem', fontSize: '0.95rem', color: 'var(--secondary)', fontWeight: 500 }}>
            June 24, 2026 &bull; 4 minutes read
          </div>
        </div>
      </section>

      <article className="container article-content" ref={articleRef}>
        <section className="article-section">
          <h2>Pendahuluan — Ketika Wewangian Tak Lagi Mengenal Gender</h2>
          <p>
            Pernahkah kamu berhenti di depan etalase parfum dan berpikir, "Wangi ini terlalu bagus untuk dilewatkan, sayang hanya untuk perempuan saja" — atau sebaliknya? Itulah yang jutaan orang rasakan setiap harinya. Dunia wewangian sedang mengalami revolusi diam-diam: parfum unisex kini bukan sekadar tren sesaat, melainkan sebuah pernyataan identitas dan kebebasan berekspresi.
          </p>
          <p>
            Di era modern ini, batasan gender dalam dunia mode dan kecantikan semakin kabur. Parfum unisex hadir sebagai jawaban atas kebutuhan manusia yang ingin tampil autentik tanpa terkungkung label "untuk pria" atau "untuk wanita". Artikel ini akan membawa kamu menyelami dunia parfum unisex — mulai dari apa itu, kenapa semakin populer, hingga bagaimana memilih yang paling cocok untuk kepribadianmu.
          </p>
        </section>

        <section className="article-section">
          <h2>Apa Itu Parfum Unisex?</h2>
          <p>
            Parfum unisex, atau yang juga dikenal sebagai <em>gender-neutral fragrance</em>, adalah wewangian yang dirancang untuk digunakan oleh siapa saja tanpa memandang jenis kelamin. Berbeda dengan parfum feminin yang cenderung didominasi bunga dan fruity, atau parfum maskulin yang identik dengan kayu dan musk berat — parfum unisex memadukan berbagai elemen wewangian dalam komposisi yang seimbang dan netral.
          </p>
          <p>
            Konsep ini sebenarnya bukan hal baru. Eau de Cologne yang muncul di abad ke-17 awalnya digunakan tanpa pembedaan gender. Namun industri parfum modern sempat memisahkan segmen ini dengan ketat selama beberapa dekade, hingga akhirnya tren unisex kembali bangkit dengan kuat sejak awal 2000-an dan meledak popularitasnya di era 2020-an.
          </p>
          <p>
            Menurut laporan dari berbagai analis industri kecantikan global, pasar parfum gender-neutral tumbuh rata-rata 8–10% per tahun dan diproyeksikan menjadi salah satu segmen terbesar dalam industri wewangian pada 2027.
          </p>
        </section>

        <section className="article-section">
          <h2>Mengapa Parfum Unisex Semakin Diminati?</h2>
          <div className="card-grid">
            <div className="glass-card">
              <h3>1. Pergeseran Nilai Sosial</h3>
              <p>Generasi milenial dan Gen Z adalah motor penggerak tren ini. Mereka tumbuh dalam budaya yang lebih terbuka terhadap fluiditas identitas. Bagi mereka, parfum bukan soal gender — melainkan soal bagaimana ingin dirasakan dan diingat oleh orang lain.</p>
            </div>
            <div className="glass-card">
              <h3>2. Kebebasan Berekspresi</h3>
              <p>Parfum unisex memberi ruang ekspresi yang lebih luas. Seorang pria bisa memakai wangi bunga iris yang anggun, sementara seorang wanita bebas mengenakan wangi oud dan vetiver yang berani.</p>
            </div>
            <div className="glass-card">
              <h3>3. Nilai Ekonomi yang Praktis</h3>
              <p>Pasangan atau anggota keluarga yang tinggal bersama bisa berbagi satu botol parfum berkualitas tinggi. Ini jauh lebih efisien dan ekonomis dibanding memiliki dua parfum terpisah.</p>
            </div>
            <div className="glass-card">
              <h3>4. Inovasi Para Perfumer</h3>
              <p>Banyak perfumer ternama dunia sengaja menciptakan karya yang melampaui batas gender. Mereka bermain dengan bahan seperti iris, cardamom, dan sandalwood dalam proporsi yang kompleks dan universal.</p>
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Profil Wangi yang Umum dalam Parfum Unisex</h2>
          <p>Parfum unisex biasanya memiliki profil wangi yang seimbang antara unsur "maskulin" dan "feminin". Beberapa karakter wangi yang paling sering ditemukan antara lain:</p>
          <ul className="styled-list">
            <li><strong>Woody & Earthy</strong> — Sandalwood, vetiver, cedarwood, dan patchouli memberi kedalaman dan kehangatan yang bisa dikenakan siapa saja.</li>
            <li><strong>Aquatic & Fresh</strong> — Nuansa laut, ozon, dan mint yang segar dan ringan cocok untuk penggunaan sehari-hari di segala usia.</li>
            <li><strong>Oriental & Spicy</strong> — Campuran oud, amber, vanilla, dan rempah-rempah yang kaya dan menggoda, cocok untuk malam hari atau acara formal.</li>
            <li><strong>Floral yang Netral</strong> — Bunga iris, violet, dan magnolia cenderung lebih "tenang" dibanding rose atau lily, sehingga cocok untuk tampilan unisex.</li>
            <li><strong>Citrus & Green</strong> — Bergamot, neroli, dan daun-daun hijau memberikan nuansa segar dan energik yang sangat universal.</li>
          </ul>
        </section>

        <section className="article-section">
          <h2>Rekomendasi Parfum Unisex Terbaik untuk Berbagai Selera</h2>
          <div className="card-grid">
            <div className="glass-card">
              <h3>Kayu dan Hangat</h3>
              <p>Pilihan dengan basis sandalwood creamy atau cedarwood yang dikombinasikan dengan sedikit musk putih biasanya menjadi favorit lintas generasi. Cocok untuk kantor maupun acara santai.</p>
            </div>
            <div className="glass-card">
              <h3>Segar dan Ringan</h3>
              <p>Komposisi berbasis citrus-aquatic dengan sentuhan white musk sangat cocok untuk iklim tropis seperti Indonesia — tidak berat di cuaca panas, namun tetap tahan lama sepanjang hari.</p>
            </div>
            <div className="glass-card">
              <h3>Mewah dan Berani</h3>
              <p>Parfum berbasis oud atau amber dengan aksen rempah seperti cardamom dan saffron memberi kesan mewah dan berkarakter kuat. Sangat cocok untuk malam hari atau acara spesial.</p>
            </div>
            <div className="glass-card">
              <h3>Untuk Pemula</h3>
              <p>Mulailah dari wangi yang tidak terlalu berat — cari yang memiliki deskripsi "fresh woody" atau "clean musk". Wangi seperti ini mudah diterima oleh hidung kebanyakan orang.</p>
            </div>
          </div>
        </section>

        <section className="article-section">
          <h2>Tips Memilih Parfum Unisex yang Tepat</h2>
          <ul className="styled-list">
            <li><strong>Kenali Piramida Wewangian.</strong> Setiap parfum memiliki tiga lapisan: top notes, heart notes, dan base notes. Tunggu setidaknya 30 menit di kulit untuk merasakan karakter aslinya.</li>
            <li><strong>Uji di Kulit, Bukan di Kertas.</strong> Setiap parfum bereaksi berbeda di kulit masing-masing orang karena perbedaan pH. Cobalah di pergelangan tangan lalu diamkan sejenak.</li>
            <li><strong>Batasi Pengujian.</strong> Jangan mencoba lebih dari tiga parfum sekaligus. Indra penciuman bisa "jenuh" dan sulit membedakan wangi.</li>
            <li><strong>Pertimbangkan Musim.</strong> Di Indonesia yang tropis, wangi ringan berbasis citrus atau aquatic cocok untuk siang hari. Untuk malam, pilih yang lebih hangat.</li>
            <li><strong>Perhatikan Konsentrasi.</strong> Pilih EDT untuk pemakaian harian di cuaca panas, dan EDP untuk daya tahan lebih lama.</li>
          </ul>
        </section>

        <section className="article-section">
          <h2>Cara Memakai Parfum Unisex Agar Tahan Lama</h2>
          <ul className="styled-list">
            <li>Semprotkan pada titik nadi (pergelangan tangan, leher, belakang telinga). Panas tubuh membantu wangi menyebar lebih optimal.</li>
            <li>Jangan digosok. Menggosokkan parfum di pergelangan tangan merusak molekul wewangian dan mengubah aromanya.</li>
            <li>Oleskan setelah mandi ketika kulit masih lembap untuk penyerapan wewangian yang lebih baik.</li>
            <li>Simpan di tempat yang sejuk dan gelap, jauh dari sinar matahari langsung untuk menjaga komposisi kimianya.</li>
          </ul>
        </section>

        <section className="article-section">
          <h2>Parfum Unisex Lokal yang Layak Dipertimbangkan</h2>
          <p>
            Industri parfum lokal Indonesia dalam beberapa tahun terakhir juga mulai menghadirkan pilihan parfum unisex berkualitas. Sejumlah brand lokal bereksperimen dengan bahan-bahan khas Nusantara seperti nilam (patchouli Aceh), sandalwood Nusa Tenggara, dan berbagai rempah tradisional, yang dipadukan dengan teknik blending modern. Ini adalah pilihan menarik bagi kamu yang ingin mendukung produk lokal sekaligus mendapatkan wewangian berkarakter unik dan berbeda dari parfum internasional mainstream.
          </p>
        </section>

        <section className="article-section faq-section">
          <h2>FAQ: Pertanyaan Seputar Parfum Unisex</h2>
          <div className="faq-item">
            <div className="faq-q">Q: Apakah parfum unisex cocok untuk semua usia?</div>
            <div className="faq-a">A: Ya. Parfum unisex dirancang untuk dinikmati siapa saja. Orang muda mungkin lebih suka yang segar, sementara yang lebih dewasa menikmati yang dalam dan hangat.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Q: Apakah parfum unisex lebih mahal?</div>
            <div className="faq-a">A: Tidak selalu. Rentang harganya luas dari yang terjangkau hingga luxury. Banyak pilihan berkualitas di berbagai kisaran harga.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Q: Bagaimana tahu parfum itu "unisex"?</div>
            <div className="faq-a">A: Tertulis di deskripsi, atau secara praktis jika wanginya tidak terlalu feminin/maskulin dan nyaman kamu pakai, itu unisex untukmu.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Q: Berapa lama parfum unisex bertahan?</div>
            <div className="faq-a">A: Bergantung konsentrasi. EDT rata-rata 3–5 jam, EDP 5–8 jam. Parfum berbasis musk dan kayu cenderung lebih tahan lama.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Q: Apakah boleh mencampur dua parfum?</div>
            <div className="faq-a">A: Boleh! Teknik ini disebut <em>layering</em>. Bereksperimenlah untuk menciptakan signature scent yang unik milikmu sendiri.</div>
          </div>
          <div className="faq-item">
            <div className="faq-q">Q: Cocokkah untuk cuaca panas di Indonesia?</div>
            <div className="faq-a">A: Sangat cocok. Pilih profil fresh atau aquatic untuk siang hari. Hindari yang terlalu berat/manis di cuaca terik.</div>
          </div>
        </section>

        <section className="article-section">
          <h2>Kesimpulan</h2>
          <p>
            Parfum unisex bukan hanya soal tren atau pilihan produk. Ia adalah pernyataan bahwa keindahan tidak mengenal kotak-kotak kaku. Aroma yang tepat mampu meningkatkan kepercayaan diri, menciptakan kesan pertama yang tak terlupakan, bahkan membangkitkan kenangan dan emosi yang dalam.
          </p>
          <p>
            Jadi, jangan ragu untuk keluar dari zona nyamanmu. Coba parfum unisex yang selama ini kamu anggap "bukan untukmu" hanya karena label gendernya. Siapa tahu, wangi terbaikmu selama ini justru tersembunyi di balik rak yang belum pernah kamu sentuh.
          </p>
          <p style={{ marginTop: '2rem', padding: '1.5rem', background: 'var(--glass-bg)', borderRadius: '12px', border: '1px solid var(--glass-border)', textAlign: 'center' }}>
            <strong>Siap menemukan aroma unikmu?</strong><br/>
            Eksplorasi koleksi parfum unisex favoritmu sekarang dan temukan <em>signature scent</em> yang paling mendeskripsikan dirimu. Bagikan panduan ini ke teman-temanmu agar mereka juga berani mencoba gaya wewangian tanpa batas!
          </p>
        </section>

        <section className="article-section links-section">
          <h2>Baca Artikel Terkait</h2>
          <div className="links-list">
            <a href="https://www.google.com/search?q=Panduan+Lengkap+Memilih+Parfum+untuk+Pemula" target="_blank" rel="noopener noreferrer">Panduan Lengkap Memilih Parfum untuk Pemula</a>
            <a href="https://www.google.com/search?q=Perbedaan+EDT,+EDP,+dan+Parfum+Extrait" target="_blank" rel="noopener noreferrer">Perbedaan EDT, EDP, dan Parfum Extrait: Mana yang Cocok Untukmu?</a>
            <a href="https://www.google.com/search?q=Merek+Parfum+Lokal+Indonesia+yang+Wajib+Dicoba" target="_blank" rel="noopener noreferrer">10 Merek Parfum Lokal Indonesia yang Wajib Kamu Coba</a>
            <a href="https://www.google.com/search?q=Cara+Menyimpan+Parfum+Agar+Tidak+Rusak" target="_blank" rel="noopener noreferrer">Cara Menyimpan Parfum Agar Tidak Rusak</a>
            <a href="https://www.google.com/search?q=Tren+Kecantikan+Gender+Neutral+2025" target="_blank" rel="noopener noreferrer">Tren Kecantikan Gender Neutral 2025: Lebih dari Sekadar Parfum</a>
          </div>
        </section>

        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)' }}>
          <h3>Kata Kunci Terkait</h3>
          <div className="tags" style={{ marginTop: '1rem', paddingTop: '0', borderTop: 'none' }}>
            <span className="tag">parfum unisex</span>
            <span className="tag">parfum gender neutral</span>
            <span className="tag">wewangian unisex</span>
            <span className="tag">parfum untuk pria dan wanita</span>
            <span className="tag">cara memilih parfum unisex</span>
            <span className="tag">parfum unisex terbaik</span>
            <span className="tag">gender-neutral fragrance</span>
            <span className="tag">parfum unisex Indonesia</span>
            <span className="tag">tips memakai parfum</span>
            <span className="tag">parfum unisex lokal</span>
            <span className="tag">piramida wewangian</span>
            <span className="tag">konsentrasi parfum</span>
            <span className="tag">parfum tahan lama</span>
            <span className="tag">layering parfum</span>
          </div>
        </div>
      </article>
    </main>
  );
}
