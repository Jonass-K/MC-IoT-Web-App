export class Score {
    readonly name: string
    readonly date: Date
    readonly time: number

    constructor(name: string, time: number, date: Date = new Date()) {
        this.name = name;
        this.date = date;
        this.time = time;
    }
}