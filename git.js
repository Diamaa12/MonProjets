var aside = document.getElementById('aside');
aside.style.color = "orange";
aside.style.backgroundColor = "grey";

var para = document.createElement('p');
var contenu = document.createTextNode('Bismillahi');
para.style.color = 'white';
para.style.backgroundColor = 'black';

para.appendChild(contenu);
aside.appendChild(para);

var ul = document.getElementsByName('ul');
var li = document.createElement('li');

ul.appendChild(li);
