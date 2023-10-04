"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const streak_1 = require("./streak");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
const port = 3000;
app.post('/api/streak', (req, res) => {
    const input = req.body.input;
    const streak = (0, streak_1.calculateStreak)(input);
    res.send({
        streak: streak
    });
});
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
