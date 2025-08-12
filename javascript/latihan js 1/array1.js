// array 1d
console.log("array 1 dimensi");
let buah = ["apel", "anggur","jeruk","pir"];
// menampilkan array
console.log(buah[2]);
console.log("");

//array object
console.log("array object");
let mobil = [
    {merk:"BMW", warna:"merah", tipe:"sedan"},
    {merk:"toyota", warna:"hitem", tipe:"box"},
    {merk:"audi", warna:"biru", tipe:"sedan"}
];

// menampilkan arra object
console.log(mobil[1].merk);
console.log(mobil[1].warna);
console.log(mobil[1].tipe);
console.log("");

// panjang array
console.log("panjang array");
console.log(buah.length);
console.log("");

// foreach
console.log("foreach array");
buah.forEach(function(nilai,index){
    console.log("index ke- " +index+":"+nilai);
});
console.log("");

// foreach object
console.log("foreach array object");
mobil.forEach(function(item,i){
    console.log(`mobil ke- ${i+1}:`);
    console.log(`merk : ${item.merk}:`);
    console.log(`warna : ${item.warna}:`);
    console.log("tipe :" +item.tipe);
});
console.log("");

// map
console.log("map array");
let arrayWarna = mobil.map(function(item){
    return item.warna
});
console.log(arrayWarna);
console.log("");

// filter
console.log("filter array");
let arrayMobilFilter = mobil.filter(function(item){
    return item.tipe != "box";
})

console.log(arrayMobilFilter);