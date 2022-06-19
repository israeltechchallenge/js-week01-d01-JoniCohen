function compareNumbers(Number1, Number2){
    if(Number1 > Number2 ){
        console.log(Number1+ ' is bigger than '+Number2);
    }
    else if(Number1 === Number2){
        console.log(Number1+ ' and '+ Number2+ ' are the same number');
    }
    else{
        console.log(Number1+ ' is smaller than '+Number2);
    }

}

function modulo(Number1, Number2){
    if(Number1 > Number2 && (Number1%Number2 !== 0)){
    console.log('The modulo of '+ Number1+ ' % '+ Number2+ ' is: '+ Number1%Number2);
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
    modulo(4,3);

// Do not remove or change this line, or the tests won't work
export { modulo };
