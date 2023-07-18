var indPesquisa = -1;

//Refêrencia ao html
const outTabelaEquipes = document.getElementById("outTabelaEquipes");
const sltEquipe = document.getElementById("sltEquipe");

sltEquipe.addEventListener("change", gerarTabela)

function gerarTabela() {
  
    //Esvazia o html para que uma nova tabela de pilotos seja inserida
    outTabelaEquipes.textContent = " ";
 
    //Pesquisa no vetor equipes o indice da equipe selecionado
    var identEquipe = sltEquipe.value;
    for (ind = 0; ind < vetEquipe.length; ind++) {
        if (vetEquipe[ind] == identEquipe) {
            indPesquisa = ind;
        }
    } //Retorna a posição do 2º membro da equipe (O primeiro será encontrado subtraindo 1)

    let vetPontuacaoPilotosPorCorrida= [];
    vetPontuacaoPilotosPorCorrida.push(vetCorrida1[indPesquisa], vetCorrida1[indPesquisa-1], vetCorrida2[indPesquisa], vetCorrida2[indPesquisa-1],vetCorrida3[indPesquisa], vetCorrida3[indPesquisa-1],vetCorrida4[indPesquisa], vetCorrida4[indPesquisa-1],vetCorrida5[indPesquisa], vetCorrida5[indPesquisa-1]);

    let vetPontuacaoPorCorrida = [];
    for(let j = 0; j < vetPontuacaoPilotosPorCorrida.length; j+=2){
        let pontuacao;
        pontuacao = vetPontuacaoPilotosPorCorrida[j] + vetPontuacaoPilotosPorCorrida[j+1];
        vetPontuacaoPorCorrida.push(pontuacao);
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
    celulaCabecalho.textContent = "Equipe";
    linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho

     //Cria a primeira célula do cabeçalho e atribui a ela o texto piloto
     var celulaCabecalho = document.createElement('th');
     celulaCabecalho.textContent = "Corrida";
     linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho
 
     //Cria a primeira célula do cabeçalho e atribui a ela o texto piloto
     var celulaCabecalho = document.createElement('th');
     celulaCabecalho.textContent = "Pontuação";
     linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho
 

    // Percorre o vetor criando as demais células e anexando elas a cada linha
    for (i = 0; i < 5; i++) {
        var linha = document.createElement('tr')
        
        if(i == 0){
            var celula = document.createElement('td');
            celula.textContent = identEquipe;
            linha.appendChild(celula);//Anexa a linha do corpo
        }else{
            var celula = document.createElement('td');
            celula.textContent = " ";
            linha.appendChild(celula);//Anexa a linha do corpo
        }

        var celula = document.createElement('td');
        celula.textContent = (i+1) + "º";
        linha.appendChild(celula);//Anexa a linha do corpo

        var celula = document.createElement('td');
        celula.textContent = vetPontuacaoPorCorrida[i];
        linha.appendChild(celula);//Anexa a linha do corpo

        corpoTabela.appendChild(linha);
    }

    //Anexa as linhas ao cabeçalho e ao corpo da tabela
    cabecalhoTabela.appendChild(linhaCabecalho);

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaEquipes.appendChild(tabela);
}