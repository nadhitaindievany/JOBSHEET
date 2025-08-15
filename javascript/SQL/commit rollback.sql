use pegawai;

-- COMMIT - TIDAK BISA ROLLBACK
start transaction;
insert into hobi (id, nama_hobi)
values (5, 'berspeda');
commit;

rollback;

select * from hobi;

-- TANPA COMMIT
start transaction;
insert into hobi (id, nama_hobi)
values (6, 'berenang');
rollback;