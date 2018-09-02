import { SVGGeometryElementAssembler } from './geometry'

const { SVGCircleElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGCircleElement
 */
export class Circle extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGCircleElement
     */
    static get interface() {
        return SVGCircleElement || super.interface
    }
}

Circle.register()
