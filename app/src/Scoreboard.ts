import { Score } from "./Score";
import { ScoreboardService } from "./ScoreboardService";

export class Scoreboard {

    service = new ScoreboardService();

    constructor() { }

    async refreshScoreboard() {
        const scores = await this.service.getScores()

        scores.forEach((score) => {            
            const scoreboard = document.getElementById("scoreboard")!;
            scoreboard.appendChild(this.scoreboardItem(score.name, score.time));
        }); 
    }

    async newScore(time: number) {
        let name = prompt("Your reached the goal. Please Enter your Name", "Anonym");
        await this.service.newScore(new Score(name, time));   

        this.refreshScoreboard();
    }

    private scoreboardItem(name: string, time: number) {
        const nameElem = document.createElement("h3")
        nameElem.innerHTML = name;
        
        const timeElem = document.createElement("h3");
        timeElem.innerHTML = time + " sek";
            
        const divElem = document.createElement("div");
        divElem.className = "scoreBoardItem"
        divElem.appendChild(nameElem);
        divElem.appendChild(timeElem);

        return divElem  
    }
}