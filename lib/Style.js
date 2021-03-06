import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGStyleElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#styling-InterfaceSVGStyleElement
 */
export class Style extends SVGElementAssembler {
    /**
     * @returns {interface} SVGStyleElement
     */
    static get interface() {
        return SVGStyleElement || super.interface
    }
}

Style.register()
