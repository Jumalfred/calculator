var num="";
var shiftCheck = false;
var mathopera = document.getElementById("operational");
var space=document.getElementById("num");
var alfred =document.getElementById("results");
let ele = document.querySelectorAll("#btn");
var art = document.querySelectorAll("article");
document.getElementById('ac').addEventListener('click',function(){power()});
for(let i=0; i<ele.length; i++){
      ele[i].addEventListener("click",function(){
          num = +this.innerHTML;
          if(space.innerHTML ==="0"){
          space.innerHTML="";}
          space.append(num);
    })
}
function operant(obj){
  if(obj.id =='dot'){
    space.innerHTML +=document.getElementById("dot").innerHTML;
  }
  else if(obj.id=="div"){
    space.innerHTML +=document.getElementById("div").innerHTML;
} 
else if(obj.id=="pow"){
  space.innerHTML +=document.getElementById("pow").innerHTML;
} 
else if(obj.id=="cub"){
  space.innerHTML +=document.getElementById("cub").value;
} 
else if(obj.id == "squ"){
  space.innerHTML +=document.getElementById("squ").value;
}
else if(obj.id=="mult"){
    space.innerHTML +=document.getElementById("mult").innerHTML;
}
else if(obj.id=="add"){                                    
  space.innerHTML +=document.getElementById("add").innerHTML;
}
else if(obj.id=="sub"){
  space.innerHTML +=document.getElementById("sub").innerHTML;
}
else if(obj.id=="bras"){  
  if(space.innerHTML === "0"){
    space.innerHTML = "";                                  
  space.innerHTML +=document.getElementById("bras").innerHTML;
}
else{
  space.innerHTML +=document.getElementById("bras").innerHTML;
}
}
else if(obj.id=="brace"){                                    
  if(space.innerHTML === "0"){
    space.innerHTML = "";                                  
  space.innerHTML +=document.getElementById("brace").innerHTML;
}
else{
  space.innerHTML +=document.getElementById("brace").innerHTML;
}
}
 else if(obj.id=="del"){
   if(space.innerHTML.length >=1){
  space.innerHTML = space.innerHTML.slice(0,-1);
 }
else if(space.innerHTML ===""){
 mathopera.innerHTML = mathopera.innerHTML.slice(0,-4);
 if(mathopera.innerHTML ===""){
 space.innerHTML = "0";}
 }
}
}
function calculations(){
  let frstRem = space.innerHTML.replaceAll('^','**');
  let secRem = frstRem.replaceAll('²','**2');
  let thirdRem = secRem.replaceAll('³','**3');
  let forthRem = thirdRem.replace(/([0-9])\(([0-9])/g,'$1*($2');
  let fifthRem = forthRem.replace(/([0-9])\)([0-9])/g,'$1)*$2');
  alfred.innerHTML = eval(fifthRem);
     if(mathopera.innerHTML.length >7 ){
      alfred.innerHTML = "Math Error";
    }
    else if(mathopera.innerHTML.includes("sin‾ ¹")){
      if(space.innerHTML >1){alfred.innerHTML = "Math Error"}
      else{
       alfred.innerHTML= (Math.asin(space.innerHTML)*180/Math.PI).toFixed(4);
      }
    }
    else if(mathopera.innerHTML.includes("cos‾ ¹")){
      if(space.innerHTML >1){alfred.innerHTML = "Math Error"}
      else{
      alfred.innerHTML = (Math.acos(space.innerHTML)*180/Math.PI).toFixed(4);}
    }
    else if(mathopera.innerHTML.includes("tan‾ ¹")){
      alfred.innerHTML = (Math.atan(space.innerHTML)*180/Math.PI).toFixed(4);
    }
    else if(mathopera.innerHTML.includes("cos")){
     alfred.innerHTML = (Math.cos((space.innerHTML) * Math.PI / 180)).toFixed(4);
    }
    else if(mathopera.innerHTML.includes("sin")){
     alfred.innerHTML = (Math.sin((space.innerHTML) * Math.PI / 180)).toFixed(4);
    }
    else if(mathopera.innerHTML.includes("tan")){
     alfred.innerHTML = (Math.tan((space.innerHTML) * Math.PI /180)).toFixed(4);
    }
    else if(mathopera.innerHTML.includes("log")){
     alfred.innerHTML = Math.log10(space.innerHTML).toFixed(4);
    }
    else if(mathopera.innerHTML.includes("₁₀")){
     alfred.innerHTML = Math.pow(10,space.innerHTML).toFixed(2);
    }
    else if(mathopera.innerHTML.includes("√")){
     alfred.innerHTML = Math.sqrt(space.innerHTML);
    }
    else if(mathopera.innerHTML.includes("∛")){
     alfred.innerHTML = Math.cbrt(space.innerHTML);
    }
    else if(space.innerHTML.includes("³")){
     alfred.innerHTML = eval(space.innerHTML.replaceAll('³','**3'));
    }
  }
  function year(){
    document.getElementById("year").innerHTML=new Date().getFullYear();
      document.getElementById("myName").disabled = true;
     var bt = document.querySelectorAll(".bt-val");
      for(var n=0; n<bt.length; n++){
      bt[n].addEventListener("click",function(){
        num = this.innerHTML;
        mathopera.append(num+"(");
      })
    }
    let btnval = document.querySelectorAll(".btn-val");
  for(let g=0; g<btnval.length; g++){
  btnval[g].addEventListener("click",function(){
    num = this.value;
    space.append(num);
  })
}
   let button = document.querySelectorAll("button");
   for(let l=0; l<button.length; l++){
    button[l].addEventListener("click",function(){
      let audio = new Audio("Alfred .mp3");
      audio.play();
    })
   }
   document.getElementById("off").onclick = function() {inverseSF()};
function inverseSF() {
  shiftCheck = true;
  document.getElementsByTagName('sup')[0].innerHTML = "SHIFT";
}
document.getElementsByClassName("off")[0].onclick = function() {checkStat(1)};
document.getElementsByClassName("off")[1].onclick = function() {checkStat(2)};
document.getElementsByClassName("off")[2].onclick = function() {checkStat(3)};
document.getElementsByClassName("off")[3].onclick = function() {checkStat(4)};
document.getElementsByClassName("off")[4].onclick = function() {checkStat(5)};
document.getElementsByClassName("btn-val")[0].onclick = function(){checkStat(6)};
document.getElementsByClassName("btn-val")[1].onclick = function(){checkStat(7)};
document.getElementsByClassName("btn-val")[2].onclick = function(){checkStat(8)};
document.getElementById('ac').onclick = function(){checkStat(9)};
function checkStat(m){
if(shiftCheck){
switch(m){
  case 1:
    mathopera.innerHTML = "sin‾ ¹(";
    break;
  case 2:
    mathopera.innerHTML = 'cos‾ ¹(';
    break;
  case 3:
    mathopera.innerHTML = 'tan‾ ¹(';
    break;
  case 4:
    mathopera.innerHTML = "₁₀";
    break;
    case 5:
      alert("I'm sorry,the function has not been updated !");
      break;
  case 6:
    space.innerHTML = space.innerHTML.slice(0,-1);
    mathopera.append("√");
    break;
  case 7:
    space.innerHTML = space.innerHTML.slice(0,-1);
    mathopera.append("∛");
    break;
  case 8:
    space.innerHTML = space.innerHTML.slice(0,-1);
    mathopera.append("√");
    break;
  case 9:
    if( confirm('Do you want to power off the calculater ?')){
    alert('The power off function has not been enabled')}
    break;
}
shiftCheck = false;
document.getElementsByTagName('sup')[0].innerHTML = "";
}
}
setInterval(function(){
  let len = alfred.innerHTML.length;
  if(len >= 4){
    let ans = parseFloat(alfred.innerHTML);
   alfred.innerHTML = ans.toFixed(4);
}
},100)
{let text = "The calculator has not been fully updated and therefor can't perform multiple roots and trigonometric mathematics at a time but all other functions are working efficiently\n  Regards\nJUMALFRED";
let speech = new SpeechSynthesisUtterance();
  speech.text = text;
  speech.rate = 0.7;
  speech.volume = 10;
  speech.pitch = 9;
  speech.Lang = "en";
  speechSynthesis.speak(speech);
return}
  }
function jumez(){
alfred.innerHTML = -1*alfred.innerHTML;
}
function power(){
  space.innerHTML = "0";
  alfred.innerHTML = "";
  mathopera.innerHTML = "";
}