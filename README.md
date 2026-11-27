# GOLDEN AI OFFICE

Aplikasi web perusahaan trading virtual 6 AI Agent untuk analisis XAUUSD (mode ANALYSIS ONLY, mata uang G$).
Next.js 14 + Tailwind CSS. Semua data saat ini DEMO. Supabase menyusul (lihat `supabase/schema.sql`).

## Jalankan di HP Android (Termux, gratis)
1. Install Termux dari F-Droid.
2. Di Termux:
   pkg update -y && pkg install -y nodejs unzip
   termux-setup-storage
3. Ekstrak ZIP dari folder Download:
   cd ~ && unzip ~/storage/downloads/golden-ai-office.zip && cd golden-ai-office
4. npm install
5. npm run dev
6. Buka Chrome: http://localhost:3000

## Jalankan di komputer
npm install
npm run dev
