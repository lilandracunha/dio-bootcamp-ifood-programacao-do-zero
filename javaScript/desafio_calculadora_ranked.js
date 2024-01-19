// Calculadora de Partidas Rankeadas

function getResults(victory, defeat){
    let totalResults = victory - defeat;
        return totalResults
  };
  
function setRanking(totalResults){
    let playerRank = "";
  
    if (totalResults <= 10){
      playerRank = "Ferro"
    } else if (totalResults >= 11 && totalResults <= 20){
      playerRank = "Bronze"
    } else if (totalResults >= 21 && totalResults <= 50){
      playerRank = "Prata"
    } else if (totalResults >= 51 && totalResults <= 80){
      playerRank = "Ouro"
    } else if (totalResults >= 81 && totalResults <= 90){
      playerRank = "Diamante"
    } else if (totalResults >= 91 && totalResults <= 100){
      playerRank = "Lendário"
    } else if (totalResults >= 101){
      playerRank = "Imortal"
    };
        return playerRank
}
 
let victories = 80;
let defeats = 10;

let totalVictories = getResults(victories, defeats);
let ranking = setRanking(totalVictories);

console.log(`O jogador conseguiu ${victories} vitórias e ${defeats} derrotas, terminando a temporada com um saldo de ${totalVictories} (vitórias - derrotas).`)
console.log(`Foi alcançado o nível ${ranking}.`)