
let container = document.querySelector(".contaner");
let btnPlay = document.querySelector(".play");

btnPlay.addEventListener("click", () => {

  let container1=document.querySelector(".numere-generate");
  container1.innerHTML = `<h1>Numere generate:</h1>
  <input type="text" class="gen1" >
  <input type="text" class="gen2" >
  <input type="text" class="gen3" >
  <input type="text" class="gen4" >
  <input type="text" class="gen5" >
  <input type="text" class="gen6" >
`

let container2=document.querySelector(".numere-castigatoare");
container2.innerHTML = ` <h1>Numere castigatoare:</h1>
<input type="text" class="castigator1" >
<input type="text" class="castigator2" >
<input type="text" class="castigator3" >
<input type="text" class="castigator4" >
<input type="text" class="castigator5" >
<input type="text" class="castigator6" >
`
  let nr1 = document.querySelector(".numar1");
  let nr2 = document.querySelector(".numar2");
  let nr3 = document.querySelector(".numar3");
  let nr4 = document.querySelector(".numar4");
  let nr5 = document.querySelector(".numar5");
  let nr6 = document.querySelector(".numar6");

  let castigator1 = document.querySelector(".castigator1");
  let castigator2 = document.querySelector(".castigator2");
  let castigator3 = document.querySelector(".castigator3");
  let castigator4 = document.querySelector(".castigator4");
  let castigator5 = document.querySelector(".castigator5");
  let castigator6 = document.querySelector(".castigator6");

  castigator1.value="";
  castigator2.value="";
  castigator3.value="";
  castigator4.value="";
  castigator5.value="";
  castigator6.value="";
  
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
  
  let gen1 = document.querySelector(".gen1");
  let gen2 = document.querySelector(".gen2");
  let gen3 = document.querySelector(".gen3");
  let gen4 = document.querySelector(".gen4");
  let gen5 = document.querySelector(".gen5");
  let gen6 = document.querySelector(".gen6");

  gen1.value = generated[0];
  gen2.value = generated[1];
  gen3.value = generated[2];
  gen4.value = generated[3];
  gen5.value = generated[4];
  gen6.value = generated[5];

  if (esteCastigator(generated, nr1.value) ) castigator1.value=nr1.value; 
  if (esteCastigator(generated, nr2.value) ) castigator2.value=nr2.value; 
  if (esteCastigator(generated, nr3.value) ) castigator3.value=nr3.value; 
  if (esteCastigator(generated, nr4.value) ) castigator4.value=nr4.value; 
  if (esteCastigator(generated, nr5.value) ) castigator5.value=nr5.value; 
  if (esteCastigator(generated, nr6.value) ) castigator6.value=nr6.value; 

});

//sa genereze 6 numere care sa apara in container


