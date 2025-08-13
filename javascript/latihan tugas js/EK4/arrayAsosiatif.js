// Membuat objek dengan nama sebagai key dan tinggi sebagai value
const tinggiBadan = {
    Rose: 178,
    Magnolia: 153,
    Daisy: 165,
    Jasmine: 161,
    Violet: 159
};

// Menampilkan nama dan tinggi menggunakan perulangan for in
for (let nama in tinggiBadan) {
    console.log(nama + " memiliki tinggi " + tinggiBadan[nama] + " cm" );
}
