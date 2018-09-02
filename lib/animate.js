import { SVGElementAssembler } from './element'

const { SVGAnimateElement } = window

/**
 * @see https://svgwg.org/specs/animations/#InterfaceSVGAnimateElement
 */
export class Animate extends SVGElementAssembler {
    /**
     * @returns {interface} SVGAnimateElement
     */
    static get interface() {
        return SVGAnimateElement || super.interface
    }
}
