import { ElementAssembler } from 'dommodule'

const { assign } = Object

const SVG_NAMESPACE_URI = 'http://www.w3.org/2000/svg'
const SVG_DOCUMENT_ELEMENT_NAME = 'svg'

/**
 * - Assembler for `SVGElement` DOM interface
 * - Provides built-in and adapted interfaces for `SVGElement` initialization
 */
export class SVGElementAssembler extends ElementAssembler {
    /**
     * Set custom `data-` attributes on the element
     * @param {{}} dataset declaration dictionary object
     */
    set dataset(dataset) {
        assign(this.node.dataset, dataset)
    }

    /**
     * @returns {{}} DOMStringMap
     */
    get dataset() {
        return this.node.dataset
    }

    set style(style) {
        assign(this.node.style, style)
    }

    get style() {
        return this.node.style
    }

    set accentHeight(accentHeight) {
        this.node.setAttribute('accent-height', accentHeight)
    }

    get accentHeight() {
        return this.node.getAttribute('accent-height')
    }

    set accumulate(accumulate) {
        this.node.setAttribute('accumulate', accumulate)
    }

    get accumulate() {
        return this.node.getAttribute('accumulate')
    }

    set additive(additive) {
        this.node.setAttribute('additive', additive)
    }

    get additive() {
        return this.node.getAttribute('additive')
    }

    set alignmentBaseline(alignmentBaseline) {
        this.node.setAttribute('alignment-baseline', alignmentBaseline)
    }

    get alignmentBaseline() {
        return this.node.getAttribute('alignment-baseline')
    }

    set allowReorder(allowReorder) {
        this.node.setAttribute('allowReorder', allowReorder)
    }

    get allowReorder() {
        return this.node.getAttribute('allowReorder')
    }

    set alphabetic(alphabetic) {
        this.node.setAttribute('alphabetic', alphabetic)
    }

    get alphabetic() {
        return this.node.getAttribute('alphabetic')
    }

    set amplitude(amplitude) {
        this.node.setAttribute('amplitude', amplitude)
    }

    get amplitude() {
        return this.node.getAttribute('amplitude')
    }

    set arabicForm(arabicForm) {
        this.node.setAttribute('arabicForm', arabicForm)
    }

    get arabicForm() {
        return this.node.getAttribute('arabicForm')
    }

    set ascent(ascent) {
        this.node.setAttribute('ascent', ascent)
    }

    get ascent() {
        return this.node.getAttribute('ascent')
    }

    set attributeName(attributeName) {
        this.node.setAttribute('attributeName', attributeName)
    }

    get attributeName() {
        return this.node.getAttribute('attributeName')
    }

    set attributeType(attributeType) {
        this.node.setAttribute('attributeType', attributeType)
    }

    get attributeType() {
        return this.node.getAttribute('attributeType')
    }

    set autoReverse(autoReverse) {
        this.node.setAttribute('autoReverse', autoReverse)
    }

    get autoReverse() {
        return this.node.getAttribute('autoReverse')
    }

    set azimuth(azimuth) {
        this.node.setAttribute('azimuth', azimuth)
    }

    get azimuth() {
        return this.node.getAttribute('azimuth')
    }

    set baseFrequency(baseFrequency) {
        this.node.setAttribute('baseFrequency', baseFrequency)
    }

    get baseFrequency() {
        return this.node.getAttribute('baseFrequency')
    }

    set baselineShift(baselineShift) {
        this.node.setAttribute('baselineShift', baselineShift)
    }

    get baselineShift() {
        return this.node.getAttribute('baselineShift')
    }

    set baseProfile(baseProfile) {
        this.node.setAttribute('baseProfile', baseProfile)
    }

    get baseProfile() {
        return this.node.getAttribute('baseProfile')
    }

    set bbox(bbox) {
        this.node.setAttribute('bbox', bbox)
    }

    get bbox() {
        return this.node.getAttribute('bbox')
    }

    set begin(begin) {
        this.node.setAttribute('begin', begin)
    }

    get begin() {
        return this.node.getAttribute('begin')
    }

    set bias(bias) {
        this.node.setAttribute('bias', bias)
    }

    get bias() {
        return this.node.getAttribute('bias')
    }

    set by(by) {
        this.node.setAttribute('by', by)
    }

    get by() {
        return this.node.getAttribute('by')
    }

    set calcMode(calcMode) {
        this.node.setAttribute('calcMode', calcMode)
    }

    get calcMode() {
        return this.node.getAttribute('calcMode')
    }

    set capHeight(capHeight) {
        this.node.setAttribute('cap-height', capHeight)
    }

    get capHeight() {
        return this.node.getAttribute('cap-height')
    }

    set className(className) {
        this.node.setAttribute('class', className)
    }

    get className() {
        return this.node.className
    }

    set clip(clip) {
        this.node.setAttribute('clip', clip)
    }

    get clip() {
        return this.node.getAttribute('clip')
    }

    set clipPathUnits(clipPathUnits) {
        this.node.setAttribute('clipPathUnits', clipPathUnits)
    }

    get clipPathUnits() {
        return this.node.getAttribute('clipPathUnits')
    }

    set clipPath(clipPath) {
        this.node.setAttribute('clip-path', clipPath)
    }

    get clipPath() {
        return this.node.getAttribute('clip-path')
    }

    set clipRule(clipRule) {
        this.node.setAttribute('clip-rule', clipRule)
    }

    get clipRule() {
        return this.node.getAttribute('clip-rule')
    }

    set color(color) {
        this.node.setAttribute('color', color)
    }

    get color() {
        return this.node.getAttribute('color')
    }

    set colorInterpolation(colorInterpolation) {
        this.node.setAttribute('color-interpolation', colorInterpolation)
    }

