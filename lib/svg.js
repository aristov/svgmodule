import { SVGGraphicsElementAssembler } from './graphics'

const { SVGSVGElement } = window

/**
 * @see https://www.w3.org/TR/SVG2/single-page.html#types-InterfaceSVGElement
 */
export class Svg extends SVGGraphicsElementAssembler {
    /**
     * @param {number} x
     */
    set x(x) {
        this.node.x.baseVal.value = x
    }

    /**
     * @returns {number}
     */
    get x() {
        return this.node.x.baseVal.value
    }

    /**
     * @param {number} y
     */
    set y(y) {
        this.node.y.baseVal.value = y
    }

    /**
     * @returns {number}
     */
    get y() {
        return this.node.y.baseVal.value
    }

    /**
     * @param {number} width
     */
    set width(width) {
        this.node.width.baseVal.value = width
    }

    /**
     * @returns {number}
     */
    get width() {
        return this.node.width.baseVal.value
    }

    /**
     * @param {number} height
     */
    set height(height) {
        this.node.height.baseVal.value = height
    }

    /**
     * @returns {number}
     */
    get height() {
        return this.node.height.baseVal.value
    }

    /**
     * @returns {interface} SVGSVGElement
     */
    static get interface() {
        return SVGSVGElement || super.interface
    }
}

Svg.register()
