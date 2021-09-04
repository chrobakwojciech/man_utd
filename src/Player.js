import './App.css';
import {Sprite, Graphics, Container,Text, InteractionEvents} from '@inlet/react-pixi';
import React from "react";
import {TextStyle} from "pixi.js";
import {ColorOverlayFilter} from '@pixi/filter-color-overlay';
import {red, white, blue} from "./colors";
import {defaultPlayer} from "./data/players";

const width = 140;
const circleRadius = (width * 0.6)/2
const heightRect = 22
const widthRect = heightRect*1.1
const rectShift = circleRadius - (heightRect/1.3)

const onDragStart = (event) => {
    const container = event.currentTarget;
    container.dragging = true;
};

const onDragEnd = (event) => {
    const container = event.currentTarget;
    container.dragging = false;
};

const onDragMove = (event) => {
    const container = event.currentTarget;
    if (container.dragging) {
        container.position.x = event.data.global.x
        container.position.y = event.data.global.y
    }
};

function Player({x = 0, y = 0, player = defaultPlayer, theme = 'pl'}) {
    const color = theme === 'cl' ? blue : red;
    const filter = new ColorOverlayFilter(color, 0.05)
    const faceBgCircle = React.useCallback(g => {
        g.clear()
        g.lineStyle(0)
        g.beginFill(white, 1.0)
        g.drawCircle(0, 0, circleRadius)
        g.endFill()
    }, [])

    const nameBgRect = React.useCallback(g => {
        g.clear()
        g.beginFill(white, 1)
        g.drawRoundedRect(-width/2, rectShift, width, heightRect, 0)
        g.endFill()
    }, [])

    const numberBgRect = React.useCallback(g => {
        g.clear()
        g.beginFill(color, 1)
        g.drawRoundedRect(-width/2, rectShift, widthRect, heightRect, 0)
        g.endFill()
    }, [])

    return (
        <Container interactive pointerdown={onDragStart}
                   pointerup={onDragEnd}
                   pointerupoutside={onDragEnd}
                   pointermove={onDragMove} position={[x, y]} >
            <Graphics draw={faceBgCircle} />
            <Sprite filters={[filter]}
                image={`./${player.number}.png`}
                scale={{ x: 0.25, y: 0.25 }}
                anchor={0.5}
                x={0}
                y={-7}
            />
            <Graphics draw={nameBgRect} />
            <Graphics draw={numberBgRect} />

            <Text
                text={player.number}
                anchor={0.5}
                x={(-width/2) + (widthRect/2)}
                y={rectShift+(heightRect/2)}
                style={
                    new TextStyle({
                        align: 'center',
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: 16,
                        fontWeight: 700,
                        fill: ['#fff']
                    })
                }
            />

            <Text
                text={player.name.toUpperCase()}
                anchor={0.5}
                x={12}
                y={rectShift+(heightRect/2)}
                style={
                    new TextStyle({
                        align: 'center',
                        fontFamily: 'Helvetica, sans-serif',
                        fontSize: 14,
                        fontWeight: 500,
                        fill: ['#000']
                    })
                }
            />
        </Container>)
}

export default Player;