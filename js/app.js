let amigos = [];

function adicionar() {
    let amigo = document.getElementById("nome-amigo");
    if (amigo.value == "") {
        alert("Informe o nome de seu amigo!");
        return;
    }

    let lista = document.getElementById("lista-amigos");

    amigos.push(amigo.value);

    if (lista.textContent == "") {
        lista.textContent = amigo.value;
    } else {
        lista.textContent = lista.textContent + "," + " " + amigo.value;
    }
    amigo.value = "";

    atualizarLista();
    atualizarSorteio();
}

function sortear() {
    if (amigos.length < 4) {
        alert("Insira no mínimo 4 amigos para fazer o sorteio de um amigo secreto!");
        return;
    }
    embaralhar(amigos);
    let listaSorteio = document.getElementById("lista-sorteio");

    for (let i = 0; i < amigos.length; i++) {

        if (amigos[i] === amigos[i+1]) {
            alert("Não podem ser inseridos amigos com exatamente o mesmo nome. Clique sobre o nome repetido para deletá-lo ou reinicie o sorteio.");
            return;
        }

        if (i == amigos.length - 1) {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "--> " + amigos[0] + "<br>";
        } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + amigos[i] + "--> " + amigos[i+1] + "<br>";
        }

    }
}

function excluirAmigo(index) {
    amigos.splice(index, 1);
    atualizarLista();
    atualizarSorteio();
}

function embaralhar(lista) {

    for (let i = lista.length; i; i--) {
        const indiceAleatorio = Math.floor(Math.random() * i);

        // atribuição via destructuring
        [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]];
    }
}

function atualizarLista() {
    let lista = document.getElementById("lista-amigos");
    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let paragrafo = document.createElement("p");
        paragrafo.textContent = amigos[i];

        paragrafo.addEventListener("click", function() {
            excluirAmigo(i);
        });

        lista.appendChild(paragrafo);
    }
}

function atualizarSorteio() {
    let listaSorteio = document.getElementById("lista-sorteio");
    listaSorteio.innerHTML = "";
}

function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").innerHTML = "";
    document.getElementById("lista-sorteio").innerHTML = "";
    
}

// let minhaLista = [1, 2, 3];
// console.log(minhaLista);
// let lista2 = [];
// lista2.push(4);
// console.log(lista2);
// lista2.push(5);
// console.log(lista2);
// lista2.push(6);
// console.log(lista2);

// let novaLista = minhaLista.concat(lista2);
// console.log(novaLista);

// novaLista.splice(novaLista.length - 1);
// console.log(novaLista);

// function embaralha(novaLista) {
//     for (let indice = novaLista.length; indice; indice--) {
//         const indiceAleatorio2 = Math.floor(Math.random() * indice);

//         [novaLista[indice - 1], novaLista[indiceAleatorio2]] = [novaLista[indiceAleatorio2], novaLista[indice - 1]];
//     }
// }

// let listaEmbaralhada = embaralha(novaLista);
// console.log(listaEmbaralhada);

function qualANaturezaDoNumero(numero) {
    if (numero > 0) {
        return "Positivo";
    } else if (numero == 0) {
        return "Zero";
    } else {
        return "Negativo";
    }
}

let num = qualANaturezaDoNumero(-3);
console.log(num);

function pessoaMaiorDeIdade(idade) {
    if (idade >= 18) {
        return "Pessoa é maior de idade";
    } else {
        return "Pessoa é menor de idade";  
    }
}

let idadePessoa = pessoaMaiorDeIdade(14);
console.log(idadePessoa);

function stringEhVazia(string) {
    if (string == "") {
        return "A String é vazia";
    } else {
        return "A String não é vazia";
    }
}

let conteudo = stringEhVazia("oi");
console.log(conteudo);

function anoEhBissexto(ano) {
    let moduloAno = ano % 4;
    if (moduloAno == 0) {
        return "O ano é bissexto";
    } else {
        return "O ano não é bissexto";
    }
}

let numero = anoEhBissexto(2024);
console.log(numero);

function mediaDeDoisNumeros(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return "Digite um valor válido para cada número";
    }
    return (a+b)/2;
}

let media = mediaDeDoisNumeros(5,7);
console.log(media);

let array = [1,2,3];
let newArray = array;

function tamanhoArray(array) {
    newArray = array;
    return newArray.length;
}

let lista = tamanhoArray(array);
console.log(lista);

function verificaNumeroNoArray(elemento) {
    if (newArray.includes(elemento)) {
        return `O elemento está presente no array`;
    } else {
        return `O elemento não está presente no array`;
    }
}

let verificacao = verificaNumeroNoArray(2);
console.log(verificacao);

let arrayBandas = ["Bon Jovi", "Van Halen", "Foo Fighters", "Oasis", "Beatles", "INXS"];

function verificaBanda(banda) {
    if (arrayBandas.includes(banda)) {
        return `A banda ${banda} está presente no Array`;
    } else {
        return `A banda ${banda} não está presente no Array`;
    }
}

let bandaPresente = verificaBanda("Oasis");
console.log(bandaPresente);




