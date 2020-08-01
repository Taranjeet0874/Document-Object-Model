//Restart Game button
var restart=document.querySelector("#b");
//Grabs all the squares
var squares=document.querySelectorAll('td');
//Clear all the squares
function clearBoard(){
  for(var i=0;i<squares.length;i++){
    squares[i].textContent='';
  }
}
restart.addEventListener("click",clearBoard);
//Check the square marker
//For loop to add event listeners to all the squares
var cellone=document.querySelector('#one');
cellone.addEventListener("click",function(){
  if(cellone.textContent===''){
    cellOne.textContent='X';
  }else if(cellone.textContent==='X'){
    cellone.textContent='O';

  }else{
    cellone.textContent='';
  }
})
var celltwo=document.querySelector('#two');
celltwo.addEventListener("click",function(){
  if(celltwo.textContent===''){
    celltwo.textContent='X';
  }else if(celltwo.textContent==='X'){
    celltwo.textContent='O';

  }else{
    celltwo.textContent='';
  }
})
var cellthree=document.querySelector('#three');
cellthree.addEventListener("click",function(){
  if(cellthree.textContent===''){
    cellthree.textContent='X';
  }else if(cellthree.textContent==='X'){
    cellthree.textContent='O';

  }else{
    cellthree.textContent='';
  }
})
var cellfour=document.querySelector('#four');
cellfour.addEventListener("click",function(){
  if(cellfour.textContent===''){
    cellfour.textContent='X';
  }else if(cellfour.textContent==='X'){
    cellfour.textContent='O';

  }else{
    cellfour.textContent='';
  }
})
var cellfive=document.querySelector('#five');
cellfive.addEventListener("click",function(){
  if(cellfive.textContent===''){
    cellfive.textContent='X';
  }else if(cellfive.textContent==='X'){
    cellfive.textContent='O';

  }else{
    cellfive.textContent='';
  }
})
var cellsix=document.querySelector('#six');
cellsix.addEventListener("click",function(){
  if(cellsix.textContent===''){
    cellsix.textContent='X';
  }else if(cellsix.textContent==='X'){
    cellsix.textContent='O';

  }else{
    cellsix.textContent='';
  }
})
var cellseven=document.querySelector('#seven');
cellseven.addEventListener("click",function(){
  if(cellseven.textContent===''){
    cellseven.textContent='X';
  }else if(cellseven.textContent==='X'){
    cellseven.textContent='O';

  }else{
    cellseven.textContent='';
  }
})
var celleight=document.querySelector('#eight');
celleight.addEventListener("click",function(){
  if(celleight.textContent===''){
    celleight.textContent='X';
  }else if(celleight.textContent==='X'){
    celleight.textContent='O';

  }else{
    celleight.textContent='';
  }
})
var cellnine=document.querySelector('#nine');
cellnine.addEventListener("click",function(){
  if(cellnine.textContent===''){
    cellnine.textContent='X';
  }else if(cellnine.textContent==='X'){
    cellnine.textContent='O';

  }else{
    cellnine.textContent='';
  }
})
