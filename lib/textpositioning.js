import { SVGTextContentElementAssembler } from './textcontent'

const { SVGTextPositioningElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#text-InterfaceSVGTextPositioningElement
 */
export class SVGTextPositioningElementAssembler extends SVGTextContentElementAssembler {
    /**
     * @returns {interface} SVGTextPositioningElement
     */
    static get interface() {
        return SVGTextPositioningElement || super.interface
    }
}
