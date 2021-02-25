import axios from "axios";

export default {
  searchNews: (title) => {
    title = title.trim().split(" ").join("+");
    console.log("client side:", title);
    return axios.get(`/api/news/search/${title}`);
  },
};
