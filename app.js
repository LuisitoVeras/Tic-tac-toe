const startButton = document.getElementById("startButton");
const modalPopUp = document.getElementById("modal");
const turnContainer = document.getElementById("turnContainer");
const allBlocks = document.querySelectorAll("#allContainer div");
let choose = 0;

const chooseFirstPlayer = () => {
    showModal();
    const x = document.getElementById("x");
    const o = document.getElementById("o");

    x.addEventListener("click", (e) => {
        choose = true;
        hideModal();
        showTurn("X");
        setXandO();
    })

    o.addEventListener("click", (e) => {
        choose = false;
        hideModal();
        showTurn("O");
        setXandO();
    })
}

const setXandO = () => {
    allBlocks.forEach((block, idx) => {
        block.classList.add("actives");
        block.addEventListener("click", () => {
            putSimbolOnTurn(block);
        }, {once:true});
    })
};

const updateDraw = () => {
    const turnContainerText = document.getElementById("turnContainer-p");
    const turnContainerText2 = document.getElementById("turnContainer-p2");

    turnContainerText2.remove()
    turnContainerText.innerText = "Draw";
}

const updateWinner = () => {
    const turnContainerText = document.getElementById("turnContainer-p");
    const turnContainerText2 = document.getElementById("turnContainer-p2");

    turnContainerText.innerText = "Winner: ";

    turnContainerText2.innerText == "X" ? turnContainerText2.innerText = "O" : turnContainerText2.innerText = "X";
}

const restart = () => {
    startButton.innerText = "RESTART";
    startButton.style.display = "block";
    startButton.onclick = () => location.reload();
}


const EndGame = (typeWin) => {
    allBlocks.forEach((block, idx) => {
        block.classList.add("inactive");
    })

    if (typeWin == 9) {
        updateDraw();
    }

    else {
        updateWinner();
    }
   
    restart();
}

const JaqueMateConfirm = () => {
    let AllFull;

    let threeTop1 = allBlocks[0].innerText + allBlocks[1].innerText + allBlocks[2].innerText;
    let threeMiddle2 = allBlocks[3].innerText + allBlocks[4].innerText + allBlocks[5].innerText;
    let threeBottom3 = allBlocks[6].innerText + allBlocks[7].innerText + allBlocks[8].innerText;

    let Vertical4 = allBlocks[0].innerText + allBlocks[3].innerText + allBlocks[6].innerText;
    let Vertical5 = allBlocks[1].innerText + allBlocks[4].innerText + allBlocks[7].innerText;
    let Vertical6 = allBlocks[2].innerText + allBlocks[5].innerText + allBlocks[8].innerText;

    let Diagonal7 = allBlocks[0].innerText + allBlocks[4].innerText + allBlocks[8].innerText;
    let Diagonal8 = allBlocks[2].innerText + allBlocks[4].innerText + allBlocks[6].innerText;

    if (threeTop1 == "XXX" || threeTop1 == "OOO") {
        EndGame();
    }

    else if (threeMiddle2 == "XXX" || threeMiddle2 == "OOO") {
        EndGame();
    }

    else if (threeBottom3 == "XXX" || threeBottom3 == "OOO") {
        EndGame();
    }

    else if (Vertical4 == "XXX" || Vertical4 == "OOO") {
        EndGame();
    }

    else if (Vertical5 == "XXX" || Vertical5 == "OOO") {
        EndGame();
    }

    else if (Vertical6 == "XXX" || Vertical6 == "OOO") {
        EndGame();
    }

    else if (Diagonal7 === "XXX" || Diagonal7 == "OOO") {
        EndGame();
    }

    else if (Diagonal8 === "XXX" || Diagonal8 == "OOO") {
        EndGame();
    }

    else {
        for (let i = 0; i < 9; i++) {
            if (allBlocks[i].innerText.length == 0) {
                AllFull = false;
                {break;}
            }
    
            else {
                AllFull = true;
            }
        }
    
        if (AllFull == true) {
            EndGame(9);
        }
    }
}

function putSimbolOnTurn (block) {
    const turnContainerP = document.getElementById("turnContainer-p2");

    if (choose == true) {
        block.innerText = "X";
        choose = false;
        if (turnContainerP) turnContainerP.innerHTML = "O";
    }
    else {
        block.innerText = "O";
        choose = true;
        if (turnContainerP) turnContainerP.innerHTML = "X";
    }
    JaqueMateConfirm();
    
    
}

function showTurn (letter) {
    const turn = document.createElement("p");
    turn.innerText = letter;
    turn.style.textAlign = "center";
    turn.id = "turnContainer-p2";
    turnContainer.style.opacity = 1;
    turnContainer.style.position = "inherit";
    turnContainer.appendChild(turn);
}

function showModal () {
    modalPopUp.style.opacity = 1;
    modalPopUp.style.zIndex = 10;
    modalPopUp.style.display = "inherit";
}

function hideModal () {
    modalPopUp.opacity = 0;
    modalPopUp.style.zIndex = -1;
    modalPopUp.style.display = "none";
}


const StartGame = () => {
    startButton.style.display = "none";
    chooseFirstPlayer();
}
