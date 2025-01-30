let nomes = [];
let numeroDePessoas = 0;

function adicionarAmigo() {
    let adicionando = document.querySelector("#amigo").value; 
    if (adicionando == "") {
        alert("Por favor, insira um valor válido");
    } else {
        nomes.push(adicionando);
        numeroDePessoas++;
        document.querySelector("#amigo").value = "";
    }
    console.log(`Os nomes presentes são ${nomes}`);
}

function sorteio() {
    if (numeroDePessoas <= 0) {
        return 0;
    } else {
        return Math.floor(Math.random() * numeroDePessoas);
    }
}

function sortearAmigo() {
    if (nomes.length === 0) {
        return "Não há nomes na lista para sortear.";
    } else {
        let posicaoSorteada = sorteio();
        return nomes[posicaoSorteada];
    }
}

function exibirMensagemResultados() {
    document.querySelector('#listaAmigos').innerHTML = '';
    document.querySelector('#resultado').innerHTML = '';

    nomes.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        document.querySelector("#listaAmigos").appendChild(li);
    });
    let pessoaSorteada = sortearAmigo();
    let resultadoLi = document.createElement("li"); 
    resultadoLi.textContent = `O amigo secreto é: ${pessoaSorteada}`;
    document.querySelector("#resultado").appendChild(resultadoLi); 
}