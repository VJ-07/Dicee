var d1 = Math.random() * 6;
d1 = Math.floor(d1) + 1;

var d2 = Math.random() * 6;
d2 = Math.floor(d2) + 1;

if (d1 ===1 ){
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
}

else if(d1 ===2 ){
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
}
else if (d1 ===3 ){
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
}
else if (d1 ===4 ){
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
}
else if (d1 ===5 ){
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}




if (d2 ===1 ){
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
}

else if(d2 ===2 ){
document.querySelector(".img2").setAttribute("src", "images/dice2.png");
}
else if (d2 ===3 ){
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
}
else if (d2 ===4 ){
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
}
else if (d2 ===5 ){
document.querySelector(".img2").setAttribute("src", "images/dice5.png");
}
else{
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}




if (d1 > d2){
  document.querySelector("h1").innerText = "Player 1 Won!!!!";
}
else{
  document.querySelector("h1").innerText = "Player 2 Won!!!!";
}
