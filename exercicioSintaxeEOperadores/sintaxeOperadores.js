function calc(compara1,compara2){

    let soma;
    let igualdade;
    let resultado;
    let comparaDez;
    let comparaVinte;
    let frase;

    if (!Number(compara1) || !Number(compara2)) return console.log('É necessário informar dois números');

    soma = compara1 + compara2;

    igualdade = compara1 == compara2 ? ' são iguais.' : ' não são iguais.';

    resultado = ' Sua soma é ' + Number(compara1+compara2);

    if(soma == 10){
        comparaDez = 'igual a';
    } else if (soma < 10) {
        comparaDez = 'menor';
    } else{
        comparaDez = 'maior'
    }

    comparaVinte = soma == 20 ? 'igual a' : comparaVinte = soma < 20 ? 'menor que' : 'maior que';

    frase = 'Os números ' +compara1 +' e ' +compara2 + igualdade + resultado +', que é ' + comparaDez +' que 10 e ' + comparaVinte +' 20.';

    console.log(frase);
}

calc(1,2);
calc(1,9);
calc(2,2);
calc(11,12);
calc(10,20);
calc(13,7);
calc(15,15);
calc(15);
calc();
calc('n',1);