import { SVGGraphicsElementAssembler } from './graphics'

const { SVGDefsElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGDefsElement
 */
export class Defs extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGDefsElement
     */
    static get interface() {
        return SVGDefsElement
    }
}
