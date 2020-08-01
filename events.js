var headone =document.querySelector("#one");
var headtwo=document.querySelector("#two");
var headthree=document.querySelector("#three");

headone.addEventListener("mouseover", function changecolour() {
  headone.style.color = "red";
  headone.textContent="mouse currently over";

})
headone.addEventListener("mouseout", function changecolour() {
  headone.style.color = "black";
  headone.textContent="HOVER OVER ME";

})
headtwo.addEventListener("click", function changecolour() {
  headtwo.style.color = "red";
  headtwo.textContent="i m clicked once";

})

headthree.addEventListener("dblclick", function changecolour() {
  headthree.style.color = "blue";
  headthree.textContent="I am clicked twice";

})
