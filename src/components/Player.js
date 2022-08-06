import '../App.css';
import {Sprite, Graphics, Container, Text} from '@inlet/react-pixi';
import React from "react";
import {TextStyle} from "pixi.js";
import {ColorOverlayFilter} from '@pixi/filter-color-overlay';
import {red, white, blue} from "../colors";

const width = 140;
const circleRadius = (width * 0.6)/2
const heightRect = 22
const widthRect = heightRect*1.1
const rectShift = circleRadius - (heightRect/1.3)

function Player({index, context}) {
    const { theme, players, movePlayer } = context;
    const player = players[index]
    const position = player.position;

    const color = theme === 'cl' ? blue : red;
    const filter = new ColorOverlayFilter(color, color === red ? 0.05 : 0.12)

    const onDragStart = (event) => {
        const container = event.currentTarget;
        container.dragging = true;
    };

    const onDragEnd = (event) => {
        const container = event.currentTarget;
        container.dragging = false;
        movePlayer(index, event.data.global.x, event.data.global.y)
    };

    const onDragMove = (event) => {
        const container = event.currentTarget;
        if (container.dragging) {
            container.position.x = event.data.global.x
            container.position.y = event.data.global.y
        }
    };

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
    }, [color])

    return (
        <Container interactive pointerdown={onDragStart}
                   pointerup={onDragEnd}
                   pointerupoutside={onDragEnd}
                   pointermove={onDragMove} position={[position.x, position.y]} >
            <Graphics draw={faceBgCircle} />
            <Sprite filters={[filter]}
                image={`${process.env.PUBLIC_URL}/img/players/${player.number}.png`}
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
                        fontFamily: '"Montserrat", sans-serif',
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
                        fontFamily: '"Montserrat", sans-serif',
                        fontSize: 14,
                        fontWeight: 600,
                        fill: ['#000']
                    })
                }
            />
        </Container>)
}

export default Player;