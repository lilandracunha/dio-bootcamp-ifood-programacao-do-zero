// Classificador de Nível de Herói

let hero = "Zenyatta";
let xpReceived = 0;
let heroLvl = "";

if (xpReceived <= 1000){
  heroLvl = "Ferro"
} else if (xpReceived >= 1001 && xpReceived <= 2000){
  heroLvl = "Bronze"
} else if (xpReceived >= 2001 && xpReceived <= 5000){
  heroLvl = "Prata"
} else if (xpReceived >= 5001 && xpReceived <= 7000){
  heroLvl = "Ouro"
} else if (xpReceived >= 7001 && xpReceived <= 8000){
  heroLvl = "Platina"
} else if (xpReceived >= 8001 && xpReceived <= 9000){
  heroLvl = "Ascendente"
} else if (xpReceived >= 9001 && xpReceived <= 10000){
  heroLvl = "Imortal"
} else if (xpReceived >= 10001){
  heroLvl = "Radiante"
}

console.log(`${hero} recebeu ${xpReceived} pontos de experiência, chegando ao nível ${heroLvl}.`)