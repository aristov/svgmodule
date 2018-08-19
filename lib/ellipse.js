import { SVGGeometryElementAssembler } from './geometry'

const { SVGEllipseElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGEllipseElement
 */
export class Ellipse extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGEllipseElement
     */
    static get interface() {
        return SVGEllipseElement
    }
}
