function isBiggerThan() {
  const Number = 4;
function isBiggerThan(NewNumber){
    if(NewNumber > Number ){
        console.log('The new number is bigger than 4')
    }
    else if(NewNumber === Number){
        console.log('The new number is equal to 4')
    }
    else{
        console.log('The new number is smaller than 4 ')
    }

    }
    isBiggerThan(3);
}

// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
