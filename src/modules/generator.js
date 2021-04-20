const food = [
    "../images/bruschetta.png",
    "../images/chicken.png",
    "../images/lasagna.png",
    "../images/pho.png",
    "../images/pizza.png",
    "../images/quiche.png",
    "../images/risotto.png",
    "../images/spaghetti.png",
    "../images/steak.png",
    "../images/sushi.png",
    ];
    
    export default class LunchGenerator {
        constructor() {
            this.randomizeLunches(); 
        }
        randomizeLunches() {
                let i, j, k;
                  for (i = food.length -1; i > 0; i--) {
                    j = Math.floor(Math.random() * i)
                    k = food[i]
                    food[i] = food[j]
                    food[j] = k
                }
        }
        showResult() { 
          document.getElementById('button').addEventListener('click', () => {
            this.randomizeLunches();
            document.getElementById('food').src = food[0].img;
          });
        }
    }


export const lunch = new LunchGenerator();