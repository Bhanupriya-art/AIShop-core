import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit: "50mb"}))

app.use('/api/v1/dalle', dalleRoutes);

app.get("/", (req, res) => {
    res.status(200).json({message: "Hello From Your AI"})
})

app.listen(8080, () => console.log("Server has started"))