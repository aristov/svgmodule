import { SVGGradientElementAssembler } from './SVGGradientElementAssembler'

const { SVGRadialGradientElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#pservers-InterfaceSVGRadialGradientElement
 */
export class RadialGradient extends SVGGradientElementAssembler {
    /**
     * @returns {interface} SVGRadialGradientElement
     */
    static get interface() {
        return SVGRadialGradientElement || super.interface
    }
}

RadialGradient.register()
