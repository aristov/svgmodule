import { SVGGeometryElementAssembler } from './SVGGeometryElementAssembler'

const { SVGPolylineElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGPolylineElement
 */
export class Polyline extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGPolylineElement
     */
    static get interface() {
        return SVGPolylineElement || super.interface
    }
}

Polyline.register()
