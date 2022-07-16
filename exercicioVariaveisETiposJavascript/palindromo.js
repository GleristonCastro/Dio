//Solução 1
function palindromo(verifica){
    if (!verifica) return "String inexistente";

    return verifica.split("").reverse().join("") === verifica;
}

//Solução 2

function palindromoDois(verifica){
    if (!verifica) return "String invexistente";

    for(let i = 0; i < verifica.length / 2; i++){
        if(verifica[i] !== verifica[verifica.length -1 -i]){
            return false;
        }
    }

    return true;
}

console.log(palindromoDois("abba"))