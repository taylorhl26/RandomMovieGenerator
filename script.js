//Assigns elements from html pages to related variables 
const nextButton = document.getElementById('nextBtn')
const genreQuizContainer = document.getElementById('genreQuizContainer')
const decadeQuizContainer = document.getElementById('decadeQuizContainer')
const missingInfoAlertContainer = document.getElementById('missingInfoAlertContainer')
const missingInfoAlertMessage = document.getElementById('missingInfoAlertMessage')
const submitButton = document.getElementById('submitBtn')
const resultDisplay = document.getElementById('resultsDisplay')
const result = document.getElementById('result')

// Assigns genre element to matching variable
const horror = document.getElementById('horror')
const action = document.getElementById('action')
const romCom = document.getElementById('romCom')
const sciFi = document.getElementById('sciFi')
const comedy = document.getElementById('comedy')
const family = document.getElementById('family')

//Assigns decade element to matching variable 
const seventies = document.getElementById('seventies')
const eighties = document.getElementById('eighties')
const nineties = document.getElementById('nineties')
const ones = document.getElementById('ones')
const tens = document.getElementById('tens')
const twentytwenty = document.getElementById('twenties')

//Establishes preference variables 
var genrePref, decadePref

//Establishes the decadeGenre variable and the randomMovieResult variable
var decadeGenre, randomMovieResult

//Creates arrays for each genre that contain dictionaries that store the movie titles(as arrays) as the value and decade as the key 
const horrorMovies = [
    {'seventiesHorror': ['The Exorcist, 1973', 'Jaws, 1975','Halloween, 1978', 'Alien, 1979', 'Dawn of the Dead, 1978']},
    {'eightiesHorror': ['The Shining, 1980', 'The Thing, 1982','Aliens, 1986', 'Possession, 1981', 'A Nightmare on Elm Street, 1984']},
    {'ninetiesHorror': ['Cube, 1997', 'Braindead, 1992','Urban Legend, 1998', 'Scream 1996', 'I Know What You Did Last Summer, 1997']},
    {'onesHorror': ['The Orphanage, 2007', 'Battle Royale, 2000', 'Let the Right One In, 2008', 'Saw, 2004', 'The Devil\'s Backbone, 2001']},
    {'tensHorror': ['Unsane, 2018', 'Overlord, 2018','The Girl With All the Gifts, 2017', 'Better Watch Out, 2017', 'The Conjuring, 2013']},
    {'twentiesHorror': ['Ghost Stories, 2020', 'The Assent, 2020', 'Bliss, 2020', 'Gretel & Hansel, 2020', 'The Turning, 2020']}
]

const actionMovies =[
    {'seventiesAction': ['Dirty Harry, 1971', 'Emperor of the North, 1973', 'Duck, You Sucker, 1971', 'Two Mules for Sister Sara, 1970', 'The Mechanic, 1972']},
    {'eightiesAction': ['Predator, 1987', 'The Terminator, 1984','First Blood, 1982', 'Commando, 1985', 'Bloodsport, 1988']},
    {'ninetiesAction': ['Marked for Death, 1990', 'Under Siege, 1992','Showdown in Little Tokyo, 1991', 'Rapid Fire, 1992', 'Hard Target, 1993']},
    {'onesAction': ['Agent Red, 2000', 'Charlie\'s Angels, 2000','The Fast and the Furious, 2001', 'The Foreigner, 2003', 'Casino Royale, 2006']},
    {'tensAction': ['Gemini Man, 2019', 'The Dark Knight Rises, 2012','Mad Max: Fury Road, 2015', 'John Wick, 2014', 'Mission Impossible: Fallout, 2018']},
    {'twentiesAction': ['The Mercenary, 2020', 'Underwater, 2020', 'Bad Boys for Life, 2020', 'Disturbing the Peace, 2020', 'The Call of the Wild, 2020']}, 
]

const romComMovies =[
    {'seventiesRomCom': ['Annie Hall, 1977', 'Manhattan, 1979', 'Duck, Harold and Maude, 1971', 'Play It Again, Sam, 1972', 'The Goodbye Girl, 1977']},
    {'eightiesRomCom': ['Valley Girl, 1983', 'Sixteen Candles, 1984','The Breakfast Club, 1985', 'Moonstruck, 1987', 'When Harry Met Sally, 1989']},
    {'ninetiesRomCom': ['Pretty Woman, 1990', 'Sleepless in Seattle, 1993','Four Weddings and a Funeral, 1994', 'While You Were Sleeping, 1995', 'The Wedding Singer, 1998']},
    {'onesRomCom': ['Miss Congeniality, 2000', 'The Wedding Planner, 2001','Legally Blonde, 2001', 'Love Actually, 2003', 'She\'s the Man, 2006']},
    {'tensRomCom': ['Crazy, Stupd, Love, 2011', 'Bridesmaids, 2011','About Time, 2013', 'Sleeping With Other People, 2015', 'Always Be My Maybe, 2019']},
    {'twentiesRomCom': ['Emma, 2020', 'The Lovebirds, 2020', 'To All the Boys: P.S. I Still Love You, 2020', 'Legally Blonde 3, 2020', 'The Prom, 2020']},
]

