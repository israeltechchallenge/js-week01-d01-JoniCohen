const Number = 4;
function isBiggerThan(NewNumber){
    if(NewNumber > Number ){
        console.log(NewNumber+ ' is bigger than 4')
    }
    else if(NewNumber === Number){
        console.log(NewNumber+ ' is equal to 4')
    }
    else{
        console.log(NewNumber+ ' is smaller than 4 ')
    }

    }
    isBiggerThan(5);
// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
