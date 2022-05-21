var tela

var pincel

var el = document.querySelector('.gameMenu');

var header = document.querySelector('header');

var joystick = document.querySelector('.joystick');

var div = document.querySelector('#unique')

let lines = document.querySelector('.lines')

let add = document.querySelector('#adicionar')
let form = document.querySelector('form')

let letrasErradas = document.querySelector('.wrongLetters')

let clue = document.querySelector('.hint')

let teclado = document.querySelector('#yes')

let keyboard = document.querySelectorAll('.Keyboard')

let footer = document.querySelector('.footermenu')

var die = 0

let secret

let secretword

let hint

let correctletters = []

var wrongLetters = []

var stickman = [
    'cabeca',
    'corpo',
    'bracoesquedo',
    'bracodireito',
    'pernaesquerda',
    'pernadireita',
    'peesquerdo',
    'pedireito',
]

const words = [
    {
        word: 'Alface',
        hint: 'Alimentos'
    },
    {
        word: 'Cogumelo',
        hint: 'Alimentos'
    },
    {
        word: 'Ameixa',
        hint: 'Alimentos'
    },
    {
        word: 'Arroz',
        hint: 'Alimentos'
    },
    {
        word: 'Cebola',
        hint: 'Alimentos'
    },
    {
        word: 'Peixe',
        hint: 'Alimentos'
    },
    {
        word: 'Chita',
        hint: 'Animais'
    },
    {
        word: 'Cavalo',
        hint: 'Animais'
    },
    {
        word: 'Peru',
        hint: 'Animais'
    },
    {
        word: 'Sardinha',
        hint: 'Animais'
    },
    {
        word: 'Cavalo',
        hint: 'Animais'
    },
    {
        word: 'Cachorro',
        hint: 'Animais'
    },
    {
        word: 'Gato',
        hint: 'Animais'
    },
    {
        word: 'Rinoceronte',
        hint: 'Animais'
    },
    {
        word: 'Corvo',
        hint: 'Animais'
    },
    {
        word: 'Guaxinim',
        hint: 'Animais'
    },
    {
        word: 'Vermelho',
        hint: 'Cor'
    },
    {
        word: 'Rosa',
        hint: 'Cor'
    },
    {
        word: 'Azul',
        hint: 'Cor'
    },
    {
        word: 'Marrom',
        hint: 'Cor'
    },
    {
        word: 'Verde',
        hint: 'Cor'
    },
    {
        word: 'Amarelo',
        hint: 'Cor'
    },
    {
        word: 'Laranja',
        hint: 'Cor'
    },
    {
        word: 'Castanho',
        hint: 'Cor'
    },
    {
        word: 'Cinza',
        hint: 'Cor'
    },
    {
        word: 'Branco',
        hint: 'Cor'
    },
    {
        word: 'Nariz',
        hint: 'Corpo Humano'
    },
    {
        word: 'Olhos',
        hint: 'Corpo Humano'
    },
    {
        word: 'Cotovelo',
        hint: 'Corpo Humano'
    },
    {
        word: 'Peito',
        hint: 'Corpo Humano'
    },
    {
        word: 'Coxas',
        hint: 'Corpo Humano'
    },
    {
        word: 'Boca',
        hint: 'Corpo Humano'
    },
    {
        word: 'Sangue',
        hint: 'Corpo Humano'
    },
    {
        word: 'Osso',
        hint: 'Corpo Humano'
    },
    {
        word: 'Cabelo',
        hint: 'Corpo Humano'
    },
    {
        word: 'Unha',
        hint: 'Corpo Humano'
    },




]

var word = ""

function start() {
    el.parentNode.removeChild(el);
    header.classList.add('headeringame');
    joystick.classList.add('joystickingame')
    div.classList.add("game");
    div.classList.remove("hide");
    teclado.classList.add("teclado");
    teclado.classList.remove("hide");
    footer.classList.add("footergame");
    footer.classList.remove("footermenu");
    secret = randomWord();
    secretword = secret.word.toUpperCase()
    hint = secret.hint
    clue.innerHTML = `Dica: ${hint}`
    hangman()
}



