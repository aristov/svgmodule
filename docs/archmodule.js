import { SVGDOMAssembler } from '../lib/assembler'
import { rect } from '../lib/svgdom'

const { map } = Array.prototype

export class Place extends SVGDOMAssembler {
    constructor(node) {
        super()
        this.assemble('svg', {
            className : 'place',
            id : node.getAttribute('name') || undefined,
            width : node.getAttribute('width') || window.innerWidth,
            height : node.getAttribute('height') || window.innerHeight,
            children : rect({ width : '100%', height : '100%' })
        })
        this.children = map.call(node.children, child => {
            return child.tagName === 'wall'?
                /*new Wall({
                    id : node.getAttribute('name'),
                    width : child.getAttribute('width'),
                    height : child.getAttribute('height'),
                    x1 : node.getAttribute('x') || 0,
                    y1 : node.getAttribute('y') || 0,
                }) :*/
                new Wall(child) :
                new Place(child)
        })
    }
}

export class Wall extends SVGDOMAssembler {
    constructor(node) {
        super()
        const width = node.getAttribute('width')
        const height = node.getAttribute('height')
        if(!height || width < height) {
            this.assemble('line', {
                className : 'wall',
            })
        }
    }
}



/*rect(node) {
    const { attributes } = node
    return reduce.call(attributes, (res, name) => {
        res[name] = attributes[name]
        return res
    }, {})
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
}*/

/*
export class Wall extends SVGDOMAssembler {
    constructor({ state }) {
        if(!state) {
            const { x, y, width, height } = this.place
            state = { x1 : x, y1 : y, x2 : width, y2 : height }
        }
        this.assemble('svg', this.line = line(state))
    }
    get place() {
        const place = this.node.closest('place')
        if(place) return place
        else throw Error('The wall is outside of a place')
    }
    set x(x) {
        const line = this.line
        line.x1 = line.x2 = x
    }
    get x() {
        const { x1, x2 } = this.line
        const { max, min } = Math
        return (max(x1, x2) + min(x1, x2)) / 2
    }
    set y(y) {
        const line = this.line
        line.y1 = line.y2 = y
    }
    get y() {
        const { y1, y2 } = this.line
        const { max, min } = Math
        return (max(y1, y2) + min(y1, y2)) / 2
    }
    set size(size) {
        this.line.strokeWidth = size
    }
    get size() {
        return this.line.strokeWidth
    }
    set left(left) {
        const { x1, x2 } = this.line
        this.line[x2 > x1? 'x1' : 'x2'] = left - this.size / 2
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
*/
