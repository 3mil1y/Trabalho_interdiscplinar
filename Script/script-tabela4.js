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

    //Guarda a pontuação dos pilotos em cada corrida(Duas de cada vez)
    let vetPontuacaoPilotosPorCorrida= [];
    vetPontuacaoPilotosPorCorrida.push(vetCorrida1[indPesquisa], vetCorrida1[indPesquisa-1], vetCorrida2[indPesquisa], vetCorrida2[indPesquisa-1],vetCorrida3[indPesquisa], vetCorrida3[indPesquisa-1],vetCorrida4[indPesquisa], vetCorrida4[indPesquisa-1],vetCorrida5[indPesquisa], vetCorrida5[indPesquisa-1]);

    //Guarda a pontuação de cada equipe por corrida
    let vetPontuacaoPorCorrida = [];
    for(let j = 0; j < vetPontuacaoPilotosPorCorrida.length; j+=2){
        let pontuacao;
        pontuacao = vetPontuacaoPilotosPorCorrida[j] + vetPontuacaoPilotosPorCorrida[j+1];
        vetPontuacaoPorCorrida.push(pontuacao);
    }

    // Cria o elemento tabela
    const tabela = document.createElement('table');

    // Cria o cabeçalho e corpo da tabela
    const cabecalhoTabela = document.createElement('thead');
    const corpoTabela = document.createElement('tbody');

    //Cria as linhas do cabeçalho e do corpo da tabela
    const linhaCabecalho = document.createElement('tr');

    //Define o cabeçalho da tabela
    const itensCabeçalho = ["Equipe","Corrida","Pontuação"];
    for(let i=0;i<itensCabeçalho.length;i++){
        const celulaCabecalho = document.createElement('th');//Cria a célula do cabeçalho
        celulaCabecalho.textContent = itensCabeçalho[i];
        linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho
    }

    //Define o corpo da tabela
    for (i = 0; i < 5; i++) {
        const linhaCorpo = document.createElement('tr');//Cria as linhas do corpo da tabela
        
        if(i == 0){
            const celulaEquipe = document.createElement('td');
            celulaEquipe.textContent = identEquipe;
            linhaCorpo.appendChild(celulaEquipe);//Anexa a linha do corpo
        }else{
            const celula = document.createElement('td');
            linhaCorpo.appendChild(celula);//Anexa a linha do corpo
        }

        const celulaCorrida = document.createElement('td');
        celulaCorrida.textContent = (i+1) + "º";
        linhaCorpo.appendChild(celulaCorrida);//Anexa a linha do corpo

        const celulaPontuacao = document.createElement('td');
        celulaPontuacao.textContent = vetPontuacaoPorCorrida[i];
        linhaCorpo.appendChild(celulaPontuacao);//Anexa a linha do corpo

        corpoTabela.appendChild(linhaCorpo);
    }

    //Anexa as linhas ao cabeçalho e ao corpo da tabela
    cabecalhoTabela.appendChild(linhaCabecalho);

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaEquipes.appendChild(tabela);
}