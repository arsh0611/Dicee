var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6)+1;
var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6)+1;

b="images/dice"+randomNumber1+".png";
c="images/dice"+randomNumber2+".png";
var a=document.getElementsByTagName("img");


a[0].setAttribute("src",b);
a[1].setAttribute("src",c);
// document.querySelector("img").setAttribute("src",b);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML ="🚩Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 2 wines!";
}
else{
  document.querySelector("h1").innerHTML="DRAW";
}
