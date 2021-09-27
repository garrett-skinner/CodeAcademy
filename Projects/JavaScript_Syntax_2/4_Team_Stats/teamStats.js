let team = {
    _players: [
        {
            firstName: 'Pablo',
            lastName : 'Sanchez',
            age: 11
        },
        {
            firstName: 'Mark',
            lastName: 'Snark',
            age: 14
        },
        {
            firstName: 'Steven',
            lastName: 'Strange',
            age: 40
        }
    ],
    _games: [
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Steelers',
            teamPoints: 28,
            opponentPoints: 35
        },
        {
            opponent: 'Patriots',
            teamPoints: 31,
            opponentPoints: 49
        }
    ],
    get players() {
        return this._players;
    },
    get games() {
        return this._games;
    },
    addPlayer(firstName, lastName, age) {
        let newPlayer = {
            firstName,
            lastName,
            age
        }
        this.players.push(newPlayer);
    },
    addGame(opponent, teamPoints, opponentPoints) {
        let newGame = {
            opponent,
            teamPoints,
            opponentPoints
        }
        this.games.push(newGame);
    }
}

// Call addPlayer three times.
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
// Call addGame three times.
team.addGame('Packers', 45, 21);
team.addGame('Bengals', 21, 35);
team.addGame('Browns', 55, 14);

// Log the results.
console.log(team.players);
console.log(team.games);