create database pegawai;

use pegawai;

create table hobi(id int primary key, nama_hobi varchar(50) not null);

/* cara lain menulit pk 
create table hobi(id int auto_increment, nama_hobi varchar(50) not null, primary key(id)); */

create table asn(nip char(18) primary key, nama varchar(100), id_hobi int, foreign key(id_hobi) references hobi(id));

alter table asn change nama nama_lengkap varchar(100);

rename table asn to pns;

show databases;
show tables;

drop table pns;
drop database pegawai;

insert into hobi values
(1,'memasak'),
(2,'olehraga'),
(3,'menyanyi'),
(4,'membaca');

delete from asn;
delete from hobi;

insert into asn values
('121212121212','rose',1),
('121212121213','jasmine',2),
('121212121214','daisy',3),
('121212121215','amandel',2),
('121212121216','minul',4);

select*from hobi;
select*from asn;


update asn set nama = 'sunflower' where nip = '121212121214';

delete from asn where nip = '121212121214';

select nip, nama from asn where nip in ('121212121215','121212121216');

