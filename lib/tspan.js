import { SVGTextPositioningElementAssembler } from './textpositioning'

const { SVGTSpanElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#text-InterfaceSVGTSpanElement
 */
export class TSpan extends SVGTextPositioningElementAssembler {
    /**
     * @returns {interface} SVGTSpanElement
     */
    static get interface() {
        return SVGTSpanElement || super.interface
    }
}
