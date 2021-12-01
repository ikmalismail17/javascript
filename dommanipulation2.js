// DOM Manipulation 2

//buat element baru
const pBaru = document.createElement('p');
const teksBaru = document.createTextNode('Paragraph Baru');
//simpan teks tulisan dlm p
pBaru.appendChild(teksBaru);
//simpan p di akhir sectionA
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);


const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

//nak simpan di tempat yg specific
//node.insertBefore()
const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector(' li:nth-child(2)');
ul.insertBefore(liBaru,li2);


//parentNode.removeChild()
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);

//.replaceChild()
const sectionB = document.querySelector('section#b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksWoi = document.createTextNode('Yelah');
h2Baru.appendChild(teksWoi);
sectionB.replaceChild(h2Baru,p4);

liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
pBaru.style.backgroundColor = 'lightgreen';