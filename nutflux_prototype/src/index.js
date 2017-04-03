var m = require("mithril")

var UserList = require("./views/UserList")
var MovieList = require("./views/MovieList")

m.route(document.body, "/movies/list", {
    "/movies/list": MovieList,
    "/users/list": UserList
})