-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Waktu pembuatan: 29 Agu 2026 pada 18.38
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amanin`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `scans`
--

CREATE TABLE `scans` (
  `id` int(11) NOT NULL,
  `url` varchar(255) NOT NULL,
  `skor` int(11) NOT NULL,
  `grade` varchar(2) NOT NULL,
  `detail` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`detail`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `scans`
--

INSERT INTO `scans` (`id`, `url`, `skor`, `grade`, `detail`, `created_at`) VALUES
(1, 'google.com', 65, 'C', '{\"ssl\":{\"issuer\":\"Google Trust Services\",\"sisaHari\":64,\"expired\":false,\"ok\":true},\"headers\":{\"ditemukan\":[\"X-Frame-Options\"],\"hilang\":[\"Strict-Transport-Security\",\"Content-Security-Policy\",\"X-Content-Type-Options\"]},\"mixedContent\":{\"jumlahDitemukan\":1,\"contoh\":[\"href=\\\"http://www.google.co.id/intl/id/services/\\\"\"]}}', '2026-08-29 16:26:42'),
(2, 'google.com', 65, 'C', '{\"ssl\":{\"issuer\":\"Google Trust Services\",\"sisaHari\":64,\"expired\":false,\"ok\":true},\"headers\":{\"ditemukan\":[\"X-Frame-Options\"],\"hilang\":[\"Strict-Transport-Security\",\"Content-Security-Policy\",\"X-Content-Type-Options\"]},\"mixedContent\":{\"jumlahDitemukan\":1,\"contoh\":[\"href=\\\"http://www.google.co.id/intl/id/services/\\\"\"]}}', '2026-08-29 16:26:42');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `scans`
--
ALTER TABLE `scans`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `scans`
--
ALTER TABLE `scans`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
