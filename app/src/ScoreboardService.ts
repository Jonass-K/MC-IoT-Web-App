import { getFirestore, collection, addDoc, getDoc, getDocs, DocumentSnapshot, query, orderBy, limit, SnapshotOptions} from "firebase/firestore";
import { Score } from "./Score";

export class ScoreboardService {

    db = getFirestore();
    clction = collection(this.db, "scores").withConverter(converter)

    constructor() { }

    async getScores(): Promise<Score[]> {
        console.log("fetch scores");
        const q = query(this.clction, orderBy("time"), limit(5));
        const snapshot = await getDocs(q);

        let scores: Score[] = [];

        snapshot.forEach((doc) => {
            scores.push(doc.data());
        });
       
        return scores;
    }

    async newScore(score: Score) {
        console.log("set score");
        try {
            const docRef = await addDoc(this.clction, score);
            console.log("Document written with ID: ", docRef.id);

            const docSnap = await getDoc(docRef)
            return docSnap.data()

        } catch (e) {
            console.error("Error adding document: ", e);
            return null
        }
    }
}

const converter = {
    toFirestore: (score: Score) => {
        return {
            name: score.name,
            date: score.date,
            time: score.time
        };
    },
    fromFirestore: (snapshot: DocumentSnapshot, options: SnapshotOptions) => {
        const data = snapshot.data(options);
        return data ? new Score(data.name, data.time, data.date.toDate()) : null;
    }
};
