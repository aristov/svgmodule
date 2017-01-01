import { SVGDOMAssembler } from '../lib/assembler'
import { line, rect } from '../lib/svgdom'

export class Place extends SVGDOMAssembler {
    constructor(state) {
        this.assemble('svg', this.rect = rect(state || this.constructor.state))
    }
    set rect(node) {
        this.node.append(node)
    }
    get rect() {
        return this.querySelector('rect')
    }
    set width(value) {
        this.rect.width = value
    }
    get width() {
        return this.rect.width
    }
    set height(value) {
        this.rect.height = value
    }
    get height() {
        return this.rect.height
    }
    static get state() {
        return {
            x : 0, y : 0,
            width : window.clientWidth,
            height : window.clientHeight
        }
    }
}

export class Wall extends SVGDOMAssembler {
    constructor({ state }) {
        if(!state) {
            const { x, y, width, height } = this.place
            state = { x1 : x, y1 : y, x2 : width, y2 : height }
        }
        this.assemble('svg', line(state))
    }
    get place() {
        const place = this.node.closest('place')
        if(place) return document.getElementById(place.name)
        else throw Error('The wall is outside of a place')
    }
    set x(value) {
        this.line.x1 = value - this.size / 2
    }
    get x() {
        const { x1, x2 } = this.line
        const { max, min } = Math
        return (max(x1, x2) - min(x1, x2)) / 2
    }
    set y(value) {
        this.line.y1 = value - this.size / 2
    }
    get y() {
        const { y1, y2 } = this.line
        const { max, min } = Math
        return (max(y1, y2) - min(y1, y2)) / 2
    }
    set size(value) {
        this.line.strokeWidth = value
    }
    get size() {
        return this.line.strokeWidth
    }
    set left(value) {
        const { x1, x2 } = this.line
        this.line[x2 > x1? 'x1' : 'x2'] = value - this.size / 2
    }
    get left() {
        const { x1, x2 } = this.line
        return Math.min(x1, x2) - this.size / 2
    }
    get right() {
        const { x1, x2 } = this.line
        return Math.max(x1, x2) + this.size / 2
    }
    get top() {
        const { y1, y2 } = this.line
        return Math.min(y1, y2) - this.size / 2
    }
    get bottom() {
        const { y1, y2 } = this.line
        return Math.max(y1, y2) + this.size / 2
    }
}
