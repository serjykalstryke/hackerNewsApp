import axios from "axios";

export default {
  searchNews: (search) => {
    console.log("client side:", search);
    return axios.get(`/api/news/search/${search}`);
  },
};
