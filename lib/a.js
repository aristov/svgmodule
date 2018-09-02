import { SVGGraphicsElementAssembler } from './graphics'

const { SVGAElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#linking-AElement
 */
export class A extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGAElement
     */
    static get interface() {
        return SVGAElement || super.interface
    }
}

A.register()
