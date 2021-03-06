import { SVGGeometryElementAssembler } from './SVGGeometryElementAssembler'

const { SVGEllipseElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGEllipseElement
 */
export class Ellipse extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGEllipseElement
     */
    static get interface() {
        return SVGEllipseElement || super.interface
    }
}

Ellipse.register()
