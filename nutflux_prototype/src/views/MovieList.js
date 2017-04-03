var m = require("mithril")
var Movie = require("../models/Movie")

module.exports = {
    oninit: Movie.loadList,
    view: function() {
        return m(".movie-list", Movie.list.map(function(movie) {
            return m(".movie-list-item", m.trust("<img src=\"http://localhost:420/" + movie.title + "/" + movie.posters + "\" />"))
        }))
    }
}