let bulan = 6;
let namaBulan;

switch (bulan){
    case 1:
        namaBulan = "januari";
        break;
    case 2:
        namaBulan = "februari";
        break;
    case 3:
        namaBulan = "maret";
        break;
    case 4:
        namaBulan = "april";
        break;
    case 5:
        namaBulan = "mei";
        break;
    case 6:
        namaBulan = "juni";
        break;
    case 7:
        namaBulan = "juli";
        break;
    case 8:
        namaBulan = "agustus";
        break;
    case 9:
        namaBulan = "september";
        break;
    case 10:
        namaBulan = "oktober";
        break;
    case 11:
        namaBulan = "november";
        break;
    case 12:
        namaBulan = "desember";
        break;
    default:
        namaBulan= "Nomor bulan tidak valid";
}
console.log("Bulan ke- " + bulan + " adalah " + namaBulan);