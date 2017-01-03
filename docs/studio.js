import { svg, rect } from '../lib/svgdom'

const svgroot = document.documentElement
const parser = new DOMParser

function place(node) {
    return svg({
        x : node.getAttribute('x') || undefined,
        y : node.getAttribute('y') || undefined,
        className : node.tagName,
        id : node.id,
        children : rect({
            width : node.getAttribute('width') || undefined,
            height : node.getAttribute('height') || undefined
        })
    })
}

function wall(node) {
    let x = node.getAttribute('x') || undefined;
    let y = node.getAttribute('y') || undefined;
    let width = node.getAttribute('width') || undefined;
    let height = node.getAttribute('height') || undefined;
    if(node.id === 'fuck') console.log(node)
    return rect({
        className : node.tagName,
        x, y, width, height
    })
}

function process(node) {
    let x = 0
    let y = 0
    const width = node.getAttribute('width')
    const height = node.getAttribute('height')
    const wallnode = node.children[1]
    if(node.tagName === 'wall') return wall(node)
    else {
        const svgnode = place(node)
        Array.prototype.forEach.call(node.children, child => {
            if(!child.getAttribute('width')) child.setAttribute('width', width)
            if(!child.getAttribute('height')) child.setAttribute('height', height)
            if(!child.getAttribute('x')) child.setAttribute('x', String(x))
            if(!child.getAttribute('y')) child.setAttribute('y', String(y))
            if(wallnode) {
                if(Number(child.getAttribute('width')) < Number(node.getAttribute('width'))) {
                    x += Number(child.getAttribute('width'))
                }
                if(Number(child.getAttribute('height')) < Number(node.getAttribute('height'))) {
                    y += Number(child.getAttribute('height'))
                }
                svgnode.append(process(child))
            }
            process(child)
        })
        return svgnode
    }
}

fetch('studio.xml')
    .then(res => res.text())
    .then(xml => {
        const xmldoc = parser.parseFromString(xml, 'application/xml')
        const xmlroot = xmldoc.documentElement
        svgroot.replaceWith(svg({
            id : 'root',
            children : [
                rect({ width: '100%', height: '100%' }),
                process(xmlroot)
            ]
        }))
    })
