let aposta = Number(prompt("Qual é a sua aposta de 0 a 50?"));
let i = 0;
const gerador = function (min, max) {
    return Math.floor( Math.random() * max);
}
let aleatorio = gerador(0,50);

while(i<9){
    if(i == 0){
        gerador(0,50);
        //console.log(aleatorio); PARA TESTAR O PROGRAMA
    }
    
    if(aposta == aleatorio){
        console.log("Você Ganhou!!");
        i=20;
    }
    else{
        if(aposta > aleatorio){
            console.log("Você errou, o número era menor");
        }
        else{
            console.log("Você errou, o número era maior");
        }
        console.log(`TENTE DENOVO VOCÊ TEM MAIS ${-i +9} VIDAS`);
        i ++;
        aposta = Number(prompt("Qual é a sua aposta de 0 a 50?"));

    }
}

if(i==9){
    console.log('SUAS VIDAS ACABARAM');
}