    get colorInterpolation() {
        return this.node.getAttribute('color-interpolation')
    }

    set colorInterpolationFilters(colorInterpolationFilters) {
        this.node.setAttribute('color-interpolation-filters', colorInterpolationFilters)
    }

    get colorInterpolationFilters() {
        return this.node.getAttribute('color-interpolation-filters')
    }

    set colorProfile(colorProfile) {
        this.node.setAttribute('color-profile', colorProfile)
    }

    get colorProfile() {
        return this.node.getAttribute('color-profile')
    }

    set colorRendering(colorRendering) {
        this.node.setAttribute('color-rendering', colorRendering)
    }

    get colorRendering() {
        return this.node.getAttribute('color-rendering')
    }

    set contentScriptType(contentScriptType) {
        this.node.setAttribute('contentScriptType', contentScriptType)
    }

    get contentScriptType() {
        return this.node.getAttribute('contentScriptType')
    }

    set contentStyleType(contentStyleType) {
        this.node.setAttribute('contentStyleType', contentStyleType)
    }

    get contentStyleType() {
        return this.node.getAttribute('contentStyleType')
    }

    set cursor(cursor) {
        this.node.setAttribute('cursor', cursor)
    }

    get cursor() {
        return this.node.getAttribute('cursor')
    }

    set cx(cx) {
        this.node.setAttribute('cx', cx)
    }

    get cx() {
        return this.node.getAttribute('cx')
    }

    set cy(cy) {
        this.node.setAttribute('cy', cy)
    }

    get cy() {
        return this.node.getAttribute('cy')
    }

    set d(d) {
        this.node.setAttribute('d', d)
    }

    get d() {
        return this.node.getAttribute('d')
    }

    set decelerate(decelerate) {
        this.node.setAttribute('decelerate', decelerate)
    }

    get decelerate() {
        return this.node.getAttribute('decelerate')
    }

    set descent(descent) {
        this.node.setAttribute('descent', descent)
    }

    get descent() {
        return this.node.getAttribute('descent')
    }

    set diffuseConstant(diffuseConstant) {
        this.node.setAttribute('diffuseConstant', diffuseConstant)
    }

    get diffuseConstant() {
        return this.node.getAttribute('diffuseConstant')
    }

    set direction(direction) {
        this.node.setAttribute('direction', direction)
    }

    get direction() {
        return this.node.getAttribute('direction')
    }

    set display(display) {
        this.node.setAttribute('display', display)
    }

    get display() {
        return this.node.getAttribute('display')
    }

    set divisor(divisor) {
        this.node.setAttribute('divisor', divisor)
    }

    get divisor() {
        return this.node.getAttribute('divisor')
    }

    set dominantBaseline(dominantBaseline) {
        this.node.setAttribute('dominant-baseline', dominantBaseline)
    }

    get dominantBaseline() {
        return this.node.getAttribute('dominant-baseline')
    }

    set dur(dur) {
        this.node.setAttribute('dur', dur)
    }

    get dur() {
        return this.node.getAttribute('dur')
    }

    set dx(dx) {
        this.node.setAttribute('dx', dx)
    }

    get dx() {
        return this.node.getAttribute('dx')
    }

    set dy(dy) {
        this.node.setAttribute('dy', dy)
    }

    get dy() {
        return this.node.getAttribute('dy')
    }

    set edgeMode(edgeMode) {
        this.node.setAttribute('edgeMode', edgeMode)
    }

    get edgeMode() {
        return this.node.getAttribute('edgeMode')
    }

    set elevation(elevation) {
        this.node.setAttribute('elevation', elevation)
    }

    get elevation() {
        return this.node.getAttribute('elevation')
    }

    set enableBackground(enableBackground) {
        this.node.setAttribute('enable-background', enableBackground)
    }

    get enableBackground() {
        return this.node.getAttribute('enable-background')
    }

    set end(end) {
        this.node.setAttribute('end', end)
    }

    get end() {
        return this.node.getAttribute('end')
    }

    set exponent(exponent) {
        this.node.setAttribute('exponent', exponent)
    }

    get exponent() {
        return this.node.getAttribute('exponent')
    }

    set externalResourcesRequired(externalResourcesRequired) {
        this.node.setAttribute('externalResourcesRequired', externalResourcesRequired)
    }

    get externalResourcesRequired() {
        return this.node.getAttribute('externalResourcesRequired')
    }

    set fill(fill) {
        this.node.setAttribute('fill', fill)
    }

    get fill() {
        return this.node.getAttribute('fill')
    }

    set fillOpacity(fillOpacity) {
        this.node.setAttribute('fill-opacity', fillOpacity)
    }

    get fillOpacity() {
        return this.node.getAttribute('fill-opacity')
    }

    set fillRule(fillRule) {
        this.node.setAttribute('fill-rule', fillRule)
    }

    get fillRule() {
        return this.node.getAttribute('fill-rule')
    }

    set filter(filter) {
        this.node.setAttribute('filter', filter)
    }

    get filter() {
        return this.node.getAttribute('filter')
    }

    set filterRes(filterRes) {
        this.node.setAttribute('filterRes', filterRes)
    }

    get filterRes() {
        return this.node.getAttribute('filterRes')
    }

    set filterUnits(filterUnits) {
        this.node.setAttribute('filterUnits', filterUnits)
    }

    get filterUnits() {
        return this.node.getAttribute('filterUnits')
    }

    set floodColor(floodColor) {
        this.node.setAttribute('flood-color', floodColor)
    }

    get floodColor() {
        return this.node.getAttribute('flood-color')
    }

    set floodOpacity(floodOpacity) {
        this.node.setAttribute('flood-opacity', floodOpacity)
    }

    get floodOpacity() {
        return this.node.getAttribute('flood-opacity')
    }

