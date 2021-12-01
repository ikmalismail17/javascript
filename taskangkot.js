var penumpang = [];
var hapusPenumpang = function(namaPenumpang, penumpang) {

    //jika van kosong
    if (penumpang.length == 0){
        //tunjuk pesan yang van kosong dan tak mungkin ada yg turun
        console.log("Van nya kosong bang");
        //kembalikan isi array & keluar dari array
    }
    //else
    else{
        //cek kesemua kerusi yg ada
        for (var i=0; i<penumpang.length; i++){
            //jika ada nama sesuai
            if (penumpang[i] == namaPenumpang){
                //buang nama dengan undefined
                penumpang[i] = undefined;
                //kembalikan isi array & keluar dari array
                return penumpang;
            }
            //jika takdak nama yang sesuai
            else if(i ==penumpang.length - 1){
                //tunjuk pesan salah
                console.log("Takdak nama yang sepadan");
                //kembalikan isi array & keluar dari array
                return penumpang;
            }
        }
    }
    return penumpang;
}

//tambah penumpang
//function untuk tambah penumpang
var tambahPenumpang = function (namaPenumpang, penumpang) {
    //jika angkot kosong
    if (penumpang.length == 0){
        //tambah penumpang di awal array
        penumpang.push(namaPenumpang);
        //kembalikan isi array & keluar dari array
        return penumpang;
    }else{
        //cek kerusi dari awal
        for(var i=0; i < penumpang.length; i++){
            //kalau ada kerusi yang kosong
            if(penumpang[i] == undefined){
                //tambah penumpang di kerusi tersebut
                penumpang[i] = namaPenumpang;
                //kembalikan isi array & keluar dari array
                return penumpang;
            }
            //kalau ada nama yg sama
            else if(penumpang[i] == namaPenumpang){
                // tunjuk pesan kesalahan
                console.log(namaPenumpang + " sudah ada di dalam van");
                //kembalikan isi array & keluar dari array
                return penumpang;
            //jika seluruh kerusi terisi
            }else if(i == penumpang.length - 1){
                //tambah penumpang di akhir array
                penumpang.push(namaPenumpang);
                //kembalikan isi array & keluar dari array
                return penumpang;
            }
        }
    }
}