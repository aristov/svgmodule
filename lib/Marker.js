import { SVGElementAssembler } from './SVGElementAssembler'

const { SVGMarkerElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#painting-InterfaceSVGMarkerElement
 */
export class Marker extends SVGElementAssembler {
    /**
     * @returns {interface} SVGMarkerElement
     */
    static get interface() {
        return SVGMarkerElement || super.interface
    }
}

Marker.register()
