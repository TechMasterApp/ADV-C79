var gamesArray = []



function submit() {
    var game1 = document.getElementById("one").value
    var game2 = document.getElementById("two").value
    var game3 = document.getElementById("three").value
    var game4 = document.getElementById("four").value
    gamesArray.push(game1)
    gamesArray.push(game2)
    gamesArray.push(game3)
    gamesArray.push(game4)
    document.getElementById("games").innerHTML = gamesArray
    document.getElementById("submit").style.display = "none"
    document.getElementById("sort").style.display = "inline-block"
}

function sortData() {
    var sorted = gamesArray.sort()
    document.getElementById("games").innerHTML = sorted
}