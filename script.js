var randomnumber = Math.random();
randomnumber = Math.round((randomnumber*5)+1);

var randomnumbert = Math.random();
randomnumbert = Math.round((randomnumbert*5)+1);

var player1 = document.querySelector(".img1");
player1.addEventListener('click',()=>
    {player1.setAttribute("src" , "images/dice"+randomnumber+".png");
});
// player1.setAttribute("src" , "images/dice"+randomnumber+".png" );

var player2 = document.querySelector(".img2");
player2.addEventListener('click',()=>{
    player2.setAttribute("src" , "images/dice"+randomnumbert+".png" );
    check();
});
// player2.setAttribute("src" , "images/dice"+randomnumbert+".png" );
function check(){
    var head = document.querySelector("h1");
    if(randomnumber > randomnumbert){
        head.innerText = "Player 1 won.";
    }else if(randomnumber < randomnumbert){
        head.innerText = "Player 2 won.";
    }else{
        head.innerText = "--DRAW--";
    }
};

var btn = document.querySelector("button");
btn.addEventListener('click',()=>location.reload());