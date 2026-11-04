// ==========================================
// QUIZ - LENTES NO NOSSO DIA A DIA
// ==========================================


// LISTA DE PERGUNTAS

const perguntas = [

    {
        categoria: "INTRODUÇÃO",

        pergunta: "O que são lentes?",

        opcoes: [
            "Objetos que bloqueiam toda a luz",
            "Objetos transparentes que podem modificar a trajetória da luz",
            "Objetos que produzem eletricidade",
            "Objetos que transformam luz em som"
        ],

        correta: 1,

        explicacao:
            "As lentes são corpos transparentes que modificam a trajetória da luz por meio da refração."
    },


    {
        categoria: "FÍSICA",

        pergunta: "Qual é o nome do fenômeno que ocorre quando a luz passa de um meio para outro?",

        opcoes: [
            "Reflexão",
            "Combustão",
            "Refração",
            "Evaporação"
        ],

        correta: 2,

        explicacao:
            "A refração acontece quando a luz passa de um meio para outro e sua velocidade muda. Sua direção também pode mudar."
    },


    {
        categoria: "TIPOS DE LENTES",

        pergunta: "Qual lente é mais espessa no centro do que nas bordas?",

        opcoes: [
            "Lente divergente",
            "Lente convergente",
            "Lente opaca",
            "Lente plana"
        ],

        correta: 1,

        explicacao:
            "A lente convergente é mais espessa no centro e faz raios paralelos se aproximarem."
    },


    {
        categoria: "TIPOS DE LENTES",

        pergunta: "O que acontece quando raios paralelos atravessam uma lente divergente?",

        opcoes: [
            "Eles se afastam",
            "Eles desaparecem",
            "Eles se transformam em calor",
            "Eles ficam completamente imóveis"
        ],

        correta: 0,

        explicacao:
            "A lente divergente faz os raios paralelos se afastarem, como se viessem de um ponto chamado foco."
    },


    {
        categoria: "COTIDIANO",

        pergunta: "Qual é a principal função de uma lupa?",

        opcoes: [
            "Produzir energia",
            "Diminuir a iluminação",
            "Ampliar a imagem de objetos próximos",
            "Transformar luz em som"
        ],

        correta: 2,

        explicacao:
            "A lupa utiliza uma lente convergente para produzir uma imagem ampliada de objetos próximos."
    },


    {
        categoria: "VISÃO HUMANA",

        pergunta: "Qual estrutura do olho humano funciona como uma lente natural?",

        opcoes: [
            "Pálpebra",
            "Cristalino",
            "Cílio",
            "Sobrancelha"
        ],

        correta: 1,

        explicacao:
            "O cristalino é uma estrutura transparente que ajuda a focalizar a luz na retina."
    },


    {
        categoria: "TECNOLOGIA",

        pergunta: "Qual equipamento utiliza lentes para observar células?",

        opcoes: [
            "Rádio",
            "Televisão",
            "Microscópio",
            "Ventilador"
        ],

        correta: 2,

        explicacao:
            "O microscópio utiliza lentes para ampliar imagens de estruturas muito pequenas, como células."
    },


    {
        categoria: "ASTRONOMIA",

        pergunta: "Qual equipamento pode utilizar lentes para observar objetos distantes no espaço?",

        opcoes: [
            "Liquidificador",
            "Telescópio refrator",
            "Impressora",
            "Microfone"
        ],

        correta: 1,

        explicacao:
            "O telescópio refrator utiliza lentes para coletar e focalizar a luz de objetos distantes."
    },


    {
        categoria: "VISÃO HUMANA",

        pergunta: "Qual tipo de lente geralmente é utilizado para corrigir a miopia?",

        opcoes: [
            "Lente divergente",
            "Lente convergente",
            "Lente opaca",
            "Lente sem grau"
        ],

        correta: 0,

        explicacao:
            "A miopia geralmente é corrigida com lentes divergentes, que ajudam a focalizar a imagem na retina."
    },


    {
        categoria: "IMAGENS",

        pergunta: "O que caracteriza uma imagem real formada por uma lente?",

        opcoes: [
            "É formada pelo encontro dos próprios raios de luz",
            "É formada apenas por sombras",
            "Não depende da luz",
            "É sempre ampliada"
        ],

        correta: 0,

        explicacao:
            "Uma imagem real é formada pelo encontro dos próprios raios de luz e pode ser projetada em uma tela."
    },


    {
        categoria: "CÂMERAS",

        pergunta: "Qual é a função das lentes em uma câmera fotográfica?",

        opcoes: [
            "Produzir sons",
            "Impedir a entrada de luz",
            "Direcionar e focalizar a luz no sensor",
            "Aumentar a temperatura do aparelho"
        ],

        correta: 2,

        explicacao:
            "As lentes direcionam e focalizam a luz sobre o sensor ou filme, permitindo registrar fotografias."
    },


    {
        categoria: "VISÃO HUMANA",

        pergunta: "Como se chama o processo em que o cristalino muda de formato para ajustar o foco?",

        opcoes: [
            "Reflexão",
            "Acomodação visual",
            "Dispersão",
            "Absorção"
        ],

        correta: 1,

        explicacao:
            "A acomodação visual é o processo pelo qual o cristalino muda de formato para ajudar a focalizar objetos próximos e distantes."
    }

];


