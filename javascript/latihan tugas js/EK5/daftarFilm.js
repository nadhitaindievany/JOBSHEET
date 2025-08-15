const fs = require('fs');

// 1. Buat object data film baru
const filmBaru = {
    judul: "Agak Laen",
    tahun: 2024,
    genre: ["Horor", "Komedi"]
};

// 2. Baca isi file film.json
let dataFilm = [];

try {
    const data = fs.readFileSync('film.json', 'utf8');
    dataFilm = JSON.parse(data);
} catch (err) {
    console.log("Gagal membaca file, akan membuat data baru.");
}

// 3. Tambahkan object film ke dalam array
dataFilm.push(filmBaru);

// 4. Simpan ulang array ke file JSON
fs.writeFileSync('film.json', JSON.stringify(dataFilm, null, 2));

// 5. Tampilkan seluruh film di terminal
console.log("Daftar Film:");
dataFilm.forEach((film, index) => {
    console.log(`${index + 1}. ${film.judul} (${film.tahun}) - ${film.genre.join(', ')}`);
});