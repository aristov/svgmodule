import { XMLDOMAssembler } from '../lib/xmlassembler'
import { svg, rect } from '../lib/svgdom'

class Rectangle extends XMLDOMAssembler {
    set width(width) {
        this.node.setAttribute('width', width)
    }

    get width() {
        return Number(this.node.getAttribute('width'))
    }

    set height(height) {
        this.node.setAttribute('height', height)
    }

    get height() {
        return Number(this.node.getAttribute('height'))
    }

    set x(x) {
        this.node.setAttribute('x', x)
    }

    get x() {
        return Number(this.node.getAttribute('x'))
    }

    set y(y) {
        this.node.setAttribute('y', y)
    }

    get y() {
        return Number(this.node.getAttribute('y'))
    }
}

function place(instance) {
    const { type, hidden } = instance.attributes
    return svg({
        x : instance.x,
        y : instance.y,
        id : instance.id,
        classList : [instance.node.tagName, type],
        tabIndex : type === 'work'? 0 : undefined,
        children : !hidden && rect({
            width : instance.width,
            height : instance.height
        })
    })
}

function wall(instance) {
    return rect({
        className : instance.node.tagName,
        x : instance.x,
        y : instance.y,
        width : instance.width,
        height : instance.height
    })
}

function transform(instance) {
    const tagName = instance.node.tagName
    if(tagName === 'wall') return wall(instance)
    else if(tagName === 'place') {
        const svgnode = place(instance)
        let x = 0
        let y = 0
        const { width, height } = instance
        instance.children.forEach(child => {
            const instance = new Rectangle(child)
            if(!child.hasAttribute('width')) instance.width = width
            if(!child.hasAttribute('height')) instance.height = height
            if(!child.hasAttribute('x')) instance.x = x
            if(!child.hasAttribute('y')) instance.y = y
            if(instance.width < width) x += instance.width
            if(instance.height < height) y += instance.height
            const svgchild = transform(instance)
            if(svgchild) svgnode.append(svgchild)
        })
        return svgnode
    }
}

const xmlroot = document.documentElement

xmlroot.replaceWith(svg({
    width: '100%',
    height: '100%',
    style : { backgroundColor : '#307' },
    children : svg({
        id : 'root',
        width : '100%',
        height : '100%',
        viewBox : '0 0 2254 1021',
        children : [
            rect({ width : '100%', height : '100%' }),
            transform(new Rectangle(xmlroot))
        ]
    })
}))
