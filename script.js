const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaRseltado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado:"O termo sustentabilidade emerge das discussões sobre a necessidade de preservação do meio ambiente. Nesse sentido, ele está atrelado à/ao:",
        alternativas: [
            "Delimitação de pequenas zonas indicadas para a preservação do espaço natural.",
            "Equilíbrio entre a preservação ambiental e o suprimento das necessidades humanas."
          
        ]
    },
    {
    enunciado: "A sustentabilidade é formada por um tripé composto por três grandes esferas:",
    alternativas: [
        "Social, ambiental e econômica.",
        "Local, cultural e socioambiental."
    }    
 ];

 let atual = 0;
 let pertuntaAtual;

 function mostraPergunta(){
    perguntaAtual = perguntas[Atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado; 
 }
 mostraPergunta();




