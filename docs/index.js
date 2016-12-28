import { svg, rect, line, polyline } from '../lib/svgdom'

document.documentElement.replaceWith(
    svg({
        attributes : {
            width : '1100',
            height : '600',
            viewBox : '0 0 1100 600',
            xmlns : 'http://www.w3.org/2000/svg',
        },
        children : [
            rect({
                attributes : {
                    x : '50',
                    y : '50',
                    width : '1000',
                    height : '500',
                    fill : '#fff',
                    stroke : '#000',
                    'stroke-width' : '5'
                }
            }),
            line({
                attributes : {
                    x1 : '320',
                    y1 : '50',
                    x2 : '320',
                    y2 : '550',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
            line({
                attributes : {
                    x1 : '660',
                    y1 : '50',
                    x2 : '660',
                    y2 : '550',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
            line({
                attributes : {
                    x1 : '900',
                    y1 : '50',
                    x2 : '900',
                    y2 : '550',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
            polyline({
                attributes : {
                    points : '50,150 570,150 570,550',
                    fill : 'transparent',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),

            line({
                attributes : {
                    x1 : '50',
                    y1 : '360',
                    x2 : '320',
                    y2 : '360',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
            line({
                attributes : {
                    x1 : '320',
                    y1 : '340',
                    x2 : '570',
                    y2 : '340',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
            line({
                attributes : {
                    x1 : '570',
                    y1 : '480',
                    x2 : '660',
                    y2 : '480',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),

            line({
                attributes : {
                    x1 : '120',
                    y1 : '150',
                    x2 : '120',
                    y2 : '360',
                    stroke : '#000',
                    'stroke-width' : '1'
                }
            }),
        ]
    })
)
