/* criando cards dinamicamente */

const emojis = [
    "🐱",
    "🐱",
    "🍎",
    "🍎",
    "🌍",
    "🌍",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "⚽️",
    "⚽️",
    "👨‍🎓",
    "👨‍🎓",
    "💸",
    "💸",

  ];

let openCards = [];
/* criando a ordenação dos cards */
let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));

for (let i = 0; i < emojis.length; i++) {
    /* criando a tag div */
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
  }

  /* criando a função handleClick */

  function handleClick(){
    /* comparando as cartars */
    if(openCards.length<2){
        this.classList.add("boxOpen");
        /* toda vez clica no card salva no openCards */
        openCards.push(this);
    }
    /* se as cartas forem iguais */
    if(openCards.length == 2){
        setTimeout(checkMatch,500);
    }
    console.log(openCards);
  }
  /* chamando a função */
  function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
      openCards[0].classList.add("boxMatch");
      openCards[1].classList.add("boxMatch");
    } else {
      openCards[0].classList.remove("boxOpen");
      openCards[1].classList.remove("boxOpen");
    }
  /* resetando os cards */
    openCards = [];
  
    if (document.querySelectorAll(".boxMatch").length === emojis.length) {
      alert("Você venceu !");
    }
  }
  
  