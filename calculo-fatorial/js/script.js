function calcular(){
    let num = document.querySelector('input#num')
    let n = Number(num.value)
    let res = document.querySelector('div#result')
    if (n <= 0){
        alert('Não foi possível realizar o cálculo.\nVerifique se você digitou um número inteiro corretamente.')
    }else{
        function fatorial(n){
            if (n == 1){
                return 1
            }else{
                return n * fatorial(n-1)
            }
        }
        res.innerHTML = `O fatorial de ${n} é: ` + fatorial(n)
    }
}
