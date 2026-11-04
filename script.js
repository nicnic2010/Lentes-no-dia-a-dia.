// ===============================
// QUIZ: LENTES NO NOSSO DIA A DIA
// ===============================

const perguntas = [
    {
        pergunta: "1. O que são lentes?",
        opcoes: [
            "Objetos que bloqueiam toda a luz",
            "Objetos transparentes que podem modificar a direção da luz",
            "Objetos que produzem eletricidade",
            "Objetos feitos somente de plástico"
        ],
        correta: 1,
        explicacao: "As lentes são objetos transparentes que modificam a direção da luz por meio da refração."
    },
    {
        pergunta: "2. Qual fenômeno acontece quando a luz passa de um meio para outro?",
        opcoes: [
            "Evaporação",
            "Combustão",
            "Refração",
            "Congelamento"
        ],
        correta: 2,
        explicacao: "A refração acontece quando a luz passa de um meio para outro e sua velocidade muda, podendo também mudar de direção."
    },
    {
        pergunta: "3. Qual lente é mais espessa no centro do que nas bordas?",
        opcoes: [
            "Lente convergente",
            "Lente divergente",
            "Lente opaca",
            "Lente plana"
        ],
        correta: 0,
        explicacao: "A lente convergente é geralmente mais espessa no centro e faz raios de luz paralelos se aproximarem."
    },
    {
        pergunta: "4. Qual é a principal função de uma lupa?",
        opcoes: [
            "Produzir calor",
            "Ampliar a imagem de objetos próximos",
            "Diminuir a iluminação",
            "Transformar luz em som"
        ],
        correta: 1,
        explicacao: "A lupa utiliza uma lente convergente para produzir uma imagem ampliada de objetos próximos."
    },
    {
        pergunta: "5. Qual estrutura do olho funciona como uma lente?",
        opcoes: [
            "Pálpebra",
            "Cílio",
            "Cristalino",
            "Sobrancelha"
        ],
        correta: 2,
        explicacao: "O cristalino é uma estrutura transparente do olho que ajuda a focalizar a luz na retina."
    },
    {
        pergunta: "6. Qual equipamento utiliza lentes para observar células?",
        opcoes: [
            "Televisão",
            "Microscópio",
            "Rádio",
            "Ventilador"
        ],
        correta: 1,
        explicacao: "O microscópio utiliza lentes para ampliar estruturas muito pequenas, como células."
    },
    {
        pergunta: "7. Qual equipamento pode utilizar lentes para observar planetas?",
        opcoes: [
            "Liquidificador",
            "Impressora",
            "Telescópio refrator",
            "Microfone"
        ],
        correta: 2,
        explicacao: "O telescópio refrator utiliza lentes para coletar e focalizar a luz de objetos distantes."
    },
    {
        pergunta: "8. Como as lentes ajudam as câmeras?",
        opcoes: [
            "Direcionam e focalizam a luz para registrar imagens",
            "Transformam imagens em música",
            "Impedem a entrada de qualquer luz",
            "Aumentam o peso da câmera"
        ],
        correta: 0,
        explicacao: "As lentes direcionam a luz para o sensor ou filme da câmera, permitindo registrar fotografias."
    },
    {
        pergunta: "9. Qual lente é mais fina no centro do que nas bordas?",
        opcoes: [
            "Lente convergente",
            "Lente divergente",
            "Lente de aumento",
            "Lente luminosa"
        ],
        correta: 1,
        explicacao: "A lente divergente é mais fina no centro e faz raios paralelos se afastarem."
    },
    {
        pergunta: "10. Qual problema de visão costuma ser corrigido com lentes divergentes?",
        opcoes: [
            "Miopia",
            "Hipermetropia",
            "Nenhum problema de visão",
            "Daltonismo"
        ],
        correta: 0,
        explicacao: "A miopia geralmente é corrigida com lentes divergentes, que ajudam a focalizar a imagem corretamente na retina."
    }
];

let perguntaAtual = 0;
let pontos = 0;
let respondeu = false;

const numeroPergunta = document.getElementById("numero-pergunta");
const pontuacaoAtual = document.getElementById("pontuacao-atual");
const barraProgresso = document.getElementById("barra-progresso");
const perguntaElemento = document.getElementById("pergunta");
const opcoesElemento = document.getElementById("opcoes");
const feedbackElemento = document.getElementById("feedback");
const botaoProxima = document.getElementById("proxima");
const resultadoElemento = document.getElementById("resultado");
const botaoReiniciar = document.getElementById("reiniciar");

function carregarPergunta() {
    respondeu = false;

    const pergunta = perguntas[perguntaAtual];

    numeroPergunta.textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;

    pontuacaoAtual.textContent = `Pontos: ${pontos}`;

    barraProgresso.style.width =
        `${(perguntaAtual / perguntas.length) * 100}%`;

    perguntaElemento.textContent = pergunta.pergunta;

    opcoesElemento.innerHTML = "";
    feedbackElemento.textContent = "";

    botaoProxima.disabled = true;
    botaoProxima.hidden = false;
    resultadoElemento.textContent = "";
    botaoReiniciar.hidden = true;

    pergunta.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button");

        botao.className = "opcao";
        botao.textContent = opcao;

        botao.addEventListener("click", () => {
            verificarResposta(indice);
        });

        opcoesElemento.appendChild(botao);
    });
}

