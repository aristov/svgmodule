import { XMLElementAssembler } from 'xmlmodule'

const { assign } = Object
const { SVGElement } = window
const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg'

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#InterfaceSVGElement
 */
export class SVGElementAssembler extends XMLElementAssembler {
    /**
     * @param {{}} dataset
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
     * @param {number} tabIndex
     */
    set tabIndex(tabIndex) {
        this.node.tabIndex = tabIndex
    }

    /**
     * @returns {number}
     */
    get tabIndex() {
        return this.node.tabIndex
    }

    /**
     * @returns {Svg}
     */
    get ownerSVGElement() {
        return this.getInstanceOf(this.node.ownerSVGElement)
    }

    /**
     * @returns {SVGElementAssembler}
     */
    get viewportElement() {
        return this.getInstanceOf(this.node.viewportElement)
    }

    /**
     * @returns {string}
     */
    static get namespace() {
        return SVG_NAMESPACE_URI
    }

    /**
     * @returns {interface} SVGElement
     */
    static get interface() {
        return SVGElement || super.interface
    }
}

SVGElementAssembler.register()
