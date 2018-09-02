import { SVGTextPositioningElementAssembler } from './textpositioning'

const { SVGTextElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#text-InterfaceSVGTextElement
 */
export class SVGText extends SVGTextPositioningElementAssembler {
    /**
     * @returns {interface} SVGTextElement
     */
    static get interface() {
        return SVGTextElement || super.interface
    }
}
