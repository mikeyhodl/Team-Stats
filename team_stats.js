const team = {
  _players: [
    				{firstName: 'Pablo', lastName: 'Sanchez', age: 23},
            {firstName: 'Huan', lastName: 'Lopes', age: 27},
            {firstName: 'Diego', lastName: 'Maradonna', age: 32}
  				 ],
  _games: [
    				{opponent: "Broncos", teamPoints: 42, opponentPoints: 27},
            {opponent: "Sparta", teamPoints: 39, opponentPoints: 29},
            {opponent: "Stars", teamPoints: 40, opponentPoints: 22}
  				],

	get players(){return this._players;},

  get games(){return this._games;},
	

  addPlayer(firstName, lastName, age){
  	let player = {firstName: firstName,
  							  lastName: lastName,
  								age: age};
    this._players.push(player);
	},

  addGame(opponent, teamPoints, opponentPoints){
    let game = {opponent: opponent,
      					teamPoints: teamPoints,
                opponentPoints: opponentPoints};
    this._games.push(game);
  }
}

team.addPlayer('Steph', 'Curry', '28');
team.addPlayer('Lisa', 'Leslie', '44');

console.log(team.players);

team.addGame('Eagls', 38, 25);
console.log(team.games);
