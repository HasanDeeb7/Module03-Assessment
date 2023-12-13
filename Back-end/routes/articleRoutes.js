import express from "express";
import { upload } from "../middlewares/multer.js";
import {
  createArticle,
  deleteArticle,
  getArticles,
  getOneArticle,
  updateArticle,
} from "../controllers/ArticleControllers.js";

const articleRouter = express.Router();

articleRouter.get("/", getArticles);
articleRouter.get("/readone/:id?", getOneArticle);
articleRouter.post("/create", upload.single("image"), createArticle);
articleRouter.patch("/update", upload.single("image"), updateArticle);
articleRouter.delete("/delete/:id?", deleteArticle);

export default articleRouter;