function verificarResposta(indiceEscolhido) {
    if (respondeu) return;

    respondeu = true;

    const pergunta = perguntas[perguntaAtual];
    const botoes = opcoesElemento.querySelectorAll(".opcao");

    botoes.forEach((botao, indice) => {
        botao.disabled = true;

        if (indice === pergunta.correta) {
            botao.classList.add("correta");
        }

        if (
            indice === indiceEscolhido &&
            indice !== pergunta.correta
        ) {
            botao.classList.add("errada");
        }
    });

    if (indiceEscolhido === pergunta.correta) {
        pontos++;

        feedbackElemento.textContent =
            "🎉 Resposta correta! " + pergunta.explicacao;
    } else {
        feedbackElemento.textContent =
            "Não foi dessa vez! " + pergunta.explicacao;
    }

    pontuacaoAtual.textContent = `Pontos: ${pontos}`;

    barraProgresso.style.width =
        `${((perguntaAtual + 1) / perguntas.length) * 100}%`;

    botaoProxima.disabled = false;

    if (perguntaAtual === perguntas.length - 1) {
        botaoProxima.textContent = "Ver resultado";
    } else {
        botaoProxima.textContent = "Próxima pergunta";
    }
}

function proximaPergunta() {
    if (!respondeu) return;

    perguntaAtual++;

    if (perguntaAtual < perguntas.length) {
        carregarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    perguntaElemento.textContent = "Quiz finalizado!";
    opcoesElemento.innerHTML = "";
    feedbackElemento.textContent = "";

    numeroPergunta.textContent = "Resultado final";

    barraProgresso.style.width = "100%";

    botaoProxima.hidden = true;
    botaoReiniciar.hidden = false;

    let mensagem = "";

    if (pontos === 10) {
        mensagem = "Incrível! Você acertou todas as perguntas! 🏆";
    } else if (pontos >= 7) {
        mensagem = "Muito bem! Você aprendeu bastante sobre lentes! 💜";
    } else if (pontos >= 4) {
        mensagem = "Bom trabalho! Continue estudando para aprender ainda mais!";
    } else {
        mensagem = "Não desanime! Volte ao conteúdo e tente novamente.";
    }

    resultadoElemento.textContent =
        `Você acertou ${pontos} de ${perguntas.length} perguntas. ${mensagem}`;
}

function reiniciarQuiz() {
    perguntaAtual = 0;
    pontos = 0;
    respondeu = false;

    botaoProxima.textContent = "Próxima pergunta";

    carregarPergunta();
}


// ===============================
// DESAFIO: MITO OU VERDADE?
// ===============================

const afirmacoes = [
    {
        frase: "As lentes estão presentes em objetos utilizados no nosso cotidiano.",
        correta: true,
        explicacao: "Verdade! Encontramos lentes em óculos, câmeras, lupas e microscópios."
    },
    {
        frase: "A refração acontece quando a luz passa de um meio para outro.",
        correta: true,
        explicacao: "Verdade! A refração é um fenômeno relacionado à mudança da velocidade da luz ao passar entre meios."
    },
    {
        frase: "O cristalino é uma estrutura presente no olho humano.",
        correta: true,
        explicacao: "Verdade! Ele ajuda a focalizar a luz na retina."
    },
    {
        frase: "Todas as lentes possuem exatamente o mesmo formato e função.",
        correta: false,
        explicacao: "Mito! Existem diferentes formatos de lentes, com propriedades e funções diferentes."
    },
    {
        frase: "Microscópios podem utilizar lentes para ampliar imagens.",
        correta: true,
        explicacao: "Verdade! As lentes do microscópio permitem observar estruturas muito pequenas."
    },
    {
        frase: "As lentes divergentes fazem os raios paralelos de luz se aproximarem.",
        correta: false,
        explicacao: "Mito! As lentes divergentes fazem os raios paralelos se afastarem."
    }
];

let mitoAtual = 0;
let respondeuMito = false;

const fraseMito = document.getElementById("frase-mito");
const respostaMito = document.getElementById("resposta-mito");
const proximoMito = document.getElementById("proximo-mito");
const botoesMito = document.querySelectorAll(".botoes-mito button");

function carregarMito() {
    respondeuMito = false;

    fraseMito.textContent = afirmacoes[mitoAtual].frase;
    respostaMito.textContent = "";

    proximoMito.hidden = true;

    botoesMito.forEach(botao => {
        botao.disabled = false;
    });
}

function responderMito(respostaEscolhida) {
    if (respondeuMito) return;

    respondeuMito = true;

    const afirmacao = afirmacoes[mitoAtual];

    if (respostaEscolhida === afirmacao.correta) {
        respostaMito.textContent =
            "🎉 Você acertou! " + afirmacao.explicacao;
    } else {
        respostaMito.textContent =
            "Quase! " + afirmacao.explicacao;
    }

    botoesMito.forEach(botao => {
        botao.disabled = true;
    });

    if (mitoAtual === afirmacoes.length - 1) {
        proximoMito.textContent = "Recomeçar desafio";
    } else {
        proximoMito.textContent = "Próxima afirmação";
    }

    proximoMito.hidden = false;
}

function proximoMito() {
    if (!respondeuMito) return;

    mitoAtual++;

    if (mitoAtual >= afirmacoes.length) {
        mitoAtual = 0;
    }

    carregarMito();
}


// ===============================
// INICIAR AS ATIVIDADES
// ===============================

carregarPergunta();
carregarMito();
