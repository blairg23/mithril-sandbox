var m = require("mithril")

var User = {
    list: [],
    loadList: function() {
        return m.request({
            method: "GET",
            url: "https://rem-rest-api.herokuapp.com/api/users",
            withCredentials: false,
        })
        .then(function(result) {
            User.list = result.data
        })
    },
}

module.exports = User