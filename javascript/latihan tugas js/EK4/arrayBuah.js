let buah = [];

buah.push("Apel", "Mangga", "Jeruk","Semangka", "Pisang", "Anggur", "Nanas" );


// biar berurutan
buah.sort();

for (let i = 0; i < buah.length; i++) {
  console.log((i + 1) + ". " + buah[i]);
}