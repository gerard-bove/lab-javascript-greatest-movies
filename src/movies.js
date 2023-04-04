// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    let result = [];
    return moviesArray.map((movie) => {
        return movie.director;
    })
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const directorMovies = moviesArray.filter((movie) => {
        return movie.director == 'Steven Spielberg'; 
    })
    if (directorMovies.length == 0) return 0;
    const dramaMovies = directorMovies.filter((movie) => {
        return movie.genre.includes("Drama") == true;
    })
    return dramaMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0;
    const scoresSum = moviesArray.reduce((a,b) => {
        if (b.score == undefined || b.score == "") return a + 0;
        return a + b.score;
    }, 0);
    return Math.round(scoresSum / moviesArray.length * 100) / 100;
    //return.toFixed(2)
    //return Number.parseInt(scoresSum / moviesArray.length)
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const dramaArray = moviesArray.filter((movie) => {
        return movie.genre.includes("Drama") == true;
    });
    const dramaScoreSum = dramaArray.reduce((a,b) => {
        return a + b.score;
    }, 0);
    if (dramaArray.length == 0) return 0;
    return Math.round(dramaScoreSum / dramaArray.length * 100) / 100;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 
    //JSON.parse(JSON.stringify()) para hacer copia de array o object
    const sortedArray = moviesArray.slice().sort((a,b) => {
        if (a.year === b.year) return a.title.localeCompare(b.title);
        return a.year - b.year;
    });
    return sortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = [];
    moviesArray.forEach((word) => titles.push(word.title));
    return titles.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutesMovie = 0;
    let moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    moviesArrayCopy.map((movie) => {
        minuteIndex = movie.duration.indexOf('m');
        const hourMovie = Number(movie.duration[0]) * 60;
        if (minuteIndex > 0) {
            if (movie.duration[5] == "m") {
                minutesMovie = Number(movie.duration.substring(minuteIndex-2, minuteIndex));
            }
            else {
                minutesMovie = Number(movie.duration.substring(minuteIndex-1, minuteIndex));
            }
        }
        movie.duration = minutesMovie + hourMovie;
    });
    return moviesArrayCopy
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let moviesArrayCopy = JSON.parse(JSON.stringify(moviesArray));
    let bestScore= {score: 0, year: null};
    let moviesYear;
    let temporalScore = 0;
    if(moviesArray.length === 0) return null;
    if(moviesArray.length === 1) return `The best year was ${moviesArray[0].year} with an average score of ${moviesArray[0].score}`;
    for(i=1920; i<2018; i++) {
        moviesYear = moviesArrayCopy.filter(movie => movie.year === i);
        if(moviesYear.length > 0) {
            let accumulador = 0;
            for(let j=0; j<moviesYear.length; j++) {
                accumulador += moviesYear[j].score;
            }
            temporalScore = accumulador / moviesYear.length;
            if(temporalScore >= bestScore.score) {
                if(temporalScore === bestScore.score) {
                    if(i < bestScore.year) {
                        bestScore.year = i;
                        bestScore.score = temporalScore;
                    }
                }
                else {
                    bestScore.year = i;
                    bestScore.score = temporalScore;
                }
            }
        }
    }
    return `The best year was ${bestScore.year} with an average score of ${bestScore.score}`
}
