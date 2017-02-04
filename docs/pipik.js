{
    const { SVGDOMAssembler } = svgmodule
    const rectlist = Array.from(document.querySelectorAll('rect'))
    const colorpixelset = rectlist.reduce((res, rect) => {
        const fill = rect.getAttribute('fill')
        const position = [rect.getAttribute('x') || 0, rect.getAttribute('y') || 0]
        const positionlist = res[fill]
        if(!positionlist) {
            res[fill] = [position]
        } else {
            positionlist.push(position)
        }
        return res
    }, {})

    class MoveRect extends SVGDOMAssembler {
        constructor(node, init) {
            super(node, init)
            this.init({
                tabIndex : 0,
                onkeydown : event => {
                    const { key } = event
                    if(key.startsWith('Arrow')) {
                        this.onArrowKey(event)
                        event.preventDefault()
                    }
                }
            })
        }
        onArrowKey({ key, metaKey, target }) {
            const step = metaKey? 100 : 1
            switch(key) {
                case 'ArrowUp': this.y -= step; break
                case 'ArrowDown': this.y += step; break
                case 'ArrowLeft': this.x -= step; break
                case 'ArrowRight': this.x += step; break
            }
            target.parentNode.append(target)
            target.focus()
        }
    }
    const moverectmap = rectlist.map(rect => new MoveRect(rect))

    // document.documentElement.addEventListener('focus', onfocus, true)

    function onfocus(event) {
        if(event.target.tagName === 'rect') {
            console.log(event)
        }
    }

    // console.log(moverectmap)
    // console.log(JSON.stringify(colorpixelset))
}
