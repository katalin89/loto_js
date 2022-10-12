let nr1 = document.querySelector(".nr1");
let nr2 = document.querySelector(".nr2");
let nr3 = document.querySelector(".nr3");
let nr4 = document.querySelector(".nr4");
let nr5 = document.querySelector(".nr5");
let nr6 = document.querySelector(".nr6");

let container = document.querySelector(".contaner");
let btnPlay = document.querySelector(".play");

btnPlay.addEventListener("click", () => {
  let numere = [
    +nr1.value,
    +nr2.value,
    +nr3.value,
    +nr4.value,
    +nr5.value,
    +nr6.value,
  ];
  
  if(verificaUnicitate(numere)==true&&elementeIntre(numere)==true){

      
  }else if(verificaUnicitate(numere)==false){

     alert("numerele trebuie sa fie unice");
  }else{

     alert("numrele nu sunt valide( trebuiesc numere cuprinse intre 1 si 49");
  }
});

btnPlay.addEventListener("click",()=>{
  genereazaNumerele();
})

//sa genereze 6 numere care sa apara in container


