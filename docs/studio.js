import { XMLDOMAssembler } from '../lib/xmlassembler'
import { svg, rect } from '../lib/svgdom'

class Rectangle extends XMLDOMAssembler {
    constructor(node) {
        super(node)
    }
    set width(width) {
        this.node.setAttribute('width', width)
    }
    get width() {
        return Number(this.node.getAttribute('width') || 0)
    }
    set height(height) {
        this.node.setAttribute('height', height)
    }
    get height() {
        return Number(this.node.getAttribute('height') || 0)
    }
    set x(x) {
        this.node.setAttribute('x', x)
    }
    get x() {
        return Number(this.node.getAttribute('x') || 0)
    }
    set y(y) {
        this.node.setAttribute('y', y)
    }
    get y() {
        return Number(this.node.getAttribute('y') || 0)
    }
}

const xmlroot = document.documentElement

xmlroot.replaceWith(svg({
    id : 'root',
    children : [
        rect({ width: '100%', height: '100%' }),
        transform(xmlroot)
    ]
}))

function place(node) {
    const rectangle = new Rectangle(node)
    return svg({
        x : rectangle.x,
        y : rectangle.y,
        id : rectangle.id,
        className : node.tagName,
        children : rect({
            width : rectangle.width,
            height : rectangle.height
        })
    })
}

function wall(node) {
    const rectangle = new Rectangle(node)
    let x = rectangle.x
    let y = rectangle.y
    let width = rectangle.width
    let height = rectangle.height
    return rect({
        className : node.tagName,
        x, y, width, height
    })
}

function transform(node) {
    const rectangle = new Rectangle(node)
    let x = 0
    let y = 0
    const width = rectangle.width
    const height = rectangle.height
    const wallnode = node.querySelector('wall')
    if(node.tagName === 'wall') return wall(node)
    else if(node.tagName === 'place') {
        const svgnode = place(node)
        rectangle.children.forEach(child => {
            if(!child.getAttribute('width')) child.setAttribute('width', width)
            if(!child.getAttribute('height')) child.setAttribute('height', height)
            if(!child.getAttribute('x')) child.setAttribute('x', String(x))
            if(!child.getAttribute('y')) child.setAttribute('y', String(y))
            if(wallnode) {
                if(Number(child.getAttribute('width')) < rectangle.width) {
                    x += Number(child.getAttribute('width'))
                }
                if(Number(child.getAttribute('height')) < rectangle.height) {
                    y += Number(child.getAttribute('height'))
                }
                const childnode = transform(child)
                if(childnode) svgnode.append(childnode)
            }
            transform(child)
        })
        return svgnode
    }
}
