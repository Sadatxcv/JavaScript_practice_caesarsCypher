let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T"]

let shift = 1;

let message = "Aaz, but there is a problem"

function cypher(shift, message){
    let cypherText = ""

    // for(let i=0; i< message.length; i++){
    //     if(alphabet.indexOf(message[i]) == -1){
    //         alphabet.push(message[i])
    //         alphabetIndex = alphabet.indexOf(message[i])
    //     }
    // }
    
    for(let i=0; i< message.length; i++){
        
        let alphabetIndex = alphabet.indexOf(message[i])

        let shiftedIndex = alphabetIndex+shift;

        if(alphabet.indexOf(message[i]) == -1){
            cypherText = cypherText+message[i]
        }
        else{

            if(shiftedIndex>(alphabet.length-1)){
                while(true){
                    shiftedIndex = shiftedIndex-alphabet.length
                    if (shiftedIndex<alphabet.length){break}
                }
            }
            
            cypherText = cypherText+alphabet[shiftedIndex]
        }

        // if(shiftedIndex>(alphabet.length-1)){
        //     while(true){
        //         shiftedIndex = shiftedIndex-alphabet.length
        //         if (shiftedIndex<alphabet.length){break}
        //     }
        // }
        
        // cypherText = cypherText+alphabet[shiftedIndex]
        

    }

     return cypherText;
}

function decypher(shift, cypheredText){
    let decypherText = ""
    
    for(let i=0; i< cypheredText.length; i++){
        
        let alphabetIndex = alphabet.indexOf(cypheredText[i])
        let shiftedIndex = alphabetIndex-shift;

        if(alphabet.indexOf(cypheredText[i]) == -1){
            decypherText = decypherText+cypheredText[i]
        }

        else{
            if(shiftedIndex<0){
                while(true){
                    shiftedIndex = shiftedIndex+alphabet.length
                    if (shiftedIndex>=0){break}
                }
            }
            
            decypherText = decypherText+alphabet[shiftedIndex]
        }

        // if(shiftedIndex<0){
        //     while(true){
        //         shiftedIndex = shiftedIndex+alphabet.length
        //         if (shiftedIndex>=0){break}
        //     }
        // }
        
        // decypherText = decypherText+alphabet[shiftedIndex]

        
    }

     return decypherText;

}

let cypheredText = cypher(shift, message)

console.log("Cyphered Text: ",cypheredText)

let decypherText = decypher(shift, cypheredText)

console.log("Decyphered Text: ",decypherText)