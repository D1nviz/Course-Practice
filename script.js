"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start() {
        personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?","");
        
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы посмотрели?","");
        }
    },
    rememberMyFilms () {
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
    },
    detectPersonalLvl () {
        if(this.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if(this.count < 30 && personalMovieDB.count > 10) {
            alert("Вы классический зритель");
        } else if(this.count > 30) {
            alert("Да вы киноман!");
        } else {
            alert ("Ошибка");
        }
    },
    showMyDB (privacy) {
        if(!privacy) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenre () {
        for(let i = 0; i < 3; i++) { 
            personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}:`);
            if(personalMovieDB.genres[i] === null ||
               personalMovieDB.genres[i] === "") {
                    i--;
                    alert("Вопрос обязателен! Ответьте на него снова!")
                }
        }
    
        personalMovieDB.genres.forEach((element, i) => {
            console.log(`Любимый жанр #${i+1} - это ${element}`);
        });
    },
    toggleVisibleGenres(privacy) {
        return !privacy;
    }
};

personalMovieDB.start()
personalMovieDB.rememberMyFilms(); 
personalMovieDB.detectPersonalLvl();
personalMovieDB.writeYourGenre()

personalMovieDB.showMyDB(personalMovieDB.toggleVisibleGenres(personalMovieDB.privat));



