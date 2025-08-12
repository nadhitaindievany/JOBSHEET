// menambah elemen di akhir 
console.log("tembah elemen");
let buah = ["apel", "anggur"];
buah.push("mangga","pir");
console.log(buah);
console.log("");

// menghapus elemen di akhir
console.log("hapus elemen");
let buah1 = ["apel", "jeruk", "mangga"];
buah1.pop();
console.log(buah1);
console.log("");

// tambah elemen di awal
console.log("tambah elemen awal");
let buah2 = ["apel", "jeruk", "mangga"];
buah2.unshift("pir");
console.log(buah2);
console.log("");

// hapus elemen di awal
console.log("hapus elemen awal");
let buah3 = ["apel", "jeruk", "mangga"];
buah3.shift();
console.log(buah3);
console.log("");

// menambah elemen di posisi tertentu
console.log("menambah elemen di posisi tertentu");
let angka1 = [1,2,3,4,5];
angka1.splice(2,0,3);
console.log(angka1);
console.log("");

// menghapus elemen di posisi tertentu
console.log("menghapus elemen di posisi tertentu");
let angka2 = [1,2,4,5];
angka2.splice(2,1);
console.log(angka2);
console.log("");

// mengambil sebagian array
console.log("mengambil sebagian array");
let angka3 = [1,2,3,4,5];
let potong = angka3.slice(1,3);
console.log(potong);
console.log("");