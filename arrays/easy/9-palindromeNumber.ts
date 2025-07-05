function isPalindrome(x: number): boolean {
    const numberToString = x.toString();
    let newNumber: string = '';

    for (let i = numberToString.length - 1; i >= 0; i--) {
        newNumber += numberToString[i];
    }

    if(numberToString === newNumber){
        return true;
    }else{
        return false;
    }
    
};

console.log(isPalindrome(10));
