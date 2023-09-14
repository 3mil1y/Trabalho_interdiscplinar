    // Trabalho Interdisciplinar

    // Autoria: Êndrio Waiandt;
    // Turma: 1° Período TSI
    // Versão: 1.0
    // Cria a tabela da posição do piloto por corrida

//Refêrencia ao html
const outTabelaPilotos = document.getElementById("outTabelaPilotos");
const sltPiloto = document.getElementById("sltPiloto");
const outImagem = document.getElementById("outImagem");

//Gera o seletor dos pilotos

for(i=0;i<vetPiloto.length;i++){

    if(i==0){
        var option = document.createElement('option');
        option.textContent = "Escolha o piloto";
        option.value = "";   
        option.selected = true;
        option.disabled = true; 
    }else{
        var option = document.createElement('option');
        option.textContent = vetPiloto[i-1];
        option.value = vetPiloto[i-1];    
    }

    sltPiloto.appendChild(option);

}

sltPiloto.addEventListener("change", gerarTabela)

function gerarTabela() {
    //Nesse código não será necessária verificação, visto que as tabelas são geradas conforme algum elemento é escolhido e é impossível retornar ao primeiro elemento

    outTabelaPilotos.textContent = " "; //Esvazia o html para que uma nova tabela de pilotos seja inserida
    outImagem.textContent = " ";
 
    //Pesquisa no vetor pilotos  o indice do piloto selecionado
    var identPiloto = sltPiloto.value;
    for (ind = 0; ind < vetPiloto.length; ind++) {
        if (vetPiloto[ind] == identPiloto) {
            indPesquisa = ind;
        }
    }
    
    //Armaneza a posição do piloto selecionado na corrida para que seja utilizada na tabela
    var vetPosicoesPiloto = [];
    vetPosicoesPiloto.push(vetCorrida1[indPesquisa], vetCorrida2[indPesquisa], vetCorrida3[indPesquisa], vetCorrida4[indPesquisa], vetCorrida5[indPesquisa]);

    // Cria o elemento tabela
    var tabela = document.createElement('table');

    // Cria o cabeçalho e corpo da tabela
    var cabecalhoTabela = document.createElement('thead');
    var corpoTabela = document.createElement('tbody');

    //Cria as linhas do cabeçalho e do corpo da tabela
    var linhaCabecalho = document.createElement('tr');
    var linha = document.createElement('tr')

    //Cria a primeira célula do cabeçalho e atribui a ela o texto piloto
    var celulaCabecalho = document.createElement('th');
    celulaCabecalho.textContent = "Piloto";
    linhaCabecalho.appendChild(celulaCabecalho);//Anexa a linha cabeçalho

    //Cria a primeira célula do corpo e anexa a ela o texto referente ao nome do piloto
    var celula = document.createElement('td');
    celula.textContent = identPiloto;
    linha.appendChild(celula);//Anexa a linha do corpo
    
    // Percorre o vetor criando as demais células e anexando elas a cada linha
    for (var i = 0; i < 5; i++) {
        //Cria as células do cabeçalho que se referem a cada corrida
        var celulaCabecalho = document.createElement('th');
        celulaCabecalho.textContent = "Corrida " + (i+1);
        linhaCabecalho.appendChild(celulaCabecalho);

        //Cria as células do corpo que informam a colocação do piloto em cada corrida
        var celula = document.createElement('td');
        celula.textContent = vetPosicoesPiloto[i] +"º colocação";
        linha.appendChild(celula);
    }

    //Anexa as linhas ao cabeçalho e ao corpo da tabela
    cabecalhoTabela.appendChild(linhaCabecalho);
    corpoTabela.appendChild(linha);

    //Anexa o cabeçalho e o corpo ao elemento table
    tabela.appendChild(cabecalhoTabela);
    tabela.appendChild(corpoTabela);

    //Anexa a tabela a div tabelaPilotos do html
    outTabelaPilotos.appendChild(tabela);

    //Anexa a imagem dos pilotos junto da tabela
    var imagemPiloto = document.createElement('img');
    imagemPiloto.src = "./imagens/imagens-pilotos/piloto" + indPesquisa + ".png";
    outImagem.appendChild(imagemPiloto);
}