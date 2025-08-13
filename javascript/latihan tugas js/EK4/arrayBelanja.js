// 1. Buat array berisi objek nama dan harga sepatu
let arrayBelanja = [
  { nama: "New Balance NB530", harga: 390000 },
  { nama: "Nike Vomero 5", harga: 350000 },
  { nama: "Adidas Samba", harga: 180000 },
  { nama: "Onitsuka Tiger Mexico", harga: 420000 }
];

// 2. Tampilkan daftar belanja dan hitung total belanja
let totalBelanja = 0;
console.log("===== Rincian Belanja Sepatu =====");

arrayBelanja.forEach((item, index) => {
  console.log(`${index + 1}. ${item.nama} - Rp. ${item.harga}`);
  totalBelanja += item.harga;
});

console.log(`\nTotal Belanja = Rp. ${totalBelanja}`);

// 3. Tentukan diskon berdasarkan total belanja
let diskon = 0;

if (totalBelanja >= 800000) {
  diskon = 15;
} else if (totalBelanja >= 500000) {
  diskon = 10;
} else if (totalBelanja >= 250000) {
  diskon = 5;
} else {
  diskon = 0;
}

console.log(`Diskon = ${diskon}%`);

// 4. Hitung total setelah diskon
let jumlahDiskon = (diskon / 100) * totalBelanja;
let totalSetelahDiskon = totalBelanja - jumlahDiskon;

console.log(`Total Setelah Diskon = Rp. ${totalSetelahDiskon}`);

// 5. Hitung kembalian dari pembayaran Rp. 1.200.000
let pembayaran = 1200000;
let kembalian = pembayaran - totalSetelahDiskon;

console.log(`Pembayaran = Rp. ${pembayaran}`);
console.log(`Kembalian = Rp. ${kembalian}`);
