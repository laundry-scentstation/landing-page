# **ScentStation Laundry Landing Page Brief** 

# **Status & Tujuan:** 

Landing page bersifat **pre-launch** dan bisnis belum beroperasi. Tujuan halaman: mengumpulkan calon pelanggan awal (waitlist) menjelang pembukaan. Seluruh copy harus mengkomunikasikan bahwa layanan belum tersedia dan akan segera hadir. Tidak boleh ada kalimat yang menyiratkan pelanggan dapat memesan sekarang. 

# **Identitas Brand:** 

- **Nama:** ScentStation Laundry 

- **Tagline:** Choose Your Scent, Love The Freshness 

- **Kategori:** Jasa laundry antar-jemput dengan personalisasi aroma 

- **Tone:** Modern, ringan, sedikit playful, tetap premium. Bahasa Indonesia dengan selipan istilah Inggris (fresh, scent). 

# **USP** 

ScentStation Laundry menawarkan layanan laundry antar-jemput agar pelanggan dapat menikmati pakaian yang bersih dan sesuai preferensi aroma. Berbeda dengan laundry lain, ScentStation memberikan kebebasan memilih aroma favorit serta loyalty rewards untuk menciptakan pengalaman laundry yang lebih personal. 

# **3 Pilar Nilai:** 

1. **Praktis, Efisien dan Space Saving** 

Hemat tempat, waktu, dan biaya. Bebas dari repotnya mengantar dan mengambil laundry sendiri. Include pickup & delivery melalui WhatsApp sehingga pelanggan tidak perlu keluar rumah, kos, atau apartemen. 

2. **Wangi Favorit Pilihanmu** 

Bebas memilih aroma favorit pilihanmu: **Powdery, Clean Laundry, & Floral.** Wangi pakaian jadi lebih personal sesuai selera pelanggan. 

3. **Rewarding & Customer Loyalty** . 

Loyalty stamp: mulai dari bonus cuci 10 kg sampai dengan bonus pewangi premium. Pelanggan mendapat reward agar terdorong untuk kembali. 

1 

# **Target Audience** 

- Usia 18–35: mahasiswa, fresh graduate, freelancer, karyawan. 

- Gender: pria & wanita. 

- Lokasi: Alam Sutera, Gading Serpong, BSD. 

- Karakter: sibuk, aktif, digital-savvy, mengutamakan kepraktisan, menyukai layanan personal. 

# **Nada Copywriting (Pre-Launch)** 

Setiap kalimat harus lolos tes: "apakah ini menyiratkan layanan sudah tersedia?" Jika ya, tulis ulang menjadi coming-soon. 

- **Gunakan:** "segera hadir", "daftar untuk jadi yang pertama", "nanti kamu bisa…", "gabung waitlist". 

- **Hindari:** "pesan sekarang", "tersedia hari ini", "kumpulkan stamp sekarang", "layanan kami menyediakan…". 

# **Struktur Halaman** 

1. **Hero** : layout kolom pada desktop: 

   - Bagian kiri: badge "Coming Soon", Logo, headline, subheadline, 3 benefit chip singkat. 

   - Bagian kanan: lead form, harus fully visible tanpa scroll pada desktop. Checkbox persetujuan Privacy Policy 

   - Pada mobile: bagian hero terlihat semua beserta form-nya. 

2. **Section "Kenapa ScentStation"** : 3 kartu sesuai 3 pilar nilai. 

3. **Section Aroma** : preview 3 pilihan aroma (Flowery Bloom, Soft Powder, atau Fresh Cotton) dengan sebagai aroma yang bisa dipilih saat launch. 

4. **Section Paket Langganan** : 2 kartu paket berlangganan berdampingan; kartu kedua diberi badge "Paling Populer". Detail di bagian "Paket Langganan". Semua tombol paket mengarah ke form Early Access di hero (tidak membuat form/checkout baru). 

5. **Section Pickup & Delivery Area:** menampilkan wilayah yang dijangkau layanan antar-jemput saat launch (BSD, Alam Sutera, Gading Serpong, Kelapa Dua). 

