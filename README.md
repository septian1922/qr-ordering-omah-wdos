# OMAH W-DOS — QR Ordering

Aplikasi pemesanan makanan berbasis QR untuk 20 meja, dengan halaman pelanggan, kasir, dapur, admin menu, dan laporan sederhana.

## Fitur
- QR Code unik untuk meja 01–20 (`/?meja=1` sampai `/?meja=20`)
- Pelanggan memilih menu, jumlah, catatan, dan metode tunai/QRIS
- Pesanan masuk ke kasir dan dapur
- Kasir mengubah status pembayaran dan status pesanan
- Dapur memperbarui status masak/siap
- Admin menambah menu, harga, foto (URL), dan mengaktifkan/nonaktifkan menu
- Laporan jumlah pesanan dan omzet yang sudah dibayar hari ini
- Tampilan responsif untuk HP dan komputer

## Persiapan
1. Instal Node.js versi 20 atau lebih baru.
2. Buat project di https://supabase.com.
3. Buka Supabase > SQL Editor, lalu jalankan isi `supabase/schema.sql`.
4. Salin `.env.example` menjadi `.env`.
5. Isi `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `JWT_SECRET`, `ADMIN_USERNAME`, `ADMIN_PASSWORD`, dan `PUBLIC_APP_URL`.
6. Jalankan:
   ```bash
   npm install
   npm run dev
   ```
7. Buka `http://localhost:5173` untuk halaman pelanggan.
8. Buka `http://localhost:5173/staff` untuk kasir, dapur, dan admin. Login memakai username/password dari `.env`.

## Membuat QR Code
Setelah aplikasi online, buka `https://ALAMAT-WEBSITE/staff/qr` dan login tidak diperlukan untuk halaman QR pada versi awal. Cetak 20 QR Code. Setiap QR membuka halaman dengan parameter nomor meja.

## Pembayaran QRIS
Versi awal mencatat pilihan QRIS dan menandai pembayaran setelah kasir memverifikasi pembayaran. QRIS belum terhubung ke payment gateway dan belum memverifikasi pembayaran otomatis. Untuk pembayaran otomatis, perlu akun payment gateway (misalnya Midtrans/Xendit) dan kredensial merchant.

## Catatan operasional penting
- Server memeriksa ulang harga dari database, bukan mempercayai harga dari browser.
- Kunci Supabase service role hanya berada di server.
- Halaman kasir/dapur perlu login.
- Data pesanan diperbarui otomatis dengan polling 4 detik.
- Sebelum dipakai menerima pesanan publik, deploy di hosting dengan HTTPS, ganti password, dan uji semua alur.
- Fitur upload foto langsung, cetak struk thermal, pembagian role terpisah, dan notifikasi suara belum termasuk versi awal.
