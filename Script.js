const perguntas = [

    {
        pergunta:
            "Qual lente é mais espessa no centro e faz os raios de luz se aproximarem?",

        opcoes: [
            {
                nome: "Lente convexa",
                desenho: "🔎"
            },

            {
                nome: "Lente côncava",
                desenho: "👓"
            },

            {
                nome: "Lente divergente",
                desenho: "↗️ ↖️"
            },

            {
                nome: "Espelho plano",
                desenho: "🪞"
            }
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual lente é mais fina no centro e faz os raios de luz se afastarem?",

        opcoes: [
            {
                nome: "Lente convexa",
                desenho: "🔍"
            },

            {
                nome: "Lente côncava",
                desenho: "👓"
            },

            {
                nome: "Lente convergente",
                desenho: "↘️ ↙️"
            },

            {
                nome: "Lupa",
                desenho: "🔎"
            }
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual objeto utiliza uma lente para ampliar a imagem de objetos pequenos?",

        opcoes: [
            {
                nome: "Lupa",
                desenho: "🔍"
            },

            {
                nome: "Espelho",
                desenho: "🪞"
            },

            {
                nome: "Lanterna",
                desenho: "🔦"
            },

            {
                nome: "Termômetro",
                desenho: "🌡️"
            }
        ],

        correta: 0
    },


    {
        pergunta:
            "Qual tipo de lente faz os raios luminosos se encontrarem em um ponto chamado foco?",

        opcoes: [
            {
                nome: "Lente divergente",
                desenho: "↗️ ↖️"
            },

            {
                nome: "Lente convergente",
                desenho: "↘️ ↙️"
            },

            {
                nome: "Espelho plano",
                desenho: "🪞"
            },

            {
                nome: "Lente côncava",
                desenho: "👓"
            }
        ],

        correta: 1
    },


    {
        pergunta:
            "Qual alternativa apresenta um uso comum de lentes no nosso dia a dia?",

        opcoes: [
            {
                nome: "Óculos e câmeras",
                desenho: "👓 📷"
            },

            {
                nome: "Somente panelas",
                desenho: "🍳"
            },

            {
                nome: "Somente alimentos",
                desenho: "🍎"
            },

            {
                nome: "Somente roupas",
                desenho: "👕"
            }
        ],

        correta: 0
    }

];


let perguntaAtual = 0;

let pontos = 0;

let respondeu = false;


function carregarPergunta() {

    respondeu = false;


    const pergunta =
        perguntas[perguntaAtual];


    document.getElementById(
        "pergunta"
    ).textContent =
        pergunta.pergunta;


    document.getElementById(
        "numero-pergunta"
    ).textContent =
        `Pergunta ${perguntaAtual + 1} de ${perguntas.length}`;


    const porcentagem =
        ((perguntaAtual + 1) /
            perguntas.length) * 100;


    document.getElementById(
        "barra-progresso"
    ).style.width =
        porcentagem + "%";


    const opcoes =
        document.getElementById("opcoes");


    opcoes.innerHTML = "";


    document.getElementById(
        "resultado"
    ).textContent = "";


    document.getElementById(
        "proxima"
    ).style.display = "none";


    pergunta.opcoes.forEach(
        (opcao, indice) => {

            const botao =
                document.createElement("button");


            botao.className = "opcao";


            botao.innerHTML = `
                <div style="
                    font-size: 38px;
                    margin-bottom: 8px;
                ">
                    ${opcao.desenho}
                </div>

                <strong>
                    ${opcao.nome}
                </strong>
            `;


            botao.onclick = function () {

                verificarResposta(
                    indice,
                    botao
                );

            };


            opcoes.appendChild(botao);

        }
    );

}


function verificarResposta(
    resposta,
    botao
) {

    if (respondeu) {
        return;
    }


    respondeu = true;


    const correta =
        perguntas[perguntaAtual].correta;


    const botoes =
        document.querySelectorAll(".opcao");


    botoes.forEach(
        item => {
            item.disabled = true;
        }
    );


    if (resposta === correta) {

        botao.classList.add("certa");


        pontos++;


        document.getElementById(
            "resultado"
        ).textContent =
            "🎉 Muito bem! Você acertou!";

    }

    else {

        botao.classList.add("errada");


        botoes[correta]
            .classList.add("certa");


        document.getElementById(
            "resultado"
        ).textContent =
            "💡 Quase! A resposta correta ficou destacada.";

    }


    document.getElementById(
        "proxima"
    ).style.display = "inline-block";

}


function proximaPergunta() {

    perguntaAtual++;


    if (
        perguntaAtual >=
        perguntas.length
    ) {

        mostrarResultado();

        return;
    }


    carregarPergunta();

}


function mostrarResultado() {

    document.getElementById(
        "pergunta"
    ).textContent =
        "🎉 Quiz finalizado!";


    document.getElementById(
        "opcoes"
    ).innerHTML = "";


    document.getElementById(
        "numero-pergunta"
    ).textContent =
        "Resultado";


    document.getElementById(
        "barra-progresso"
    ).style.width = "100%";


    let mensagem;


    if (pontos === 5) {

        mensagem =
            "🏆 Perfeito! Você acertou todas!";

    }

    else if (pontos >= 3) {

        mensagem =
            "👏 Muito bem! Você foi muito bem!";

    }

    else {

        mensagem =
            "💜 Continue estudando! Você consegue melhorar!";

    }


    document.getElementById(
        "resultado"
    ).innerHTML = `
        <div style="
            font-size: 22px;
            margin-bottom: 10px;
        ">
            ${mensagem}
        </div>

        <div>
            Você acertou
            <strong>${pontos}</strong>
            de
            <strong>${perguntas.length}</strong>
            perguntas.
        </div>
    `;


    const botao =
        document.getElementById("proxima");


    botao.textContent =
        "🔄 Refazer quiz";


    botao.style.display =
        "inline-block";


    botao.onclick =
        reiniciarQuiz;

}


function reiniciarQuiz() {

    perguntaAtual = 0;

    pontos = 0;

    carregarPergunta();

}


carregarPergunta();
