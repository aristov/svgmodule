import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGScriptElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#interact-InterfaceSVGScriptElement
 */
export class Script extends SVGElementAssembler {
    /**
     * @returns {interface} SVGScriptElement
     */
    static get interface() {
        return SVGScriptElement || super.interface
    }
}

Script.register()
