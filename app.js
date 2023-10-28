document.getElementById("botao").onclick = function(){
    let nome = document.getElementById("nomeheroi").value
    let xp = document.getElementById("xpheroi").value
    let mensagem;

    if(xp < 1000){
       mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível ferro.`
       return mensagem
    }
    else if(xp >= 1000 && xp < 2000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível bronze.`
        return mensagem
    }
    else if(xp >= 2000 && xp < 5000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível prata.`
        return mensagem
    }
    else if(xp >= 5000 && xp < 7000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível ouro.`
        return mensagem
    }
    else if(xp >= 7000 && xp < 8000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível platina.`
        return mensagem
    }
    else if(xp >= 8000 && xp < 9000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível ascendente.`
        return mensagem
    }
    else if(xp >= 9000 && xp < 10000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível imortal.`
        return mensagem
    }
    else if(xp > 10000){
        mensagem = document.getElementById("resultado").innerHTML = `Bem vindo ${nome}! Você está no nível radiante.`
        return mensagem
    }
}