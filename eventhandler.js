//event handler
const p3 = document.querySelector('.p3');
const p2 = document.querySelector('.p2');

function ubahWarnaP2(){
    p2.style.backgroundColor = 'lightblue';
}
function ubahWarnaP3(){
    p3.style.backgroundColor = 'lightblue';
}

p2.onclick = ubahWarnaP2;

//addEventListener()
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul'); 
    const li = document.createElement('li');
    const teksLi = document.createTextNode('LI Baru woi');
    li.appendChild(teksLi);
    ul.appendChild(li);
})