function hangman(parte) {
    tela = document.querySelector('canvas');
    pincel = tela.getContext('2d');
    pincel.strokeStyle = 'white';

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(350, 450);
    pincel.lineTo(10, 450);
    pincel.moveTo(80, 450);
    pincel.lineTo(50, 10);
    pincel.lineTo(200, 10);
    pincel.lineTo(200, 50);
    pincel.stroke();

    switch (parte) {
        case 'cabeca':
            pincel.lineWidth = 5;
            pincel.beginPath();
            pincel.arc(200, 100, 50, 0, Math.PI * 2, true);
            pincel.closePath();
            pincel.stroke();
            break
        case 'corpo':

            pincel.beginPath();
            pincel.moveTo(200, 150);
            pincel.lineTo(200, 280);
            pincel.stroke();
            break
        case 'bracoesquedo':

            pincel.beginPath();
            pincel.moveTo(200, 170);
            pincel.lineTo(120, 200);
            pincel.stroke();
            break
        case 'bracodireito':
            pincel.beginPath();
            pincel.moveTo(200, 170);
            pincel.lineTo(280, 200);
            pincel.stroke();
            break
        case 'pernaesquerda':

            pincel.beginPath();
            pincel.moveTo(200, 280);
            pincel.lineTo(160, 380);
            pincel.stroke();
            break
        case 'pernadireita':

            pincel.beginPath();
            pincel.moveTo(164, 380);
            pincel.lineTo(140, 370);
            pincel.stroke();
            break
        case 'peesquerdo':
            pincel.beginPath();
            pincel.moveTo(200, 280);
            pincel.lineTo(250, 380);
            pincel.stroke();
            break

        case 'pedireito':
            pincel.beginPath();
            pincel.moveTo(244, 380);
            pincel.lineTo(270, 370);
            pincel.stroke();
            break
    }


}
function randomWord() {
    return words[Math.floor(Math.random() * words.length)]
}



function isvalid(codigo) {
    return codigo >= 65 && codigo <= 90;
}



function repeated() {
    alert("Não repita letras!")
}

function refreshgame() {
    showCorretLetters();
    showWrongLetters();

}

function showCorretLetters() {
    lines.innerHTML = '';
    secretword.split("").forEach(letter => {
        if (correctletters.includes(letter)) {
            lines.innerHTML += `<span>${letter}</span>`
        } else {

            lines.innerHTML += `<span>_</span>`
        }
    });
}

function showWrongLetters() {
    letrasErradas.innerHTML = ""
    wrongLetters.forEach(letter => {
        letrasErradas.innerHTML += `<span>${letter}</span>`
    })
}

function gameLose() {

    var modal = document.getElementById("modalLost");
    modal.classList.add("show-modal");

}

function gameWon() {

    var modal = document.getElementById("modalWin");
    modal.classList.add("show-modal");

}

function reload() {
    location.reload();
}

function adc() {
    var modal = document.getElementById("modalAdd");
    modal.classList.toggle("show-modal");
}

add.addEventListener("click", function (event) {
    event.preventDefault();
    var word = document.getElementById("word").value;
    var hint = document.getElementById("hint").value;

    words.push({ word, hint })
    form.reset()
})


keyboard.forEach(key => {
    key.addEventListener("click", function () {
        key.disabled = true
        var codigo = key.value;
        console.log(codigo)
            if (secretword.includes(codigo)) {
                correctletters.push(codigo)
            } else {
                wrongLetters.push(codigo)
                hangman(stickman[die])
                die++
                if (die == 8) {
                    gameLose()
                }
            }
        refreshgame()
        if (lines.textContent == secretword) {
            gameWon();
        }
        
    }
    )
})

document.addEventListener('keydown', (evento) => {
    var codigo = evento.keyCode;
    var letter = evento.key.toUpperCase()
    if (isvalid(codigo)) {
        if (wrongLetters.includes(letter)) {
            repeated()
        } else {
            if (secretword.includes(letter)) {
                correctletters.push(letter)
            } else {
                wrongLetters.push(letter)
                hangman(stickman[die])
                die++
                if (die === 8) {
                    gameLose()
                }
            }
        }
        if(lines.textContent == secretword){
            gameWon();
        }
        refreshgame()
    }
})