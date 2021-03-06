import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGPatternElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#pservers-InterfaceSVGPatternElement
 */
export class Pattern extends SVGElementAssembler {
    /**
     * @returns {interface} SVGPatternElement
     */
    static get interface() {
        return SVGPatternElement || super.interface
    }
}

Pattern.register()
