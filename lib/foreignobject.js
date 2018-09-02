import { SVGGraphicsElementAssembler } from './graphics'

const { SVGEllipseElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#embedded-InterfaceSVGForeignObjectElement
 */
export class ForeignObject extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGEllipseElement
     */
    static get interface() {
        return SVGEllipseElement || super.interface
    }
}
