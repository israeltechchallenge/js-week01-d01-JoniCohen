const output = document.getElementById('output');
function compareNumbers(Number1, Number2){
    if(Number1 > Number2 ){
        document.write(Number1+ ' is bigger than '+Number2);
    }
    else if(Number1 === Number2){
        document.write(Number1+ ' and '+Number2+ ' are the same number');
    }
    else{
        document.write(Number1+ ' is smaller than '+Number2);
    }

}

function modulo(Number1,Number2){
    if(Number1 > Number2 && (Number1%Number2 !== 0)){
    document.write('The modulo of '+Number1+ ' % '+Number2 + ' is: '+ Number1%Number2);
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
