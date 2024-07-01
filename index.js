var randomNumber1 = Math.floor(Math.random() * 6 ) + 1;
var nsrc = 'images\\dice' + randomNumber1 + '.png';
var image1 = document.querySelector('.img1');
image1.setAttribute("src", nsrc);


var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
var nsrc2 = 'images\\dice' + randomNumber2 + '.png';
var image2 = document.querySelector('.img2');
image2.setAttribute("src", nsrc2);

if(randomNumber1 > randomNumber2) {
    
    document.querySelector('h1').innerHTML = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector('h1').innerHTML = "Player 2 wins!";
}
else{
    document.querySelector('h1').innerHTML = "Its a Tie !";
}