    set fontFamily(fontFamily) {
        this.node.setAttribute('font-family', fontFamily)
    }

    get fontFamily() {
        return this.node.getAttribute('font-family')
    }

    set fontSize(fontSize) {
        this.node.setAttribute('font-size', fontSize)
    }

    get fontSize() {
        return this.node.getAttribute('font-size')
    }

    set fontSizeAdjust(fontSizeAdjust) {
        this.node.setAttribute('font-size-adjust', fontSizeAdjust)
    }

    get fontSizeAdjust() {
        return this.node.getAttribute('font-size-adjust')
    }

    set fontStretch(fontStretch) {
        this.node.setAttribute('font-stretch', fontStretch)
    }

    get fontStretch() {
        return this.node.getAttribute('font-stretch')
    }

    set fontStyle(fontStyle) {
        this.node.setAttribute('font-style', fontStyle)
    }

    get fontStyle() {
        return this.node.getAttribute('font-style')
    }

    set fontVariant(fontVariant) {
        this.node.setAttribute('font-variant', fontVariant)
    }

    get fontVariant() {
        return this.node.getAttribute('font-variant')
    }

    set fontWeight(fontWeight) {
        this.node.setAttribute('font-weight', fontWeight)
    }

    get fontWeight() {
        return this.node.getAttribute('font-weight')
    }

    set format(format) {
        this.node.setAttribute('format', format)
    }

    get format() {
        return this.node.getAttribute('format')
    }

    set from(from) {
        this.node.setAttribute('from', from)
    }

    get from() {
        return this.node.getAttribute('from')
    }

    set fx(fx) {
        this.node.setAttribute('fx', fx)
    }

    get fx() {
        return this.node.getAttribute('fx')
    }

    set fy(fy) {
        this.node.setAttribute('fy', fy)
    }

    get fy() {
        return this.node.getAttribute('fy')
    }

    set g1(g1) {
        this.node.setAttribute('g1', g1)
    }

    get g1() {
        return this.node.getAttribute('g1')
    }

    set g2(g2) {
        this.node.setAttribute('g2', g2)
    }

    get g2() {
        return this.node.getAttribute('g2')
    }

    set glyphName(glyphName) {
        this.node.setAttribute('glyphName', glyphName)
    }

    get glyphName() {
        return this.node.getAttribute('glyphName')
    }

    set glyphOrientationHorizontal(glyphOrientationHorizontal) {
        this.node.setAttribute('glyph-orientation-horizontal', glyphOrientationHorizontal)
    }

    get glyphOrientationHorizontal() {
        return this.node.getAttribute('glyph-orientation-horizontal')
    }

    set glyphOrientationVertical(glyphOrientationVertical) {
        this.node.setAttribute('glyph-orientation-vertical', glyphOrientationVertical)
    }

    get glyphOrientationVertical() {
        return this.node.getAttribute('glyph-orientation-vertical')
    }

    set glyphRef(glyphRef) {
        this.node.setAttribute('glyphRef', glyphRef)
    }

    get glyphRef() {
        return this.node.getAttribute('glyphRef')
    }

    set gradientTransform(gradientTransform) {
        this.node.setAttribute('gradientTransform', gradientTransform)
    }

    get gradientTransform() {
        return this.node.getAttribute('gradientTransform')
    }

    set gradientUnits(gradientUnits) {
        this.node.setAttribute('gradientUnits', gradientUnits)
    }

    get gradientUnits() {
        return this.node.getAttribute('gradientUnits')
    }

    set hanging(hanging) {
        this.node.setAttribute('hanging', hanging)
    }

    get hanging() {
        return this.node.getAttribute('hanging')
    }

    set height(height) {
        this.node.setAttribute('height', height)
    }

    get height() {
        return this.node.getAttribute('height')
    }

    set href(href) {
        this.node.setAttribute('href', href)
    }

    get href() {
        return this.node.getAttribute('href')
    }

    set horizAdvX(horizAdvX) {
        this.node.setAttribute('horiz-adv-x', horizAdvX)
    }

    get horizAdvX() {
        return this.node.getAttribute('horiz-adv-x')
    }

    set horizOriginX(horizOriginX) {
        this.node.setAttribute('horiz-origin-x', horizOriginX)
    }

    get horizOriginX() {
        return this.node.getAttribute('horiz-origin-x')
    }

    set id(id) {
        this.node.setAttribute('id', id)
    }

    get id() {
        return this.node.getAttribute('id')
    }

    set ideographic(ideographic) {
        this.node.setAttribute('ideographic', ideographic)
    }

    get ideographic() {
        return this.node.getAttribute('ideographic')
    }

    set imageRendering(imageRendering) {
        this.node.setAttribute('image-rendering', imageRendering)
    }

    get imageRendering() {
        return this.node.getAttribute('image-rendering')
    }

    set in1(in1) {
        this.node.setAttribute('in', in1)
    }

    get in1() {
        return this.node.getAttribute('in')
    }

    set in2(in2) {
        this.node.setAttribute('in2', in2)
    }

    get in2() {
        return this.node.getAttribute('in2')
    }

    set intercept(intercept) {
        this.node.setAttribute('intercept', intercept)
    }

    get intercept() {
        return this.node.getAttribute('intercept')
    }

    set k(k) {
        this.node.setAttribute('k', k)
    }

    get k() {
        return this.node.getAttribute('k')
    }

    set k1(k1) {
        this.node.setAttribute('k1', k1)
    }

    get k1() {
        return this.node.getAttribute('k1')
    }

    set k2(k2) {
        this.node.setAttribute('k2', k2)
    }

    get k2() {
        return this.node.getAttribute('k2')
    }

    set k3(k3) {
        this.node.setAttribute('k3', k3)
    }

    get k3() {
        return this.node.getAttribute('k3')
    }

