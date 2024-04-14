//Declaration
const emojis = ['🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍', '🥔', '🍒', '🥑', '🌽', '🥕', '🍇', '🍉', '🍌', '🥭', '🍍'];
const btn = document.querySelectorAll(".control");
const button = document.querySelector("button");

// Game state
let user = [];
let keys = [];
let isGame = false;
//Random array of emojis
let random = shufle(emojis);

function game(){
// reset the game
btn.forEach((item) =>{
    item.textContent = "?";
})
// hide a button
button.classList.add("hide");
isGame = true;

btn.forEach((item,id) =>{
    item.addEventListener("click" , () =>{
        if(!isGame) return // do only if is game is true
        // check  if less than 2 selections have been made
        if(user.length <2 && keys.length <2){
            item.textContent = random[id];
            user.push(random[id]);
            keys.push(id);
        }
        eveluating();
    })
})
}

function eveluating(){
    // check if two selections have been made
    if(user[0] && user[1]){
        if(user[0] == user[1]) {
            // if matched
            user = [];
            keys = [];
        }
        else{
            // if not matched
            setTimeout(() =>{
                btn[keys[0]].textContent = "?";
                btn[keys[1]].textContent = "?";
                user = [];
                keys = [];
            } , 200) // 200ms
        }
        
    }
    const isGameOver = Array.from(btn).every(item => item.textContent != "?");
    if(isGameOver){
        alert("Game Over");
        restart();
    }
}
function shufle(array){
    let shufleArray = array.slice();
    for(let i = shufleArray.length-1;i>0;i--){
        const j = Math.floor(Math.random () * (i+1));
        [shufleArray[i],shufleArray[j]] =   [shufleArray[j],shufleArray[i]];
    }
    return shufleArray;
}

function restart(){
    user = [];
    keys = [];
    isGame = false;
    random = shufle(emojis);

    btn.forEach((item,id) =>{
        item.textContent = random[id];
    })

    // show a button
    button.classList.remove("button")
}

//Event listeners
onload = function() {
btn.forEach((item,id) =>{
    item.textContent = random[id];
})
}
button.addEventListener("click" , game);