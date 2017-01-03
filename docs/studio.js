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
    get hidden() {
        return this.node.getAttribute('hidden')
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
    const type = rectangle.attributes.type
    return svg({
        x : rectangle.x,
        y : rectangle.y,
        id : rectangle.id,
        classList : [node.tagName, type],
        tabIndex : type === 'work'? 0 : undefined,
        children : !rectangle.hidden && rect({
            width : rectangle.width,
            height : rectangle.height
        })
    })
}

function wall(node) {
    const rectangle = new Rectangle(node)
    return rect({
        className : node.tagName,
        x : rectangle.x,
        y : rectangle.y,
        width : rectangle.width,
        height : rectangle.height
    })
}

function transform(xmlnode) {
    const xmlrect = new Rectangle(xmlnode)
    if(xmlnode.tagName === 'wall') return wall(xmlnode)
    else if(xmlnode.tagName === 'place') {
        const svgnode = place(xmlnode)
        let x = 0
        let y = 0
        const { width, height } = xmlrect
        xmlrect.children.forEach(xmlchild => {
            const rectchild = new Rectangle(xmlchild)
            if(!xmlchild.hasAttribute('width')) rectchild.width = width
            if(!xmlchild.hasAttribute('height')) rectchild.height = height
            if(!xmlchild.hasAttribute('x')) rectchild.x = x
            if(!xmlchild.hasAttribute('y')) rectchild.y = y
            if(rectchild.width < width) x += rectchild.width
            if(rectchild.height < height) y += rectchild.height
            const svgchild = transform(xmlchild)
            if(svgchild) svgnode.append(svgchild)
            transform(xmlchild)
        })
        return svgnode
    }
}
