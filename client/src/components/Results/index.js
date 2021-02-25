import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

const Results = () => {
  const stories = useSelector((state) => state.searchArticle);
  return (
    <div className="Results" id="Results">
      {stories.length > 0 ? (
        stories.map((story) => (
          <>
            <a href={story.url}>
              <h3>{story.title}</h3>
            </a>
            <h4>{story.author}</h4>
            <p>{story.created_at}</p>
            <p>{story.story_text}</p>
          </>
        ))
      ) : (
        <p>No Matching Articles</p>
      )}
    </div>
  );
};

export default Results;
