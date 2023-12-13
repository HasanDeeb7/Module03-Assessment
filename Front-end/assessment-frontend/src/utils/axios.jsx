import axios from "axios";

export async function getArticles() {
  try {
    const response = await axios.get(`http://localhost:4001/articles/`);
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
async function createArticle(data) {
  try {
    const newArticle = await axios.post(
      `${process.env.REACT_APP_API}articles/add`,
      data,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );
    if (newArticle) {
      return newArticle;
    }
  } catch (error) {
    console.log(error);
  }
}
async function deleteArticle(id) {
  try {
    const response = await axios.delete(
      "http://localhost:4001/articles/delete",
      { params: { id: id } }
    );
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
async function updateArticle(data) {
  try {
    const response = await axios.patch(
      "http://localhost:4001/articles/update",
      data,
      { headers: { "Content-Type": "multipart/form-data" } }
    );
    if (response) {
      return response;
    }
  } catch (error) {
    console.log(error);
  }
}
