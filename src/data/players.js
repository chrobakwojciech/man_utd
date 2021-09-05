const position = {
    GOALKEEPER: 0,
    DEFENDER: 1,
    MIDFIELDER: 2,
    FORWARD: 3,
    UNKNOWN: 4
}

const goalkeepers = [
    { position: position.GOALKEEPER, name: 'De Gea', number: 1 },
    { position: position.GOALKEEPER, name: 'Henderson', number: 26 },
    { position: position.GOALKEEPER, name: 'Heaton', number: 22 },
    { position: position.GOALKEEPER, name: 'Grant', number: 13 }
]

const defenders = [
    { position: position.DEFENDER, name: 'Lindelof', number: 2 },
    { position: position.DEFENDER, name: 'Bailly', number: 3 },
    { position: position.DEFENDER, name: 'Jones', number: 4 },
    { position: position.DEFENDER, name: 'Maguire', number: 5 },
    { position: position.DEFENDER, name: 'Shaw', number: 23 },
    { position: position.DEFENDER, name: 'Telles', number: 27 },
    { position: position.DEFENDER, name: 'Wan-Bissaka', number: 29 },
    { position: position.DEFENDER, name: 'Dalot', number: 20 },
    { position: position.DEFENDER, name: 'Mengi', number: 43 },
    { position: position.DEFENDER, name: 'Varane', number: 19 }
]

const midfielders = [
    { position: position.MIDFIELDER, name: 'Pogba', number: 6 },
    { position: position.MIDFIELDER, name: 'Fred', number: 17 },
    { position: position.MIDFIELDER, name: 'Fernandes', number: 18 },
    { position: position.MIDFIELDER, name: 'Matic', number: 31 },
    { position: position.MIDFIELDER, name: 'van de Beek', number: 34 },
    { position: position.MIDFIELDER, name: 'McTominay', number: 39 },
    { position: position.MIDFIELDER, name: 'Mejbri', number: 46 },
    { position: position.MIDFIELDER, name: 'Lingard', number: 14 },
    { position: position.MIDFIELDER, name: 'Mata', number: 8 }
]

const forwards = [
    { position: position.FORWARD, name: 'Cavani', number: 21 },
    { position: position.FORWARD, name: 'Martial', number: 9 },
    { position: position.FORWARD, name: 'Rashford', number: 10 },
    { position: position.FORWARD, name: 'Greenwood', number: 11 },
    { position: position.FORWARD, name: 'Amad', number: 16 },
    { position: position.FORWARD, name: 'Elanga', number: 36 },
    { position: position.FORWARD, name: 'Shoretire', number: 47 },
    { position: position.FORWARD, name: 'Sancho', number: 25 },
    { position: position.FORWARD, name: 'Ronaldo', number: 7 }
]

export const defaultPlayer = { position: position.UNKNOWN, name: '', number: 0 };

const playersArray = [
    ...goalkeepers,
    ...defenders,
    ...midfielders,
    ...forwards
].sort((a, b) => a.position === b.position ? a.number - b.number : a.position - b.position)

export const players = playersArray.reduce(function(result, item, index, array) {
    result[item.number] = item;
    return result;
}, {})