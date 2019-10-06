class User {
  constructor(name){
    this.name = name,
    this.red = 0,
    this.blue = 0,
    this.green = 0,
    this.points = 0,
    this.buildings = []

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
  player: null,
  turnCounter: 2,
  sum: null,

  start(){
    const user = new User($('#inputBox').val());
    this.player = user;

  },
  // generates and allocates resource selections
  addRed(){
    this.player.red += 1 ;
    console.log(this.player.red, " :addRed function");
  },
  addBlue(){
    this.player.blue += 1 ;
    console.log(this.player.blue, ' :addBlue function');
  },
  addGreen(){
    this.player.green += 1 ;
    console.log(this.player.green, " :addGreenfunction");
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
  },
  buyBasicBuilding(){
    //const building = new Structure (basic);
    const $p1Points = $('#p1Points');
    if (this.player.red > 0 && this.player.blue > 0 &&
      this.player.green > 0) {

        this.player.red -= 1;
        this.player.blue -= 1;
        this.player.green -= 1;
        this.player.buildings.push(1);
        this.player.points++;
        $p1Points.text(`Player 1 points: ${game.player.points}`)
        console.log(game.player.buildings, " :in function");
    } else {
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
  }
}

$('#red').on('click', () => {
  if (game.turnCounter > 0) {
    game.addRed();
    game.addRed();
    game.turnCounter--;
  } else {
    console.log('No more actions available');
  }
});

$('#blue').on('click', () => {
  if (game.turnCounter > 0) {
    game.addBlue();
    game.addBlue();
    game.turnCounter--;
  } else {
    console.log('No more actions available');
  }
});

$('#green').on('click', () => {
  if (game.turnCounter > 0) {
    game.addGreen();
    game.addGreen();
    game.turnCounter--;
  } else {
    console.log('No more actions available');
  }
});

$('#random').on('click', () => {
  if (game.turnCounter > 0) {
    game.addRandom();
    game.addRandom();
    game.addRandom();
    game.turnCounter--;
  } else {
    console.log('No more actions available');
  }
  console.log(game.player.red, " :red");
  console.log(game.player.blue, " :blue");
  console.log(game.player.green, " :green");
});

$('#purchase').on('click', () => {
  game.buyBasicBuilding();

  console.log(game.player.buildings,' :event');

});

$('#endTurn').on('click', () => {
  game.endTurn();



});
$('form').on('submit', (e) => {
  $('#inputBox').val()
  e.preventDefault();
  $('form').hide();
  $('inputBox').html();
  game.start();
});
