import { sequelize } from "../config.js";
import Articles from "../models/ArticleModel.js";

export async function getArticles(req, res) {
  try {
    const articles = await Articles.findAll();
    if (articles) {
      res.json({ articles: articles });
    } else {
      res.status(404).json({ message: "Articles not found" });
    }
  } catch (error) {
    console.log(error);
  }
}
export async function getOneArticle(req, res) {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: "No id provided" });
    }
    const article = await Articles.findByPk(id);
    if (article) {
      return res.json({ article: article });
    } else {
      res.status(404).json({ message: "Article not found" });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function createArticle(req, res) {
  const { title, category, body, author } = req.body;
  const image = req.file.filename;
  if (!(title && category && body && author && image)) {
    return res.status(400).json({ message: "All fields are required" });
  }
  const newArticle = await Articles.create({ ...req.body, image: image });
  if (newArticle) {
    return res.json({
      message: "New Article Created Successfuly",
      article: newArticle,
    });
  }
}

export async function updateArticle(req, res) {
  const id = req.body.id;
  if (!id) {
    return res.status(400).json({ message: "No id provided" });
  }
  const { title, body, author, category } = req.body;
  const existingArticle = await Articles.findByPk(id);
  if (!existingArticle) {
    return res.status(404).json({ message: "Article not found" });
  }
  let image;
  if (!req.file) {
    image = existingArticle.image;
  } else {
    image = req.file.filename;
  }
  existingArticle.title = title;
  existingArticle.body = body;
  existingArticle.category = category;
  existingArticle.author = author;

  await existingArticle.save();
  res.json({ article: existingArticle });
}
sequelize.sync();

export async function deleteArticle(req, res) {
  const { id } = req.query;
  try {
    if (!id) {
      return res.status(400).json({ message: "No id provided" });
    }
    const target = Articles.findByPk(id);
    if (!target) {
      return res.status(404).json({ message: "Article not found" });
    }
    await Articles.destroy({ where: { id: id } });
    res.json({ message: `The article with the id ${id} has been deleted` });
  } catch (error) {
    console.log(error);
  }
}
