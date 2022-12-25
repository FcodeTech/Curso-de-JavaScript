// && e AND
// || ou OR
// ! não NOT

// Declarando variáveis
let n1, n2, n3, n4
// Atribuindo valor as variáveis
n1 = 10
n2 = 5
n3 = 15
n4 = 2


// AND &&
console.log((n1 > n2)&&(n1 > n3))
// OR ||
console.log((n1 > n2)||(n1 > n3))
// Negação !
console.log(!((n1 > n2)||(n1 > n3)))


// Condicional IF
if(n1 > n2){
    console.log(n1 + " maior que " + n2)
}else{
    console.log(n1 + " menor que " + n2)
}

//Codinção IF AND "&&" com operadores Logicos
if((n1 > n2)&&(n3 > n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

//Codinção IF OR "||" com operadores Logicos
if((n1 > n2)||(n3 > n4)){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

//Codinção IF NEGAÇÂO "!" com operadores Logicos
if(!((n1 > n2)&&(n3 > n4))){
    console.log("Verdadeiro")
}else{
    console.log("Falso")
}

