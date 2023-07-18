const outTabelaPilotos = document.getElementById("outTabelaPilotos");
const sltPiloto = document.getElementById("sltPiloto");

sltPiloto.addEventListener("change", gerarTabela)

var indPesquisa = -1;

function gerarTabela() {

    //Esvazia o html para que uma nova tabela de pilotos seja inserida
    outTabelaPilotos.textContent = " ";

    //Pesquisa no vetor pilotos o indice do piloto selecionado
    var identPiloto = sltPiloto.value;
    for (ind = 0; ind < vetPiloto.length; ind++) {
        if (vetPiloto[ind] == identPiloto) {
            indPesquisa = ind;
        }
    }

    let posicaoPorCorrida = [];
    posicaoPorCorrida.push(vetCorrida1[indPesquisa], vetCorrida2[indPesquisa], vetCorrida3[indPesquisa], vetCorrida4[indPesquisa], vetCorrida5[indPesquisa]);

    let pontuacaoPorCorrida = [];

    for (var i = 0; i < 5; i++) {
        let posicao = posicaoPorCorrida[i];
        pontuacaoPorCorrida.push(vetPontuacaoPilotos[posicao]);
    }

    // Cria o elemento tabela
    var tabela = document.createElement('table');

    // Cria o cabeçalho e corpo da tabela
    var cabecalhoTabela = document.createElement('thead');
    var corpoTabela = document.createElement('tbody');

    //Cria as linhas do cabeçalho e do corpo da tabela
    var linhaCabecalho = document.createElement('tr');

    //Cria a primeira célula do cabeçalho e atribui a ela o texto piloto
    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Piloto";
    linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho

    //Cria a primeira célula do cabeçalho e atribui a ela o texto corrida
    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Corrida";
    linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho

    //Cria a primeira célula do cabeçalho e atribui a ela o texto pontuação
    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Pontuação";
    linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho

    cabecalhoTabela.appendChild(linhaCabecalho);

    // Percorre o vetor criando as células e anexando-as a cada linha
    for (var i = 0; i < 5; i++) {
        var linha = document.createElement('tr');

        if (i === 0) {
            //Cria a célula do corpo com o nome do piloto
            var celula = document.createElement('td');
            celula.textContent = identPiloto;
            linha.appendChild(celula);//Anexa a linha do corpo 
        } else {
            //Cria a célula vazia do corpo
            var celula = document.createElement('td');
            celula.textContent = " ";
            linha.appendChild(celula);//Anexa a linha do corpo 
        }

            //Cria a célula do corpo com o número da corrida
            var celula = document.createElement('td');
            celula.textContent = (i + 1) + "º";
            linha.appendChild(celula);

            //Cria a célula do corpo com a pontuação
            var celula = document.createElement('td');
            celula.textContent = pontuacaoPorCorrida[i];
            linha.appendChild(celula);
            
        corpoTabela.appendChild(linha);
    }

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela à div tabelaPilotos do HTML
    outTabelaPilotos.appendChild(tabela);

}