import React from "react";
import { useLocation } from "react-router-dom";
import "./SinglePage.css";

function SinglePage() {
  const data = useLocation().state;
  console.log(data);
  return (
    <div className="singlePageContainer">
      <div className="singlePageBrief">
        <img src={data.imgSrc} alt="" />
        <div className="content">
          <div className=" authorCategorySingle">
            <span> Author: {data.author}</span>
            <span> Category: {data.category}</span>
          </div>
        </div>
      </div>
      <p>{data.body}</p>
    </div>
  );
}

export default SinglePage;
