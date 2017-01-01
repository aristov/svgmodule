import { svg, g, circle, rect, line, polyline, polygon, image, style } from '../lib/svgdom'

const CANVAS_WIDTH = 1200
const CANVAS_HEIGHT = 600

const BLOCK_WALL = { X : 340 }
const GYPSUM_WALL = { X : 670 }
const BRICK_WALL = { X : 950 }

const CORNER = { X : 580 }

const studio = rect({
    x : 50, y : 50,
    width : 1100,
    height : 500,
    fill : '#fff',
    strokeWidth : 5
})

const brickwall = line({
    x1 : 950, y1 : 50,
    x2 : 950, y2 : 550,
    strokeWidth : 1,
})

const blockwall = line({
    x1 : 340,
    y1 : 50,
    x2 : 340,
    y2 : 550,
})

const gypsumwall = line({
    x1 : GYPSUM_WALL.X,
    y1 : 50,
    x2 : GYPSUM_WALL.X,
    y2 : 550,
})

const cornerwall = polyline({
    points : `50,140 ${CORNER.X},140 ${CORNER.X},550`,
    fill : 'transparent',
})

const runwaywall = line({
    x1 : 50,
    y1 : 360,
    x2 : BLOCK_WALL.X,
    y2 : 360,
})

const studiowall = line({
    x1 : BLOCK_WALL.X,
    y1 : 340,
    x2 : CORNER.X,
    y2 : 340,
})

const pantrywall = line({
    x1 : CORNER.X,
    y1 : 480,
    x2 : GYPSUM_WALL.X,
    y2 : 480,
})

const stairwall = line({
    x1 : 130,
    y1 : 140,
    x2 : 130,
    y2 : 360,
})

const neo = rect({
    className : 'room',
    x : GYPSUM_WALL.X,
    y : 50,
    width : BRICK_WALL.X - GYPSUM_WALL.X,
    height : 500,
})

const sol = rect({
    className : 'room',
    x : BLOCK_WALL.X,
    y : 140,
    width : CORNER.X - BLOCK_WALL.X,
    height : 200
})

const fa = rect({
    className : 'room',
    width : CORNER.X - BLOCK_WALL.X,
    height : 210,
    x : BLOCK_WALL.X,
    y : 340,
})

const piano = rect({
    className : 'room',
    width : 210,
    height : 220,
    x : 130,
    y : 140,
})

const forte = rect({
    className : 'room',
    width : 290,
    height : 190,
    x : 50,
    y : 360,
})

const automaster = svg({
    className : 'automaster',
    x : 627,
    y : 50,
    width : 40,
    height : 70,
    fill : 'rgba(44, 0, 255, 0.1)',
    children : [
        rect({
            x : 5,
            y : 5,
            width : 35,
            height : 60,
        })
    ]
})

const basscombo = svg({
    width : 100,
    height : 100,
    x : 50,
    y : 405,
    fill : '#777',
    children : [
        rect({
            x : 10,
            y : 10,
            width : 50,
            height : 79,
            stroke : 'rgba(60, 0, 60, 0.5)',
            strokeWidth : 2
        }),
        circle({
            cx : 35, cy : 50,
            r : 18,
            fill : 'rgba(180, 180, 180, 0.5)',
            stroke : '#999',
        }),
        circle({
            cx : 35, cy : 50,
            r : 8,
            fill : 'rgba(120, 120, 120, 0.7)',
            stroke : '#666',
        }),
        g({
            fill : 'transparent',
            stroke : '#999',
            children : [
                rect({
                    x : 20,
                    y : 77,
                    width : 30,
                    height : 5,
                }),
                circle({
                    cx : 22,
                    cy : 20,
                    r : 6,
                }),
                circle({
                    cx : 48,
                    cy : 20,
                    r : 6,
                }),
            ]
        })
    ]
})

const pipikMemory = localStorage.getItem('pipik')
const pipikZero = pipikMemory? JSON.parse(pipikMemory) : { x : 60, y : 320 }

const pipik = image({
    className : 'pipik',
    href : 'docs/pipik.jpg',
    width : 30,
    height : 30,
    x : pipikZero.x,
    y : pipikZero.y,
    onmousedown : ({ target }) => {
        target.classList.add('grabbed')
        const onmousemove = event => {
            if(pipik.classList.contains('grabbed')) {
                pipik.setAttribute('x', String(event.offsetX - pipik.width.baseVal.value / 2))
                pipik.setAttribute('y', String(event.offsetY - pipik.height.baseVal.value / 2))
            }
        }
        const onmouseup = () => {
            pipik.classList.remove('grabbed')
            document.removeEventListener('mouseup', onmouseup)
            document.removeEventListener('mousemove', onmousemove)
            localStorage.setItem('pipik', JSON.stringify({
                x : Math.min(
                    Math.max(pipik.x.baseVal.value, studio.x.baseVal.value),
                    studio.width.baseVal.value),
                y : Math.min(
                    Math.max(pipik.y.baseVal.value, studio.y.baseVal.value),
                    studio.height.baseVal.value)
            }))
        }
        document.addEventListener('mousemove', onmousemove)
        document.addEventListener('mouseup', onmouseup)
    },
})