    set k4(k4) {
        this.node.setAttribute('k4', k4)
    }

    get k4() {
        return this.node.getAttribute('k4')
    }

    set kernelMatrix(kernelMatrix) {
        this.node.setAttribute('kernelMatrix', kernelMatrix)
    }

    get kernelMatrix() {
        return this.node.getAttribute('kernelMatrix')
    }

    set kernelUnitLength(kernelUnitLength) {
        this.node.setAttribute('kernelUnitLength', kernelUnitLength)
    }

    get kernelUnitLength() {
        return this.node.getAttribute('kernelUnitLength')
    }

    set kerning(kerning) {
        this.node.setAttribute('kerning', kerning)
    }

    get kerning() {
        return this.node.getAttribute('kerning')
    }

    set keyPoints(keyPoints) {
        this.node.setAttribute('keyPoints', keyPoints)
    }

    get keyPoints() {
        return this.node.getAttribute('keyPoints')
    }

    set keySplines(keySplines) {
        this.node.setAttribute('keySplines', keySplines)
    }

    get keySplines() {
        return this.node.getAttribute('keySplines')
    }

    set keyTimes(keyTimes) {
        this.node.setAttribute('keyTimes', keyTimes)
    }

    get keyTimes() {
        return this.node.getAttribute('keyTimes')
    }

    set lang(lang) {
        this.node.setAttribute('lang', lang)
    }

    get lang() {
        return this.node.getAttribute('lang')
    }

    set lengthAdjust(lengthAdjust) {
        this.node.setAttribute('lengthAdjust', lengthAdjust)
    }

    get lengthAdjust() {
        return this.node.getAttribute('lengthAdjust')
    }

    set letterSpacing(letterSpacing) {
        this.node.setAttribute('letter-spacing', letterSpacing)
    }

    get letterSpacing() {
        return this.node.getAttribute('letter-spacing')
    }

    set lightingColor(lightingColor) {
        this.node.setAttribute('lighting-color', lightingColor)
    }

    get lightingColor() {
        return this.node.getAttribute('lighting-color')
    }

    set limitingConeAngle(limitingConeAngle) {
        this.node.setAttribute('limitingConeAngle', limitingConeAngle)
    }

    get limitingConeAngle() {
        return this.node.getAttribute('limitingConeAngle')
    }

    set local(local) {
        this.node.setAttribute('local', local)
    }

    get local() {
        return this.node.getAttribute('local')
    }

    set markerEnd(markerEnd) {
        this.node.setAttribute('marker-end', markerEnd)
    }

    get markerEnd() {
        return this.node.getAttribute('marker-end')
    }

    set markerMid(markerMid) {
        this.node.setAttribute('marker-mid', markerMid)
    }

    get markerMid() {
        return this.node.getAttribute('marker-mid')
    }

    set markerStart(markerStart) {
        this.node.setAttribute('marker-start', markerStart)
    }

    get markerStart() {
        return this.node.getAttribute('marker-start')
    }

    set markerHeight(markerHeight) {
        this.node.setAttribute('markerHeight', markerHeight)
    }

    get markerHeight() {
        return this.node.getAttribute('markerHeight')
    }

    set markerUnits(markerUnits) {
        this.node.setAttribute('markerUnits', markerUnits)
    }

    get markerUnits() {
        return this.node.getAttribute('markerUnits')
    }

    set markerWidth(markerWidth) {
        this.node.setAttribute('markerWidth', markerWidth)
    }

    get markerWidth() {
        return this.node.getAttribute('markerWidth')
    }

    set mask(mask) {
        this.node.setAttribute('mask', mask)
    }

    get mask() {
        return this.node.getAttribute('mask')
    }

    set maskContentUnits(maskContentUnits) {
        this.node.setAttribute('maskContentUnits', maskContentUnits)
    }

    get maskContentUnits() {
        return this.node.getAttribute('maskContentUnits')
    }

    set maskUnits(maskUnits) {
        this.node.setAttribute('maskUnits', maskUnits)
    }

    get maskUnits() {
        return this.node.getAttribute('maskUnits')
    }

    set mathematical(mathematical) {
        this.node.setAttribute('mathematical', mathematical)
    }

    get mathematical() {
        return this.node.getAttribute('mathematical')
    }

    set max(max) {
        this.node.setAttribute('max', max)
    }

    get max() {
        return this.node.getAttribute('max')
    }

    set media(media) {
        this.node.setAttribute('media', media)
    }

    get media() {
        return this.node.getAttribute('media')
    }

    set method(method) {
        this.node.setAttribute('method', method)
    }

    get method() {
        return this.node.getAttribute('method')
    }

    set min(min) {
        this.node.setAttribute('min', min)
    }

    get min() {
        return this.node.getAttribute('min')
    }

    set mode(mode) {
        this.node.setAttribute('mode', mode)
    }

    get mode() {
        return this.node.getAttribute('mode')
    }

    set name(name) {
        this.node.setAttribute('name', name)
    }

    get name() {
        return this.node.getAttribute('name')
    }

    set numOctaves(numOctaves) {
        this.node.setAttribute('numOctaves', numOctaves)
    }

    get numOctaves() {
        return this.node.getAttribute('numOctaves')
    }

    set offset(offset) {
        this.node.setAttribute('offset', offset)
    }

    get offset() {
        return this.node.getAttribute('offset')
    }

    set onabort(onabort) {
        this.node.setAttribute('onabort', onabort)
    }

    get onabort() {
        return this.node.getAttribute('onabort')
    }

    set onactivate(onactivate) {
        this.node.setAttribute('onactivate', onactivate)
    }

    get onactivate() {
        return this.node.getAttribute('onactivate')
    }

    set onbegin(onbegin) {
        this.node.setAttribute('onbegin', onbegin)
    }

