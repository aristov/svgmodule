import { SVGElementAssembler } from './element'

const { SVGClipPathElement } = window

/**
 * @see https://drafts.fxtf.org/css-masking-1/#InterfaceSVGClipPathElement
 */
export class ClipPath extends SVGElementAssembler {
    /**
     * @returns {interface} SVGClipPathElement
     */
    static get interface() {
        return SVGClipPathElement
    }
}
