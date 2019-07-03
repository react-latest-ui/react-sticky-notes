export const getElementStyle = (nodeName, props, defaultStyle={}) => {
    let style = defaultStyle;
    switch(nodeName){
        case "container":
                style = { 
                    position: 'relative',
                    width: props.containerWidth, 
                    height: props.containerHeight, 
                    backgroundColor: props.backgroundColor 
                }
        break;
        case "note":
                style = {
                    position: 'absolute',
                    left: `${props.position.x}px`,
                    top: `${props.position.y}px`,
                    backgroundColor: props.color,
                    zIndex: props.selected?1:0
                }
        break;
        case "note-body":
            style = {
                width: props.width,
                height: props.height,
                minWidth: props.width,
                backgroundColor: props.toggle===props.index+1&&props.selected?"#ffffff":"",
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
