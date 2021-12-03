function gerar(){
    let num = Number(document.querySelector('input#num').value)
    let resultado = document.getElementById('tabuada')

    if (num == ""){
        alert('Por favor insira um número.')
    }else{
        let cont = 1
        resultado.innerHTML = ''
        while(cont <= 10){
            let result = num * cont
            resultado.innerHTML += `<option>${num} x ${cont} = ${result}</option>`
            cont++
        }
    }
}

//RESULUÇÃO DO PROFESSOR
/*  
    while(cont <= 10){
        let item = document.createElement('option')
        item.text = `${num} x ${cont} = ${num*cont}`
        resultado.appendChild(item)
        cont++
    }
*/