let amigos = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');

    if(nome.value == '') {
        alert('Insira um nome');
        return;
    }

    let nomeMaiusculo = nome.value.toLowerCase();
    if (amigos.includes(nomeMaiusculo)){ 

        alert('Nome ja adicionado');
        return;
    }

    amigos.push(nomeMaiusculo);
    if(lista.textContent == '') {
        lista.textContent = nome.value;
    } else {
        lista.textContent = lista.textContent + ', ' + nome.value;
    }
    nome.value = '';
}

function sortear() {
    if(amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos');
        return;
    }

    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');

    for(let i = 0; i < amigos.length; i ++) {
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br/>';
        } else { 
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML = '';
}