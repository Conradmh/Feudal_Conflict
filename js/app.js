class User {
  constructor(name){
    this.name = name,
    this.red = 0,
    this.blue = 0,
    this.green = 0,
    this.points = 0,
    this.buildings = []

  }

  showStats() {
    const $p1Name = $(`#p1Name`);
    const $p1Red = $(`#p1Red`);
    const $p1Blue = $(`#p1Blue`);
    const $p1Green = $(`#p1Green`);
    const $p1Points = $(`#p1Points`);

    $p1Name.text(`${game.player.name}`);
    $p1Red.text(`Red: ${game.player.red}`);
    $p1Blue.text(`Blue: ${game.player.blue}`);
    $p1Green.text(`Green: ${game.player.green}`);
    $p1Points.text(`Score: ${game.player.points}`);

  }

};
// class Structure {
//   constructor(name){
//     this.name = name,
//     this.points = 0,
//   }
// }
const game = {
  rounds: 1,
  turns: null,
  player: [], //array of players for multi
  turnCounter: 2,
  sum: null,
//players: null, number of players as a property
  start(){
  //   this.createPlayer();
  //   this.createPlayer();
     $('form').hide();
  //   //user.showStats();
  //
  },

  // consider writing one function that takes an input of
  // the event listener (console.log([e.target]);)
  createPlayer(){
    const user = new User($('#inputBox').val());
    this.player.push(user);
    console.log(this.player);
    user.showStats();
    $('#inputBox').val('');
    $('#inputBox').attr('placeholder', 'Player 2 name');

    // change attr of placeholder with interpolation of array index
  },
  addRed(){
    this.player.red += 1 ;
    console.log(this.player.red, " :addRed function");
    this.player.showStats();

  },
  addBlue(){
    this.player.blue += 1 ;
    console.log(this.player.blue, ' :addBlue function');
    this.player.showStats();

  },
  addGreen(){
    this.player.green += 1 ;
    console.log(this.player.green, " :addGreenfunction");
    this.player.showStats();
  },
  addRandom(){
    //this.player.red += 3 ;
    let randomRes = Math.floor(Math.random()*3);
      console.log(randomRes, ":randon int");
    if (randomRes == 0) {
      this.addRed();
    } else if (randomRes == 1) {
      this.addBlue();
    } else {
      this.addGreen();
    }
    this.player.showStats();
  },
  buyBasicBuilding(){
    //const building = new Structure (basic);

    //reformat this to put the 'this.' in the player class and call it
    const $p1Points = $('#p1Points');
    const $buyButton = $(`#buy`);
    if (this.player.red > 0 && this.player.blue > 0 &&
      this.player.green > 0) {

        this.player.red -= 1;
        this.player.blue -= 1;
        this.player.green -= 1;
        this.player.buildings.push(1);
        this.player.points++;
        $p1Points.text(`Player 1 points: ${game.player.points}`)
        console.log(game.player.buildings, " :in function");
        this.player.showStats();
    } else {
      $buyButton.prop(`disabled`, true);
      console.log('not enough resources');
    }
  },
  sumPointsArray(){
  this.player.buildings.reduce(reducer);


  },
  endTurn(){
    const $rounds = $('#rounds');
    if (this.turnCounter === 0) {
      this.turnCounter += 2;
      game.rounds++;
      $rounds.text(`Round: ${game.rounds}`);
    }
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

$('#red').on('click', (e) => {
  console.log($([e.target]).text())
  if (game.turnCounter > 0) {
    game.addRed();
    game.addRed();
    game.turnCounter--;
    //user.showStats();DUCATION
  } else {
      const $redButton = $(`#red`);
      $redButton.prop(`disabled`, true);
    console.log('No more actions available');
  }
});

$('#blue').on('click', () => {
  if (game.turnCounter > 0) {
    game.addBlue();
    game.addBlue();
    game.turnCounter--;
  //  user.showStats();
  } else {
      const $blueButton = $(`#blue`);
      $blueButton.prop(`disabled`, true);
      console.log('No more actions available');
  }
});

$('#green').on('click', () => {
  if (game.turnCounter > 0) {
    game.addGreen();
    game.addGreen();
    game.turnCounter--;
    //user.showStats();
  } else {
      const $greenButton = $(`#green`);
      $greenButton.prop(`disabled`, true);
      console.log('No more actions available');
  }
});

$('#random').on('click', () => {
  if (game.turnCounter > 0) {
    game.addRandom();
    game.addRandom();
    game.addRandom();
    game.turnCounter--;
  //  user.showStats();
  } else {
      const $randomButton = $(`#random`);
      $randomButton.prop(`disabled`, true);
      console.log('No more actions available');
  }
  console.log(game.player.red, " :red");
  console.log(game.player.blue, " :blue");
  console.log(game.player.green, " :green");
});

$('#buy').on('click', () => {
  game.buyBasicBuilding();
//  user.showStats();

  console.log(game.player.buildings,' :event');

});

$('#endTurn').on('click', () => {
  game.endTurn();
  game.buttonsDisable();


});
$('form').on('submit', (e) => {
  // $('#inputBox').val();
  e.preventDefault();
  game.createPlayer();
  // $('form').hide();
  // $('form').hide();
  // $('inputBox').html();
  // change attr of placeholder with interpolation of array index
  //game.createPlayer();
  // game.start();
});
$('#start').on('click', () => {

  $('form').hide();

});
//game.start();
