import express, { Express, NextFunction, Request, Response } from 'express';
import 'dotenv/config'; // remember
import cors from 'cors';

const app: Express = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
    // console.log(`Request processed at ${process.pid}`);
    res.send('Express + TypeScript Server');
});

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err); // Log the error for debugging

    if (Math.floor(res.statusCode/100) === 4)
        res.status(res.statusCode).json({ message: err.message });
    else if(err.name === 'JsonWebTokenError' || err.message === 'Authorization Failed')
        res.status(401).json({message: 'Authorization Failed'});
    else
        res.status(500).json({message: "Internal Server Error"});
});
