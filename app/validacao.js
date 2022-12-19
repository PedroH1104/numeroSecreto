function verificaChute(chute) {
    const numero = +chute;                          // transformando em um numero inteiro

    if (chuteForInvalido(numero)) {
        if (chute.toUpperCase() === "GAME OVER") {

            document.body.innerHTML =
                `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor = "black";
                botao = document.getElementById('jogar-novamente');

                botao.addEventListener('click', function(){
                    window.location.reload();
                })
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
        }
    }

    if (numeroForMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `
            <div>Valor inválido: o número não está dentro do intervalo de ${menorValor} e ${maiorValor}</div>
        `
        return;
    }
    
    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2> Você acertou! </h2>
            <h3> O número secreto era ${numeroSecreto}</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
        botao = document.getElementById('jogar-novamente');

        botao.addEventListener('click', function(){
            window.location.reload();
        })
        return
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>O número secreto é menor  <i class="fa-sharp fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O número secreto é maior  <i class="fa-sharp fa-solid fa-arrow-up"></i></div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor
}

/* ou então colocamos do lado de fora

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})

*/
