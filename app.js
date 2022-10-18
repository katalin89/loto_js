
let container = document.querySelector(".contaner");
let btnPlay = document.querySelector(".play");

btnPlay.addEventListener("click", () => {

  let nr1 = document.querySelector(".numar1");
  let nr2 = document.querySelector(".numar2");
  let nr3 = document.querySelector(".numar3");
  let nr4 = document.querySelector(".numar4");
  let nr5 = document.querySelector(".numar5");
  let nr6 = document.querySelector(".numar6");
  
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

  let generated = genereazaNumerele();
  
});


//sa genereze 6 numere care sa apara in container


