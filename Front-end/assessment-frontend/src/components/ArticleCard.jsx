import React from "react";
import "./ArticleCard.css";
import { NavLink } from "react-router-dom";

function ArticleCard({ title, author, category, image, body }) {
  const imgSrc = `http://localhost:4001/public/images/${image}`;
  function navigate() {
    return <NavLink />;
  }
  return (
    <div className="articleCard">
      <img src={imgSrc} alt="" />
      <div className="articleCardDetails">
        <h3>{title}</h3>
        <div className="categoryAuthorWrapper">
          <span>{category}</span>
          <span>{author}</span>
        </div>
      </div>
      <div className="btnContainer">
        <NavLink
          className="button"
          to="single"
          state={{ title, author, category, imgSrc, body }}
        >
          View More
        </NavLink>
      </div>
    </div>
  );
}

export default ArticleCard;
