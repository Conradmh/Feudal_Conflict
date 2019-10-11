class User {
  constructor(id, name){
    this.name = name,
    this.id = id,
    this.actions = 1,
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
  buyBasicBuilding(){
  //   //const building = new Structure (basic);
  //
  //   //reformat this to put the 'this.' in the player class and call it

    const $buyButton = $(`#buy`);
    if (this.red > 0 && this.blue > 0 &&
      this.green > 0) {

        this.red -= 1;
        this.blue -= 1;
        this.green -= 1;
        this.buildings.push(1);
        this.points++;
      } else {
        //$buyButton.prop(`disabled`, true);
        console.log('not enough resources');
      }
  }

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
    $('#inputBox').attr('placeholder', `Player ${game.player.length + 1} name`);
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

  endTurn(){

      if (this.player[game.currentPlayer].actions === 0) {
        this.turnCounter--;
        this.player[game.currentPlayer].actions++;

      if (this.currentPlayer === this.player.length - 1) {
          this.currentPlayer = 0;
      } else {
          this.currentPlayer++;
        }
      }
      this.endRound();
  },
  endRound(){
    if (this.turnCounter === 0) {
      this.turnCounter += 4;
      this.rounds++;
      this.currentRound();
      this.endGame();
    }
  },

  getWinner(){
    let winningPlayer = null;
    if (this.player[0].points < this.player[1].points) {
      winningPlayer = this.player[1].name;
    } else if (this.player[0].points > this.player[1].points) {
      winningPlayer = this.player[0].name;
    } else {
      winningPlayer = 'Its a Tie!'
    } return winningPlayer;

    // .map .sort max.math
    // let winningInt = null;
    //   for (let i = 0; i < this.player.length; i++) {
    //   Math.max(this.player.points);
    //   }
    // }
  },

  endGame(){
    const $clearScreen = $('.game');
    const $winScreen = $('.winScreenContainer');
    const $winMessage = $('#winMessage');
    if (this.rounds === 9) {
      $winMessage.text(`Player ${this.getWinner()} wins!`);
      $clearScreen.addClass('hidden');
      $winScreen.removeClass('hidden');
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

$('#buy').on('click', () => {
  game.player[game.currentPlayer].buyBasicBuilding();
  game.player[game.currentPlayer].showStats();
});

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
  $('.submitContainer').hide();
  $('.startButton').css('height', 0).addClass('hidden'); 'display', 'none'
  $('.game').removeClass('hidden');
  game.currentTurn();
  game.currentRound();
});

$('#newGame').on('click', () => {
  location.reload(true);
});
