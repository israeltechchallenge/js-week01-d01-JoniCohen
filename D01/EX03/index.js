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
    compareNumbers(2,3);
}

// Do not remove or change this line, or the tests won't work
export { compareNumbers };
