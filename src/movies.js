// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
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
    //console.log(moviesArray);
    const sortedArray = [...moviesArray].sort((a,b) => {
        if (a.year === b.year) return a.title.localeCompare(b.title);
        return a.year - b.year;
    });
    /* let nestedSort = (prop1, prop2 = null, direction = 'asc') => (e1, e2) => {
        const a = prop2 ? e1[prop1][prop2] : e1[prop1],
            b = prop2 ? e2[prop1][prop2] : e2[prop1],
            sortOrder = direction === "asc" ? 1 : -1
        return (a < b) ? -sortOrder : (a > b) ? sortOrder : 0;
    }

    console.log(newArray.sort(nestedSort("title")));
    return newArray.sort(nestedSort("title")); */
    return sortedArray;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const titles = [];
    moviesArray.forEach((word) => {
        titles.push(word.title);
    });
    return titles.sort().slice(0, 20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
