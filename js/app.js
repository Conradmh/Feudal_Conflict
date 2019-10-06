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
  rounds: null,
  turns: null,
  player: null,

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
    let randomRes = Math.floor(Math.random()*2) + 1;
      console.log(randomRes, ":randon int");
    if (randomRes == 1) {
      this.addRed();
    } else if (randomRes == 2) {
      this.addBlue();
    } else {
      this.addGreen();
    }
    console.log(this.player.red, " :red");
    console.log(this.player.blue, " :blue");
    console.log(this.player.green, " :green");
  },
  buyBasicBuilding(){
    //const building = new Structure (basic);

    this.player.red -= 1;
    this.player.blue -= 1;
    this.player.green -= 1;
    this.player.buildings = this.player.buildings.push(1);
    console.log(game.player.buildings, " :in function");

  }
}

$('#red').on('click', () => {
  game.addRed();
  game.addRed();
});

$('#blue').on('click', () => {
  game.addBlue();
  game.addBlue();

});

$('#green').on('click', () => {
  game.addGreen();
  game.addGreen();

});

$('#random').on('click', () => {
  game.addRandom();
  game.addRandom();
  game.addRandom();

});

$('#purchase').on('click', () => {
  game.buyBasicBuilding();
  console.log(game.player.buildings,' :event');

});
$('form').on('submit', (e) => {
  $('#inputBox').val()
  e.preventDefault();
  $('form').hide();
  $('inputBox').html();
  game.start();
});
