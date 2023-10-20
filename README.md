

<p> <h1 align="center">Criando um jogo da memória com Emojis</h1></p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/83fe2f7c-594c-4f45-b019-26cba851a12b">
</p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/6854c285-543c-4ab5-bfc3-c02a20bac9fc">
</p>


<p align="center">Seja redirecionado à página do 
<a href="https://jogo-do-detona-stitch-com-javascript.suellensouza.repl.co/" target="_blank">projeto</a></p>



---

Neste projeto, estamos diante de um jogo de memória com o desafio de encontrar pares de cartas que possuam emojis correspondentes. A organização do projeto abrange diversos arquivos: um arquivo HTML, dois arquivos CSS (reset.css e main.css) e um arquivo JavaScript (engine.js). Através dessa estrutura, os aprendizados incluem a manipulação do Document Object Model (DOM), o uso do JavaScript para funcionalidade interativa, o estilo das páginas com CSS, e a construção da estrutura do site através do HTML. Abaixo segue a explicação do que foi feito em cada etapa do projeto.


1. **Arquivo HTML (index.html):**
   - O arquivo HTML é o ponto de partida de qualquer site ou aplicação web. Ele define a estrutura da página, incluindo a estrutura do documento, a linguagem (português do Brasil), a metainformação, o título da página e as ligações para os arquivos CSS e JavaScript.
   - O arquivo HTML define a estrutura da página usando elementos HTML, como `<html>`, `<head>`, `<body>`, `<div>`, `<h2>`, e `<button>`. Ele também utiliza atributos, como `class` e `onclick`, para adicionar funcionalidade e estilo.
   - E aprendemos como criar a estrutura básica de uma página web, incorporar folhas de estilo e scripts, bem como lidar com elementos HTML e atributos para interatividade.

2. **Arquivo CSS (reset.css):**
   - O arquivo reset.css é usado para zerar estilos padrão de navegadores, garantindo que a página tenha um estilo consistente em diferentes navegadores. Isso é feito removendo margens, preenchimentos e outros estilos padrão de elementos HTML.
   - No arquivo reset.css, tem a definição de estilos gerais, como remoção de margens e preenchimentos (`margin: 0; padding: 0`), a definição de uma fonte padrão (`font-family: monospace`), entre outros.
   

3. **Arquivo CSS (main.css):**
   - O arquivo main.css é usado para estilizar a página e os elementos do jogo. Ele define regras de estilo para o corpo da página, a classe `.container`, o título (`<h2>`), os botões, a área do jogo e os cartões.
   - O arquivo main.css também inclui regras de estilo para tornar o jogo responsivo, adaptando-se a diferentes tamanhos de tela com media queries.
   - O CSS estiliza uma página web, cria layouts responsivos e aplica estilos a elementos HTML usando seletores, propriedades e valores CSS.

4. **Arquivo JavaScript (engine.js):**
   - O arquivo `engine.js` contém a lógica do jogo da memória, que é uma parte crítica do projeto. Segue o detalhe da  estrutura desse arquivo:

     - **Definição dos Emojis:**
       - No início do arquivo, há uma constante chamada `emojis`, que é uma array que contém os emojis usados no jogo. Cada emoji é duplicado na array para que haja um par correspondente para cada emoji. Essa array é usada para criar as cartas do jogo e embaralhá-las.

```javascript
const emojis = [
  "🐱", "🐱",
  "🍎", "🍎",
  "🌍", "🌍",
  "🐶", "🐶",
  "🐵", "🐵",
  "⚽️", "⚽️",
  "👨‍🎓", "👨‍🎓",
  "💸", "💸"
];
```

    - **Variáveis:**
      - Logo abaixo da definição de `emojis`, duas variáveis são declaradas. `openCards` é uma array que será usada para rastrear as cartas abertas pelo jogador. Inicialmente, está vazia. `shuffleEmojis` é uma array que será usada para embaralhar os emojis antes de criar as cartas do jogo.

```javascript
let openCards = [];
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
```

    - **Criação de Cartas Dinamicamente:**
      - O próximo bloco de código é um loop `for` que cria as cartas do jogo dinamicamente. Ele itera sobre a array `emojis` e, para cada emoji, cria um elemento `<div>` com a classe `item`. O emoji é adicionado como conteúdo dentro do elemento `<div>`, e um evento de clique (`onclick`) é associado a cada carta, chamando a função `handleClick` quando a carta é clicada. As cartas criadas são anexadas à div com a classe `game`.

```javascript
for (let i = 0; i < emojis.length; i++) {
  let box = document.createElement("div");
  box.className = "item";
  box.innerHTML = shuffleEmojis[i];
  box.onclick = handleClick;
  document.querySelector(".game").appendChild(box);
}
```

    - **Função `handleClick`:**
      - A função `handleClick` é chamada quando um jogador clica em uma carta. Ela começa verificando se o jogador já abriu duas cartas. Se não, a carta clicada é marcada como "aberta" (classe `boxOpen`) e adicionada à array `openCards`. Se o jogador já abriu duas cartas, a função `checkMatch` é chamada após um breve atraso para verificar se as duas cartas correspondem.

```javascript
function handleClick() {
  if (openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
  }

  if (openCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
```

    - **Função `checkMatch`:**
      - A função `checkMatch` é chamada para verificar se as duas cartas abertas correspondem. Ela compara o conteúdo das duas cartas (os emojis) para determinar se são iguais. Se as cartas forem iguais, as classes `boxMatch` são adicionadas a ambas as cartas para indicar que foram encontradas. Se as cartas não forem iguais, a classe `boxOpen` é removida de ambas as cartas, fechando-as novamente.
      - A função também verifica se o jogador encontrou todos os pares de cartas. Se o número de cartas com a classe `boxMatch` for igual ao número total de emojis, o jogador venceu o jogo.

```javascript
function checkMatch() {
  if (openCards[0].innerHTML === openCards[1].innerHTML)

 {
    openCards[0].classList add("boxMatch");
    openCards[1].classList.add("boxMatch");
  } else {
    openCards[0].classList.remove("boxOpen");
    openCards[1].classList.remove("boxOpen");
  }

  openCards = [];

  if (document.querySelectorAll(".boxMatch").length === emojis.length) {
    alert("Você venceu !");
  }
}
```

No geral, o arquivo `engine.js` é responsável por criar as cartas do jogo, lidar com cliques do jogador, verificar correspondências entre cartas e determinar quando o jogador venceu o jogo. É um exemplo prático de como o JavaScript pode ser usado para criar jogos simples e interativos em uma página web. 




###

## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://camo.githubusercontent.com/ee5225ba7c4338f1a1c10121ec32c396e1a4a2f5b0b58b6afd6d5c56ff5d6196/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2d776f72646d61726b2e737667" alt="firebase" width="40" height="40"/> </a>

###

#### Aula  administrada pelo mentor Felipe Aguiar / Tech Lead da DIO
#### Ferramentas utilizadas: 

https://cssgradient.io/
https://coolors.co/palettes/trending
https://getemoji.com/assets/#activities

## Curso administrado pela Dio.me

 [DIO](https://www.dio.me/)

