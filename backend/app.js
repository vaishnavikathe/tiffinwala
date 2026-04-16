import express from "express";
import cors from "cors";
import Routes from "./routes/userRoutes.js";

const app = express();


app.use(cors());
app.use(express.json());

app.use("/api/user",Routes);
app.get("/", (req, res) => {
  res.send("Mess Management API running...");
});

export default app;