6. **Section Customer Reward:** menjelaskan program loyalty stamp dan bonus yang bisa dikumpulkan pelanggan berdasarkan jumlah stempel. 

7. **Footer** : nama brand, tagline, copyrighy tahun 2026, link Privacy Policy di samping copyright 

2 

# **Lead Form** 

1. **Field hanya 2:** Nama dan Username Instagram. Tidak lebih, tidak kurang. 

2. Jika user mengetik "@" di depan username Instagram, hapus otomatis. Kedua field wajib diisi. 

3. Checkbox persetujuan Privacy Policy ada dibawah form 

4. Tombol submit: "Daftar Early Access". 

5. Setelah submit sukses: tampilkan **Thank You pop-up** , lalu reset form. Tidak ada redirect ke halaman/URL lain. 

6. Data submit dikirim otomatis ke Google Sheet melalui Google Apps Script Web App (URL endpoint disediakan terpisah). Thank You pop-up dipicu setelah request terkirim. 

7. Di bawah form: teks kecil + link "Privacy Policy" yang membuka **pop-up** (bukan halaman baru). 

# **Paket Langganan** 

Model paket bersifat **langganan/subscription** (bukan bayar per satuan). Ditampilkan sebagai 2 kartu berdampingan. Karena halaman ini pre-launch, section dibingkai sebagai paket yang **akan tersedia saat launch** , dan setiap tombol paket mengarah ke form waitlist di bagian struktur halaman: **hero** . Tidak ada proses pembelian, pembayaran, atau form tambahan. 

# **Kartu 1 [Scent Regular]** (badge **Basic** ) 

- Harga awal: Rp[299.000] / [bulan] dicoret 

- Harga: Rp[299.000] – Badge Early Access Offer 

- Cocok untuk: [Mahasiswa], [Fresh graduate], [Single professional] 

- Fitur: 

   - Kuota [30] kg per [bulan] 

   - Bebas pilih aroma sesuai keinginanmu 

   - Include pickup & delivery radius 10 km 

   - Include cuci + kering + setrika 

   - Pickup [2]x per minggu 

   - Selesai dalam [3][hari] 

   - Mendapatkan 1 stamp setiap bulannya untuk peroleh bonus lainnya 

   - Ekstra cuci & setrika 2 pasang baju dan celana, tanpa biaya tambahan 

- Highlight: [Solusi hemat untuk kebutuhan rutin laundry mu] 

- Tombol: Klaim harga Early Bird → arahkan ke form waitlist di hero. 

3 

# **Kartu 2 [Scent Express]** (badge **Paling Populer** ) 

- Harga awal: Rp[449.000] / [bulan] dicoret 

- Harga: Rp[299.000] – Badge Early Access Offer 

