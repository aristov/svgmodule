import { SVGGraphicsElementAssembler } from './graphics'

export class Svg extends SVGGraphicsElementAssembler {
    set x(x) {
        this.node.x.baseVal.value = x
    }

    get x() {
        return this.node.x.baseVal.value
    }

    set y(y) {
        this.node.y.baseVal.value = y
    }

    get y() {
        return this.node.y.baseVal.value
    }

    set width(width) {
        this.node.width.baseVal.value = width
    }

    get width() {
        return this.node.width.baseVal.value
    }

    set height(height) {
        this.node.height.baseVal.value = height
    }

    get height() {
        return this.node.height.baseVal.value
    }
}