// VARIÁVEIS DO QUIZ

let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


// ELEMENTOS DO HTML

const contador = document.getElementById("quiz-contador");

const pontosElemento = document.getElementById("quiz-pontos");

const barra = document.getElementById("quiz-barra");

const categoria = document.getElementById("quiz-categoria");

const perguntaElemento = document.getElementById("quiz-pergunta");

const opcoesElemento = document.getElementById("quiz-opcoes");

const feedback = document.getElementById("quiz-feedback");

const botaoProximo = document.getElementById("quiz-proximo");

const quizCard = document.getElementById("quiz-card");

const quizFinal = document.getElementById("quiz-final");

const mensagemFinal = document.getElementById("quiz-mensagem");

const notaFinal = document.getElementById("quiz-nota");

const botaoReiniciar = document.getElementById("quiz-reiniciar");


// CARREGAR PERGUNTA

function carregarPergunta() {

    respondeu = false;

    const atual = perguntas[perguntaAtual];


    contador.textContent =
        `PERGUNTA ${perguntaAtual + 1} DE ${perguntas.length}`;


    pontosElemento.textContent =
        `★ ${pontos} pontos`;


    categoria.textContent = atual.categoria;


    perguntaElemento.textContent = atual.pergunta;


    feedback.textContent = "";


    botaoProximo.disabled = true;

    botaoProximo.textContent = "Próxima pergunta →";


    barra.style.width =
        `${(perguntaAtual / perguntas.length) * 100}%`;


    opcoesElemento.innerHTML = "";


    atual.opcoes.forEach(function(opcao, indice) {

        const botao = document.createElement("button");

        botao.className = "opcao";

        botao.textContent = opcao;


        botao.addEventListener("click", function() {

            verificarResposta(indice);

        });


        opcoesElemento.appendChild(botao);

    });

}


// VERIFICAR RESPOSTA

function verificarResposta(indiceEscolhido) {

    if (respondeu) {

        return;

    }


    respondeu = true;


    const atual = perguntas[perguntaAtual];


    const botoes =
        opcoesElemento.querySelectorAll(".opcao");


    botoes.forEach(function(botao, indice) {

        botao.disabled = true;


        if (indice === atual.correta) {

            botao.classList.add("correta");

        }


        if (
            indice === indiceEscolhido &&
            indice !== atual.correta
        ) {

            botao.classList.add("errada");

        }

    });


    if (indiceEscolhido === atual.correta) {

        pontos++;


        feedback.textContent =
            "🎉 Muito bem! Resposta correta! " +
            atual.explicacao;

    } else {

        feedback.textContent =
            "Não foi dessa vez! " +
            atual.explicacao;

    }


    pontosElemento.textContent =
        `★ ${pontos} pontos`;


    barra.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;


    botaoProximo.disabled = false;


    if (perguntaAtual === perguntas.length - 1) {

        botaoProximo.textContent = "Ver meu resultado →";

    }

}


// PRÓXIMA PERGUNTA

function proximaPergunta() {

    if (!respondeu) {

        return;

    }


    perguntaAtual++;


    if (perguntaAtual < perguntas.length) {

        carregarPergunta();

    } else {

        mostrarResultado();

    }

}


// MOSTRAR RESULTADO FINAL

function mostrarResultado() {

    quizCard.hidden = true;

    quizFinal.hidden = false;


    let mensagem = "";


    if (pontos === 12) {

        mensagem =
            "Incrível! Você acertou todas as perguntas! Você domina o assunto!";

    } else if (pontos >= 9) {

        mensagem =
            "Excelente! Você aprendeu muito sobre lentes e óptica!";

    } else if (pontos >= 6) {

        mensagem =
            "Muito bem! Você já conhece bastante sobre o assunto. Continue estudando!";

    } else {

        mensagem =
            "Continue aprendendo! Volte ao conteúdo e tente novamente.";

    }


    mensagemFinal.textContent = mensagem;


    notaFinal.textContent =
        `${pontos} / ${perguntas.length}`;


}


