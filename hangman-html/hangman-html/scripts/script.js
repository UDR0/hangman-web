const hangmanImage = document.querySelector(".hangman-box img");
const wordDisplay = document.querySelector(".word-display");
const guessesText = document.querySelector(".guesses-text b");
const keyboardDiv = document.querySelector(".keyboard");
const gameModal = document.querySelector(".game-modal");
const playAgainBtn = document.querySelector(".rejouer");
const hintButton = document.querySelector(".show-hint");
const hintText = document.querySelector(".hint-text");

let currentWord, correctLetters, wrongGuessCount;
const maxGuesses = 6;


const resetGame  = () => {
    // Réinitialise le jeu
    correctLetters = [];
    wrongGuessCount = 0;
    hangmanImage.src = `hangman/hangman_${wrongGuessCount}.jpg`;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;
    keyboardDiv.querySelectorAll("button").forEach(btn => (btn.disabled = false)); 

    hintButton.disabled = false; // Vous pouvez désactiver le bouton après avoir montré l'indice.
    hintButton.style.display = "block"; // Vous pouvez masquer le bouton après avoir montré l'indice.
    hintButton.style.opacity = 1; // Vous pouvez également ajuster l'opacité si vous préférez une transition.
    hintText.style.display = "none"; // Affichez le texte de l'indice.

    wordDisplay.innerHTML = currentWord.split("").map(() => `<li class="letter"></li>`).join("");
    gameModal.classList.remove("show");
}

const getRandomWords = () => {
//Séléctionne un mot aléatoire et l'indice qui va avec
     const { word, hint } = wordList[Math.floor(Math.random() * wordList.length)];
     currentWord = word;
     document.querySelector(".hint-text b").innerText = hint;
     resetGame();
}

const  gameOver = (isWin) => {
    // Après 600ms de partie gagné on affiche le modal
    setTimeout(() => {
        const modalText = isWin ? `Tu as trouvé le mot :` : `Le mot était :`;
        gameModal.querySelector("img").src = `hangman/${isWin ? 'victory' : 'lost'}.gif`;
        gameModal.querySelector("h4").innerText = `${isWin ? 'Bravo, tié le boss !' : 'Nulos !'}`;
        gameModal.querySelector("p").innerHTML = `${modalText} <b>${currentWord}</b>`;
        gameModal.classList.add("show");
    }, 300);
}

const initGame = (button, clickedletter) => {
    // Vérifie si la lettre est dans le mot
    if(currentWord.includes(clickedletter)) {
        // Si oui, on affiche la lettre dans le mot
        [...currentWord].forEach((letter, index) => {
            if (letter === clickedletter) {
                correctLetters.push(letter);
                wordDisplay.querySelectorAll('li')[index].innerText = letter;
                wordDisplay.querySelectorAll('li')[index].classList.add("guessed");
            }
        });
    } else { 
        // Si la lettre cliquée n'est pas bonne on dessin le pendu et on augmente le compteur d'erreur
        wrongGuessCount++;
        hangmanImage.src = `hangman/hangman_${wrongGuessCount}.jpg`;
        afficherCroixRouge();
    }

    button.disabled = true;
    guessesText.innerText = `${wrongGuessCount} / ${maxGuesses}`;

    // Vérifie si le jeu est terminé
    if(wrongGuessCount === maxGuesses) return gameOver(false);
    if(correctLetters.length === currentWord.length) return gameOver(true);
}

// Touches du clavier boutons
for (let i = 97; i <= 122; i++) {
    const button = document.createElement('button');
    button.innerText = String.fromCharCode(i);
    keyboardDiv.appendChild(button);
    button.addEventListener("click", e => initGame(e.target, String.fromCharCode(i)));

}
getRandomWords();

playAgainBtn.addEventListener("click", getRandomWords);

function moveBgtUp() {
    const bgt = document.querySelector(".bgt");
    bgt.style.transform = "translateY(-285px) scale(1)";
    bgt.style.opacity = 1;
    bgt.style.transition = 'opacity 1s ease-in-out, transform 0.3s ease-in-out';
}

function moveBgtDown() {
    const bgt = document.querySelector(".bgt");
    bgt.style.transform = "translateY(0) scale(2)";
    bgt.style.opacity = 1;
    bgt.style.transition = 'opacity 1s ease-in-out, transform 0.3s ease-in-out';
}

function afficherCroixRouge() {
    const croixRouge = document.querySelector(".croixRouge");
    croixRouge.style.display = "block";
    croixRouge.style.opacity = 1;
    setTimeout(() => {
        croixRouge.style.opacity = 0;
    }, 10);
    setTimeout(masquerCroixRouge, 1000);
}
function masquerCroixRouge() {
    const croixRouge = document.getElementById("croixRouge");
    croixRouge.style.display = "none";    
}
hintButton.addEventListener("click", function () {
    hintButton.disabled = true; // Vous pouvez désactiver le bouton après avoir montré l'indice.
    hintButton.style.display = "none"; // Vous pouvez masquer le bouton après avoir montré l'indice.
    hintButton.style.opacity = 0; // Vous pouvez également ajuster l'opacité si vous préférez une transition.
    hintText.style.display = "block"; // Affichez le texte de l'indice.

    // Déclenchez la transition en ajustant l'opacité de l'indice
    setTimeout(function () {
        hintText.style.opacity = 1; // Réglez l'opacité à 1 pour afficher l'indice avec la transition
    }, 10); // Attendez un court délai pour que la transition fonctionne correctement
});