let vetEquipe = ["Full Time Sports", "Cimed Racing", "Shell V-Power Racing Team", "TMG Racing", "Vogel Motorsport", "Ipiranga Racing", "KTF Sports", "Crown Racing"];
let vetPiloto = [ /*1 equipe*/'John Smith', 'Lucas Silva',/*2 equipe*/ 'Liam Jones', 'Noah Brown',/*3 equipe*/ 'William Davis', 'James Taylor',/*4 equipe*/ 'Benjamin Wilson', 'Henry Thomas', /*5 equipe*/'Daniel Johnson', 'Michael Anderson',/*6 equipe*/ 'Alexander Thompson', 'David Garcia',/*7 equipe*/ 'Joseph Martin', 'Matthew Rodrigues',/*8 equipe*/ 'Andrew Robinson', 'Ryan Martinez'];

var vetCorrida1 = [13, 11, 14, 7, 10, 4, 8, 2, 12, 1, 16, 5, 6, 15, 3, 9];
var vetCorrida2 = [7, 6, 13, 1, 3, 11, 8, 15, 12, 5, 4, 14, 9, 16, 2, 10];
var vetCorrida3 = [1, 16, 9, 15, 14, 4, 2, 8, 13, 10, 7, 11, 6, 5, 12, 3];
var vetCorrida4 = [16, 2, 12, 11, 13, 4, 7, 8, 15, 3, 9, 10, 6, 1, 5, 14];
var vetCorrida5 = [15, 6, 14, 10, 2, 12, 5, 9, 1, 8, 7, 16, 11, 3, 13, 4];

const tabelaCorrida = document.getElementById("tabelaCorrida");
const sltCorrida = document.getElementById("sltCorrida");

var vetSelecionado

sltCorrida.addEventListener("change", gerarTabela)

function gerarTabela() {

    var vetPontuacaoPilotos = [16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1]
    var vetPilotos;
    var corrida = sltCorrida.value;

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

    var vetPilotos = vetPiloto.slice();
    var vetPilotosOrdenados = []; // Novo vetor para armazenar os pilotos ordenados

    do {
        var menorValor = 17;
        var indMenorValor = -1;

        for (ind = 0; ind < vetSelecionado.length; ind++) {
            if (vetSelecionado[ind] < menorValor) {
                menorValor = vetSelecionado[ind];
                indMenorValor = ind;
            }
        }
        vetPilotosOrdenados.push(vetPilotos[indMenorValor]);
        vetSelecionado.splice(indMenorValor, 1)
        vetPilotos.splice(indMenorValor, 1);

    } while (vetPilotosOrdenados.length < 16)

    console.log(vetPilotosOrdenados);
    

    pontuacaoEquipe = [];

    for(i = 0; i < vetPontuacaoPilotos.length; i++){
        if(vetPiloto[i] === )
    }

}