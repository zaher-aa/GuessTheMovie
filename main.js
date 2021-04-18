const btns = document.querySelectorAll(".letters button");
const movies = ["spiderman", "batman", "superman", "homealone", "godzilla", "braveheart", "godfather", "interstellar", "avatar", "gameofthrones", "avengers", "threeidiots", "thor", "thehulk", "ironman"];
const currentMovie = movies[Math.floor(Math.random() * (movies.length))];
let allowedAttempts = parseInt(currentMovie.length * 2);
const answersContainer = document.querySelector(".answers-container");
const correctMovie = document.querySelector(".correct-movie");
const tryAgain = document.getElementById("try-again");
let attemptsLeftContainer = document.querySelector(".attempts-left");
let attemptsLeftContent = "Attempts Left: "
let spansArray = new Array;
for (let i = 0; i < currentMovie.length; i++) {
    let letterContainer = document.createElement("span");
    answersContainer.appendChild(letterContainer);
    spansArray.push(letterContainer);
}
btns.forEach(
    btn => 
        btn.addEventListener("click", () => {
            if (currentMovie.toLowerCase().includes(btn.innerHTML.toLowerCase())) {
                spansArray[currentMovie.indexOf(btn.innerHTML.toLowerCase())].innerHTML = btn.innerHTML;
                spansArray[currentMovie.lastIndexOf(btn.innerHTML.toLowerCase())].innerHTML = btn.innerHTML;
            }
            btn.disabled = true;
            btn.classList.add("disabeld");
            allowedAttempts--;
            console.log(allowedAttempts)
            attemptsLeftContainer.innerHTML = (attemptsLeftContent + allowedAttempts);
            if (allowedAttempts == 0) {
                for (let i = 0; i < btns.length; i++) {
                    btns[i].disabled = true;
                    btns[i].classList.add("disabeld");
                }
                correctMovie.innerHTML = `Correct Movie Is: ${currentMovie.toUpperCase()}`;
                tryAgain.style.display = "block";
            }
        })
)

tryAgain.addEventListener("click", () => {
    for (let i = 0; i < btns.length; i++) {
        btns[i].disabled = false;
        btns[i].classList.remove("disabeld");
    }
    spansArray.forEach(
        span => 
            span.innerHTML = ""
    )
    allowedAttempts = parseInt(currentMovie.length * 2);
    attemptsLeftContainer.innerHTML = (attemptsLeftContent + allowedAttempts);
    correctMovie.innerHTML = "";
});

attemptsLeftContainer.innerHTML = (attemptsLeftContent + allowedAttempts);