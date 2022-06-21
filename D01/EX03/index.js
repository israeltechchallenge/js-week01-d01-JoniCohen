function compareNumbers(Number1, Number2){
    if(Number1 > Number2 ){
        console.log(Number1+ ' is bigger than ' +Number2);}
        
    else if(Number1 === Number2){
        console.log(Number1+ ' and '+ Number2+ ' are the same number');
    }
    else{
        console.log(Number1+ ' is smaller than '+Number2);
    }

}
    compareNumbers(2,1);

// Do not remove or change this line, or the tests won't work
export { compareNumbers };
