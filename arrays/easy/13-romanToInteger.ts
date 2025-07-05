function romanToInt(romanNum: string): number {

    let result = 0;

    for (let i = 0; i < romanNum.length; i++) {

        if(romanNum[i] === 'I' && romanNum[i + 1] === 'V'){
            result += 4;
            i += 1;
            continue;
        }else if(romanNum[i] === 'I' && romanNum[i + 1] === 'X') {
            result += 9;
            i += 1;
            continue;
        }else if(romanNum[i] === 'X' && romanNum[i + 1] === 'L') {
            result += 40;
            i += 1;
            continue;
        }else if(romanNum[i] === 'X' && romanNum[i + 1] === 'C') {
            result += 90;
            i += 1;
            continue;
        }else if(romanNum[i] === 'C' && romanNum[i + 1] === 'D') {
            result += 400;
            i += 1;
            continue;
        }else if(romanNum[i] === 'C' && romanNum[i + 1] === 'M') {
            result += 900;
            i += 1;
            continue;
        }
        

        switch (romanNum[i]) {
            case 'I':
                result += 1;
                break;
            case 'V':
                result += 5;
                break;
            case 'X':
                result += 10;
                break;
            case 'L':
                result += 50;
                break;
            case 'C':
                result += 100;
                break;
            case 'D':
                result += 500;
                break;
            case 'M':
                result += 1000;
                break;
        }
    }

    return result;
};

console.log(romanToInt('MCMXCIV'));
