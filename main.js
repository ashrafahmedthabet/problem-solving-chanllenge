let firstNumber = Number(prompt('Enter the first number'));
let secondNumber = Number(prompt('Enter the second number'));

const isPrime=(number) =>{  
if (number<2){return false;}

if(number===2){return true;}

for(let i=2;i<=Math.sqrt(number);i++){
    if(number%i===0){
        return false;
    }
}

return true;

}

const printPrimeValues=(firstNumber,secondNumber)=>{
    for(let i=firstNumber+1;i<secondNumber;i++){
        if(isPrime(i)){
            console.log(i);
        }
    }
}

printPrimeValues(firstNumber,secondNumber);