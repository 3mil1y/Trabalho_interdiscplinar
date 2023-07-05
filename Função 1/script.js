let vetEquipe = ["Full Time Sports", "Cimed Racing", "Shell V-Power Racing Team", "TMG Racing", "Vogel Motorsport", "Ipiranga Racing", "KTF Sports", "Crown Racing"];
let vetPiloto = [ /*1 equipe*/'John Smith', 'Lucas Silva',/*2 equipe*/ 'Liam Jones', 'Noah Brown',/*3 equipe*/ 'William Davis', 'James Taylor',/*4 equipe*/ 'Benjamin Wilson', 'Henry Thomas', /*5 equipe*/'Daniel Johnson', 'Michael Anderson',/*6 equipe*/ 'Alexander Thompson', 'David Garcia',/*7 equipe*/ 'Joseph Martin', 'Matthew Rodrigues',/*8 equipe*/ 'Andrew Robinson', 'Ryan Martinez'];

var vetCorrida1 = [13, 11, 14, 7, 10, 4, 8, 2, 12, 1, 16, 5, 6, 15, 3, 9];
var vetCorrida2 = [7, 6, 13, 1, 3, 11, 8, 15, 12, 5, 4, 14, 9, 16, 2, 10];
var vetCorrida3 = [1, 16, 9, 15, 14, 4, 2, 8, 13, 10, 7, 11, 6, 5, 12, 3];
var vetCorrida4 = [16, 2, 12, 11, 13, 4, 7, 8, 15, 3, 9, 10, 6, 1, 5, 14];
var vetCorrida5 = [15, 6, 14, 10, 2, 12, 5, 9, 1, 8, 7, 16, 11, 3, 13, 4];

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