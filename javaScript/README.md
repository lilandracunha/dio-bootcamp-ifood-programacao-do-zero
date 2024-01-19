## Aprimorando a Lógica de Programação com Desafios

<br>
<p align = "justify">O bootcamp Potência Tech iFood - Programação do Zero traz desde conceitos introdutórios, como a definição de algoritmos e variáveis, até a apresentação de estruturas de repetição e implementação de funções/métodos. O objetivo do programa é fomentar a base da lógica de programação sem aprofundar-se em uma linguagem específica, porém utilizando o JavaScript para aplicação prática dos conceitos abordados.
  
<p align = "justify">Durante o bootcamp são propostos cinco desafios de código e três desafios de projeto. A seguir estão descritos os detalhes de cada um deles:
<br> 


### Desafios de Código
Os desafios de código possuem definições que devem ser seguidas para que não sejam retornados erros, desta forma, é preciso criar os algoritmos exatamente como solicitado no enunciado.
#### :heavy_check_mark: 1. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafioCodigo1_manipulando_variaveis.js">Manipulando Variáveis com JavaScript</a>
  <p align = "justify"><b>Descrição:</b> Você é um jovem herói que embarca em uma jornada épica para derrotar o temido dragão que aterroriza o reino. No entanto, você precisa atravessar uma floresta perigosa para chegar à caverna do dragão. Cada passo é crucial, e sua jornada será determinada pela lógica afiada que você possuir. <b>Tarefa</b>: Escreva um algoritmo que simule a jornada do herói pela floresta. O herói começa em uma posição inicial e deve dar uma série de passos para atravessar a floresta até a caverna do dragão.
  <p align = "justify"><b>Entrada:</b> A posição inicial do herói na floresta (um número inteiro); o número total de passos que o herói deve dar (um número inteiro).
  <p align = "justify"><b>Saída:</b> Imprima a posição final do herói após dar a quantidade de passos especificada.


#### :heavy_check_mark: 2. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafioCodigo2_dominando_operadores.js">Dominando Operadores com JavaScript</a>
  <p align = "justify"><b>Descrição:</b> Você é um herói em um mundo mágico repleto de monstros e desafios. Sua missão agora é enfrentar inimigos e ganhar pontos de experiência (XP) para se tornar mais forte. A cada vitória, você ganha XP e se aproxima de se tornar um lendário campeão. <b>Tarefa</b>: Escreva um programa simples que simule o ganho de XP após derrotar um monstro. O programa deve calcular e exibir a quantidade de XP ganhos com base no nível do monstro e na dificuldade da batalha.
<p align = "justify"><b>-> Cálculo do XP</b>: Para calcular a quantidade de XP ganho, o programa precisa considerar o nível do monstro e a dificuldade da batalha. A fórmula num1 * num2 * 100 é usada para calcular essa quantidade com base nos valores fornecidos.
<br>
<p align = "justify"><b>-> Explicação</b>: <i>num1</i>: Este é o nível do monstro; quanto maior o nível do monstro, mais XP você ganhará ao derrotá-lo, portanto, multiplicar o nível do monstro por um valor maior ajudará a refletir o aumento da recompensa de XP para monstros mais poderosos. <i>num2</i>: Este é o valor da dificuldade da batalha, variando de 1 a 100; quanto maior a dificuldade da batalha, mais XP você deve ganhar para enfrentar um desafio maior; multiplicar pela dificuldade ajuda a ajustar a recompensa de XP com base na intensidade da batalha. <i>100</i>: Este é o multiplicador constante que determina a escala geral de recompensa de XP; multiplicar pelo nível do monstro e pela dificuldade aumenta a recompensa em 100 vezes o valor do nível e da dificuldade.
  <p align = "justify"><b>Entrada:</b> O nível do monstro (um número inteiro); a dificuldade da batalha, representada por um valor de 1 a 100 (um número inteiro).
  <p align = "justify"><b>Saída:</b> Imprima a quantidade de XP ganha após a batalha.


#### :heavy_check_mark: 3. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafioCodigo3_explorando_condicionais.js">Explorando Condicionais com JavaScript</a>
  <p align = "justify"><b>Descrição:</b> No mundo dos jogos Pokémon, os treinadores começam sua jornada escolhendo um dos três Pokémons iniciais: Bulbasaur, Charmander e Pikachu <i>(?)</i>. Cada treinador escolhe um dos quatro pokémons. Seu desafio é criar uma solução que permita ao jogador escolher um dos Pokémons iniciais e exibir uma mensagem de boas-vindas e o Pokémon escolhido.
  <p align = "justify"><b>Entrada:</b> Você receberá um número inteiro que representa a escolha do treinador: 1 para Bulbasaur, 2 para Charmander, 4 Pikachu e 5 para Mewtwo.
  <p align = "justify"><b>Saída:</b> A saída deve ser uma mensagem de boas-vindas que inclua o nome do Pokémon escolhido.


