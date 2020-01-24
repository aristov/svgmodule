import { SVGGraphicsElementAssembler } from './SVGGraphicsElementAssembler'

const { SVGGeometryElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#types-InterfaceSVGGeometryElement
 */
export class SVGGeometryElementAssembler extends SVGGraphicsElementAssembler {
    /**
     * @param {number} pathLength
     */
    set pathLength(pathLength) {
        this.node.pathLength.baseVal = pathLength
    }

    /**
     * @returns {number}
     */
    get pathLength() {
        return this.node.pathLength.baseVal
    }

    /**
     * @returns {interface} SVGGeometryElement
     */
    static get interface() {
        return SVGGeometryElement || super.interface
    }
}
