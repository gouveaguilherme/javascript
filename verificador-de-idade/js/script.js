function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var formAno = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (formAno.value.length == 0 || formAno.value > ano || formAno.value < 1900){
        alert("[Erro] Verifique os dados e tente novamente!")
    }else{
       var sex = document.getElementsByName('sex')
       var idade = ano - Number(formAno.value)
       var gender = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       img.style.width = '200px'
       img.style.height = '200px'
       img.style.borderRadius = '50%'
       img.style.display = 'block'
       img.style.margin = 'auto'
       img.style.marginTop = '16px'
       if (sex[0].checked){
           gender = 'Homem'
           if (idade >= 0 && idade < 12){
               img.setAttribute('src', './images/crianca.jpg')
           }else if (idade < 21){
               img.setAttribute('src', './images/jovem.jpg')
           }else if (idade < 50){
               img.setAttribute('src', './images/adulto.png')
           }else{
               img.setAttribute('src', './images/idoso.jpg')
           }
       }else if (sex[1].checked){
           gender = 'Mulher'
           if (idade >= 0 && idade < 12){
            img.setAttribute('src', './images/crianca-f.jpg')
            }else if (idade < 21){
                img.setAttribute('src', './images/jovem-f.jpg')
            }else if (idade < 50){
                img.setAttribute('src', './images/adulto-f.png')
            }else{
                img.setAttribute('src', './images/idoso-f.jpg')
            }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `${gender} com ${idade} anos.`
       res.appendChild(img)
    }
}