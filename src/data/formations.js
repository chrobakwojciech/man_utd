const width = 1053
const height = 725;

const forwardLine = height * 0.18;
const midfielderLine = height * 0.42;
const defenderLine = height * 0.65;
const gkLine = height * 0.8;

const F4231 = [
    { name: 'bramkarz', x: width * 0.5, y: gkLine },

    { name: 'prawy obrońca', x: width * 0.78, y: defenderLine - 20 },
    { name: 'środkowy obrońca', x: width * 0.6, y: defenderLine },
    { name: 'środkowy obrońca', x: width * 0.4, y: defenderLine },
    { name: 'lewy obrońca', x: width * 0.22, y: defenderLine - 20 },

    { name: 'środkowy pomocnik', x: width * 0.62, y: midfielderLine + 40 },
    { name: 'środkowy pomocnik', x: width * 0.38, y: midfielderLine + 40 },

    { name: 'prawy skrzydłowy', x: width * 0.7, y: forwardLine + 50 },
    { name: 'ofensywny pomocnik', x: width * 0.5, y: midfielderLine - 60 },
    { name: 'lewy skrzydłowy', x: width * 0.3, y: forwardLine + 50 },

    { name: 'napastnik', x: width * 0.5, y: forwardLine },
]

const F433 = [
    { name: 'bramkarz', x: width * 0.5, y: gkLine },

    { name: 'bramkarz', x: width * 0.78, y: defenderLine - 20 },
    { name: 'bramkarz', x: width * 0.6, y: defenderLine },
    { name: 'bramkarz', x: width * 0.4, y: defenderLine },
    { name: 'bramkarz', x: width * 0.22, y: defenderLine - 20 },

    { name: 'bramkarz', x: width * 0.62, y: midfielderLine - 20 },
    { name: 'bramkarz', x: width * 0.5, y: midfielderLine + 50 },
    { name: 'bramkarz', x: width * 0.38, y: midfielderLine - 20 },

    { name: 'bramkarz', x: width * 0.7, y: forwardLine + 20 },
    { name: 'bramkarz', x: width * 0.5, y: forwardLine },
    { name: 'bramkarz', x: width * 0.3, y: forwardLine + 20 },
]

const F442 = [
    { name: 'bramkarz', x: width * 0.5, y: gkLine },

    { name: 'bramkarz', x: width * 0.78, y: defenderLine - 20 },
    { name: 'bramkarz', x: width * 0.6, y: defenderLine },
    { name: 'bramkarz', x: width * 0.4, y: defenderLine },
    { name: 'bramkarz', x: width * 0.22, y: defenderLine - 20 },

    { name: 'bramkarz', x: width * 0.74, y: midfielderLine - 30 },
    { name: 'bramkarz', x: width * 0.59, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.41, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.26, y: midfielderLine - 30 },

    { name: 'bramkarz', x: width * 0.58, y: forwardLine },
    { name: 'bramkarz', x: width * 0.42, y: forwardLine },
]

const F352 = [
    { name: 'bramkarz', x: width * 0.5, y: gkLine },

    { name: 'bramkarz', x: width * 0.65, y: defenderLine - 10 },
    { name: 'bramkarz', x: width * 0.5, y: defenderLine },
    { name: 'bramkarz', x: width * 0.35, y: defenderLine - 10 },

    { name: 'bramkarz', x: width * 0.75, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.6, y: midfielderLine + 40 },
    { name: 'bramkarz', x: width * 0.5, y: midfielderLine - 50 },
    { name: 'bramkarz', x: width * 0.4, y: midfielderLine + 40 },
    { name: 'bramkarz', x: width * 0.25, y: midfielderLine + 20 },

    { name: 'bramkarz', x: width * 0.58, y: forwardLine },
    { name: 'bramkarz', x: width * 0.42, y: forwardLine },
]

const F343 = [
    { name: 'bramkarz', x: width * 0.5, y: gkLine },

    { name: 'bramkarz', x: width * 0.67, y: defenderLine - 10 },
    { name: 'bramkarz', x: width * 0.5, y: defenderLine },
    { name: 'bramkarz', x: width * 0.33, y: defenderLine - 10 },

    { name: 'bramkarz', x: width * 0.74, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.58, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.42, y: midfielderLine + 20 },
    { name: 'bramkarz', x: width * 0.26, y: midfielderLine + 20 },

    { name: 'bramkarz', x: width * 0.67, y: forwardLine + 30 },
    { name: 'bramkarz', x: width * 0.5, y: forwardLine },
    { name: 'bramkarz', x: width * 0.33, y: forwardLine + 30 },
]

export const formations = {
    '4-3-3': F433,
    '4-2-3-1': F4231,
    '4-4-2': F442,
    '3-5-2': F352,
    '3-4-3': F343
}
