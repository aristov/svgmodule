import { SVGGeometryElementAssembler } from './SVGGeometryElementAssembler'

const { SVGPolygonElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGPolygonElement
 */
export class Polygon extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGPolygonElement
     */
    static get interface() {
        return SVGPolygonElement || super.interface
    }
}

Polygon.register()
