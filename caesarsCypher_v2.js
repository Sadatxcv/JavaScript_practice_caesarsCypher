const fs = require('fs')

let shift = 29;

//UNECESSARY BUT FUN
const nextPrimeNumber = (num) => { //just for kicks and giggles
    for(let i = 2; i < num ; i++) { 
        if(num % i === 0) {
            return nextPrimeNumber(num + 1)
        }

    }
    return num;
};

shift = nextPrimeNumber(shift)
//UNECESSARY BUT FUN

let message = fs.readFileSync('input.txt','utf-8')

function cypher(shift, message){
    let cypherText = ""

    for(let i=0; i<message.length; i++){
        let letterCode = message.charCodeAt(i)
        let shiftCode = letterCode+shift
        cypherText = cypherText + shiftingChar(letterCode,shiftCode,message[i]); // sending in the ith character along with the current code and the code it is to be shifted
        
    }

     return cypherText;
}

function decypher(shift, cypheredText){
    let decypherText = ""

    for(let i=0; i<cypheredText.length; i++){
        let letterCode = cypheredText.charCodeAt(i)
        let shiftCode = letterCode-shift
        decypherText = decypherText + shiftingChar(letterCode,shiftCode,cypheredText[i]); // sending in the ith character along with the current code and the code it is to be shifted
        
    }

     return decypherText;
}

function shiftingChar(letterCode,shiftCode,textChar){  //where the magic happens
    if(letterCode>=97 && letterCode<=122){ //operation for small letters
        if(shiftCode<97){
            while(true){
                shiftCode = shiftCode+26
                if (shiftCode>=97){break}
            }
        }else if(shiftCode>122){
            while(true){
                shiftCode = shiftCode-26
                if (shiftCode<=122){break}
            }
        }
        return String.fromCharCode(shiftCode)
    }else if (letterCode>=65 && letterCode<=90){ //operation for capital letter

        if(shiftCode<65){
                while(true){
                    shiftCode = shiftCode+26
                    if (shiftCode>=65){break}
                }
            }else if(shiftCode>90){
                while(true){
                    shiftCode = shiftCode-26
                    if (shiftCode<=90){break}
                }
            }
        return String.fromCharCode(shiftCode)
    }else if (letterCode>=48 && letterCode<=57){ //operation for numbers

        if(shiftCode<48){
                while(true){
                    shiftCode = shiftCode+10
                    if (shiftCode>=48){break}
                }
            }else if(shiftCode>57){
                while(true){
                    shiftCode = shiftCode-10
                    if (shiftCode<=57){break}
                }
            }
        return String.fromCharCode(shiftCode)
    }else{
        return textChar //returns punchuations regardless
    }
}


let cypheredText = cypher(shift, message)

fs.writeFileSync('Encrypted.txt', cypheredText)


let decypherText = decypher(shift, cypheredText)

fs.writeFileSync('Decrypted.txt', decypherText)
