function insert(arr){
    return `


    <div class="numere-generate"> 

        
    </div>
    
    `

}

function generare(){
    let numereContainer=document.querySelector(".numere-generate");
    let clickPlay=document.querySelector(".play-button");
    numereContainer.innerHTML=createCard()
}


//todo:primeste ca parametru un vector si verifica daca elemntele sutn unice
function verificaUnicitate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return false;
      }
    }
   
  }

  return true;
}
//todo:functie ce verifica daca toate e;lementele vectorului sunt intre 1 si 49

function elementeIntre(arr){
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<1 || arr[i]>49){
            
            return false;
        }
    }

    return true;
}

//sa genereze 6 numere distincte
function genereazaNumerele(){
  let vector=[];
 
   while(vector.length<6){

      let x=Math.floor(Math.random()*49);
      
      vector.push(x);
   }

   return vector;

}
//intoducem 6 numere
// function numereAlese(){
//   let container=document.querySelector(".box");
//   container.innerHTML=
//   `<div class="fisa">
//   <input type="text" placeholder="1" class="nr1">
//   <input type="text" placeholder="2" class="nr2">
//   <input type="text " placeholder="3" class="nr3">
//   <input type="text " placeholder="4" class="nr4">
//   <input type="text" placeholder="5" class="nr5">
//   <input type="text"placeholder="6" class="nr6">
//    </div>
   
//       <div>
//                 <button class="play">Let's go</button></div>

//             <div>
//    `

//    let btnGo=document.querySelector(".play")
//    let nr1=document.querySelector(".nr1");
//    let nr2=document.querySelector(".nr2");
//    let nr3=document.querySelector(".nr3");
//    let nr4=document.querySelector(".nr4");
//    let nr5=document.querySelector(".nr5");
//    let nr6=document.querySelector(".nr6");

//    btnGo=addEventListener("click",()=>{
//     generare();
//    })
  
// }
