class User {
  constructor(id, name){
    this.name = name,
    this.id = id,
    this.actions = 1,
    //this.myTurn = false,
    this.red = 0,
    this.blue = 0,
    this.green = 0,
    this.points = 0,
    this.buildings = []
  }
  addRed(){
    this.red += 2 ;
    console.log(this.red, " :addRed function");
    this.actions--;
    this.showStats();
  }
  addBlue(){
    this.blue += 2 ;
    console.log(this.blue, ' :addBlue function');
    this.actions--;
    this.showStats();
  }
  addGreen(){
    this.green += 2 ;
    console.log(this.green, " :addGreenfunction");
    this.actions--;
    this.showStats();
  }
  addRandom(){

    let randomRes = Math.floor(Math.random()*3);
    console.log(randomRes, ":randon int");
    if (randomRes == 0) {
      this.red += 1;
    } else if (randomRes == 1) {
      this.blue += 1;
    } else {
      this.green += 1;
    }

    this.showStats();
  }
  // buyBasicBuilding(){
  //   //const building = new Structure (basic);
  //
  //   //reformat this to put the 'this.' in the player class and call it
  //   const $p1Points = $('#p1Points');
  //   const $buyButton = $(`#buy`);
  //   if (this.player.red > 0 && this.player.blue > 0 &&
  //     this.player.green > 0) {
  //
  //       this.player.red -= 1;
  //       this.player.blue -= 1;
  //       this.player.green -= 1;
  //       this.player.buildings.push(1);
  //       this.player.points++;
  //       $p1Points.text(`Player 1 points: ${game.player.points}`)
  //       console.log(game.player.buildings, " :in function");
  //       this.player.showStats();
  //     } else {
  //       $buyButton.prop(`disabled`, true);
  //       console.log('not enough resources');
  //     }
  //   },

  showStats() {
   const $pName = $(`#p${this.id}Name`);
   const $pRed = $(`#p${this.id}Red`);
   const $pBlue = $(`#p${this.id}Blue`);
   const $pGreen = $(`#p${this.id}Green`);
   const $pPoints = $(`#p${this.id}Points`);
   const $pActions = $(`#p${this.id}Actions`);

   $pName.text(`${this.name}`);
   $pRed.text(`Red: ${this.red}`);
   $pBlue.text(`Blue: ${this.blue}`);
   $pGreen.text(`Green: ${this.green}`);
   $pPoints.text(`Score: ${this.points}`);
   $pActions.text(`Actions: ${this.actions}`);

  }

};
const game = {
  rounds: 1,
  player: [], //array of players for multi
  turnCounter: 4, //will  need to be 2x the number of names in array
  sum: null,
  currentPlayer: 0,

  // start(){
  //    $('form').hide();
  // },

  // consider writing one function that takes an input of
  // the event listener (console.log([e.target]);)
  createPlayer(){
    const idNumber = this.player.length + 1;
    const user = new User(idNumber, $('#inputBox').val());
    this.player.push(user);
    console.log(this.player);
    user.showStats();
    $('#inputBox').val('');
    $('#inputBox').attr('placeholder', 'Player 2 name');

    // change attr of placeholder with interpolation of array index
  },
  currentTurn(){
    const $playersTurn = $('#turn');
    $playersTurn.text(`| ${this.player[game.currentPlayer].name}'s  Turn`);


  },
  currentRound(){
    const $gameRound = $('#rounds');
    $gameRound.text(`Round: ${this.rounds} |`);


  },
  // curPlayer(){
  //   this.currentPlayer = this.player[this.turnCounter % 2];
  // },
  // sumPointsArray(){
  // this.player.buildings.reduce(reducer);
  //
  // },
  endTurn(){
    // if currentPlayer is array.length-1
      // currentPlayer = 0
    // else
      // currentPlayer++

      if (this.player[game.currentPlayer].actions === 0) {
        this.turnCounter--;
        this.player[game.currentPlayer].actions++;

      if (this.currentPlayer === this.player.length - 1) {
          this.currentPlayer = 0;
      } else {
          this.currentPlayer++;
        }
      }
  },
  endRound(){
    //const $rounds = $('#rounds');
    this.turnCounter += 4;
    this.rounds++;
    currentRound();
    //$rounds.text(`Round: ${this.rounds}`);

  },
  endGame(){
    if (this.rounds === 9) {

    }
  },
  buttonsDisable(){
    const $actionButtons = $(`.actionButtons`);
    if (game.rounds === 9) {
      $actionButtons.prop(`disabled`, true);
    } else {
      $actionButtons.prop(`disabled`, false);
    }
  }
}
// consider using e.target to design one reusable handler
$('#red').on('click', (e) => {
  console.log($([e.target]).text())
  if (game.player[game.currentPlayer].actions > 0) {
    game.player[game.currentPlayer].addRed();


  } else {
      const $redButton = $(`#red`);
      $redButton.prop(`disabled`, true);
    console.log('No more actions available');
  }
});

$('#blue').on('click', () => {
  if (game.player[game.currentPlayer].actions > 0) {
    game.player[game.currentPlayer].addBlue();


  } else {
      const $blueButton = $(`#blue`);
      $blueButton.prop(`disabled`, true);
      console.log('No more actions available');
  }
});

$('#green').on('click', () => {
  if (game.player[game.currentPlayer].actions > 0) {
    game.player[game.currentPlayer].addGreen();


  } else {
      const $greenButton = $(`#green`);
      $greenButton.prop(`disabled`, true);
      console.log('No more actions available');
  }
});

$('#random').on('click', () => {
  if (game.player[game.currentPlayer].actions > 0) {
    game.player[game.currentPlayer].addRandom();
    game.player[game.currentPlayer].addRandom();
    game.player[game.currentPlayer].addRandom();
    game.player[game.currentPlayer].actions--;

  } else {
      const $randomButton = $(`#random`);
      $randomButton.prop(`disabled`, true);
      console.log('No more actions available');
  }

});

// $('#buy').on('click', () => {
//   game.buyBasicBuilding();
//   console.log(game.player.buildings,' :event');
// });

$('#endTurn').on('click', () => {
  game.endTurn();
  game.currentTurn();
  game.buttonsDisable();
});

$('form').on('submit', (e) => {
  e.preventDefault();
  game.createPlayer();

  // change attr of placeholder with interpolation of array index

});
$('#start').on('click', () => {
  $('form').hide();
  game.currentTurn();
  game.currentRound();
});
