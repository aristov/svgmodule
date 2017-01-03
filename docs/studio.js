import { Place, Wall } from './archmodule'

const svgroot = document.documentElement
const parser = new DOMParser()

fetch('studio.xml')
    .then(res => res.text())
    .then(text => {
        const xmldoc = parser.parseFromString(text, 'application/xml')
        const xmlroot = xmldoc.documentElement
        let rootplace = new Place(xmlroot)
        svgroot.replaceWith(rootplace.node)
        rootplace.children = ((new Wall({
            x : rootplace.node.scrollWidth / 2,
            height : rootplace.node.scrollHeight
        })).node)
    })
