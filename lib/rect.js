import { SVGGeometryElementAssembler } from './geometry'

const { SVGRectElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGRectElement
 */
export class Rect extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGRectElement
     */
    static get interface() {
        return SVGRectElement || super.interface
    }
}
