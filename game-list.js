const games = [
    {name : "Math Kids Puzzle", icon : "1.png", link : "https://play.google.com/store/apps/details?id=com.zeppelingames.mathkidspuzzle"},
    {name : "Memory Game For Kids", icon : "6.png", link : "https://play.google.com/store/apps/details?id=com.ZeppelinGames.MemoryGameForKids"},
    {name : "Kids Coloring And Drawing", icon : "5.png", link : "https://play.google.com/store/apps/details?id=com.ZeppelinGames.Coloring"},
    {name : "Kids Puzzles Game", icon : "3.png", link : "https://play.google.com/store/apps/details?id=com.ZeppelinGames.KidsPuzzlesGame"},
    {name : "House Builder For Kids", icon : "4.png", link : "https://play.google.com/store/apps/details?id=com.ZeppelinGames.HouseBuilderForKids"},
    {name : "Find The Differences", icon : "2.png", link : "https://play.google.com/store/apps/details?id=com.zeppelingames.findthedifference"},
];

function createGameHTML(game) {
    return `
        <div>
            <a class="game" href="${game.link}" target="_blank">
                <img class="gameIcon" src="${game.icon}">
                <h1>${game.name}</h1>
                <img class="googleplay" src="google-play-store-png.png">
            </a>
        </div>
     `;
}

function initGameList(containerId) {
    const gameContainer = document.getElementById(containerId);
    if (gameContainer) {
        const gameListHTML = games.map(createGameHTML).join('');
        gameContainer.innerHTML = gameListHTML;
    } else {
        console.error(`Could not find element with id '${containerId}'`);
    }
}

window.initGameList = initGameList;