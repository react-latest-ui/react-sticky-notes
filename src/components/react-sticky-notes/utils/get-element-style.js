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
                    left: `${props.data.position.x}px`,
                    top: `${props.data.position.y}px`,
                    backgroundColor: props.data.color,
                    zIndex: props.data.selected?1:0
                }
        break;
        case "note-body":
            style = {
                width: props.noteWidth,
                height: props.noteHeight
            }
            if(props.selected){
                style.minWidth = props.noteWidth,
                style.backgroundColor = props.toggle===props.index?"#ffffff":"";
                style.resize = "both";
                style.overflow = "auto";
            }
        break;
        case "note-input":
            style = {
                height: "100%",
            }
        break;
        case "note-header":
            style = {
                visibility: props.data.selected?"visible":"hidden",
            }
        break;
        case "note-minimized":
            style = {
                backgroundColor: props.data.color,
                position: 'absolute',
                left: `${props.data.position.x}px`,
                top: `${props.data.position.y}px`,
                width: '10px',
                height: '10px'
            }
        break;
        case "note-maximized":
            style = {
                backgroundColor: props.data.color,
                position: 'absolute',
                left: `${props.data.position.x}px`,
                top: `${props.data.position.y}px`,
                width: '10px',
                height: '10px'
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
