import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGStopElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#pservers-InterfaceSVGStopElement
 */
export class Stop extends SVGElementAssembler {
    /**
     * @returns {interface} SVGStopElement
     */
    static get interface() {
        return SVGStopElement || super.interface
    }
}

Stop.register()
