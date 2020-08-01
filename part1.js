var header = document.querySelector("h1");

function getRandomColor()
{
  var letters = "0123456789ABCDEF";
  var color="#";
  for(var i=0; i<6; i++ )
  {
    color=color+letters[Math.floor(Math.random()*16)];
  }
  return color;

}

function ChangeHeaderColor() {
  color_get= getRandomColor();
  header.style.color =color_get;

}

setInterval("ChangeHeaderColor()",500);
