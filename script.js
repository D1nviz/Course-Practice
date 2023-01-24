"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
    
    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
    }
}

function rememberMyFilms () {
    for(let i = 0; i < 2; i++) {
        let a = prompt("Какой ваш последний просмотреный фильм?","").trim();
        let b = prompt("На сколько его оцените?","");
        if(a != null && a != "" && a.length < 50 && b != null && b != "") {
            personalMovieDB.movies[a] = b;
        } else {
            console.log("Название или длина фильма слишком короткие");
            i--;
        }
        
    }
}

function detectPersonalLvl () {
    if(personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if(personalMovieDB.count < 30 || personalMovieDB.count > 10) {
        alert("Вы классический зритель");
    } else if(personalMovieDB.count > 30) {
        alert("Да вы киноман!");
    } else {
        alert ("Ошибка");
    }
}

function showMyDB (privat) {
    if(!privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenre () {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`);
    }
}

start()
rememberMyFilms(); 
detectPersonalLvl();
writeYourGenre()
showMyDB(personalMovieDB.privat);



