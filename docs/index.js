import { svg, g, circle, rect, line, polyline, polygon, image, style } from '../lib/svgdom'

const x = 0
const y = 0
const height = 1020

const technooffice = {
    className : 'office',
    x, y,
    width : 328,
    height,
}

const brickwall = {
    className : 'wall',
    x : technooffice.width, y,
    width : 40,
    height
}

const neoroom = {
    className : 'room',
    tabIndex : 0,
    x : brickwall.x + brickwall.width, y,
    width : 438,
    height
}

const gypsumwall = {
    className : 'wall',
    x : neoroom.x + neoroom.width, y,
    width : 20,
    height,
}

const pantryoffice = {
    className : 'office',
    x : gypsumwall.x + gypsumwall.width,
    y,
    width : 142,
    height : 160
}

const pantrywall = {
    className : 'wall',
    x : pantryoffice.x,
    y : pantryoffice.height,
    width : pantryoffice.width,
    height : 10
}

const modernway = {
    className : 'way',
    x : pantryoffice.x + pantryoffice.width,
    y,
    width : 633,
    height,
}

const blockwall = {
    className : 'wall',
    x : modernway.x + modernway.width,
    y,
    width : 20,
    height
}

const classicway = {
    className : 'way',
    x : blockwall.x + blockwall.width,
    y : 840,
    width : 632,
    height,
}

const studiospace = {
    x : 0, y,
    width : classicway.x + classicway.width,
    height : height,
    stroke : '#000',
    strokeWidth : 1,
    fill : 'transparent'
}

const cornerwall = {
    className : 'wall',
    points : [
        [modernway.x, 0],
        [modernway.x, height - 180],
        [studiospace.width, height - 180],
        [studiospace.width, height - 180 - 20],
        [modernway.x + 20, height - 180 - 20],
        [modernway.x + 20, 0],
    ].join(' ')
}

const modernwall = {
    className : 'wall',
    x : pantryoffice.x + pantryoffice.width + 20,
    y : 420,
    width : blockwall.x - (pantryoffice.x + pantryoffice.width) - 20,
    height : 20
}

const faroom = {
    className : 'room',
    tabIndex : 0,
    x : modernwall.x,
    y,
    width : modernwall.width,
    height : modernwall.y
}

const solroom = {
    className : 'room',
    tabIndex : 0,
    x : modernwall.x,
    y : 440,
    width : modernwall.width,
    height : 380,
}

const cornerway = {
    className : 'way',
    points : [
        [pantryoffice.x, pantrywall.y + pantrywall.height],
        [pantrywall.x, height],
        [blockwall.x, height],
        [blockwall.x, faroom.height + 20 + solroom.height + 20],
        [solroom.x - 20, faroom.height + 20 + solroom.height + 20],
        [pantryoffice.x + pantryoffice.width, pantrywall.y + pantrywall.height]
    ].join(' ')
}

const classicwall = {
    className : 'wall',
    x : blockwall.x + blockwall.width,
    y : 355,
    width : studiospace.width - (blockwall.x + blockwall.width),
    height : 20
}

const forteroom = {
    className : 'room',
    tabIndex : 0,
    x : blockwall.x + blockwall.width,
    y,
    width : classicwall.width,
    height : classicwall.y
}

const stairwall = {
    className : 'wall',
    x : studiospace.width - (170 + 20),
    y : classicwall.y + classicwall.height,
    width : 20,
    height : 445
}

const stairway = {
    className : 'way',
    x : studiospace.width - 170,
    y : classicwall.y + classicwall.height,
    width : 170,
    height : 445
}

const pianoroom = {
    className : 'room',
    tabIndex : 0,
    x : forteroom.x,
    y : classicwall.y + classicwall.height,
    width : stairwall.x - blockwall.x - 20,
    height : stairway.height
}

const svgroot = svg({
    width : studiospace.width + 50,
    height : studiospace.height + 50,
    style : { transform : 'scale(0.50) translate(2425px, 1190px) rotate(180deg)' },
    viewBox : [-50, -50, studiospace.width + 50, studiospace.height + 50].join(),
    children : [
        rect(studiospace),
        rect(technooffice),
        rect(brickwall),
        rect(neoroom),
        rect(gypsumwall),
        rect(pantryoffice),
        rect(pantrywall),
        polygon(cornerwall),
        rect(blockwall),
        rect(modernwall),
        rect(classicwall),
        rect(classicway),
        rect(stairwall),
        rect(faroom),
        rect(solroom),
        rect(forteroom),
        rect(stairway),
        rect(pianoroom),
        polygon(cornerway),
    ]
})

document.documentElement.replaceWith(svgroot)
