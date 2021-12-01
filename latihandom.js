//tukar warna text
const h1 = document.querySelector('h1');
const btn = document.querySelector('#tombolUbahWarna');

btn.addEventListener('click',function() {
    // h1.style.color = 'red';
    // document.body.style.backgroundColor = 'lightblue';
    h1.classList.toggle('tekswarna');
    document.body.classList.toggle('bgwarna');
});

const secondbtn = document.createElement('button');
const textbtn = document.createTextNode('Button ke-2');
secondbtn.appendChild(textbtn);
secondbtn.setAttribute('type','button');
btn.after(secondbtn);

secondbtn.addEventListener('click',function(){
    const r = Math.round(Math.random() * 255 * 1);
    const g = Math.round(Math.random() * 255 * 1);
    const b = Math.round(Math.random() * 255 * 1);
    document.body.style.backgroundColor = 'rgb('+ r +','+g+','+b+')';
})


const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');
sMerah.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

sHijau.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

sBiru.addEventListener('input', function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

document.body.addEventListener('mousemove',function (e) {
    //posisi mouse
    // console.log(e.clientX);
    // console.log(window.innerWidth);
    const xPos = event.clientX
})








