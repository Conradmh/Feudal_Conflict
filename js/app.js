class User {
  constructor(name){
    this.red = null,
    this.blue = null,
    this.green = null,
    this.points = null,
    this.buildins = []

  }
}

const game = {
  rounds: null,
  turns: null,
  player: null,

  start(){
    const user = new User($('#inputBox').val());
    this.player = user;


  },
  // generates and allocates resource selections
  addRed(){
    this.player.red += 2 ;

  },
  addBlue(){
    this.player.blue += 2 ;

  },
  addGreen(){
    this.player.green += 2 ;

  },
  addRandom(){
    //this.player.red += 3 ;

  },
}

$('#red').on('click', () => {
  game.player.addRed();

});
$('#blue').on('click', () => {
  game.player.addBlue();

});
$('#green').on('click', () => {
  game.player.addGreen();

});
