import { SVGElementAssembler } from './element'

const { SVGGraphicsElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#types-InterfaceSVGGraphicsElement
 */
export class SVGGraphicsElementAssembler extends SVGElementAssembler {
    /**
     * @param {string} transform
     */
    set transform(transform) {
        this.setAttr('transform', transform)
    }

    /**
     * @returns {string}
     */
    get transform() {
        return this.getAttr('transform') || ''
    }

    /**
     * @returns {interface} SVGGraphicsElement
     */
    static get interface() {
        return SVGGraphicsElement
    }
}
