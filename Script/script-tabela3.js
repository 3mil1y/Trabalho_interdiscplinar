const outTabelaPontuacao = document.getElementById("outTabelaPontuacao");
const sltPiloto = document.getElementById("sltPiloto");
const outImagem = document.getElementById("outImagem");

sltPiloto.addEventListener("change", gerarTabela)

function gerarTabela() {
    //Nesse código não será necessária verificação, visto que as tabelas são geradas conforme algum elemento é escolhido e é impossível retornar ao primeiro elemento

    let indPesquisa;

    //Esvazia o html para que uma nova tabela de pilotos seja inserida
    outTabelaPontuacao.textContent = " ";

    //Pesquisa no vetor pilotos o indice do piloto selecionado
    var identPiloto = sltPiloto.value;
    for (ind = 0; ind < vetPiloto.length; ind++) {
        if (vetPiloto[ind] == identPiloto) {
            indPesquisa = ind;
        }
    }

    //Localiza e armazena a posição do piloto em cada corrida
    let posicaoPorCorrida = [];
    posicaoPorCorrida.push(vetCorrida1[indPesquisa], vetCorrida2[indPesquisa], vetCorrida3[indPesquisa], vetCorrida4[indPesquisa], vetCorrida5[indPesquisa]);

    //Com base na posição do piloto em cada corrida busca a sua pontuação no vetor vetPontuacaoPilotos e armazena
    let pontuacaoPorCorrida = [];
    for (var i = 0; i < 5; i++) {
        let posicao = posicaoPorCorrida[i];
        pontuacaoPorCorrida.push(vetPontuacaoPilotos[posicao - 1]);
    }

    // Cria o elemento tabela
    const tabela = document.createElement('table');

    // Cria o cabeçalho e corpo da tabela
    const cabecalhoTabela = document.createElement('thead');
    const corpoTabela = document.createElement('tbody');

    //Cria as linhas do cabeçalho e do corpo da tabela
    const linhaCabecalho = document.createElement('tr');

    const itensCabeçalho = ["Piloto", "Corrida", "Pontuação",];

    for (let i = 0; i < itensCabeçalho.length; i++) {
        const celulaCabecalho = document.createElement('th');//Cria a célula do cabeçalho
        celulaCabecalho.textContent = itensCabeçalho[i];
        linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho
    }

    cabecalhoTabela.appendChild(linhaCabecalho);

    for (var i = 0; i < 5; i++) {
        const linhaCorpo = document.createElement('tr');//Cria a linha do corpo

        if (i == 0) {
            //Cria a célula do corpo com o nome do piloto
            const celulaPiloto = document.createElement('td');
            celulaPiloto.textContent = identPiloto;
            linhaCorpo.appendChild(celulaPiloto);//Anexa a linha do corpo 
        } else {
            //Cria a célula vazia do corpo
            const celula = document.createElement('td');
            linhaCorpo.appendChild(celula);//Anexa a linha do corpo 
        }

        //Cria a célula do corpo com o número da corrida
        const celulaCorrida = document.createElement('td');
        celulaCorrida.textContent = (i + 1) + "º";
        linhaCorpo.appendChild(celulaCorrida);

        //Cria a célula do corpo com a pontuação
        const celulaPontuacao = document.createElement('td');
        celulaPontuacao.textContent = pontuacaoPorCorrida[i];
        linhaCorpo.appendChild(celulaPontuacao);

        corpoTabela.appendChild(linhaCorpo);
    }

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela à div tabelaPilotos do HTML
    outTabelaPontuacao.appendChild(tabela);

    //Anexa a imagem dos pilotos junto da tabela
    var imagemPiloto = document.createElement('img');
    imagemPiloto.src = "./imagens/imagens-pilotos/piloto" + indPesquisa + ".png";
    outImagem.appendChild(imagemPiloto);
}