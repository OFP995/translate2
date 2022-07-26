
document.querySelector('button').onclick = dialog;
function dialog() {

    let otvet = document.querySelector('.word').value;

const TrueWord = ["необходимо", "Необходимо"];

TrueWord.includes(otvet); // returns true
let result = TrueWord.includes(otvet, [0]);
console.log(result);
if (result == true) { document.querySelector('.out').innerHTML = 'Верно'
}
else if (otvet == `хз`) { document.querySelector('.out').innerHTML = `"Необходимо"`;
}
else {document.querySelector('.out').innerHTML = `Неверно`;

    alert('Если не знаешь, то введи "хз"');
}

}

