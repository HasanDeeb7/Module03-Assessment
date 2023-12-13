import { sequelize } from "./config.js";
import cors from "cors";
import express, { urlencoded } from "express";
import "dotenv/config";
import articleRouter from "./routes/articleRoutes.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(urlencoded({ extended: true }));
app.use("/public/images", express.static("public/images"));
app.use("/articles", articleRouter);

sequelize.sync();

app.listen(4001, () => {
  console.log(`Listening on port 4000`);
});
