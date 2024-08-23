const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    if (atual < perguntas.length) {
        perguntaAtual = perguntas[atual];
        caixaPerguntas.textContent = perguntaAtual.enunciado;
        mostraAlternativas();
    } else {
        caixaPerguntas.textContent = "Fim do questionário!";
        caixaAlternativas.innerHTML = "";
        caixaResultado.style.display = "block";
        
    }
}

function mostraAlternativas() {
    caixaAlternativas.innerHTML = ""; // Limpar alternativas anteriores
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.classList.add("botao-alternativa"); // Adiciona a classe de estilização
        botaoAlternativa.addEventListener("click", () => {
            atual++;
            mostraPergunta();
        });
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

mostraPergunta();
