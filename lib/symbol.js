import { SVGGraphicsElementAssembler } from './graphics'

const { SVGSymbolElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGSymbolElement
 */
export class SVGSymbol extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGSymbolElement
     */
    static get interface() {
        return SVGSymbolElement || super.interface
    }
}
