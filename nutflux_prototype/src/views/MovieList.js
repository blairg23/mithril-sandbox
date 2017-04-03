var m = require("mithril")
var Movie = require("../models/Movie")

module.exports = {
    oninit: Movie.loadList,
    view: function() {
        return m(".movie-list", Movie.list.map(function(movie) {
            return m(".movie-list-item", movie.title)
        }))
    }
}