import { SVGDOMAssembler } from './svgassembler'

const assembler = new SVGDOMAssembler

export function svgdom(tagName, init) {
    return assembler.assemble(tagName, init)
}

export function a(init) {
    return svgdom('a', init)
}

export function animate(init) {
    return svgdom('animate', init)
}

export function animateMotion(init) {
    return svgdom('animateMotion', init)
}

export function animateTransform(init) {
    return svgdom('animateTransform', init)
}

export function audio(init) {
    return svgdom('audio', init)
}

export function canvas(init) {
    return svgdom('canvas', init)
}

export function circle(init) {
    return svgdom('circle', init)
}

export function clipPath(init) {
    return svgdom('clipPath', init)
}

export function cursor(init) {
    return svgdom('cursor', init)
}

export function defs(init) {
    return svgdom('defs', init)
}

export function desc(init) {
    return svgdom('desc', init)
}

export function discard(init) {
    return svgdom('discard', init)
}

export function ellipse(init) {
    return svgdom('ellipse', init)
}

export function feBlend(init) {
    return svgdom('feBlend', init)
}

export function feColorMatrix(init) {
    return svgdom('feColorMatrix', init)
}

export function feComponentTransfer(init) {
    return svgdom('feComponentTransfer', init)
}

export function feComposite(init) {
    return svgdom('feComposite', init)
}

export function feConvolveMatrix(init) {
    return svgdom('feConvolveMatrix', init)
}

export function feDiffuseLighting(init) {
    return svgdom('feDiffuseLighting', init)
}

export function feDisplacementMap(init) {
    return svgdom('feDisplacementMap', init)
}

export function feDistantLight(init) {
    return svgdom('feDistantLight', init)
}

export function feDropShadow(init) {
    return svgdom('feDropShadow', init)
}

export function feFlood(init) {
    return svgdom('feFlood', init)
}

export function feFuncA(init) {
    return svgdom('feFuncA', init)
}

export function feFuncB(init) {
    return svgdom('feFuncB', init)
}

export function feFuncG(init) {
    return svgdom('feFuncG', init)
}

export function feFuncR(init) {
    return svgdom('feFuncR', init)
}

export function feGaussianBlur(init) {
    return svgdom('feGaussianBlur', init)
}

export function feImage(init) {
    return svgdom('feImage', init)
}

export function feMerge(init) {
    return svgdom('feMerge', init)
}

export function feMergeNode(init) {
    return svgdom('feMergeNode', init)
}

export function feMorphology(init) {
    return svgdom('feMorphology', init)
}

export function feOffset(init) {
    return svgdom('feOffset', init)
}

export function fePointLight(init) {
    return svgdom('fePointLight', init)
}

export function feSpecularLighting(init) {
    return svgdom('feSpecularLighting', init)
}

export function feSpotLight(init) {
    return svgdom('feSpotLight', init)
}

export function feTile(init) {
    return svgdom('feTile', init)
}

export function feTurbulence(init) {
    return svgdom('feTurbulence', init)
}

export function filter(init) {
    return svgdom('filter', init)
}

export function foreignObject(init) {
    return svgdom('foreignObject', init)
}

export function g(init) {
    return svgdom('g', init)
}

export function hatch(init) {
    return svgdom('hatch', init)
}

export function hatchpath(init) {
    return svgdom('hatchpath', init)
}

export function iframe(init) {
    return svgdom('iframe', init)
}

export function image(init) {
    return svgdom('image', init)
}

export function line(init) {
    return svgdom('line', init)
}

export function linearGradient(init) {
    return svgdom('linearGradient', init)
}

export function marker(init) {
    return svgdom('marker', init)
}

export function mask(init) {
    return svgdom('mask', init)
}

export function mesh(init) {
    return svgdom('mesh', init)
}

export function meshgradient(init) {
    return svgdom('meshgradient', init)
}

export function meshpatch(init) {
    return svgdom('meshpatch', init)
}

export function meshrow(init) {
    return svgdom('meshrow', init)
}

export function metadata(init) {
    return svgdom('metadata', init)
}

export function mpath(init) {
    return svgdom('mpath', init)
}

export function path(init) {
    return svgdom('path', init)
}

export function pattern(init) {
    return svgdom('pattern', init)
}

export function polygon(init) {
    return svgdom('polygon', init)
}

export function polyline(init) {
    return svgdom('polyline', init)
}

export function radialGradient(init) {
    return svgdom('radialGradient', init)
}

export function rect(init) {
    return svgdom('rect', init)
}

export function script(init) {
    return svgdom('script', init)
}

export function set(init) {
    return svgdom('set', init)
}

export function solidcolor(init) {
    return svgdom('solidcolor', init)
}

export function stop(init) {
    return svgdom('stop', init)
}

export function style(init) {
    return svgdom('style', init)
}

export function svg(init) {
    return svgdom('svg', init)
}

export function svgswitch(init) {
    return svgdom('switch', init)
}

export function symbol(init) {
    return svgdom('symbol', init)
}

export function text(init) {
    return svgdom('text', init)
}

export function textPath(init) {
    return svgdom('textPath', init)
}

export function title(init) {
    return svgdom('title', init)
}

export function tspan(init) {
    return svgdom('tspan', init)
}

export function unknown(init) {
    return svgdom('unknown', init)
}

export function use(init) {
    return svgdom('use', init)
}

export function video(init) {
    return svgdom('video', init)
}

export function view(init) {
    return svgdom('view', init)
}

