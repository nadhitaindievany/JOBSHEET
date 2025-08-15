use sekolah;

insert into siswa values
('1234561001', 'Doraemon'),
('2345671002', 'Nobita'),
('3456782001', 'Shizuka'),
('4567891003', 'Suneo'),
('5678902002', 'Dorami');


use sekolah;

update siswa set nama = "Giant" where nis = "4567891003";

delete from siswa where nis ='4567891003';

select nis, nama from siswa;
