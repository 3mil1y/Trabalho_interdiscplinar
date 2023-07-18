const outTabelaCorrida = document.getElementById("outTabelaCorrida");
const sltCorrida = document.getElementById("sltCorrida");

var vetSelecionado

sltCorrida.addEventListener("change", gerarTabela)

function gerarTabela() {

    outTabelaCorrida.textContent = "";

    let vetPilotosFunction;
    var corrida = sltCorrida.value;
    let vetEquipesFunction = vetEquipe.slice();

    //Seletor responsável por definir qual corrida será analisada, usa o método slice para copiar a matriz do vetor original
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
        var indMenorValor = -1;

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
        //Remove dos vetores o piloto, a equipe, e a sua colocação que já foram utilizados, para que o for possa rodar novamente
        vetSelecionado.splice(indMenorValor, 1);
        vetPilotosFunction.splice(indMenorValor, 1);
        vetEquipesFunction.splice(indMenorValor, 1);
    } while (vetPilotosOrdenados.length < 16)

    //Criação da tabela
    var tabela = document.createElement('table');// Cria o elemento tabela

    // Cria o cabeçalho e corpo da tabela
    var cabecalhoTabela = document.createElement('thead');
    var corpoTabela = document.createElement('tbody');

    // Cria o cabeçalho e corpo da tabela
    var cabecalhoTabela = document.createElement('thead');
    var corpoTabela = document.createElement('tbody');

    //Cria as linha do cabeçalho da tabela
    var linhaCabecalho = document.createElement('tr');

    //Define o cabeçalho da tabela
    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Colocação";
    linhaCabecalho.appendChild(celulaCabecalho);

    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Piloto";
    linhaCabecalho.appendChild(celulaCabecalho);

    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Pontuação";
    linhaCabecalho.appendChild(celulaCabecalho);

    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Equipe";
    linhaCabecalho.appendChild(celulaCabecalho);

    //Define o corpo da tabela
    for(i = 0; i < vetPilotosOrdenados.length; i++){
        //Cria as linhas de corpo da tabela
        var linhaCorpo = document.createElement('tr')

        var celulaCorpo = document.createElement('td');
        celulaCorpo.textContent = (i+1) + "º";
        linhaCorpo.appendChild(celulaCorpo);
        
        var celulaCorpo = document.createElement('td');
        celulaCorpo.textContent = vetPilotosOrdenados[i];
        linhaCorpo.appendChild(celulaCorpo);

        var celulaCorpo = document.createElement('td');
        celulaCorpo.textContent = vetPontuacaoPilotos[i];
        linhaCorpo.appendChild(celulaCorpo);
        
        var celulaCorpo = document.createElement('td');
        celulaCorpo.textContent = vetEquipePorPiloto[i];
        linhaCorpo.appendChild(celulaCorpo);

        corpoTabela.appendChild(linhaCorpo);
    }

    //Anexa as linhas ao cabeçalho e ao corpo da tabela
    cabecalhoTabela.appendChild(linhaCabecalho);

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaCorrida.appendChild(tabela);
}