// REINICIAR QUIZ

function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    respondeu = false;


    quizCard.hidden = false;

    quizFinal.hidden = true;


    carregarPergunta();

}


// EVENTOS DOS BOTÕES DO QUIZ

botaoProximo.addEventListener("click", proximaPergunta);

botaoReiniciar.addEventListener("click", reiniciarQuiz);


// INICIAR QUIZ

carregarPergunta();


// ==========================================
// MITO OU VERDADE
// ==========================================


const afirmacoes = [

    {
        frase:
            "As lentes estão presentes em objetos utilizados no nosso cotidiano.",

        correta: true,

        explicacao:
            "Verdade! Encontramos lentes em óculos, câmeras, lupas e microscópios."
    },


    {
        frase:
            "A refração acontece quando a luz passa de um meio para outro.",

        correta: true,

        explicacao:
            "Verdade! A refração está relacionada à mudança da velocidade da luz ao passar entre meios."
    },


    {
        frase:
            "O cristalino é uma estrutura presente no olho humano.",

        correta: true,

        explicacao:
            "Verdade! O cristalino ajuda a focalizar a luz na retina."
    },


    {
        frase:
            "Todas as lentes possuem exatamente o mesmo formato e função.",

        correta: false,

        explicacao:
            "Mito! Existem diferentes formatos de lentes, com propriedades e funções diferentes."
    },


    {
        frase:
            "Microscópios podem utilizar lentes para ampliar imagens.",

        correta: true,

        explicacao:
            "Verdade! As lentes do microscópio permitem observar estruturas muito pequenas."
    },


    {
        frase:
            "As lentes divergentes fazem os raios paralelos se aproximarem.",

        correta: false,

        explicacao:
            "Mito! As lentes divergentes fazem os raios paralelos se afastarem."
    },


    {
        frase:
            "O cristalino participa do processo de acomodação visual.",

        correta: true,

        explicacao:
            "Verdade! Ele muda de formato para ajudar o olho a focalizar objetos em diferentes distâncias."
    },


    {
        frase:
            "A miopia geralmente é corrigida com lentes convergentes.",

        correta: false,

        explicacao:
            "Mito! A miopia geralmente é corrigida com lentes divergentes."
    }

];


// VARIÁVEIS DO DESAFIO

let mitoAtual = 0;

let respondeuMito = false;


// ELEMENTOS

const mitoPergunta = document.getElementById("mito-pergunta");

const mitoFeedback = document.getElementById("mito-feedback");

const botaoVerdade = document.getElementById("mito-verdade");

const botaoFalso = document.getElementById("mito-falso");

const botaoMitoProximo = document.getElementById("mito-proximo");


// CARREGAR AFIRMAÇÃO

function carregarMito() {

    respondeuMito = false;


    const atual = afirmacoes[mitoAtual];


    mitoPergunta.textContent = atual.frase;


    mitoFeedback.textContent = "";


    botaoVerdade.disabled = false;

    botaoFalso.disabled = false;


    botaoMitoProximo.hidden = true;

}


// RESPONDER MITO OU VERDADE

function responderMito(respostaEscolhida) {

    if (respondeuMito) {

        return;

    }


    respondeuMito = true;


    const atual = afirmacoes[mitoAtual];


    if (respostaEscolhida === atual.correta) {

        mitoFeedback.textContent =
            "🎉 Você acertou! " + atual.explicacao;

    } else {

        mitoFeedback.textContent =
            "Quase! " + atual.explicacao;

    }


    botaoVerdade.disabled = true;

    botaoFalso.disabled = true;


    botaoMitoProximo.hidden = false;


    if (mitoAtual === afirmacoes.length - 1) {

        botaoMitoProximo.textContent = "Recomeçar desafio ↻";

    } else {

        botaoMitoProximo.textContent = "Próxima afirmação →";

    }

}


// AVANÇAR AFIRMAÇÃO

function proximoMito() {

    if (!respondeuMito) {

        return;

    }


    mitoAtual++;


    if (mitoAtual >= afirmacoes.length) {

        mitoAtual = 0;

    }


    carregarMito();

}


// EVENTOS DOS BOTÕES

botaoVerdade.addEventListener("click", function() {

    responderMito(true);

});


botaoFalso.addEventListener("click", function() {

    responderMito(false);

});


botaoMitoProximo.addEventListener("click", proximoMito);


// INICIAR DESAFIO

carregarMito();
