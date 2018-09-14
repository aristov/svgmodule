import { SVGTextContentElementAssembler } from './SVGTextContentElementAssembler'

const { SVGTextPathElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#text-InterfaceSVGTextPathElement
 */
export class TextPath extends SVGTextContentElementAssembler {
    /**
     * @returns {interface} SVGTextPathElement
     */
    static get interface() {
        return SVGTextPathElement || super.interface
    }
}

TextPath.register()
