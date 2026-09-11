# Massage Kowis — Website Pijat Panggilan

Website statis satu halaman untuk layanan pijat panggilan ke rumah di area Kota Wisata
dan sekitarnya. Tanpa framework, tanpa proses build — cukup file HTML, CSS, dan JS.

## Struktur

```
massagekowis/
├── index.html          # seluruh isi halaman
├── assets/
│   ├── style.css       # tampilan
│   └── script.js       # header sticky, animasi scroll, tahun footer
└── README.md
```

## Menjalankan di komputer sendiri

```bash
python3 -m http.server 8000
```

Lalu buka <http://localhost:8000>.

## Hal yang biasanya perlu diubah

| Yang diubah | Di mana |
| --- | --- |
| Nomor WhatsApp | cari `628982686892` di `index.html` (format `wa.me` tanpa `+`, `-`, atau spasi) dan nomor tampilan `+62 898-2686-892` |
| Daftar layanan | bagian `<!-- LAYANAN -->` di `index.html` |
| Daftar area | bagian `<ul class="area-list">` |
| Jam operasional | dicantumkan di hero, FAQ, CTA, footer, dan JSON-LD |
| Testimoni | blok komentar `TESTIMONI PELANGGAN` di `index.html` — sudah ada templatnya, tinggal diisi ulasan asli lalu hapus tanda komentarnya |
| Warna | variabel `:root` paling atas di `assets/style.css` |
| Alamat domain | `<link rel="canonical">` di `<head>` |

### Mengganti nomor WhatsApp sekaligus

```bash
sed -i 's/628982686892/62NOMORBARU/g; s/+62 898-2686-892/+62 NOMOR-BARU/g' index.html
```

## Cara kerja tombol WhatsApp

Setiap tombol memakai tautan resmi WhatsApp:

```
https://wa.me/628982686892?text=<pesan yang sudah di-encode>
```

Pesan dibuat berbeda per layanan, jadi begitu pelanggan menekan tombol "Pesan sekarang"
pada kartu Refleksi Kaki, chat langsung terbuka dengan teks yang menyebut layanan itu.
Tautan ini bekerja di HP (membuka aplikasi WhatsApp) maupun desktop (WhatsApp Web).

Spasi ditulis `%20`, tanda `&` ditulis `%26`. Teks di antara tanda `*` akan tampil tebal
di WhatsApp.

## Kalau nanti ingin menampilkan harga

Aturan tampilannya masih tersimpan di `assets/style.css` (cari `.price-meta`, ada
contoh penggunaannya di komentar). Sisipkan blok ini di dalam kartu layanan, tepat
sebelum tombol WhatsApp:

```html
<ul class="price-meta">
  <li>60 menit &mdash; <strong>Rp150.000</strong></li>
  <li>90 menit &mdash; <strong>Rp200.000</strong></li>
</ul>
```

## Hosting

Karena hanya file statis, website ini bisa langsung diunggah ke layanan gratis seperti
Netlify (drag-and-drop foldernya), Cloudflare Pages, GitHub Pages, atau hosting cPanel
biasa — cukup salin seluruh isi folder ke `public_html`.

## Catatan sebelum publikasi

- **Harga sengaja tidak ditampilkan.** Pengunjung diarahkan langsung ke WhatsApp untuk
  menanyakan biaya. Konsekuensinya: siapkan balasan cepat berisi daftar tarif, karena
  pertanyaan "berapa?" akan jadi chat yang paling sering masuk. Fitur *pesan tersimpan*
  di WhatsApp Business membantu untuk ini.
- **Label "Paling dipesan"** pada kartu Full Body Massage adalah klaim. Hapus `featured`
  dan baris `<span class="ribbon">` kalau itu belum benar-benar layanan terlaris Anda.
- **Belum ada testimoni.** Bagian testimoni sengaja saya kosongkan (templatnya tersedia
  sebagai komentar di `index.html`). Isi hanya dengan ulasan asli — ulasan karangan
  menyesatkan calon pelanggan dan melanggar kebijakan Google Ads maupun Meta Ads,
  yang bisa berujung akun iklan diblokir.
- **Cek klaim di bagian "Jaminan Kenyamanan".** Ada tiga janji di sana: nama terapis
  dikirim sebelum berangkat, harga final disepakati lewat chat, dan tekanan pijat
  bisa diminta. Pastikan ketiganya memang Anda jalankan, atau ubah teksnya.
- Jam operasional 09.00–23.00 dan estimasi tiba 30–60 menit juga perlu dicocokkan
  dengan kondisi nyata.
- Siapkan foto asli (terapis, peralatan, suasana) untuk menggantikan ilustrasi SVG di hero;
  foto nyata biasanya jauh lebih meyakinkan.
