use sekolah;

CREATE TABLE log_siswa (
    id_log INT AUTO_INCREMENT PRIMARY KEY,
    nis VARCHAR(10),
    nama_lama VARCHAR(50),
    nama_baru VARCHAR(50),
    aksi VARCHAR(20),
    tgl DATETIME
);