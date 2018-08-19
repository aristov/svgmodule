import { SVGElementAssembler } from './element'

const { SVGTitleElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGTitleElement
 */
export class Title extends SVGElementAssembler {
    /**
     * @returns {interface} SVGTitleElement
     */
    static get interafce() {
        return SVGTitleElement
    }
}
