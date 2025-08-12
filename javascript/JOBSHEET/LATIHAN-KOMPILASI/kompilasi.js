let input = 5; // harus angka, gabisa huruf

try {
  let angka = parseInt(input);

  if (isNaN(angka)) {
    throw new Error("Input harus berupa angka!");
  }

  console.log("Kuadrat:", angka * angka);
} catch (e) {
  console.error("Terjadi kesalahan:", e.message);
}