    get onbegin() {
        return this.node.getAttribute('onbegin')
    }

    set onclick(onclick) {
        this.node.setAttribute('onclick', onclick)
    }

    get onclick() {
        return this.node.getAttribute('onclick')
    }

    set onend(onend) {
        this.node.setAttribute('onend', onend)
    }

    get onend() {
        return this.node.getAttribute('onend')
    }

    set onerror(onerror) {
        this.node.setAttribute('onerror', onerror)
    }

    get onerror() {
        return this.node.getAttribute('onerror')
    }

    set onfocusin(onfocusin) {
        this.node.setAttribute('onfocusin', onfocusin)
    }

    get onfocusin() {
        return this.node.getAttribute('onfocusin')
    }

    set onfocusout(onfocusout) {
        this.node.setAttribute('onfocusout', onfocusout)
    }

    get onfocusout() {
        return this.node.getAttribute('onfocusout')
    }

    set onload(onload) {
        this.node.setAttribute('onload', onload)
    }

    get onload() {
        return this.node.getAttribute('onload')
    }

    set onmousedown(onmousedown) {
        this.node.setAttribute('onmousedown', onmousedown)
    }

    get onmousedown() {
        return this.node.getAttribute('onmousedown')
    }

    set onmousemove(onmousemove) {
        this.node.setAttribute('onmousemove', onmousemove)
    }

    get onmousemove() {
        return this.node.getAttribute('onmousemove')
    }

    set onmouseout(onmouseout) {
        this.node.setAttribute('onmouseout', onmouseout)
    }

    get onmouseout() {
        return this.node.getAttribute('onmouseout')
    }

    set onmouseover(onmouseover) {
        this.node.setAttribute('onmouseover', onmouseover)
    }

    get onmouseover() {
        return this.node.getAttribute('onmouseover')
    }

    set onmouseup(onmouseup) {
        this.node.setAttribute('onmouseup', onmouseup)
    }

    get onmouseup() {
        return this.node.getAttribute('onmouseup')
    }

    set onrepeat(onrepeat) {
        this.node.setAttribute('onrepeat', onrepeat)
    }

    get onrepeat() {
        return this.node.getAttribute('onrepeat')
    }

    set onresize(onresize) {
        this.node.setAttribute('onresize', onresize)
    }

    get onresize() {
        return this.node.getAttribute('onresize')
    }

    set onscroll(onscroll) {
        this.node.setAttribute('onscroll', onscroll)
    }

    get onscroll() {
        return this.node.getAttribute('onscroll')
    }

    set onunload(onunload) {
        this.node.setAttribute('onunload', onunload)
    }

    get onunload() {
        return this.node.getAttribute('onunload')
    }

    set onzoom(onzoom) {
        this.node.setAttribute('onzoom', onzoom)
    }

    get onzoom() {
        return this.node.getAttribute('onzoom')
    }

    set opacity(opacity) {
        this.node.setAttribute('opacity', opacity)
    }

    get opacity() {
        return this.node.getAttribute('opacity')
    }

    set operator(operator) {
        this.node.setAttribute('operator', operator)
    }

    get operator() {
        return this.node.getAttribute('operator')
    }

    set order(order) {
        this.node.setAttribute('order', order)
    }

    get order() {
        return this.node.getAttribute('order')
    }

    set orient(orient) {
        this.node.setAttribute('orient', orient)
    }

    get orient() {
        return this.node.getAttribute('orient')
    }

    set orientation(orientation) {
        this.node.setAttribute('orientation', orientation)
    }

    get orientation() {
        return this.node.getAttribute('orientation')
    }

    set origin(origin) {
        this.node.setAttribute('origin', origin)
    }

    get origin() {
        return this.node.getAttribute('origin')
    }

    set overflow(overflow) {
        this.node.setAttribute('overflow', overflow)
    }

    get overflow() {
        return this.node.getAttribute('overflow')
    }

    set overlinePosition(overlinePosition) {
        this.node.setAttribute('overline-position', overlinePosition)
    }

    get overlinePosition() {
        return this.node.getAttribute('overline-position')
    }

    set overlineThickness(overlineThickness) {
        this.node.setAttribute('overline-thickness', overlineThickness)
    }

    get overlineThickness() {
        return this.node.getAttribute('overline-thickness')
    }

    set panose1(panose) {
        this.node.setAttribute('panose-1', panose1)
    }

    get panose1() {
        return this.node.getAttribute('panose-1')
    }

    set paintOrder(paintOrder) {
        this.node.setAttribute('paint-order', paintOrder)
    }

    get paintOrder() {
        return this.node.getAttribute('paint-order')
    }

    set pathLength(pathLength) {
        this.node.setAttribute('pathLength', pathLength)
    }

    get pathLength() {
        return this.node.getAttribute('pathLength')
    }

    set patternContentUnits(patternContentUnits) {
        this.node.setAttribute('patternContentUnits', patternContentUnits)
    }

    get patternContentUnits() {
        return this.node.getAttribute('patternContentUnits')
    }

    set patternTransform(patternTransform) {
        this.node.setAttribute('patternTransform', patternTransform)
    }

    get patternTransform() {
        return this.node.getAttribute('patternTransform')
    }

    set patternUnits(patternUnits) {
        this.node.setAttribute('patternUnits', patternUnits)
    }

    get patternUnits() {
        return this.node.getAttribute('patternUnits')
    }

    set pointerEvents(pointerEvents) {
        this.node.setAttribute('pointer-events', pointerEvents)
    }

    get pointerEvents() {
        return this.node.getAttribute('pointer-events')
    }

    set points(points) {
        this.node.setAttribute('points', points)
    }

    get points() {
        return this.node.getAttribute('points')
    }

