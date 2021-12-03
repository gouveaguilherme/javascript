let lista = []
let num = document.querySelector('input#num')
let res = document.querySelector('select#lista')
let result = document.querySelector('div#resultado')

function adicionar(){
    let n = Number(num.value)
    if (n >= 1 && n <= 100){
        if (lista.indexOf(n) > -1){ 
            alert('Valor inválido ou já encontrado na lista')
        }else{
            lista.push(n)
            res.innerHTML += `<option>Valor ${n} adicionado</option>`
            console.log(lista)
            result.innerHTML = ''
            
            /* CRIANDO OPTION DENTRO DO SELECT DE FORMA DINAMICA 

            let item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            res.appendChild(item)

            */ 
        }  
    }else{
        alert('Valor inválido ou já encontrado na lista')
    }   
    num.value = ''
    num.focus()
}

function finalizar(){
    if (lista.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{

        /* VERIFICA QUAL NÚMERO É O MENOR E QUAL É O MENOR DENTRO DO VETOR e SOMA OS VALORES

        let maior = lista[0]
        let menor = lista[0]
        let soma = 0
        for(let pos in lista){
            soma += lista[pos]
            if(lista[pos] > maior)
                maior = lista[pos]
            if(lista[pos] < menor)
                menor = lista[pos]
        } 

        */

        Array.min = function(lista){
            return Math.min.apply(Math, lista)
        }
        Array.max = function(lista){
            return Math.max.apply(Math, lista)
        }
    
        const soma = lista.reduce((total, currentElement) => total + currentElement)
    
        result.innerHTML += `<p>Ao todo, temos ${lista.length} números cadastrados.</p>`
        result.innerHTML += `<p>O maior valor informado foi ${Array.max(lista)}.</p>`
        result.innerHTML += `<p>O menor valor informado for ${Array.min(lista)}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        result.innerHTML += `<p>A média dos valores digitados é ${soma/lista.length}.</p>`
    }
}