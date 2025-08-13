// print judul dulu
console.log("===== MENGHITUNG LUAS DAN KELILING BANGUN DATAR =====\n");

// Data sisi
const sisiPersegi = 8;
const panjangPersegiPanjang = 9;
const lebarPersegiPanjang = 3;
const jariJariLingkaran = 6;
const alasSegitiga = 6;
const tinggiSegitiga = 4;
const sisiSegitiga = 6;

// rumus menghitung luas
function luasPersegi(sisi) {
  return sisi * sisi;
}

function luasPersegiPanjang(panjang, lebar) {
  return panjang * lebar;
}

function luasLingkaran(jarijari) {
  return 22/7 * jarijari * jarijari;
}

function luasSegitiga(alas, tinggi) {
  return 0.5 * alas * tinggi;
}

// rumus menghitung Keliling
function kelilingPersegi(sisi) {
  return 4 * sisi;
}

function kelilingPersegiPanjang(panjang, lebar) {
  return 2 * (panjang + lebar);
}
// tiap phi hasilnya akan beda komanya
function kelilingLingkaran(jarijari) {
  return 2 * 22/7 * jarijari;
}

function kelilingSegitigaSamaSisi(sisi) {
  return 3 * sisi;
}

// menggabungkan rumus untuk di eksekusi
console.log(">> Luas Bangun Datar <<");
console.log("Luas Persegi Dengan Sisi "+ sisiPersegi + " Adalah " + luasPersegi(sisiPersegi));
console.log("Luas Persegi Panjang Dengan Panjang " + panjangPersegiPanjang + " Dan Lebar " + lebarPersegiPanjang + " Adalah " + luasPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log("Luas Lingkaran Dengan Jari - jari " + jariJariLingkaran + " Adalah " + luasLingkaran(jariJariLingkaran).toFixed(2));
console.log("Luas Segitiga Dengan Alas "+alasSegitiga+ " Dan Tinggi "+tinggiSegitiga+" Adalah "+luasSegitiga(alasSegitiga, tinggiSegitiga));
console.log("")

console.log(">> Keliling Bangun Datar <<");
console.log("Keliling Persegi Dengan Sisi "+sisiPersegi+" Adalah "+kelilingPersegi(sisiPersegi));
console.log("Keliling Persegi Panjang Dengan Panjang " + panjangPersegiPanjang +" Dan Lebar " +lebarPersegiPanjang+" Adalah "+kelilingPersegiPanjang(panjangPersegiPanjang, lebarPersegiPanjang));
console.log("Keliling Lingkaran Dengan Jari - Jari "+jariJariLingkaran+" Adalah "+kelilingLingkaran(jariJariLingkaran).toFixed(2));
console.log("Keliling Segitiga Sama Sisi "+sisiSegitiga+" Adalah "+kelilingSegitigaSamaSisi(sisiSegitiga));
