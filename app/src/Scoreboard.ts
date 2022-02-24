import { ScoreboardService } from "./ScoreboardService";

export class Scoreboard {

    service = new ScoreboardService();

    constructor() { }

    async refreshScoreboard() {
        const scores = await this.service.getScores()

        scores.forEach((score) => {
            
            
            const nameTag = document.createElement("h3");
            const name = document.createTextNode(score.name);
            nameTag.appendChild(name);

            const timeTag = document.createElement("h3");
            const time = document.createTextNode(score.time + " min");
            timeTag.appendChild(time);
            
            const divTag = document.createElement("div");
            divTag.className = "scoreBoardItem"
            divTag.appendChild(nameTag);
            divTag.appendChild(timeTag);

            var scoreboardElement = document.getElementById("scoreboard")!;
            scoreboardElement.appendChild(divTag);
        }); 
    }

    newScore() {

    }
}