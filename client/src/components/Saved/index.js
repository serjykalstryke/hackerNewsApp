import React from "react";
import { useSelector } from "react-redux";
import API from "../..//utils/API";
import store from "../../store";

const Saved = () => {
  const savedSearch = useSelector((state) => state.addSearch);

  const searchAgain = (search) => {
    API.searchNews(search.query).then((res) => {
      store.dispatch({
        type: "SEARCH_ARTICLE",
        results: res.data.hits,
      });
    });
  };

  return (
    <div>
      {savedSearch.length > 0 ? (
        savedSearch.map((search) => (
          <button
            className="btn btn-primary"
            onClick={() => searchAgain(search)}
          >
            {search.query}
          </button>
        ))
      ) : (
        <p>No Recent Searches</p>
      )}
    </div>
  );
};

export default Saved;
