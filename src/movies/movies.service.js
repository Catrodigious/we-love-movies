const knex = require("../db/connection");

function list(){
    return knex("movies")
        .select();
}

function listShowing(){
    return knex("movies as m")
    .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
    .where({"mt.is_showing": true})
}

function read(movieId){
    return knex("movies")
        .select('*')
        .where({movie_id: movieId})
}

function getCritics(criticId){
    return knex("critics")
        .where({"critic_id": criticId})
        .select()
}

function listReviews(movieId){
    return knex("movies as m")
        .join("reviews as r", "m.movie_id", "r.movie_id")
        .select('*')
        .where({'m.movie_id': movieId});
}

function listTheaters(movieId){
    return knex("movies as m")
        .join("movies_theaters as mt", "mt.movie_id", "m.movie_id")
        .join("theaters as t", "t.theater_id", "mt.theater_id")
        .select("t.*", "m.movie_id")
        .where({"m.movie_id": movieId});
}

module.exports = {
    list,
    listShowing,
    read,
    getCritics,
    listReviews,
    listTheaters
}