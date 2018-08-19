import { SVGGraphicsElementAssembler } from './graphics'

const { SVGUseElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGUseElement
 */
export class Use extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGUseElement
     */
    static get interace() {
        return SVGUseElement
    }
}
