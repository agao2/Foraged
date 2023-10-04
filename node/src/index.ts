import express, { Request } from 'express';
import bodyParser from 'body-parser';
import { calculateStreak } from './streak';

const app = express();
app.use(bodyParser.json());
const port = 3000;

interface StreakRequest extends Request {
    body: {
        input: string
    }
}

app.post('/api/streak', (req: StreakRequest, res) => {
    const input = req.body.input;
    const streak = calculateStreak(input);
    res.send({
        streak: streak
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
