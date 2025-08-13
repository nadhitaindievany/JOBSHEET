// barang yang dibeli beserta hargannya
let headset = 225000
let mouse = 150000
let keyboard = 350000

// rincian pembelian 
console.log("===== Rincian Pembelian =====");
console.log("Headset = Rp. " + headset);
console.log("Headset = Rp. " + mouse);
console.log("Headset = Rp. " + keyboard);
console.log("");

// total yang dibeli tanpa diskon
let totalBelanjaan = headset+mouse+keyboard;
console.log("Total Belanja = Rp. " +totalBelanjaan);

// hitung diskon
let persen = 10;
console.log("Diskon = " + persen + "%");

let diskon = totalBelanjaan * (persen/100)

// total setelah diskon
let setelahDiskon = totalBelanjaan - diskon;
console.log("Total Setelah Diskon = Rp. " + setelahDiskon);

let pembayaran = 800000;
console.log("Pembayaran = Rp. " + pembayaran);

let kembalian = pembayaran - setelahDiskon;
console.log("Kembalian = Rp. "+ kembalian);