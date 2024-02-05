import express, {Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
    return res.json({
        msg: "Everything is working!"
    });
});

app.listen(port, () => {
    console.log(`Server has just started on http://localhost:${port}`);
});
