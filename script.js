"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

const lastWachedMovie = prompt("Какой ваш последний просмотреный фильм?","");
const RateOflastWachedMovie = prompt("На сколько его оцените?","");
personalMovieDB.movies[lastWachedMovie] = RateOflastWachedMovie;
console.log(personalMovieDB);