const sciFiMovies =[
    {'seventiesSciFi': ['Star Wars: Episode IV - A New Hope, 1977', 'Invasion of the Body Snatchers, 1978', 'Soylent Green, 1973', 'The Rocky Horror Picture Show, 1975', 'The Man Who Fell to Earth, 1976']},
    {'eightiesSciFie': ['Aliens, 1986', 'E.T., 1982', 'Blade Runner, 1982', 'The Blob, 1998', 'Predator, 1987']},
    {'ninetiesSciFi': ['Independence Day, 1996', 'Hardware, 1990','Alienator, 1990', 'Back to the Future Part III, 1990', '12 Monkeys, 1995']},
    {'onesSciFi': ['A.I. Artificial Intelligence, 2001', 'Battlefield Earth, 2000','Alien vs. Predator, 2004', 'Fantastic Four, 2005', 'WALL-E, 2008']},
    {'tensSciFi': ['Star Wars:Episode IX - The Rise of Skywalker, 2019', 'Avengers: End Game, 2019','Contagion, 2011', 'Snowpiercer, 2013', 'Alita: Battle Angel, 2019']},
    {'twentiesSciFi': ['The Invisible Man, 2020', 'Sonic the Hedgehog, 2020', 'The New Mutants, 2020', 'Bloodshot, 2020', 'Black Widow, 2020']},
]

const comedyMovies =[
    {'seventiesComedy': ['Monty Python and the Holy Grail, 1975', 'Play It Again, Sam, 1972', 'National Lampoon\'s Animal House, 1978', 'Blazing Saddles, 1974', 'Young Frakenstein, 1974']},
    {'eightiesComedy': ['This is Spinal Tap, 1984', 'Back to the Future, 1985', 'Crimes and Misdemeanors, 1989', 'A Christmas Story, 1983', 'Ferris Bueller\'s Day Off, 1986']},
    {'ninetiesComedy': ['Dumb and Dumber, 1994', 'Happy Gilmore, 1995','Tommy Boy, 1995', 'Austin Powers: International Man of Mystery, 1997', 'Half Baked, 1998']},
    {'onesComedy': ['Bruce Almiighty, 2003', 'Shaun of the Dead, 2004','Superbad, 2007', 'White Chicks, 2004', 'Hot Fuzz, 2007']},
    {'tensComedy': ['The Bounty Hunter, 2010', 'Easy A, 2010','Grown Ups, 2010', 'Snowpiercer, 2013', 'The Wolf of Wall Street, 2013']},
    {'twentiesComedy': ['Like a Boss, 2020', 'Sonic the Hedgehog, 2020', 'Fantasy Island, 2020', 'Bad Boys for Life, 2020', 'Ana, 2020']},
]

const familyMovies =[
    {'seventiesFamily': ['Robin Hood, 1973', 'The Aristocats, 1970', 'Charlotte\'s Web, 1973', 'The Rescuers, 1977', 'The Many Adventures of Winne the Pooh, 1977']},
    {'eightiesFamily': ['The Princess Bride, 1987', 'Annie, 1982', 'Honey I Shrunk the Kids, 1989', 'THe Land Before Time, 1988', 'Back to the Future, 1985']},
    {'ninetiesFamily': ['Home Alone, 1990', 'Space Jam, 1996','The Little Rascals, 1994', 'Free Willy, 1993', 'Beethoven, 1992']},
    {'onesFamily': ['My Dog Skip, 2000', 'Eight Below, 2006','Avatar, 2004', 'Where the Wild Things Are, 2009', 'WALL-E, 2008']},
    {'tensFamily': ['Dispicable Me, 2010', 'Brave, 2012','Wreck-It Ralp, 2012', 'Monsters University, 2013', 'Frozen, 2013']},
    {'twentiesFamily': ['Dolittle, 2020', 'Sonic the Hedgehog, 2020', 'Peter Rabbit 2: The Runaway, 2020', 'Onward, 2020', 'Scoob!, 2020']},
]


//EventListner to call function to save genre
horror.addEventListener('click', saveGenreHorror)
action.addEventListener('click', saveGenreAction)
romCom.addEventListener('click', saveGenreRomCom)
sciFi.addEventListener('click', saveGenreSciFi)
comedy.addEventListener('click', saveGenreComedy)
family.addEventListener('click', saveGenreFamily)

//Moves to the decade preference page
nextButton.addEventListener('click', getDecadePref)

//EventListner to call function to save decade 
seventies.addEventListener('click', saveDecadeSeventies)
eighties.addEventListener('click', saveDecadeEighties)
nineties.addEventListener('click', saveDecadeNineties)
ones.addEventListener('click', saveDecadeOnes)
tens.addEventListener('click', saveDecadeTens)
twenties.addEventListener('click', saveDecadeTwenties)

