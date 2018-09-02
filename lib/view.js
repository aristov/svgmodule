import { SVGElementAssembler } from './element'

const { SVGViewElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#linking-InterfaceSVGViewElement
 */
export class View extends SVGElementAssembler {
    /**
     * @returns {interface} SVGViewElement
     */
    static get interface() {
        return SVGViewElement || super.interface
    }
}

View.register()
