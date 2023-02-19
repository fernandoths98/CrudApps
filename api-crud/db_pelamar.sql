-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 19 Feb 2023 pada 07.50
-- Versi server: 10.4.27-MariaDB
-- Versi PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_pelamar`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_admin`
--

CREATE TABLE `tbl_admin` (
  `id_admin` int(11) NOT NULL,
  `fullname_admin` varchar(25) NOT NULL,
  `email_admin` varchar(50) NOT NULL,
  `password_admin` varchar(8) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_admin`
--

INSERT INTO `tbl_admin` (`id_admin`, `fullname_admin`, `email_admin`, `password_admin`) VALUES
(1, 'admin', 'admin@gmail.com', '123456');

-- --------------------------------------------------------

--
-- Struktur dari tabel `tbl_user`
--

CREATE TABLE `tbl_user` (
  `id_user` int(11) NOT NULL,
  `name_user` varchar(50) DEFAULT NULL,
  `posisi_user` varchar(50) DEFAULT NULL,
  `no_ktp_user` varchar(16) DEFAULT NULL,
  `ttl_user` varchar(50) DEFAULT NULL,
  `jenis_kelamin` varchar(2) DEFAULT NULL,
  `agama_user` varchar(50) DEFAULT NULL,
  `goldar_user` varchar(2) DEFAULT NULL,
  `status_user` varchar(50) DEFAULT NULL,
  `alamat_ktp` text DEFAULT NULL,
  `alamat_tinggal` text DEFAULT NULL,
  `email_user` varchar(25) DEFAULT NULL,
  `no_telp` varchar(17) DEFAULT NULL,
  `orang_terdekat` varchar(100) DEFAULT NULL,
  `jenjang_pend` varchar(50) DEFAULT NULL,
  `nama_institut` varchar(50) DEFAULT NULL,
  `jurusan` varchar(50) DEFAULT NULL,
  `tahun_lulus` varchar(6) DEFAULT NULL,
  `ipk` varchar(6) DEFAULT NULL,
  `nama_kursus` varchar(50) DEFAULT NULL,
  `sertifikat` varchar(6) DEFAULT NULL,
  `tahun_sertif` varchar(6) DEFAULT NULL,
  `nama_perusahaan` varchar(100) DEFAULT NULL,
  `posisi_terakhir` varchar(100) DEFAULT NULL,
  `pendapatan_terakhir` varchar(25) DEFAULT NULL,
  `tahun_bekerja` varchar(50) DEFAULT NULL,
  `skill_user` varchar(255) DEFAULT NULL,
  `penempatan_user` varchar(6) DEFAULT NULL,
  `penghasilan_user` varchar(25) DEFAULT NULL,
  `tgl` varchar(50) DEFAULT NULL,
  `nama_pelamar` varchar(50) DEFAULT NULL,
  `status_keaktifan` varchar(50) DEFAULT 'Tidak Aktif',
  `password_user` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `tbl_user`
--

INSERT INTO `tbl_user` (`id_user`, `name_user`, `posisi_user`, `no_ktp_user`, `ttl_user`, `jenis_kelamin`, `agama_user`, `goldar_user`, `status_user`, `alamat_ktp`, `alamat_tinggal`, `email_user`, `no_telp`, `orang_terdekat`, `jenjang_pend`, `nama_institut`, `jurusan`, `tahun_lulus`, `ipk`, `nama_kursus`, `sertifikat`, `tahun_sertif`, `nama_perusahaan`, `posisi_terakhir`, `pendapatan_terakhir`, `tahun_bekerja`, `skill_user`, `penempatan_user`, `penghasilan_user`, `tgl`, `nama_pelamar`, `status_keaktifan`, `password_user`) VALUES
(5, 'Fernando Teguh ', 'Jr. Mobile Programmer', '3671022810980006', 'Jakarta, 28/10/1998', 'L', 'Kristen', 'O', 'Belum menikah', 'Jalan Danau Batur', 'Jalan Wijaya Kusuma', 'fernandoteguh31@gmail.com', '08981152982', 'Nando, 08981152982', 'Sarjana', 'Universitas Gunadarma', 'Sistem Informasi', '2021', '3,39', 'Skilvul', 'Ada', '2021', 'PT. SARANA INDONESIA MAJU', 'Jr. Fullstack Mobile Prog', '5000000', '2022-Sekarang', 'React Native, PHP, Android Studio', 'Ya', '8000000', 'Sun Feb 19 2023', 'Fernando Teguh', 'Tidak Aktif', '123456');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  ADD PRIMARY KEY (`id_admin`);

--
-- Indeks untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `tbl_admin`
--
ALTER TABLE `tbl_admin`
  MODIFY `id_admin` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
