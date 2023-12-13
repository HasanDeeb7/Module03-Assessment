import "./dash.css";
import ArticleRow from "../components/ArticleRow";

function Dash({ articles }) {
  return (
    <div className="dash">
      {articles.map((item) => {
        return (
          <ArticleRow
            title={item.title}
            id={item.id}
            category={item.category}
            author={item.author}
          />
        );
      })}
    </div>
  );
}

export default Dash;