#### :heavy_check_mark: 4. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafioCodigo4_praticando_repeticao.js">Praticando Laços de Repetição com JavaScript</a>
  <p align = "justify"><b>Descrição:</b> Sua missão é vasculhar as salas da masmorra em busca de recompensas lendárias e desafios perigosos. Cada sala pode conter monstros formidáveis, tesouros preciosos ou ambos. Use suas habilidades estratégicas para enfrentar as ameaças e coletar os tesouros! <b>Tarefa</b>: Escreva um programa que simule sua jornada heróica pela masmorra. O programa deve percorrer cada sala e verificar se há tesouros ou monstros. Se você encontrar um tesouro, colecionará a recompensa. Se encontrar um monstro, terá que derrotá-lo para continuar.
<p align = "justify"><b>Atenção</b>: Em nossa resolução utilizamos a função.includes() do JavaScript para verificar se um número (representando a sala atual) está presente nos arrays salasComTesouro e salasComMonstro.
  <p align = "justify"><b>Entrada:</b> O número total de salas no dungeon (um número inteiro).
  <p align = "justify"><b>Saída:</b> Sempre que encontrar um tesouro, imprima " Tesouro na sala X!"; sempre que encontrar um monstro, imprima "Monstro na sala X!".


#### :heavy_check_mark: 5. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafioCodigo5_dominando_funcoes.js">Dominando Funções com JavaScript</a>
  <p align = "justify"><b>Descrição:</b> Você é um mestre construtor em um mundo de blocos e tem a tarefa de gerar biomas em diferentes regiões do mundo. Cada bioma tem características únicas, como tipos de solo, vegetação e clima. <b>Tarefa</b>: Sua tarefa é coletar minérios enquanto ataca uma rocha com sua picareta. Use loops e lógica de programação para representar cada golpe na rocha e determinar qual minério foi obtido.
  <p align = "justify"><b>Entrada:</b> O programa irá solicitar que você digite um número inteiro positivo representando a quantidade de golpes que você deseja dar com a picareta.
  <p align = "justify"><b>Saída:</b> Para cada golpe que você der, o programa exibirá uma mensagem indicando o resultado do golpe. Será mostrado o número do golpe e o minério obtido, que pode ser 1: Carvao, 2: Ferro, 3: Diamante e 4: Pedra.
<br><br>

  
### Desafios de Projeto
#### :heavy_check_mark: 1. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafio_classificador_heroi.js">Classificador de Nível de Herói</a>
  <p align = "justify"><b>Descrição:</b> Para este desafio serão utilizados os conceitos de variáveis, operadores, laços de repetição e estruturas de decisões. 
Deve ser criada uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois será utilizada uma estrutura de decisão para apresentar uma das opções a seguir: 

  - Se XP for menor do que 1000 = Ferro
  - Se XP for entre 1001 e 2000 = Bronze
  - Se XP for entre 2001 e 5000 = Prata
  - Se XP for entre 5001 e 7000 = Ouro
  - Se XP for entre 7001 e 8000 = Platina
  - Se XP for entre 8001 e 9000 = Ascendente
  - Se XP for entre 9001 e 10000 = Imortal
  - Se XP for maior ou igual a 10001 = Radiante

A saída deve apresentar uma mensagem contendo as informações "O herói de nome <b>{nome}</b> está no nível de <b>{nivel}</b>"

  
#### :heavy_check_mark: 2. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafio_calculadora_ranked.js">Calculadora de Partidas Rankeadas</a>
  <p align = "justify"><b>Descrição:</b> Para este desafio serão utilizados os conceitos de variáveis, operadores, laços de repetição, estruturas de decisões e funções. 
Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador; depois disso, retorne o resultado para uma variável. O saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas):

  - Se vitórias for menor do que 10 = Ferro
  - Se vitórias for entre 11 e 20 = Bronze
  - Se vitórias for entre 21 e 50 = Prata
  - Se vitórias for entre 51 e 80 = Ouro
  - Se vitórias for entre 81 e 90 = Diamante
  - Se vitórias for entre 91 e 100= Lendário
  - Se vitórias for maior ou igual a 101 = Imortal

A saída deve apresentar uma mensagem contendo as informações "O Herói tem de saldo de <b>{saldoVitorias}</b> está no nível de <b>{nivel}</b>"


#### :heavy_check_mark: 3. <a href = "https://github.com/lilandracunha/dio-bootcamp-ifood-programacao-do-zero/blob/main/javaScript/desafio_classes_jogo.js">Escrevendo as Classes de um Jogo</a>
  <p align = "justify"><b>Descrição:</b> Para este desafio serão utilizados os conceitos de variáveis, operadores, laços de repetição, estruturas de decisões, funções e classes e objetos. 
Crie uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:
    
  - Nome
  - Idade
  - Tipo (ex: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:
    
  - Exibir a mensagem: "O {tipo} atacou usando {ataque}"
  - {tipo} deve ser concatenado o tipo que está na propriedade da classe
  - {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

| Tipo | Ataque |
| :---------- | :--------- |
| se mago | no ataque exibir (usou magia) |
| se guerreiro | no ataque exibir (usou espada) |
| se monge | no ataque exibir (usou artes marciais) |
| se ninja | no ataque exibir (usou shuriken) | 

A saída deve apresentar uma mensagem contendo as informações "O {tipo} atacou usando {ataque}" (ex: O mago atacou usando magia).