    set pointsAtX(pointsAtX) {
        this.node.setAttribute('pointsAtX', pointsAtX)
    }

    get pointsAtX() {
        return this.node.getAttribute('pointsAtX')
    }

    set pointsAtY(pointsAtY) {
        this.node.setAttribute('pointsAtY', pointsAtY)
    }

    get pointsAtY() {
        return this.node.getAttribute('pointsAtY')
    }

    set pointsAtZ(pointsAtZ) {
        this.node.setAttribute('pointsAtZ', pointsAtZ)
    }

    get pointsAtZ() {
        return this.node.getAttribute('pointsAtZ')
    }

    set preserveAlpha(preserveAlpha) {
        this.node.setAttribute('preserveAlpha', preserveAlpha)
    }

    get preserveAlpha() {
        return this.node.getAttribute('preserveAlpha')
    }

    set preserveAspectRatio(preserveAspectRatio) {
        this.node.setAttribute('preserveAspectRatio', preserveAspectRatio)
    }

    get preserveAspectRatio() {
        return this.node.getAttribute('preserveAspectRatio')
    }

    set primitiveUnits(primitiveUnits) {
        this.node.setAttribute('primitiveUnits', primitiveUnits)
    }

    get primitiveUnits() {
        return this.node.getAttribute('primitiveUnits')
    }

    set r(r) {
        this.node.setAttribute('r', r)
    }

    get r() {
        return this.node.getAttribute('r')
    }

    set radius(radius) {
        this.node.setAttribute('radius', radius)
    }

    get radius() {
        return this.node.getAttribute('radius')
    }

    set refX(refX) {
        this.node.setAttribute('refX', refX)
    }

    get refX() {
        return this.node.getAttribute('refX')
    }

    set refY(refY) {
        this.node.setAttribute('refY', refY)
    }

    get refY() {
        return this.node.getAttribute('refY')
    }

    set renderingIntent(renderingIntent) {
        this.node.setAttribute('rendering-intent', renderingIntent)
    }

    get renderingIntent() {
        return this.node.getAttribute('rendering-intent')
    }

    set repeatCount(repeatCount) {
        this.node.setAttribute('repeatCount', repeatCount)
    }

    get repeatCount() {
        return this.node.getAttribute('repeatCount')
    }

    set repeatDur(repeatDur) {
        this.node.setAttribute('repeatDur', repeatDur)
    }

    get repeatDur() {
        return this.node.getAttribute('repeatDur')
    }

    set requiredExtensions(requiredExtensions) {
        this.node.setAttribute('requiredExtensions', requiredExtensions)
    }

    get requiredExtensions() {
        return this.node.getAttribute('requiredExtensions')
    }

    set requiredFeatures(requiredFeatures) {
        this.node.setAttribute('requiredFeatures', requiredFeatures)
    }

    get requiredFeatures() {
        return this.node.getAttribute('requiredFeatures')
    }

    set restart(restart) {
        this.node.setAttribute('restart', restart)
    }

    get restart() {
        return this.node.getAttribute('restart')
    }

    set result(result) {
        this.node.setAttribute('result', result)
    }

    get result() {
        return this.node.getAttribute('result')
    }

    set rotate(rotate) {
        this.node.setAttribute('rotate', rotate)
    }

    get rotate() {
        return this.node.getAttribute('rotate')
    }

    set rx(rx) {
        this.node.setAttribute('rx', rx)
    }

    get rx() {
        return this.node.getAttribute('rx')
    }

    set ry(ry) {
        this.node.setAttribute('ry', ry)
    }

    get ry() {
        return this.node.getAttribute('ry')
    }

    set scale(scale) {
        this.node.setAttribute('scale', scale)
    }

    get scale() {
        return this.node.getAttribute('scale')
    }

    set seed(seed) {
        this.node.setAttribute('seed', seed)
    }

    get seed() {
        return this.node.getAttribute('seed')
    }

    set shapeRendering(shapeRendering) {
        this.node.setAttribute('shape-rendering', shapeRendering)
    }

    get shapeRendering() {
        return this.node.getAttribute('shape-rendering')
    }

    set slope(slope) {
        this.node.setAttribute('slope', slope)
    }

    get slope() {
        return this.node.getAttribute('slope')
    }

    set spacing(spacing) {
        this.node.setAttribute('spacing', spacing)
    }

    get spacing() {
        return this.node.getAttribute('spacing')
    }

    set specularConstant(specularConstant) {
        this.node.setAttribute('specularConstant', specularConstant)
    }

    get specularConstant() {
        return this.node.getAttribute('specularConstant')
    }

    set specularExponent(specularExponent) {
        this.node.setAttribute('specularExponent', specularExponent)
    }

    get specularExponent() {
        return this.node.getAttribute('specularExponent')
    }

    set speed(speed) {
        this.node.setAttribute('speed', speed)
    }

    get speed() {
        return this.node.getAttribute('speed')
    }

    set spreadMethod(spreadMethod) {
        this.node.setAttribute('spreadMethod', spreadMethod)
    }

    get spreadMethod() {
        return this.node.getAttribute('spreadMethod')
    }

    set startOffset(startOffset) {
        this.node.setAttribute('startOffset', startOffset)
    }

    get startOffset() {
        return this.node.getAttribute('startOffset')
    }

    set stdDeviation(stdDeviation) {
        this.node.setAttribute('stdDeviation', stdDeviation)
    }

    get stdDeviation() {
        return this.node.getAttribute('stdDeviation')
    }

    set stemh(stemh) {
        this.node.setAttribute('stemh', stemh)
    }

    get stemh() {
        return this.node.getAttribute('stemh')
    }

    set stemv(stemv) {
        this.node.setAttribute('stemv', stemv)
    }

    get stemv() {
        return this.node.getAttribute('stemv')
    }

