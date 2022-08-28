let seceretNumber=Math.trunc(Math.random()*20+1);
let score=20;
let highScore=0;
//document.querySelector(".number").textContent=seceretNumber;//
document.querySelector("#check").addEventListener("click",function()
{
   const guess=Number(document.querySelector(".guess").value);
   if(!guess || guess>20)
   {
       document.querySelector(".message").textContent="!!ENTER THE NUMBER SHEEP!!😜😜";
   }
   else if(guess===seceretNumber)
   {
       document.querySelector(".message").textContent="!!YOU WON HANMA!!🥳🥳";
       document.querySelector(".headingBar").innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/1642/1642423.png" alt="">`;
      
       document.querySelector(".number").innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/2651/2651001.png" alt="">`; 
       if(score>highScore)
       {
           highScore=score;
           document.querySelector(".highscore").textContent=score;
       }
   }
   
   else if(guess>seceretNumber)
   {
    if(score>1)
    {
       document.querySelector(".message").textContent="THE NUMBER IS TOO HIGH HANMA!!😜😜";
       score--;
       document.querySelector(".score").textContent=score;
    }
    else
    {
        document.querySelector(".message").textContent="GAME OVER!!";
        document.querySelector(".score").textContent=0
        document.querySelector("header").style.backgroundColor="#FF0000";
        document.querySelector("h1").textContent="LOST YOUR GUESSES!!!"
    }
   }
   else if(guess<seceretNumber)
   {
   if(score>1)
   {
       document.querySelector(".message").textContent="THE NUMBER IS TOO LOW HANMA!!😜😜";
       score--;
       document.querySelector(".score").textContent=score;
   }
   else
   {
       document.querySelector(".message").textContent="GAME OVER!!";
       document.querySelector(".score").textContent=0;
       document.querySelector("header").style.backgroundColor="#FF0000";
       document.querySelector("h1").textContent="LOST YOUR GUESSES!!!"
   }
   }
});

document.querySelector(".again").addEventListener("click",function()
{
    score=20;
   seceretNumber=Math.trunc(Math.random()*20+1);
   document.querySelector(".number").innerHTML=`<img src="source/question.png" alt="">`;
   document.querySelector(".headingBar").innerHTML=`<img src="https://cdn-icons-png.flaticon.com/512/2353/2353678.png" alt="">
   <img src="https://cdn-icons-png.flaticon.com/512/5264/5264753.png" alt="">
   <img src="https://cdn-icons-png.flaticon.com/512/1998/1998610.png" alt="">
   <img src="https://cdn-icons-png.flaticon.com/512/4138/4138783.png" alt="">`;
   document.querySelector(".score").textContent=score;
   document.querySelector(".message").innerHTML=`<b>START GUESSING HANMA !!!!</b>`;
   document.querySelector(".guess").value="";
});