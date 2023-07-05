
var indPesquisa = -1;

//Refêrencia ao html
const outTabelaPilotos = document.getElementById("outTabelaPilotos");
const sltPiloto = document.getElementById("sltPiloto");

sltPiloto.addEventListener("change", gerarTabela)

function gerarTabela() {
  
    //Esvazia o html para que uma nova tabela de pilotos seja inserida
    outTabelaPilotos.textContent = " ";
 
    //Pesquisa no vetor pilotos  
    var identPiloto = sltPiloto.value;
    for (ind = 0; ind < vetPiloto.length; ind++) {
        if (vetPiloto[ind] == identPiloto) {
            indPesquisa = ind;
        }
    }
    
    //Armaneza a posição do piloto selecionado na corrida para que seja utilizada na tabela
    var valoresTabela = [];
    valoresTabela.push(vetCorrida1[indPesquisa], vetCorrida2[indPesquisa], vetCorrida3[indPesquisa], vetCorrida4[indPesquisa], vetCorrida5[indPesquisa]);

    // Cria o elemento tabela
    var tabela = document.createElement('table');

    // Cria o cabeçalho e corpo da tabela
    var cabecalhoTabela = document.createElement('thead');
    var corpoTabela = document.createElement('tbody');

    var linhaCabecalho = document.createElement('tr');
    var linha = document.createElement('tr')

    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Piloto";
    linhaCabecalho.appendChild(celulaCabecalho);

    var celula = document.createElement('td');
    celula.textContent = identPiloto;
    linha.appendChild(celula);
    
    // Percorre o vetor criando as linhas e após criando os elementos de cada linha
    for (var i = 0; i < 5; i++) {
        var celulaCabecalho = document.createElement('th');
        celulaCabecalho.textContent = "Corrida " + (i+1);
        linhaCabecalho.appendChild(celulaCabecalho);

        var celula = document.createElement('td');
        celula.textContent = valoresTabela[i] +"º colocação";
        linha.appendChild(celula);
    }

    //Anexa o cabeçalho e o corpo ao elemento table
    cabecalhoTabela.appendChild(linhaCabecalho);
    corpoTabela.appendChild(linha);

    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaPilotos.appendChild(tabela);

    //Anexa a imagem dos pilotos junto da tabela
    var imagemPiloto = document.createElement('img');
    imagemPiloto.src = "piloto" + indPesquisa + ".jpg";
    outTabelaPilotos.appendChild(imagemPiloto);
}