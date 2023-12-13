import "./ArticleRow.css";

function ArticleRow({ title, id, category, author, body }) {
  return (
    <div className="articleRow">
      <span>{id}</span>
      <span>{title}</span>
      <span>{category}</span>
      <span>{author}</span>
    </div>
  );
}

export default ArticleRow;
