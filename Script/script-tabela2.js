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

}