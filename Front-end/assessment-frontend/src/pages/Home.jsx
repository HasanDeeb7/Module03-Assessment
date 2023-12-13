import React from "react";
import ArticleCard from "../components/ArticleCard";
import "./Home.css";

function Home({ articles }) {
  return (
    <div className="articleCardsContainer">
      {articles.map((item) => {
        return (
          <ArticleCard
            title={item.title}
            category={item.category}
            author={item.author}
            image={item.image}
            body={item.body}
          />
        );
      })}
    </div>
  );
}

export default Home;
