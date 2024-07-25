var randomNumber1 = Math.floor((Math.random()*6))+1;
var x = "images/"+"dice"+randomNumber1+".png";
var left = document.querySelectorAll("img")[0];
left.setAttribute("src",x);

var randomNumber2 = Math.floor((Math.random()*6))+1;
var y = "images/"+"dice"+randomNumber2+".png";
var le = document.querySelectorAll("img")[1];
le.setAttribute("src",y);

if (y===x)
{
    document.querySelector("h1").innerHTML="Draw";
}
else if(x>y)
    {
        document.querySelector("h1").innerHTML="Player 1 wins";
    }
    else if(x<y)
        {
            document.querySelector("h1").innerHTML="Player 2 wins";
        }