import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGGradientElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#pservers-InterfaceSVGGradientElement
 */
export class SVGGradientElementAssembler extends SVGElementAssembler {
    /**
     * @returns {interface} SVGGradientElement
     */
    static get interface() {
        return SVGGradientElement || super.interface
    }
}