- Cocok untuk: [Profesional sibuk], [Freelancer],[Pasangan baru menikah, [Keluarga kecil] 

- Fitur (superset dari paket Reguler): 

   - Kuota [35] kg per [bulan] 

   - Bebas pilih aroma sesuai keinginanmu 

   - Include pickup & delivery radius 10 km 

   - Include cuci + kering + setrika 

   - Pickup [3]x per minggu 

   - Selesai dalam [1][hari] 

   - Mendapatkan 2 stamp setiap bulannya untuk peroleh bonus lainnya 

   - Ekstra cuci & setrika 4 pasang baju dan celana, tanpa biaya tambahan 

- Tombol: Klaim harga Early Bird → arahkan ke form waitlist di hero. 

# **Draft Copy Siap Pakai** 

# **Hero** 

- Badge: Coming Soon, - badge Segera hadir di Gading & Alam Sutera. 

- Headline: Laundry Aroma sesuai pilihanmu. 

- Subheadline: Daftarkan dirimu sekarang untuk dapatkan harga khusus Early Bird dan masuk ke waiting list pelanggan Scentstation Laundry. 

- Benefit chips: Pilih aromamu · Antar-jemput via WhatsApp · Loyalty reward 

# **Form** 

- Judul: Klaim Voucher-mu! 

- Field 1: Nama 

- Field 2: Username Instagram 

- Tombol: Klaim Early Access Offer 

- Checkbox, Teks: Dengan mendaftar, kamu menyetujui Privacy Policy kami. 

4 

# **Section "Kenapa ScentStation Laundry"** 

- Kartu 1 — Praktis, Efisien & Space Saving: Nggak perlu keluar rumah. Nggak perlu antri. Saat kami buka, cukup WhatsApp untuk jadwal antar-jemput. Kamu bisa hemat waktumu. 

- Kartu 2 — Wangi Favorit Pilihanmu: Bosan semua laundry beraroma sama? kamu bebas pilih aroma favorit: Flowery Bloom, Soft Powder, atau Fresh Cotton. Makin nyaman dengan baju favoritmu. 

- Kartu 3 — Rewarding & Customer Loyalty: Makin sering, makin untung. 6 stempel = ekstra 5kg laundry. Kami menghargai kehadiranmu. 

# **Section Aroma** 

- Judul: Pilih wangi yang paling kamu suka 

- Subheading: Setiap cucian bisa kamu sesuaikan dengan salah satu dari tiga signature scent kami. Nanti, tinggal pilih saat pesan. 

- Item: 

   - Flowery Bloom — Aroma bunga melati, lily, dan peony yang lembut dan elegan. Bikin pakaianmu terasa seharum baru keluar dari butik atau hotel. 

   - Soft Powder — Wangi bedak bayi, musk, dan vanilla yang ringan. Memberi kesan hangat, bersih, dan menenangkan sepanjang hari. 

   - Fresh Cotton — Aroma katun bersih dengan sentuhan linen dan citrus ringan. Sensasi pakaian baru dicuci yang segar dan tahan lama. 

- Penutup (pendorong lead): Sudah kebayang wangi favoritmu? Daftar Early Access sekarang untuk jadi yang pertama mencobanya saat kami buka. 

5 

# **Section Paket Langganan** 

- Judul: Paket berlangganan yang akan hadir 

- Subheading: Daftar Early Access Sekarang dan pilih paket langganan sesuai kebutuhanmu untuk dapatkan harga promo di ScentStation Laundry. 

- Badge kartu 1: Basic 

- Badge kartu 2: Paling Populer 

- Tombol kartu (keduanya): Klaim Sekarang 

# **Section Pickup & Delivery Area** 

- Judul: Area layanan ScentStation Laundry 

- Subheading: Saat kami buka, layanan pickup & delivery ScentStation akan menjangkau wilayah-wilayah berikut. 

- Area: BSD · Alam Sutera · Gading Serpong · Kelapa Dua 

# **Section Customer Reward** 

- Judul: Makin sering laundry, makin banyak bonus 

- Subheading: Setiap paket langganan bulanan memberimu stempel. Kumpulkan begitu kami buka dan tukar jadi bonus berikut. 

- 6 stempel: Tukar jadi ekstra cuci 5 kg 

- 12 stempel: Tukar jadi ekstra cuci 10 kg 

- 18 stempel: Tukar jadi ekstra cuci 15 kg 

- CTA: Gabung waiting list sekarang untuk mulai kumpulkan stempel begitu kami launch. 

# **Thank You Pop-up** 

- Foto Voucher Box 

- Judul: Kamu sudah masuk daftar! 

- Isi: Terima kasih sudah gabung Waiting List ScentStation Laundry, [Nama]. Kami akan DM kamu di Instagram begitu kami resmi buka. Sampai jumpa! 

6 

# **Footer** 

- ScentStation Laundry — Choose Your Scent, Love The Freshness 

- Instagram: @ 

- © 2026 ScentStation Laundry 

- Link: Privacy Policy (samping copyright) 

# **Isi ScentStation Laundry Privacy Policy** 

**Berlaku sejak:** [.../…/…..] 

# **1. Siapa Kami** 

ScentStation Laundry adalah layanan laundry antar-jemput dengan personalisasi aroma yang sedang bersiap beroperasi di wilayah Alam Sutera, Gading Serpong, dan BSD. Saat ini kami berada pada tahap pra-launching. Kami berkomitmen untuk melindungi privasi dan data pribadi calon pelanggan kami sesuai dengan ketentuan peraturan perundang-undangan yang berlaku. 

# **2. Data yang Kami Kumpulkan** 

Melalui formulir pendaftaran waitlist pra-launching ini, kami mengumpulkan: 

- **Nama** : untuk mengidentifikasi dan menyapa kamu secara personal. 

- **Username Instagram** : sebagai saluran komunikasi utama terkait informasi peluncuran layanan. 

Kami tidak mengumpulkan nomor telepon, alamat email, alamat fisik, atau data keuangan pada tahap ini. 

# **3. Tujuan Penggunaan Data** 

Data yang kamu berikan digunakan **semata-mata** untuk: 

- Mengirimkan informasi peluncuran resmi ScentStation Laundry kepadamu. 

- Menghubungi kamu terkait penawaran early bird bagi pendaftar awal. 

- Memasukkan namamu ke dalam waiting list pelanggan pertama ScentStation Laundry. 

7 

# **4. Penyimpanan Data** 

Data kamu disimpan secara aman dan hanya dapat diakses oleh tim internal ScentStation Laundry. Kami tidak menyimpan data di server pihak ketiga yang tidak terpercaya. 

# **5. Tidak Ada Pembagian Data ke Pihak Ketiga** 

ScentStation Laundry **tidak menjual, menyewakan, atau membagikan** data pribadimu kepada pihak ketiga mana pun — termasuk pengiklan, mitra bisnis, atau platform lain — tanpa persetujuan eksplisit darimu. 

# **6. Hak Kamu atas Data Pribadi** 

Kamu berhak untuk: 

- Meminta akses ke data pribadi yang telah kamu berikan. 

- Meminta penghapusan datamu dari sistem kami kapan saja. 

- Menarik persetujuan dan berhenti menerima komunikasi dari kami. 

Untuk menggunakan hak-hak tersebut, hubungi kami melalui Instagram **@scentstation.laundry** . 

# **7. Keamanan Data** 

Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadimu dari akses tidak sah, perubahan, pengungkapan, atau penghancuran. 

# **8. Perubahan Kebijakan** 

ScentStation Laundry dapat memperbarui Privacy Policy ini sewaktu-waktu. Perubahan signifikan akan diinformasikan melalui Instagram kami. Tanggal pembaruan akan selalu tercantum di bagian atas dokumen ini. 

# **9. Hubungi Kami** 

Jika kamu memiliki pertanyaan tentang Privacy Policy ini, silakan hubungi kami melalui: 

- Instagram: **@scentstation.laundry** 

8 

# **Desain** 

# **Color palette:** 

|**Peran**|**Warna**|**Hex**|
|---|---|---|
|Primary / brand|Navy Blue|#1E2E52|
|Secondary|Soft Blue|#A9C7E8|
|Accent<br>(tema|Lavender<br>Soft Pink<br>→|#C4B2E4<br>→|
|aroma)|(gradient)|#F4C6D2|
|Background|Pure White / Light Gray|#FFFFFF / #F3F5F8|



- Elemen accent (badge, highlight aroma) menggunakan gradient Lavender–Soft Pink. 

- Tipografi: elegan-modern (mis. Inter untuk body, heading lebih tegas). 

- Halaman memiliki **favicon** (ikon kecil di tab browser). 

# **Mandatory Requirements** 

1. Lead form tampil Above The Fold pada desktop, tanpa perlu scroll. 

2. Form hanya menangkap Nama dan Username Instagram; setelah submit muncul Thank You pop-up (bukan redirect). 

3. Data form otomatis masuk ke Google Sheet melalui Apps Script Web App. 

4. Seluruh copy bernada pre-launch, termasuk Thank You pop-up. 

5. Privacy Policy tampil sebagai checkbox di bawah lead form; halaman memiliki favicon. 

6. Responsif rapi dan proporsional tanpa elemen tumpang tindih di mobile, tablet, dan desktop. 

9 

