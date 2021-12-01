function getPilihanComputer() {
    const comp = Math.random();
  
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'gajah';
    return 'semut'; 
}

function getHasil(comp, player){
    if( player == comp ) return 'SERI!';
    if( player == 'gajah' ) return ( comp == 'orang' ) ? 'MENANG!' : 'KALAH!';
    if( player == 'orang' ) return ( comp == 'gajah' ) ? 'KALAH!' : 'MENANG!';
    if( player == 'semut' ) return ( comp == 'orang' ) ? 'KALAH!' : 'MENANG!';

}

function skor(hasil){
    var hasilskor = hasil;
    
    while (hasilskor == "MENANG!") {
        document.getElementById('skor').value = 1;
    }

}

// function putar() {
//     const imgComputer = document.querySelector('.img-komputer');
//     const gambar = ['gajah', 'semut', 'orang'];
//     let i = 0;
//     const waktuMula = new Date().getTime();
//     setInterval(function(){
//         if (new Date().getTime() - waktuMula > 1000) {
//             clearInterval;
//             return;
//         }
//         imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
//         if (i == gambar.length) i = 0;
//     }, 100);
    
// }

// const pilihan = document.querySelectorAll('li img');
// pilihan.forEach(function(pil){
//     pil.addEventListener('click', function () {

//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = pil.className;
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     putar();

//     setTimeout(function () {
//         const imageKomputer = document.querySelector('.img-komputer');
//         imageKomputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

//         const info = document.querySelector('.info');
//         info.innerHTML = hasil;

//         skor(hasil);
//     }, 1000)
    

//     })
// });


const orang = document.querySelector('.orang');
orang.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = orang.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imageKomputer = document.querySelector('.img-komputer');
    imageKomputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const semut = document.querySelector('.semut');
semut.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = semut.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imageKomputer = document.querySelector('.img-komputer');
    imageKomputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});

const gajah = document.querySelector('.gajah');
gajah.addEventListener('click',function(){
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = gajah.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);

    const imageKomputer = document.querySelector('.img-komputer');
    imageKomputer.setAttribute('src', 'img/'+ pilihanComputer +'.png');

    const info = document.querySelector('.info');
    info.innerHTML = hasil;
});