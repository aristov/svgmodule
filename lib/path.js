import { SVGGeometryElementAssembler } from './geometry'

const { SVGPathElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#paths-InterfaceSVGPathElement
 */
export class Path extends SVGGeometryElementAssembler {
    /**
     * @param {string} d
     */
    set d(d) {
        this.setAttr('d', d)
    }

    /**
     * @returns {string}
     */
    get d() {
        return this.getAttr('d') || ''
    }

    /**
     * @returns {string}
     */
    static get defaultPropertyName() {
        return 'd'
    }

    /**
     * @returns {interface} SVGPathElement
     */
    static get interface() {
        return SVGPathElement
    }
}
