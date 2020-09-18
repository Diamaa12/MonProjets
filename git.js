let aside = document.getElementById('aside');
aside.style.color = "orange";
aside.style.backgroundColor = "grey";

let para = document.createElement('p');
let contenu = document.createTextNode('Bismillahi');
para.style.color = 'white';
para.style.backgroundColor = 'black';

para.appendChild(contenu);
aside.appendChild(para);
