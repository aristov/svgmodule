import { XMLElementAssembler } from 'xmlmodule'

const { assign } = Object
const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg'

/**
 * - Assembler for `SVGElement` DOM interface
 * - Provides built-in and adapted interfaces for `SVGElement` initialization
 */
export class SVGElementAssembler extends XMLElementAssembler {
    /**
     * Set custom `data-` attributes on the element
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset)
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    /**
     * @param {*} style
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * @returns {CSSStyleDeclaration}
     */
    get style() {
        return this.node.style
    }

    /**
     * @returns {string}
     */
    static get namespaceURI() {
        return SVG_NAMESPACE_URI
    }
}
