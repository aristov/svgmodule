import { SVGElementAssembler } from './element'

const { SVGDescElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGDescElement
 */
export class Desc extends SVGElementAssembler {
    /**
     * @returns {interface} SVGDescElement
     */
    static get interface() {
        return SVGDescElement
    }
}
