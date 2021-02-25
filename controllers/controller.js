const axios = require("axios");

module.exports = {
  search: function (req, res) {
    let search = req.params.title.replace(/\s/g, "+");
    // let title = req.params.title.trim().split(" ").join("+");
    console.log("server side:", search);
    axios
      .get(`https://hn.algolia.com/api/v1/search?query=${search}&tags=story`)
      .then((response) => {
        res.json(response.data);
      })
      .catch((err) => {
        res.json({ error: error });
      });
  },
};
