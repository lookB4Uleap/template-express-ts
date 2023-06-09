import express from 'express';
import 'dotenv/config'; // remember
const app = express();
const port = process.env.PORT || 5000;
app.get('/', (req, res) => {
    res.send('Express + TypeScript Server');
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
