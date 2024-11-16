function scoreCounter() {
    let score = 0;

    function increaseScore(points) {
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points) {
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore() {
        return score;
    }


    return{increaseScore, decreaseScore, getScore}; 

}

const myScore=  scoreCounter();

myScore.increaseScore(15); 
myScore.decreaseScore(10); 

console.log(`The current score is ${myScore.getScore()}`);  