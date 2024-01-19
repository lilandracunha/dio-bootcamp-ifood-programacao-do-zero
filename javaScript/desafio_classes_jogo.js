// Escrevendo as Classes de Um Jogo

class hero{
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName;
        this.heroAge = heroAge;
        this.heroType = heroType
    }

    attack(){
        let attack;

        switch(this.heroType){
            case "mago":
                attack = "magia";
                break;
            case "guerreiro":
                attack = "espada";
                break;
            case "monge":
                attack = "artes marciais";
                break;
            case "ninja":
                attack = "shuriken";
                break
            default:
                this.heroType = "desconhecido"
                attack = "ataque secreto"
        }

        console.log(`O herói ${this.heroName}, do tipo ${this.heroType}, atacou usando ${attack}.`)
    }
}

// Testes
let mago = new hero("Vel'Koz", undefined, "mago")
let guerreiro = new hero("Aatrox", undefined, "guerreiro")
let monge = new hero("Lee Sin", 35, "monge")
let ninja = new hero("Kennen", 500, "ninja")
let desconhecido = new hero("Ivern", 100, "desconhecido")

mago.attack()
guerreiro.attack()
monge.attack()
ninja.attack()
desconhecido.attack()