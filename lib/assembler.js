import { NodeInit } from './nodeinit'

const { assign } = Object
const { isArray } = Array
const { document } = window

const SVG_NS_URI = 'http://www.w3.org/2000/svg'

/**
 * - Assembler for `SVGElement` DOM interface
 * - Provides built-in and adapted interfaces for `SVGElement` initialization
 */
export class SVGDOMAssembler {

    /**
     * Set content attributes on the element
     * @param {{}} attributes dictionary object
     */
    set attributes(attributes) {
        const element = this.node
        for(let name in attributes) {
            const value = attributes[name]
            if(typeof value === 'string') {
                element.setAttribute(name, value)
            }
        }
    }

    /**
     * Set custom `data-` attributes on the element
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.element.dataset, dataset)
    }

    /**
     * Assign CSS style declaration to the element
     * @param {{}} style declaration dictionary object (CSSStyleDeclaration )
     */
    set style(style) {
        assign(this.node.style, style)
    }

    /**
     * Append children to the element
     * Supports arrays and nested arrays, single DOM nodes and strings as `Text` nodes
     * @param {Node|String|SVGDOMAssembler|Array} [children]
     *  child node or string or assembler instance or array of listed
     */
    set children(children) {
        if(isArray(children)) {
            children.forEach(child => this.children = child)
        }
        else if(children) {
            const child = typeof children === 'string'?
                document.createTextNode(children) :
                children instanceof SVGDOMAssembler?
                    children.node :
                    children
            this.node.appendChild(child)
        }
    }

    set namespaceURI(value) {
        this.node.setAttribute('xmlns', value)
    }

    set className(value) {
        this.node.setAttribute('class', value)
    }

    set href(value) {
        this.node.setAttribute('href', value)
    }

    set width(value) {
        this.node.setAttribute('width', value)
    }

    set height(value) {
        this.node.setAttribute('height', value)
    }

    set viewBox(value) {
        this.node.setAttribute('viewBox', value)
    }

    set fill(value) {
        this.node.setAttribute('fill', value)
    }

    set stroke(value) {
        this.node.setAttribute('stroke', value)
    }

    set strokeWidth(value) {
        this.node.setAttribute('stroke-width', value)
    }

    set x(value) {
        this.node.setAttribute('x', value)
    }

    set y(value) {
        this.node.setAttribute('y', value)
    }

    set x1(value) {
        this.node.setAttribute('x1', value)
    }

    set y1(value) {
        this.node.setAttribute('y1', value)
    }

    set x2(value) {
        this.node.setAttribute('x2', value)
    }

    set y2(value) {
        this.node.setAttribute('y2', value)
    }

    set cx(value) {
        this.node.setAttribute('cx', value)
    }

    set cy(value) {
        this.node.setAttribute('cy', value)
    }

    set r(value) {
        this.node.setAttribute('r', value)
    }

    set rx(value) {
        this.node.setAttribute('rx', value)
    }

    set ry(value) {
        this.node.setAttribute('ry', value)
    }

    set points(value) {
        this.node.setAttribute('points', value)
    }

    /**
     * Create the specified element node and initialize it by a given property set
     * @param {String} tagName
     * @param {{}|String|Node|SVGDOMAssembler|Array} [init]
     * @returns {Element} created and initialized DOM `Element`
     */
    assemble(tagName, init) {
        this.create(tagName)
        return init? this.init(NodeInit(init)) : this.node
    }

    /**
     * Create the specified element node
     * @param {String} tagName
     * @returns {Element|*} created element
     */
    create(tagName) {
        /**
         * Just created node, assigned to the assembler instance
         * @type {Element|*}
         */
        return this.node = document.createElementNS(SVG_NS_URI, tagName)
    }

    /**
     * Initialize the element with defined properties
     * @param {{}} init initializing `NodeInit` dictionary object
     * @returns {Element|*} initialized element
     */
    init(init) {
        const element = this.node
        for(let prop in init) {
            const value = init[prop]
            if(value !== undefined) {
                if(prop in this) this[prop] = value
                else if(prop in element) element[prop] = value
            }
        }
        return element
    }
}

Object.defineProperty(SVGDOMAssembler.prototype, 'node', { writable : true, value : null })
