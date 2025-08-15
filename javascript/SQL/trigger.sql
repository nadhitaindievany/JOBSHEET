use pegawai;
create table asn_audit(id int auto_increment primary key, aksi varchar(20), nip char(18), nama varchar(100), id_hobi int, tgl datetime);

create trigger after_nip_ditambah after insert on asn for each row insert into asn_audit
set aksi = 'tambah',
nip = new.nip,
nama = new.nama,
id_hobi = new.id_hobi,
tgl = now();

insert into asn values('121212121219','curut',2);

select * from asn_audit;

alter table asn_audit change akasi aksi varchar(20);

drop trigger after_nip_ditambah;