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
                    position: 'absolute',
                    backgroundColor: props.color,
                    zIndex: props.selected?1:0,
                    transform: `translate3d(${props.position.x}px,${props.position.y}px,0)`
                }
        break;
        case "note-body":
            style = {
                width: props.width,
                height: props.height,
                backgroundColor: props.toggle===props.index+1&&props.selected?"#ffffff":"",
                maxHeight: `${props.containerHeight-props.position.y-34}px`,
                resize:"both",
                overflow: "auto"
            }
        break;
        case "note-input":
            style = {
                height: "100%",
            }
        break;
        case "note-header":
            style = {
                visibility: props.selected?"visible":"hidden",
            }
        break;
        case "menu":
            style = {
                height: "100%",
            }
        break;
        case "note-color-selector":
            style = {
                backgroundColor: props.colorCode
            }
        break;

    }
    return style;
}