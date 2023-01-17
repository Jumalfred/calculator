var num="";
var mathopera = document.getElementById("operational");
var space=document.getElementById("num");
var alfred =document.getElementById("results");
var roots=document.getElementById("roots");
let ele = document.querySelectorAll("#btn");
var offa=document.getElementsByClassName("offa");
for(let i=0; i<ele.length; i++){
      ele[i].addEventListener("click",function(){
          num = +this.innerHTML;
          if(space.innerHTML ==="00"){
          space.innerHTML="";}
          space.append(num);
    })
}
function operant(obj){
    if(obj.id=="dot"){
  let dot=document.getElementById("dot").innerHTML;
  if(!space.innerHTML.includes(dot)){
  space.innerHTML +=dot; 
}
}
else if(obj.id=="pow"){
  if(!space.innerHTML.includes(document.getElementById("pow").innerHTML)){
  space.innerHTML +=document.getElementById("pow").innerHTML;
  }
} 
else if(obj.id=="div"){
  if(!space.innerHTML.includes(document.getElementById("div").innerHTML)){
    space.innerHTML +=document.getElementById("div").innerHTML;
  }
} 
else if(obj.id=="mult"){
  if(!space.innerHTML.includes(document.getElementById("mult").innerHTML)){
    space.innerHTML +=document.getElementById("mult").innerHTML;
  }
}
else if(obj.id=="add"){ 
  if(!space.innerHTML.includes(document.getElementById("add").innerHTML)){                                      
  space.innerHTML +=document.getElementById("add").innerHTML;}
}
else if(obj.id=="sub"){
  if(!space.innerHTML.includes(document.getElementById("sub").innerHTML)){
    space.innerHTML +=document.getElementById("sub").innerHTML;
  }
}
 else if(obj.id=="del"){
   if(space.innerHTML !=="00"){
space.innerHTML = space.innerHTML.slice(0,-1);
roots.innerHTML = roots.innerHTML.slice(0,-1)
if(space.innerHTML===""){space.innerHTML = "00"}
   }
else if(space.innerHTML ==="00"){
 mathopera.innerHTML = mathopera.innerHTML.slice(0,-4);
}
}
else if(obj.id=="ac"){
    space.innerHTML = "00";
    alfred.innerHTML = "";
    mathopera.innerHTML = "";
    roots.innerHTML = "";
}
}
function calculations(){
  if(space.innerHTML.includes("+")){
      let x="+";
      let num1=parseFloat(space.innerHTML.split(x)[0]); 
      let num2=parseFloat(space.innerHTML.split(x)[1]);
    alfred.innerHTML=num1+num2;
    }
else if(space.innerHTML.includes("-")){
      let x="-";
      let num1=parseFloat(space.innerHTML.split(x)[0]); 
      let num2=parseFloat(space.innerHTML.split(x)[1]);
    alfred.innerHTML=num1-num2;
    }
else if(space.innerHTML.includes("*")){
      let x="*";
      let num1=parseFloat(space.innerHTML.split(x)[0]); 
      let num2=parseFloat(space.innerHTML.split(x)[1]);
    alfred.innerHTML=num1*num2;
    }
else if(space.innerHTML.includes("/")){
      let x="/";
      let num1=parseFloat(space.innerHTML.split(x)[0]); 
      let num2=parseFloat(space.innerHTML.split(x)[1]);
    alfred.innerHTML=num1/num2;
    }
   else if(space.innerHTML.includes("^")){
      let x="^";
      let num1=parseFloat(space.innerHTML.split(x)[0]); 
      let num2=parseFloat(space.innerHTML.split(x)[1]);
    alfred.innerHTML=Math.pow(num1,num2);
    }
    else if(mathopera.innerHTML.includes("cos")){
     alfred.innerHTML = Math.cos((space.innerHTML) * Math.PI / 180);
    }
    else if(mathopera.innerHTML.includes("sin")){
     alfred.innerHTML = Math.sin((space.innerHTML) * Math.PI / 180);
    }
    else if(mathopera.innerHTML.includes("tan")){
     alfred.innerHTML = Math.tan((space.innerHTML) * Math.PI /180);
    }
    else if(mathopera.innerHTML.includes("log")){
     alfred.innerHTML = Math.log10(space.innerHTML);
    }
    else if(mathopera.innerHTML.includes("ant")){
     alfred.innerHTML = Math.pow(10,space.innerHTML);
    }
    else if(mathopera.innerHTML.includes("√")){
     alfred.innerHTML = Math.sqrt(space.innerHTML);
    }
    else if(mathopera.innerHTML.includes("∛")){
     alfred.innerHTML = Math.cbrt(space.innerHTML);
    }
    else if(roots.innerHTML.includes("³")){
     alfred.innerHTML = Math.pow(space.innerHTML,3);
    }
    else if(roots.innerHTML.includes("²")){
      alfred.innerHTML = Math.pow(space.innerHTML,2);
    }
  }
  function year(){
    document.getElementById("year").innerHTML=new Date().getFullYear();
      document.getElementById("myName").disabled = true;
     let bt = document.querySelectorAll(".off");
      for(let i=0; i<7; i++){
      bt[i].addEventListener("click",function(){
          num = this.innerHTML;
          mathopera.append(num+"(");
    })
      }
  }
  function off(){
      if(document.getElementById("off").innerHTML =="OFF"){
    let off = document.querySelectorAll(".off");
     for(let i=0; i<off.length; i++){
      off[i].disabled=true;
    document.querySelector("section").style.backgroundColor="black";
    document.getElementById("off").innerHTML="ON";
    offa[0].disabled=true;
    offa[1].disabled=true;
    offa[2].disabled=true;
  }
     space.innerHTML = "";
     alfred.innerHTML = "";
     mathopera.innerHTML = "";
     roots.innerHTML = "";
  }
  else if(document.getElementById("off").innerHTML=="ON"){
      let on = document.querySelectorAll(".off");
     for(let i=0; i<on.length; i++){
      on[i].disabled=false;
    document.querySelector("section").style.backgroundColor="antiquewhite";
    document.getElementById("off").innerHTML="OFF";
    offa[0].disabled=false;
    offa[1].disabled=false;
    offa[2].disabled=false;
    space.innerHTML = "00";
  }
}
}
function jumez(){
alfred.innerHTML = -1*alfred.innerHTML;
} 