import express from "express";
import connectionToMongo from "./utils/connection.js";
import userRoute from "./routes/inbankRoute.js";
import cors from "cors";

const app = express();
const port = 3002;

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);

app.listen(port, () => {
  connectionToMongo();
  console.log(`Example app listening on port ${port}`);
});
