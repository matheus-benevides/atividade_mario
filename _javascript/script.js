const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

const heart1 = document.querySelector(".heart");
const heart2 = document.querySelector(".heart1");
const heart3 = document.querySelector(".heart2");

let lifes = 3;

const jump = () => {
    mario.classList.add("jump");
    setTimeout(() => {
        mario.classList.remove("jump");
    }, 500);
}

let pontos = 0;

const loop = setInterval(() => {
    console.log("loop");
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    pontos++;

    document.getElementById("pontos").innerHTML = pontos;

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes == 0) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "_imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "50px";

        clearInterval(loop);
    }
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes == 3){
        lifes -= 1;
        heart3.style.display = "none";
    }
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes == 2){
        lifes -= 1;
        heart2.style.display = "none";
    }
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 && lifes == 1){
        lifes -= 1;
        heart1.style.display = "none";
    }

}, 10);

document.addEventListener("keydown", jump);