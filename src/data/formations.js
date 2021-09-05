const width = 1053
const height = 725;

const forwardLine = height * 0.18;
const midfielderLine = height * 0.42;
const defenderLine = height * 0.65;
const gkLine = height * 0.8;

const F4231 = [
    { x: width * 0.5, y: gkLine },

    { x: width * 0.78, y: defenderLine - 20 },
    { x: width * 0.6, y: defenderLine },
    { x: width * 0.4, y: defenderLine },
    { x: width * 0.22, y: defenderLine - 20 },

    { x: width * 0.62, y: midfielderLine + 40 },
    { x: width * 0.38, y: midfielderLine + 40 },

    { x: width * 0.7, y: forwardLine + 50 },
    { x: width * 0.5, y: midfielderLine - 60 },
    { x: width * 0.3, y: forwardLine + 50 },

    { x: width * 0.5, y: forwardLine },
]

const F433 = [
    { x: width * 0.5, y: gkLine },

    { x: width * 0.78, y: defenderLine - 20 },
    { x: width * 0.6, y: defenderLine },
    { x: width * 0.4, y: defenderLine },
    { x: width * 0.22, y: defenderLine - 20 },

    { x: width * 0.62, y: midfielderLine - 20 },
    { x: width * 0.5, y: midfielderLine + 50 },
    { x: width * 0.38, y: midfielderLine - 20 },

    { x: width * 0.7, y: forwardLine + 20 },
    { x: width * 0.5, y: forwardLine },
    { x: width * 0.3, y: forwardLine + 20 },
]

const F442 = [
    { x: width * 0.5, y: gkLine },

    { x: width * 0.78, y: defenderLine - 20 },
    { x: width * 0.6, y: defenderLine },
    { x: width * 0.4, y: defenderLine },
    { x: width * 0.22, y: defenderLine - 20 },

    { x: width * 0.74, y: midfielderLine - 30 },
    { x: width * 0.59, y: midfielderLine + 20 },
    { x: width * 0.41, y: midfielderLine + 20 },
    { x: width * 0.26, y: midfielderLine - 30 },

    { x: width * 0.58, y: forwardLine },
    { x: width * 0.42, y: forwardLine },
]

const F352 = [
    { x: width * 0.5, y: gkLine },

    { x: width * 0.65, y: defenderLine - 10 },
    { x: width * 0.5, y: defenderLine },
    { x: width * 0.35, y: defenderLine - 10 },

    { x: width * 0.75, y: midfielderLine + 20 },
    { x: width * 0.6, y: midfielderLine + 40 },
    { x: width * 0.5, y: midfielderLine - 50 },
    { x: width * 0.4, y: midfielderLine + 40 },
    { x: width * 0.25, y: midfielderLine + 20 },

    { x: width * 0.58, y: forwardLine },
    { x: width * 0.42, y: forwardLine },
]

const F343 = [
    { x: width * 0.5, y: gkLine },

    { x: width * 0.67, y: defenderLine - 10 },
    { x: width * 0.5, y: defenderLine },
    { x: width * 0.33, y: defenderLine - 10 },

    { x: width * 0.74, y: midfielderLine + 20 },
    { x: width * 0.58, y: midfielderLine + 20 },
    { x: width * 0.42, y: midfielderLine + 20 },
    { x: width * 0.26, y: midfielderLine + 20 },

    { x: width * 0.67, y: forwardLine + 30 },
    { x: width * 0.5, y: forwardLine },
    { x: width * 0.33, y: forwardLine + 30 },
]

export const formations = {
    '4-3-3': F433,
    '4-2-3-1': F4231,
    '4-4-2': F442,
    '3-5-2': F352,
    '3-4-3': F343
}
