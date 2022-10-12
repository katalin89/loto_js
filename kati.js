
function setHome(){

   let loto=nrCastigatore(input);

}
function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function returnRandomNumbers(){
    let vector=[];

    for(let i=0;i<6;i++){
        let value = generateRandomInteger(49);
        vector.push(value);
    }
    return vector;
}

function nrCastigatore(arr){
    let counter=0;
    vector=returnRandomNumbers();
    for(let i=0;i<arr.length;i++){
        for(j=0;j<vector.length;j++){
            if(arr[i]==vector[j]){
                counter++;
            }
        }

    }
    console.log(arr);
    console.log(vector);
    console.log("numere castigaoare:"+counter);
    return counter;
}
