let gameSeq = [];
let userSeq = [];
let h3 = document.querySelector("h3");
let startBtn = document.querySelector("#start-btn");

let btns = ["red","yellow","green","blue"];


let started = false;
let level = 0;
let score = 0;


startBtn.addEventListener("click",function(){
    if(started == false)
    {
        console.log("Game has started. ");
        started = true;
        startBtn.style.display = "none";
        h3.innerText = "Level 0";


        levelUp();
        

    }
    
});


function levelUp(){
    userSeq = [];
     level++;
     h3.innerHTML = `Level ${level}`;
     let ranIdx = Math.floor(Math.random()*3);
        let rancolor = btns[ranIdx];
        console.log(rancolor);

        setTimeout(() => {
                Game_btnflash(rancolor);;
            },1000);
        

        gameSeq.push(rancolor);
        console.log("GameSeq:")
        console.log(gameSeq);
    return level;
}


function Game_btnflash(color){   
            let btn = document.getElementById(color);
            btn.classList.add("white_game");
            setTimeout(() => {
                btn.classList.remove("white_game");
            },400);
        };

function Userbtnflash(color){   
            let btn = document.getElementById(color);
            btn.classList.add("white_user");
            setTimeout(() => {
                btn.classList.remove("white_user");
            },400);
        };

function CheckAns(idx){
    if(gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length == userSeq.length)
        {
            levelUp();
            score++;
        }
    }
    else
    {
        h3.innerHTML = `Game Over! Click Restart Below`;
        reset();
    }
};


function btnPress(btn){
    console.log(this);
    console.dir(this.id);
    Userbtnflash(this.id);
    userSeq.push(this.id);
    console.log("UserSeq:")
    console.log(userSeq);

    CheckAns(userSeq.length-1);
    
};


let allBtns = document.querySelectorAll(".btn");

for(btn of allBtns)
{
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
    let btns = document.querySelectorAll(".btn");
    Gameover_btnflash(btns);
    let res = document.createElement("h5");
    let di_re = document.querySelector(".game");
    di_re.appendChild(res);
    res.innerText = `Your score ${score}`;
    score = 0;
    setTimeout(()=>{
    di_re.removeChild(res);
    },5000);
    startBtn.style.display = "block"; 
    startBtn.innerText = "Restart Game";
};
function Gameover_btnflash(btns){ 
            for(let btn of btns)
                {
                    btn.classList.add("alert");
                }
            
            for(let btn of btns)
                {
                    setTimeout(() => {
                    btn.classList.remove("alert");
                    },400);
                }
            
        };