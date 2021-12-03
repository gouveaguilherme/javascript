function contar(){
    let inicio = Number(document.querySelector('input#inicio').value)
    let fim = Number(document.querySelector('input#fim').value)
    let passo = Number(document.querySelector('input#passo').value)
    let resultado = document.querySelector('div#resultado')
    let cont = inicio

    if (inicio.lenght == 0 || fim.lenght == 0){
        resultado.innerHTML = `Impossível contar.`
    }else{
        if (passo <= 0){
            alert('Passo inválido! Considerando PASSO = 1')
            passo = 1
        }

        if (cont <= fim){
            while (cont <= fim){
                resultado.innerHTML += ` ${cont} \u{1F449}`
                cont+=passo
            }
        }else{
            while (cont >= fim){
                resultado.innerHTML += ` ${cont} \u{1F449}`
                cont-=passo
            }
        }
        resultado.innerHTML += `\u{1F3C1}` 
    }
}