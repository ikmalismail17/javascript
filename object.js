//Buat Object Angkot
function Angkot(pemandu, laluan, penumpang, hasil) {
    this.pemandu = pemandu;
    this.laluan = laluan;
    this.penumpang = penumpang;
    this.hasil = hasil;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function (namaPenumpang,bayar) {
        if (this.penumpang.length ===0){
            alert('Masih Kosong');
            return false;
        for (var i = 0; i < this.penumpang.length; i++) {
           if (this.penumpang[i] == namaPenumpang) {
               this.penumpang[i]=undefined;
               this.hasil += bayar;

               return this.penumpang;
           }
            
        }
    }
}
}

var angkot1 = new Angkot('Ikmal', ['Yan','SP'],[],0);