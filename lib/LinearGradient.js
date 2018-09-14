import { SVGGradientElementAssembler } from './SVGGradientElementAssembler'

const { SVGLinearGradientElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#pservers-InterfaceSVGLinearGradientElement
 */
export class LinearGradient extends SVGGradientElementAssembler {
    /**
     * @returns {interface} SVGLinearGradientElement
     */
    static get interface() {
        return SVGLinearGradientElement || super.interface
    }
}

LinearGradient.register()
