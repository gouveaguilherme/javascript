function convert(){
    let bin = document.getElementById('bin')
    let binVetor = [bin.substr(0, 1), bin.substr(1, 1), bin.substr(2, 1), bin.substr(3, 1), bin.substr(4, 1), bin.substr(5, 1), bin.substr(6, 1), bin.substr(7, 1)]
    let dec = [Number(bin[0])*2**7, Number(bin[1])*2**6, Number(bin[2])*2**5, Number(bin[3])*2**4, Number(bin[4])*2**3, Number(bin[5])*2**2, Number(bin[6])*2**1, Number(bin[7])*2**0]
    const result = dec.reduce((total, currentElement) => total + currentElement)
    let res = document.querySelector('div#res')
    if (binVetor.length > 8){
        alert("O limite máximo é de 8 dígitos")
    }else{
        if (binVetor != 0 || binVetor != 1){
            alert("Digite apenas 0's e 1's")
        }else{
            res.innerHTML = `O binário ${bin} é equivalente ao decimal ${result}`
        }
    }
}


/* CONVERSÃO DE BINÁRIO PARA DECIMAL (LÓGICA)

let bin = '11111111'
let binVetor = [bin.substr(0, 1), bin.substr(1, 1), bin.substr(2, 1), bin.substr(3, 1), bin.substr(4, 1), bin.substr(5, 1), bin.substr(6, 1), bin.substr(7, 1)]
let dec = [Number(bin[0])*2**7, Number(bin[1])*2**6, Number(bin[2])*2**5, Number(bin[3])*2**4, Number(bin[4])*2**3, Number(bin[5])*2**2, Number(bin[6])*2**1, Number(bin[7])*2**0]
const result = dec.reduce((total, currentElement) => total + currentElement)
console.log(result)


if (b.length > 8){
    alert("O limite máximo é de 8 dígitos")
}else{
    if (b != 0 || b != 1){
        alert("Digite apenas 0's e 1's")
    }else{
        res.innerHTML = `O binário ${bin} é equivalente ao decimal ${result}`
    }
}
*/