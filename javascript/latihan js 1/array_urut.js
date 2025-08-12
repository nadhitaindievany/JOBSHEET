console.log("urut alfabetis");
let nama = ["emily","mark","ashley","james",];
nama.sort();
console.log(nama);
console.log("");

console.log("urut descending");
let angkaDesc = [40,100,1,5,25,10];
angkaDesc.sort(function(a,b){
    return b - a;
});
console.log(angkaDesc);
console.log("");

console.log("urut object");
let siswa = [
    {nama: "ali", nilai: "85"},
    {nama: "budi", nilai: "92"},
    {nama: "cici", nilai: "75"}
];
siswa.sort((a,b) => b.nilai - a.nilai);
console.log(siswa);