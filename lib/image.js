import { SVGGraphicsElementAssembler } from './graphics'

const { SVGImageElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#embedded-InterfaceSVGImageElement
 */
export class SVGImage extends SVGGraphicsElementAssembler {
    /**
     * @returns {interface} SVGImageElement
     */
    static get interface() {
        return SVGImageElement || super.interface
    }
}

SVGImage.register()
