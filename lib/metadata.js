import { SVGElementAssembler } from './element'

const { SVGMetadataElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#struct-InterfaceSVGMetadataElement
 */
export class Metadata extends SVGElementAssembler {
    /**
     * @returns {interface} SVGMetadataElement
     */
    static get interface() {
        return SVGMetadataElement || super.interface
    }
}

Metadata.register()