//Sumbits the preferences to load the results
submitButton.addEventListener('click', getResults) 


//Functions to assign user's preferred genre to genrePref variable
function saveGenreHorror() {
    genrePref = "horrorGenre"
}
function saveGenreAction() {
    genrePref = "actionGenre"
}
function saveGenreRomCom() {
    genrePref = "romComGenre"
}
function saveGenreSciFi() {
    genrePref = "sciFiGenre"
}
function saveGenreComedy() {
    genrePref = "comedyGenre"
}
function saveGenreFamily() { 
    genrePref = "familyGenre"
}

//Loads decade section of quiz if genre has been selected 
function getDecadePref() {
    if (genrePref === undefined) {
        missingInfoAlertContainer.classList.remove('hide')
    } else { 
        console.log("Got genre inforamtion, now looking for decade information.")
        missingInfoAlertContainer.classList.add('hide')
        genreQuizContainer.classList.add('hide')
        decadeQuizContainer.classList.remove('hide')
    }
}

//Functions to assign user's preferred decade to decadePref
function saveDecadeSeventies() {
    decadePref = "seventiesDecade"
}
function saveDecadeEighties() {
    decadePref = "eightiesDecade"
}
function saveDecadeNineties() {
    decadePref = "ninetiesDecade"
}
function saveDecadeOnes() {
    decadePref = "onesDecade"
}
function saveDecadeTens() {
    decadePref = "tensDecade"
}
function saveDecadeTwenties() { 
    decadePref = "twentiesDecade"
}

//Loads results page if decade has been selected 
function getResults() {
    if (decadePref === undefined) {
        missingInfoAlertMessage.innerText = "You must select a decade before continuing."
        missingInfoAlertContainer.classList.remove('hide')
    } else { 
        console.log("Got decade inforamtion, now getting results.")
        missingInfoAlertContainer.classList.add('hide')
        randomMovieResult = getResultsFromMovieData()
        showResults(randomMovieResult)
    }
}

//Gets results based on the user's preferences
function getResultsFromMovieData(){
    if (genrePref === 'horrorGenre' && decadePref === 'seventiesDecade'){
        decadeGenre = horrorMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'horrorGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = horrorMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'horrorGenre' && decadePref === 'ninetiesDecade'){ 
        decadeGenre = horrorMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'horrorGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = horrorMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'horrorGenre' && decadePref === 'tensDecade'){ 
        decadeGenre = horrorMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'horrorGenre' && decadePref === 'twentiesDecade'){ 
        decadeGenre = horrorMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'seventiesDecade'){ 
        decadeGenre = actionMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = actionMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'ninetiesDecade'){ 
        decadeGenre = actionMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = actionMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'tensDecade'){ 
        decadeGenre = actionMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'actionGenre' && decadePref === 'twentiesDecade'){ 
        decadeGenre = actionMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'seventiesDecade'){ 
        decadeGenre = romComMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = romComMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'ninetiesDecade'){ 
        decadeGenre = romComMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = romComMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'tensDecade'){ 
        decadeGenre = romComMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'romComGenre' && decadePref === 'twentiesDecade'){ 
        decadeGenre = romComMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'seventiesDecade'){ 
        decadeGenre = sciFiMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = sciFiMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'ninetiesDecade'){ 
        decadeGenre = sciFiMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = sciFiMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'tensDecade'){ 
        decadeGenre = sciFiMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'sciFiGenre' && decadePref === 'twentiesDecade'){ 
        decadeGenre = sciFiMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'seventiesDecade'){ 
        decadeGenre = comedyMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = comedyMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'ninetiesDecade'){ 
        decadeGenre = comedyMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = comedyMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'tensDecade'){ 
        decadeGenre = comedyMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'comedyGenre' && decadePref === 'twentiesDecade'){ 
        decadeGenre = comedyMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'familyGenre' && decadePref === 'seventiesDecade'){ 
        decadeGenre = familyMovies[0]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    } else if (genrePref === 'familyGenre' && decadePref === 'eightiesDecade'){ 
        decadeGenre = familyMovies[1]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    }
    else if (genrePref === 'familyGenre' && decadePref === 'ninetiesDecade'){
        decadeGenre = familyMovies[2]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    }
    else if (genrePref === 'familyGenre' && decadePref === 'onesDecade'){ 
        decadeGenre = familyMovies[3]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()]
    }
    else if (genrePref === 'familyGenre' && decadePref === 'tensDecade'){
        decadeGenre = familyMovies[4]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()] 
    }
    else if (genrePref === 'familyGenre' && decadePref === 'twentiesDecade'){
        decadeGenre = familyMovies[5]
        resultPossArray = (Object.values(decadeGenre)[0])
        return randomMovieResult = resultPossArray[getRandomInt()] 
    }
}

function getRandomInt(){
    return Math.floor(Math.random() * 5);  
}
//Shows results to the user
function showResults(randomMovieResult){
    decadeQuizContainer.classList.add('hide')
    resultDisplay.classList.remove('hide')
    result.innerText = randomMovieResult


    
}


