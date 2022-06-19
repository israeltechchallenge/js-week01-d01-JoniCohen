function compareNumbers(Number1, Number2){
    if(Number1 > Number2 ){
        console.log('The Number 1 is bigger than the Number 2');
    }
    else if(Number1 === Number2){
        console.log('Number 1 and Number 2 are the same number');
    }
    else{
        console.log('The Number 1 is smaller than the Number 2');
    }

}

function modulo(Number1, Number2){
    if(Number1 > Number2 && (Number1%Number2 !== 0)){
    console.log('The modulo of Number 1 % Number 2 is: '+ Number1%Number2);
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
    modulo(4,5);
modulo(4,5);
// Do not remove or change this line, or the tests won't work
export { modulo };