    set stitchTiles(stitchTiles) {
        this.node.setAttribute('stitchTiles', stitchTiles)
    }

    get stitchTiles() {
        return this.node.getAttribute('stitchTiles')
    }

    set stopColor(stopColor) {
        this.node.setAttribute('stop-color', stopColor)
    }

    get stopColor() {
        return this.node.getAttribute('stop-color')
    }

    set stopOpacity(stopOpacity) {
        this.node.setAttribute('stop-opacity', stopOpacity)
    }

    get stopOpacity() {
        return this.node.getAttribute('stop-opacity')
    }

    set strikethroughPosition(strikethroughPosition) {
        this.node.setAttribute('strikethrough-position', strikethroughPosition)
    }

    get strikethroughPosition() {
        return this.node.getAttribute('strikethrough-position')
    }

    set strikethroughThickness(strikethroughThickness) {
        this.node.setAttribute('strikethrough-thickness', strikethroughThickness)
    }

    get strikethroughThickness() {
        return this.node.getAttribute('strikethrough-thickness')
    }

    set string(string) {
        this.node.setAttribute('string', string)
    }

    get string() {
        return this.node.getAttribute('string')
    }

    set stroke(stroke) {
        this.node.setAttribute('stroke', stroke)
    }

    get stroke() {
        return this.node.getAttribute('stroke')
    }

    set strokeDasharray(strokeDasharray) {
        this.node.setAttribute('stroke-dasharray', strokeDasharray)
    }

    get strokeDasharray() {
        return this.node.getAttribute('stroke-dasharray')
    }

    set strokeDashoffset(strokeDashoffset) {
        this.node.setAttribute('stroke-dashoffset', strokeDashoffset)
    }

    get strokeDashoffset() {
        return this.node.getAttribute('stroke-dashoffset')
    }

    set strokeLinecap(strokeLinecap) {
        this.node.setAttribute('stroke-linecap', strokeLinecap)
    }

    get strokeLinecap() {
        return this.node.getAttribute('stroke-linecap')
    }

    set strokeLinejoin(strokeLinejoin) {
        this.node.setAttribute('stroke-linejoin', strokeLinejoin)
    }

    get strokeLinejoin() {
        return this.node.getAttribute('stroke-linejoin')
    }

    set strokeMiterlimit(strokeMiterlimit) {
        this.node.setAttribute('stroke-miterlimit', strokeMiterlimit)
    }

    get strokeMiterlimit() {
        return this.node.getAttribute('stroke-miterlimit')
    }

    set strokeOpacity(strokeOpacity) {
        this.node.setAttribute('stroke-opacity', strokeOpacity)
    }

    get strokeOpacity() {
        return this.node.getAttribute('stroke-opacity')
    }

    set strokeWidth(strokeWidth) {
        this.node.setAttribute('stroke-width', strokeWidth)
    }

    get strokeWidth() {
        return this.node.getAttribute('stroke-width')
    }

    set surfaceScale(surfaceScale) {
        this.node.setAttribute('surfaceScale', surfaceScale)
    }

    get surfaceScale() {
        return this.node.getAttribute('surfaceScale')
    }

    set systemLanguage(systemLanguage) {
        this.node.setAttribute('systemLanguage', systemLanguage)
    }

    get systemLanguage() {
        return this.node.getAttribute('systemLanguage')
    }

    set tabIndex(tabIndex) {
        this.node.setAttribute('tabindex', tabIndex)
    }

    get tabIndex() {
        return this.node.getAttribute('tabindex')
    }

    set tableValues(tableValues) {
        this.node.setAttribute('tableValues', tableValues)
    }

    get tableValues() {
        return this.node.getAttribute('tableValues')
    }

    set target(target) {
        this.node.setAttribute('target', target)
    }

    get target() {
        return this.node.getAttribute('target')
    }

    set targetX(targetX) {
        this.node.setAttribute('targetX', targetX)
    }

    get targetX() {
        return this.node.getAttribute('targetX')
    }

    set targetY(targetY) {
        this.node.setAttribute('targetY', targetY)
    }

    get targetY() {
        return this.node.getAttribute('targetY')
    }

    set textAnchor(textAnchor) {
        this.node.setAttribute('text-anchor', textAnchor)
    }

    get textAnchor() {
        return this.node.getAttribute('text-anchor')
    }

    set textDecoration(textDecoration) {
        this.node.setAttribute('text-decoration', textDecoration)
    }

    get textDecoration() {
        return this.node.getAttribute('text-decoration')
    }

    set textRendering(textRendering) {
        this.node.setAttribute('text-rendering', textRendering)
    }

    get textRendering() {
        return this.node.getAttribute('text-rendering')
    }

    set textLength(textLength) {
        this.node.setAttribute('textLength', textLength)
    }

    get textLength() {
        return this.node.getAttribute('textLength')
    }

    set to(to) {
        this.node.setAttribute('to', to)
    }

    get to() {
        return this.node.getAttribute('to')
    }

    set transform(transform) {
        this.node.setAttribute('transform', transform)
    }

    get transform() {
        return this.node.getAttribute('transform')
    }

    set type(type) {
        this.node.setAttribute('type', type)
    }

    get type() {
        return this.node.getAttribute('type')
    }

    set u1(u1) {
        this.node.setAttribute('u1', u1)
    }

    get u1() {
        return this.node.getAttribute('u1')
    }

    set u2(u2) {
        this.node.setAttribute('u2', u2)
    }

    get u2() {
        return this.node.getAttribute('u2')
    }

    set underlinePosition(underlinePosition) {
        this.node.setAttribute('underline-position', underlinePosition)
    }

    get underlinePosition() {
        return this.node.getAttribute('underline-position')
    }

    set underlineThickness(underlineThickness) {
        this.node.setAttribute('underline-thickness', underlineThickness)
    }

