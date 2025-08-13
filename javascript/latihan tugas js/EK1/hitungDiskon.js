// harga makanan
let nasgor = 25000;
let migor = 22000;
let capcay = 32000;

// menampilkan harga makanan
console.log("Harga Nasi Goreng = Rp. " + nasgor);
console.log("Harga Mie Goreng = Rp. " + migor);
console.log("Harga CapCay = Rp. " + capcay);

// total harga semua makanan
let totalHarga = nasgor + migor + capcay;
console.log("Harga Total = Rp. " + totalHarga);

// diskon 10%
let Persen = 10;
console.log("Diskon = " + Persen + "%");

let diskon = totalHarga * (Persen / 100);

// harga setelah diskon
let setelahDiskon = totalHarga - diskon;
console.log("Harga Setelah Diskon = Rp. " + setelahDiskon);

// duit pelanggan
let duitPelanggan = 100000;
console.log("Pembayaran = Rp. " + duitPelanggan);

// hitung kembalian
let kembalian = duitPelanggan - setelahDiskon;
console.log("Kembalian = Rp. " + kembalian);