let random_no_1=Math.floor(Math.random()*6)+1;
let random_img_1="dice"+random_no_1+".png";
random_img_1="images/"+random_img_1;
let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",random_img_1);


let random_no_2=Math.floor(Math.random()*6)+1;
let random_img_2="dice"+random_no_2+".png";
random_img_2="images/"+random_img_2;
let image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",random_img_2);

if(random_no_1>random_no_2){
    document.querySelector("h1").innerHTML="Player 1 wins🔥❤️‍🔥!"
}
else if(random_no_1<random_no_2){
    document.querySelector("h1").innerHTML="Player 2 wins🔥❤️‍🔥!"
}
else{
    document.querySelector("h1").innerHTML="Its a draw 🔥❤️‍🔥!"
}