const microphone = g({
    className : 'microphone',
    children : [
        circle({
            cx : 50,
            cy : 50,
            r : 40,
            stroke : '#888',
            fill : '#aaa'
        }),
        polygon({
            points : '30,85 70,85 65,250 35,250',
            stroke : '#333',
            fill : '#333'
        })
    ]
})

const microstand = g({
    className : 'microstand',
    stroke : '#aaa',
    strokeWidth : 2,
    fill : 'transparent',
    children : [
        rect({
            x : 725, y : 260,
            width : 150,
            height : 150,
            fill : 'transparent',
            stroke : 'transparent'
        }),
        line({ x1 : 800, y1 : 310, x2 : 800, y2 : 395 }),
        line({ x1 : 820, y1 : 290, x2 : 780, y2 : 330 }),
        polyline({ points : '784,384 800,370 830,383' }),
        microphone.cloneNode(true),
    ]
})

const canvas = svg({
    width : CANVAS_WIDTH,
    height : CANVAS_HEIGHT,
    viewBox : [0, 0, CANVAS_WIDTH, CANVAS_HEIGHT].join(' '),
    children : g({
        stroke : 'transparent',
        children : [
            studio,
            g({
                className : 'walls',
                stroke : 'transparent',
                // stroke : 'transparent',
                children : [
                    blockwall,
                    gypsumwall,
                    brickwall,
                    cornerwall,
                    runwaywall,
                    studiowall,
                    pantrywall,
                    stairwall,
                ]
            }),
            g({
                className : 'rooms',
                stroke : 'transparent',
                // stroke : 'transparent',
                children : [
                    neo,
                    sol,
                    fa,
                    piano,
                    forte,
                ]
            }),
            g({
                className : 'apertures',
                stroke : '#aaa',
                strokeWidth : 3,
                children : [
                    g({
                        className : 'silent',
                        stroke : '#aaf',
                        children : [
                            line({
                                x1 : 50, y1 : 80, x2 : 50, y2 : 130,
                                strokeWidth : 6,
                            }),
                            line({ x1 : 60, y1 : 140, x2 : 120, y2 : 140 }),
                            line({ x1 : 350, y1 : 140, x2 : 410, y2 : 140 }),
                            line({ x1 : 580, y1 : 350, x2 : 580, y2 : 410 }),
                            line({ x1 : 670, y1 : 300, x2 : 670, y2 : 360 }),
                        ]
                    }),
                    g({
                        className : 'plastic',
                        stroke : '#eef',
                        children : [
                            line({ x1 : 130, y1 : 150, x2 : 130, y2 : 190 }),
                            line({ x1 : 65, y1 : 360, x2 : 115, y2 : 360 }),
                        ]
                    }),
                    g({
                        className : 'simple',
                        stroke : '#f3f3f3',
                        strokeWidth : 4,
                        children : [
                            line({ x1 : 340, y1 : 80, x2 : 340, y2 : 130 }),
                            line({ x1 : 610, y1 : 480, x2 : 660, y2 : 480 }),
                            line({ x1 : 950, y1 : 400, x2 : 950, y2 : 440, }),
                        ]
                    }),
                    g({
                        className : 'window',
                        stroke : '#aff',
                        children : [
                            line({
                                x1 : 780, y1 : 550, x2 : 840, y2 : 550,
                                strokeWidth : 6,
                            }),
                        ]
                    }),
                ]
            }),
            g({
                className : 'objects',
                children : [
                    automaster,
                    microphone,
                    microstand,
                    basscombo,
                    pipik,
                ],
            }),
            style(`
            .room { fill: transparent; cursor: pointer; }
            .room:hover { fill: rgba(144, 0, 255, 0.1) }
            .pipik { cursor: move; transition: width 300ms ease, height 300ms ease, transform 300ms ease; }
            .pipik:hover { width: 50px; height: 50px; transform: translate(-10px, -10px) }
            .microphone { transform: translate(430px, 170px) scale(0.5) }
            .microstand .microphone { transform: translate(845px, 280px) rotate(90deg) scale(0.15); /*opacity: 0.5*/ }
            .microstand:hover rect:first-child { fill: rgba(40, 0, 244, 0.1) }
        `)
        ]
    })
})

document.documentElement.replaceWith(canvas)