    get underlineThickness() {
        return this.node.getAttribute('underline-thickness')
    }

    set unicode(unicode) {
        this.node.setAttribute('unicode', unicode)
    }

    get unicode() {
        return this.node.getAttribute('unicode')
    }

    set unicodeBidi(unicodeBidi) {
        this.node.setAttribute('unicode-bidi', unicodeBidi)
    }

    get unicodeBidi() {
        return this.node.getAttribute('unicode-bidi')
    }

    set unicodeRange(unicodeRange) {
        this.node.setAttribute('unicode-range', unicodeRange)
    }

    get unicodeRange() {
        return this.node.getAttribute('unicode-range')
    }

    set unitsPerEm(unitsPerEm) {
        this.node.setAttribute('units-per-em', unitsPerEm)
    }

    get unitsPerEm() {
        return this.node.getAttribute('units-per-em')
    }

    set vAlphabetic(vAlphabetic) {
        this.node.setAttribute('v-alphabetic', vAlphabetic)
    }

    get vAlphabetic() {
        return this.node.getAttribute('v-alphabetic')
    }

    set vHanging(vHanging) {
        this.node.setAttribute('v-hanging', vHanging)
    }

    get vHanging() {
        return this.node.getAttribute('v-hanging')
    }

    set vIdeographic(vIdeographic) {
        this.node.setAttribute('v-ideographic', vIdeographic)
    }

    get vIdeographic() {
        return this.node.getAttribute('v-ideographic')
    }

    set vMathematical(vMathematical) {
        this.node.setAttribute('v-mathematical', vMathematical)
    }

    get vMathematical() {
        return this.node.getAttribute('v-mathematical')
    }

    set values(values) {
        this.node.setAttribute('values', values)
    }

    get values() {
        return this.node.getAttribute('values')
    }

    set version(version) {
        this.node.setAttribute('version', version)
    }

    get version() {
        return this.node.getAttribute('version')
    }

    set vertAdvY(vertAdvY) {
        this.node.setAttribute('vert-adv-y', vertAdvY)
    }

    get vertAdvY() {
        return this.node.getAttribute('vert-adv-y')
    }

    set vertOriginX(vertOriginX) {
        this.node.setAttribute('vert-origin-x', vertOriginX)
    }

    get vertOriginX() {
        return this.node.getAttribute('vert-origin-x')
    }

    set vertOriginY(vertOriginY) {
        this.node.setAttribute('vert-origin-y', vertOriginY)
    }

    get vertOriginY() {
        return this.node.getAttribute('vert-origin-y')
    }

    set viewBox(viewBox) {
        this.node.setAttribute('viewBox', viewBox)
    }

    get viewBox() {
        return this.node.getAttribute('viewBox')
    }

    set viewTarget(viewTarget) {
        this.node.setAttribute('viewTarget', viewTarget)
    }

    get viewTarget() {
        return this.node.getAttribute('viewTarget')
    }

    set visibility(visibility) {
        this.node.setAttribute('visibility', visibility)
    }

    get visibility() {
        return this.node.getAttribute('visibility')
    }

    set width(width) {
        this.node.setAttribute('width', width)
    }

    get width() {
        return this.node.getAttribute('width')
    }

    set widths(widths) {
        this.node.setAttribute('widths', widths)
    }

    get widths() {
        return this.node.getAttribute('widths')
    }

    set wordSpacing(wordSpacing) {
        this.node.setAttribute('word-spacing', wordSpacing)
    }

    get wordSpacing() {
        return this.node.getAttribute('word-spacing')
    }

    set writingMode(writingMode) {
        this.node.setAttribute('writing-mode', writingMode)
    }

    get writingMode() {
        return this.node.getAttribute('writing-mode')
    }

    set x(x) {
        this.node.setAttribute('x', x)
    }

    get x() {
        return Number(this.node.getAttribute('x'))
    }

    set xHeight(xHeight) {
        this.node.setAttribute('x-height', xHeight)
    }

    get xHeight() {
        return this.node.getAttribute('x-height')
    }

    set x1(x1) {
        this.node.setAttribute('x1', x1)
    }

    get x1() {
        return Number(this.node.getAttribute('x1'))
    }

    set x2(x2) {
        this.node.setAttribute('x2', x2)
    }

    get x2() {
        return Number(this.node.getAttribute('x2'))
    }

    set xChannelSelector(xChannelSelector) {
        this.node.setAttribute('xChannelSelector', xChannelSelector)
    }

    get xChannelSelector() {
        return this.node.getAttribute('xChannelSelector')
    }

    set y(y) {
        this.node.setAttribute('y', y)
    }

    get y() {
        return Number(this.node.getAttribute('y'))
    }

    set y1(y1) {
        this.node.setAttribute('y1', y1)
    }

    get y1() {
        return Number(this.node.getAttribute('y1'))
    }

    set y2(y2) {
        this.node.setAttribute('y2', y2)
    }

    get y2() {
        return Number(this.node.getAttribute('y2'))
    }

    set yChannelSelector(yChannelSelector) {
        this.node.setAttribute('yChannelSelector', yChannelSelector)
    }

    get yChannelSelector() {
        return this.node.getAttribute('yChannelSelector')
    }

    set z(z) {
        this.node.setAttribute('z', z)
    }

    get z() {
        return Number(this.node.getAttribute('z'))
    }

    set zoomAndPan(zoomAndPan) {
        this.node.setAttribute('zoomAndPan', zoomAndPan)
    }

    get zoomAndPan() {
        return this.node.getAttribute('zoomAndPan')
    }

    static get namespaceURI() {
        return SVG_NAMESPACE_URI
    }

    static get localName() {
        return SVG_DOCUMENT_ELEMENT_NAME
    }
}
