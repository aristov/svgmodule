import { SVGGeometryElementAssembler } from './geometry'

const { SVGPolygonElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#shapes-InterfaceSVGPolygonElement
 */
export class Polygon extends SVGGeometryElementAssembler {
    /**
     * @returns {interface} SVGPolygonElement
     */
    static get interface() {
        return SVGPolygonElement
    }
}
