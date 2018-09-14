import { SVGGeometryElementAssembler } from './SVGGeometryElementAssembler'

const { SVGLineElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGLineElement
 */
export class Line extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGLineElement
     */
    static get interface() {
        return SVGLineElement || super.interface
    }
}

Line.register()
