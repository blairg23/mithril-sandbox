var m = require("mithril")

var Movie = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "http://localhost:8000/api/movies/list",
            withCredentials: false,
            headers: {
                "Authorization": "Token e0560cce45b2b150cddf8fd5101f7462610037b7"
            }
        })
        .then(function(result) {
            Movie.list = result.data
        })
    },
}

module.exports = Movie