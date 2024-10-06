# Membangun-Aplikasi-Catatan-Menggunakan-React

Proyek ini adalah submission akhir pada course **Belajar Membuat Aplikasi Web dengan React** pada learning path **React** di [Dicoding](dicoding.com).

## Kriteria

### A. Kriteria Wajib

#### 1. Mampu Menampilkan Daftar Catatan

- Aplikasi harus mampu menampilkan daftar catatan dengan data awal (initial data) yang telah kami sediakan.
- Memanfaatkan state component untuk menyimpan data catatan.
- Menggunakan teknik array map untuk menampilkan daftar catatan.

#### 2. Mampu Menambahkan Catatan

- Aplikasi harus mampu menambahkan data catatan baru.
- Memanfaatkan controlled component dalam membuat form input.
- Data catatan disimpan cukup pada memori saja (akan hilang jika browser di-refresh).
- Data catatan yang disimpan merupakan objek JavaScript dengan struktur berikut

```js
{
  id: number | string,
  title: string,
  body: string,
  archived: boolean, 
  createdAt: string,
}
```

Berikut contoh data riilnya:

```js
{
    id: 1,
    title: "Babel",
    body: "Babel merupakan tools open-source yang digunakan untuk mengubah sintaks ECMAScript 2015+ menjadi sintaks yang didukung oleh JavaScript engine versi lama. Babel sering dipakai ketika kita menggunakan sintaks terbaru termasuk sintaks JSX.",
    archived: false,
    createdAt: '2022-04-14T04:27:34.572Z'
}
```

**Catatan**:
Untuk id pada tiap catatan yang disimpan haruslah unik. Tips dalam menetapkan nilai untuk id adalah Anda bisa memanfaatkan nilai *timestamp*. Untuk mendapatkan nilai timestamp di JavaScript cukup mudah, cukup dengan menuliskan expressions **+new Date()**.

#### 3. Mampu Menghapus Catatan

- Aplikasi harus menyediakan tombol **hapus** untuk menghapus data catatan yang disimpan.
- Terdapat conditional rendering di mana bila tidak terdapat data catatan, maka UI menampilkan pesan **“Tidak ada catatan”** atau pesan apa pun yang mengindikasikan data catatan kosong.

### B. Kriteria Opsional

#### 1. Terdapat Fitur Pencarian Catatan

- Aplikasi memiliki fitur pencarian catatan berdasarkan kata kunci yang dimasukkan, dengan ketentuan:
    - Jika kolom pencarian tidak kosong, maka aplikasi **hanya menampilkan daftar catatan yang judulnya mengandung kata kunci yang dimasukkan**.
    - Jika kolom pencariannya kosong, maka aplikasi menampilkan seluruh catatan.
- Memanfaatkan controlled component dalam membangun fitur catatan.

#### 2. Terdapat Limit Karakter pada Input Judul Catatan

- Aplikasi dapat mencegah pengguna untuk memberikan judul catatan lebih dari 50 karakter.
- Menggunakan state dalam melimitasi, bukan atribut *maxlength*.
- Menampilkan jumlah karakter tersisa yang dapat digunakan oleh pengguna.

#### 3. Terdapat Fitur Arsip Catatan

- Aplikasi memiliki fitur arsip catatan.
- Aplikasi harus menyediakan tombol **arsipkan/pindahkan** untuk mengarsipkan atau memindahkan catatan dari arsip.
- Daftar catatan yang diarsip harus ditampilkan pada tempat terpisah dari catatan yang tidak diarsip.

## Referensi

https://dicoding-react-note-app.netlify.app/

## Penilaian

Saran: 
- Menerapkan kriteria opsional 1: Terdapat Fitur Pencarian Catatan.
- Menerapkan kriteria opsional 2: Terdapat Limit Karakter pada Input Judul Catatan.
- Menerapkan kriteria opsional 3: Terdapat Fitur Arsip Catatan.
- Menuliskan kode dengan baik:
    - Tidak membuat class component yang tidak diperlukan.
    - Memecah UI menjadi komponen sekecil mungkin (sesuai tanggung jawabnya).
    - Gaya penulisan kode harus konsisten.

&starf;:
Semua ketentuan wajib terpenuhi, namun terdapat indikasi kecurangan dalam mengerjakan submission.

&starf;&starf;:
Semua ketentuan wajib terpenuhi, namun terdapat kekurangan pada penulisan kode. Seperti tidak menerapkan modularization atau gaya penulisan tidak konsisten.

&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi, namun tidak terdapat improvisasi atau persyaratan opsional yang dipenuhi.

&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan minimal dua saran di atas.

&starf;&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan seluruh saran di atas.

## Ketentuan Submission yang Akan Ditolak

- Kriteria utama tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Menggunakan framework atau UI library selain React.
- Mengirimkan kode JavaScript yang telah di-minify.
- Melakukan kecurangan seperti tindakan plagiasi.