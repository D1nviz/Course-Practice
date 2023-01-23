"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

if(personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if(personalMovieDB.count < 30 || personalMovieDB.count > 10) {
    alert("Вы классический зритель");
} else if(personalMovieDB.count > 30) {
    alert("Да вы киноман!");
} else {
    alert ("Ошибка");
}




for(let i = 0; i < 2; i++) {
    let lastWachedMovie = prompt("Какой ваш последний просмотреный фильм?","");
    let RateOflastWachedMovie = prompt("На сколько его оцените?","");
    if(lastWachedMovie != null || lastWachedMovie != "" || lastWachedMovie.length < 50 || RateOflastWachedMovie != null || RateOflastWachedMovie != "") {
        personalMovieDB.movies[lastWachedMovie] = RateOflastWachedMovie;
    } else {
        console.log("Название или длина фильма слишком короткие");
        i--;
    }
    
}

console.log(personalMovieDB);