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
              <h5>{story.title}</h5>
            </a>
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
