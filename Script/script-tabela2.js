const outTabelaCorrida = document.getElementById("outTabelaCorrida");
const sltCorrida = document.getElementById("sltCorrida");

var vetSelecionado

sltCorrida.addEventListener("change", gerarTabela)

function gerarTabela() {
    //Nesse código não será necessária verificação, visto que as tabelas são geradas conforme algum elemento é escolhido e é impossível retornar ao primeiro elemento

    outTabelaCorrida.textContent = ""; //Esvazia o html

    var vetSelecionado
    let vetPilotosFunction;
    var corrida = sltCorrida.value;
    let vetEquipesFunction = vetEquipe.slice();

    //Seletor responsável por definir qual corrida será analisada, usa o método slice para copiar o vetor original e guardar em vetSelecionado
    switch (corrida) {
        case "1":
            vetSelecionado = vetCorrida1.slice();
            break
        case "2":
            vetSelecionado = vetCorrida2.slice();
            break
        case "3":
            vetSelecionado = vetCorrida3.slice();
            break
        case "4":
            vetSelecionado = vetCorrida4.slice();
            break
        case "5":
            vetSelecionado = vetCorrida5.slice();
    }

    vetPilotosFunction = vetPiloto.slice();//Copia o vetor pilotos
    var vetPilotosOrdenados = []; // Novo vetor para armazenar os pilotos ordenados
    var vetEquipePorPiloto = [];// Novo vetor para armazenar a equipe de cada piloto já em ordem

    //Parte da função responsável por organizar tanto os pilotos, quanto a sua respectiva equipe, organizando em ordem de chegada
    do {
        var menorValor = 17;
        var indMenorValor;

        //For que percorre o vetor, identifica o piloto que atualmente ocupa a colocação mais alta(menor número), e guarda a sua posição
        for (ind = 0; ind < vetSelecionado.length; ind++) {
            if (vetSelecionado[ind] < menorValor) {
                menorValor = vetSelecionado[ind];
                indMenorValor = ind;
            }
        }

        //Adiciona aos vetores o piloto de menor colocação e sua equipe
        vetPilotosOrdenados.push(vetPilotosFunction[indMenorValor]);
        vetEquipePorPiloto.push(vetEquipesFunction[indMenorValor]);
        //Remove dos vetores o piloto, a equipe, e a sua colocação que já foram utilizados, para que o for possa rodar novamente (Usa o método splice para remover o item, o primeiro valor é de onde começa a remover e o segundo o número de itens removidos)
        vetSelecionado.splice(indMenorValor, 1);
        vetPilotosFunction.splice(indMenorValor, 1);
        vetEquipesFunction.splice(indMenorValor, 1);
    } while (vetPilotosOrdenados.length < 16)

    //Criação da tabela
    const tabela = document.createElement('table');// Cria o elemento tabela

    // Cria o cabeçalho e corpo da tabela
    const cabecalhoTabela = document.createElement('thead');
    const corpoTabela = document.createElement('tbody');

    //Cria a linha de cabeçalho da tabela
    const linhaCabecalho = document.createElement('tr');

    //Define o cabeçalho da tabela
    const itensCabeçalho = ["Colocação", "Piloto", "Pontuação", "Equipe"];

    for (let i = 0; i < itensCabeçalho.length; i++) {
        const celulaCabecalho = document.createElement('th');
        celulaCabecalho.textContent = itensCabeçalho[i];
        linhaCabecalho.appendChild(celulaCabecalho);
    }

    //Anexa a linha de cabeçalho ao cabeçalho da tabela
    cabecalhoTabela.appendChild(linhaCabecalho);

    //Define o corpo da tabela
    for (i = 0; i < vetPilotosOrdenados.length; i++) {
        const linhaCorpo = document.createElement('tr'); //Cria as linhas de corpo da tabela a cada execução do loop

        const celulaCorpoColocacao = document.createElement('td');
        celulaCorpoColocacao.textContent = `${i + 1}º`;
        linhaCorpo.appendChild(celulaCorpoColocacao);

        const celulaCorpoPiloto = document.createElement('td');
        celulaCorpoPiloto.textContent = vetPilotosOrdenados[i];
        linhaCorpo.appendChild(celulaCorpoPiloto);

        const celulaCorpoPontuacao = document.createElement('td');
        celulaCorpoPontuacao.textContent = vetPontuacaoPilotos[i];
        linhaCorpo.appendChild(celulaCorpoPontuacao);

        const celulaCorpoEquipe = document.createElement('td');
        celulaCorpoEquipe.textContent = vetEquipePorPiloto[i];
        linhaCorpo.appendChild(celulaCorpoEquipe);

        corpoTabela.appendChild(linhaCorpo); //Anexa as linhas ao corpo da tabela
    }

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaCorrida.appendChild(tabela);
}