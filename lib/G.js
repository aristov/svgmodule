import { SVGGraphicsElementAssembler } from './SVGGraphicsElementAssembler'

const { SVGGElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGGElement
 */
export class G extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGGElement
     */
    static get interface() {
        return SVGGElement || super.interface
    }
}

G.register()
