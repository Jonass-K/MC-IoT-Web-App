import { Score } from "./Score";
import { ScoreboardService } from "./ScoreboardService";

export class Scoreboard {

    service = new ScoreboardService();

    constructor() { }

    async refreshScoreboard() {
        const scores = await this.service.getScores();
    
        const scoreboard = document.getElementById("scoreboard")!;
        while (scoreboard.childElementCount > 1) {
            scoreboard.removeChild(scoreboard.lastChild);
        }
        
        let rank = 0;
        scores.forEach((score) => {            
            scoreboard.appendChild(this.scoreboardItem(++rank, score.name, score.date , score.time));
        }); 
    }

    async newScore(time: number) {
        let name = prompt(`Your reached the goal in ${time} seconds. Please Enter your Name`, "Anonym");
        while (name.length > 14) { 
            name = prompt(`Name is to long. Please Enter a name with less than 15 characters`, "Anonym");
        }
        await this.service.newScore(new Score(name, time));   

        this.refreshScoreboard();
    }

    private scoreboardItem(rank: number, name: string, date: Date,  time: number) {        
        const rankElem = document.createElement("td")
        rankElem.innerHTML = this.pad(rank, 3);

        const nameElem = document.createElement("td")
        nameElem.innerHTML = name;

        const dateElem = document.createElement("td")
        dateElem.innerHTML = `${this.pad(date.getDay(), 2)}.${this.pad(date.getMonth(), 2)}.${date.getFullYear()}`;
        
        const timeElem = document.createElement("td");
        timeElem.innerHTML = time + " sek";
            
        const trElem = document.createElement("tr");
        trElem.className = "table-row"
        trElem.appendChild(rankElem);
        trElem.appendChild(nameElem);
        trElem.appendChild(dateElem);
        trElem.appendChild(timeElem);

        return trElem  
    }

    private pad(num: number, size: number) {
        let numF = num.toString();
        while (numF.length < size) numF = "0" + numF;
        return numF;
    }
}