create database latihan_1;

use latihan_1;

create table buku (
kode_buku char(4) primary key,
judul_buku varchar(30) not null,
pengarang varchar(30) not null,
penerbit varchar(30) not null);

create table pengembalian (
kode_pinjam char(4) primary key,
kode_buku char(4) primary key,
tgl_kembali date not null,
denda numeric(9,0) not null,
foreign key(kode_pinjam)
references peminjaman(kode_pinjam),
foreign key(kode_buku)
references buku(kode_buku)
);

create table pengembalian (
Kode_Pinjam char(4) ,
Kode_Buku char(4),
Tgl_Kembali date not null,
Denda numeric(9,0) not null,
primary key(Kode_Pinjam, Kode_Buku),
foreign key(Kode_Pinjam) references peminjaman(Kode_Pinjam),
foreign key(Kode_Buku) references buku(Kode_Buku));

create table mahasiswa(
NIM char(8) primary key,
nama_mhs varchar(30) not null,
alamat_mhs varchar(30) not null,
nohp_mhs varchar(15) not null);

create table karyawan(
NIK char(18) primary key,
nama_karyawan varchar(30) not null,
alamat_karyawan varchar(30) not null,
nohp_karyawan varchar(15) not null,
jabatan varchar(25) not null);

drop database latihan_1