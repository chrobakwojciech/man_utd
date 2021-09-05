const position = {
    GOALKEEPER: 0,
    DEFENDER: 1,
    MIDFIELDER: 2,
    FORWARD: 3,
    UNKNOWN: 4
}

const goalkeepers = [
    { positionType: position.GOALKEEPER, name: 'De Gea', number: 1 },
    { positionType: position.GOALKEEPER, name: 'Henderson', number: 26 },
    { positionType: position.GOALKEEPER, name: 'Heaton', number: 22 },
    { positionType: position.GOALKEEPER, name: 'Grant', number: 13 }
]

const defenders = [
    { positionType: position.DEFENDER, name: 'Lindelof', number: 2 },
    { positionType: position.DEFENDER, name: 'Bailly', number: 3 },
    { positionType: position.DEFENDER, name: 'Jones', number: 4 },
    { positionType: position.DEFENDER, name: 'Maguire', number: 5 },
    { positionType: position.DEFENDER, name: 'Shaw', number: 23 },
    { positionType: position.DEFENDER, name: 'Telles', number: 27 },
    { positionType: position.DEFENDER, name: 'Wan-Bissaka', number: 29 },
    { positionType: position.DEFENDER, name: 'Dalot', number: 20 },
    { positionType: position.DEFENDER, name: 'Mengi', number: 43 },
    { positionType: position.DEFENDER, name: 'Varane', number: 19 }
]

const midfielders = [
    { positionType: position.MIDFIELDER, name: 'Pogba', number: 6 },
    { positionType: position.MIDFIELDER, name: 'Fred', number: 17 },
    { positionType: position.MIDFIELDER, name: 'Fernandes', number: 18 },
    { positionType: position.MIDFIELDER, name: 'Matic', number: 31 },
    { positionType: position.MIDFIELDER, name: 'van de Beek', number: 34 },
    { positionType: position.MIDFIELDER, name: 'McTominay', number: 39 },
    { positionType: position.MIDFIELDER, name: 'Mejbri', number: 46 },
    { positionType: position.MIDFIELDER, name: 'Lingard', number: 14 },
    { positionType: position.MIDFIELDER, name: 'Mata', number: 8 }
]

const forwards = [
    { positionType: position.FORWARD, name: 'Cavani', number: 21 },
    { positionType: position.FORWARD, name: 'Martial', number: 9 },
    { positionType: position.FORWARD, name: 'Rashford', number: 10 },
    { positionType: position.FORWARD, name: 'Greenwood', number: 11 },
    { positionType: position.FORWARD, name: 'Amad', number: 16 },
    { positionType: position.FORWARD, name: 'Elanga', number: 36 },
    { positionType: position.FORWARD, name: 'Shoretire', number: 47 },
    { positionType: position.FORWARD, name: 'Sancho', number: 25 },
    { positionType: position.FORWARD, name: 'Ronaldo', number: 7 }
]

export const defaultPlayer = { positionType: position.UNKNOWN, name: '', number: 0 };

const playersArray = [
    ...goalkeepers,
    ...defenders,
    ...midfielders,
    ...forwards
].sort((a, b) => a.positionType === b.positionType ? a.number - b.number : a.positionType - b.positionType)


export const AVAILABLE_PLAYERS = playersArray.reduce(function(result, item, index, array) {
    result[item.number] = {
        ...item,
        order: index
    };
    return result;
}, {})
console.log(AVAILABLE_PLAYERS);