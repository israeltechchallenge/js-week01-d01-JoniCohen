const output = document.getElementById('output');
function compareNumbers(Number1, Number2){
    if(Number1 > Number2 ){
        document.write('The Number 1 is bigger than the Number 2');
    }
    else if(Number1 === Number2){
        document.write('Number 1 and Number 2 are the same number');
    }
    else{
        document.write('The Number 1 is smaller than the Number 2');
    }

}

function modulo(Number1,Number2){
    if(Number1 > Number2 && (Number1%Number2 !== 0)){
    document.write('The modulo of Number 1 % Number 2 is: '+ Number1%Number2);
    }
    else if(Number1 > Number2 && Number1%Number2 ===0){
        compareNumbers(Number1,Number2);
    }
    else if(Number1 === Number2){
        compareNumbers(Number1,Number2);
    }
    else if(Number1 < Number2){
        compareNumbers(Number1,Number2);
    }
    }

    function getRandomInt(min,max){
        return Math.random() * (max-min) + min;
    }
    

    modulo( getRandomInt(1,101), getRandomInt(1,101));
    console.log(getRandomInt(1,101), getRandomInt(1,101));
