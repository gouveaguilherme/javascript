function load(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('image')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `Agora são ${hora}:${min}.`
    if (hora >= 6 && hora < 12){
        //Manhã
        img.src = './images/manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
    }else if (hora >= 12 && hora < 18){
        //Tarde
        img.src = './images/tarde.png'
        document.body.style.backgroundColor = '#b9846f'
    }else{
        //Noite
        img.src = './images/noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}