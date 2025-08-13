for (let i = 1; i <= 20; i++) {
// ngebaca ini dulu
    if (i % 3 === 0) {
        if (i % 2 === 0) {
        console.log(i + " - Mendapat Sertifikat");
        } else {
        console.log(i + " - Mengikuti Uji Kompetensi");
        } 
    }
    
// baru ngebaca ini
    else{ 
        if(i % 2) {
        console.log(i + " - Apel Pagi");
    } else {
        console.log(i + " - Mengikuti Pelatihan");
    }
  }
}