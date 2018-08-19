import { SVGGraphicsElementAssembler } from './graphics'

const { SVGTextContentElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#text-InterfaceSVGTextContentElement
 */
export class SVGTextContentElementAssembler extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGTextContentElement
     */
    static get interface() {
        return SVGTextContentElement
    }
}
