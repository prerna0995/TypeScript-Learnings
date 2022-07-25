// relative imports
import {Player} from './player';
import {Game} from './game';
import * as Utility from './utility';
 
let newGame: Game;

//add click handler to the start game button
document.getElementById('startGame')!.addEventListener("click", () => {
    const player: Player = new Player();
    player.name = Utility.getInputValue('playername');

    const problemCount: number = Number(Utility.getInputValue('problemCount'));
    const factor: number = Number(Utility.getInputValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();

} );

//add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener("click", () => {
    newGame.calculateScore();
});






// function startGame() {
//     //starting a new game
//     let playerName = getPlayerName('playername');
//     logPlayer(playerName);

//     postScore(100,playerName);
//     postScore(-1);



//     // var messageElement = document.getElementById("messages");
//     // messageElement!.innerHTML = 'Welcome to MultiMath! Starting a new game......';
// }

// function logPlayer (playerName: string = 'MultiMath Player'): void {
//     console.log(`New game starting for player ${playerName}`);
// }

// function postScore (score: number, playerName: string = 'MultiMath Player'): void {
//     let logger : (value: string) => void;
//     if (score < 0) {
//         logger = logError;
//     } else {
//         logger = logMessage;
//     }
//     const scoreElement:HTMLElement | null = document.getElementById("postedScores");
//     scoreElement!.innerHTML = `${score} - ${playerName}`;
//     logger(`Score ${score}`);
// }

// document.getElementById("startGame")!.addEventListener("click", startGame);

// const logMessage = (message: string) => console.log(message);
// logMessage('Welcome to MultiMath');

// //Logging Errors
// function logError (err: string) {
//     console.error(err);
// }
// logError('Log Error function');

// const firstPlayer: Player = new Player();
// firstPlayer.name = 'Prerna';
// console.log(firstPlayer.formatName());



