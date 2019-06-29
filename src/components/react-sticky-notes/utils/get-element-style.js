export const getElementStyle = (nodeName, props, defaultStyle={}) => {
    let style = defaultStyle;
    switch(nodeName){
        case "container":
                style = { 
                    position: 'absolute',
                    width: props.containerWidth, 
                    height: props.containerHeight, 
                    backgroundColor: props.backgroundColor 
                }
        break;
        case "note":
                style = {
                    ...defaultStyle,
                    position: 'absolute',
                    width: props.width,
                    height: props.height,
                    backgroundColor: props.color,
                    zIndex: props.selected?1:0,
                    transform: `translate3d(${props.position.x}px,${props.position.y}px,0)`
                }
        break;
        case "menu":
        break;

    }
    return style;
}