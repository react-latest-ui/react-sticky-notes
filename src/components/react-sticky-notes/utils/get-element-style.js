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
                    zIndex: props.data.selected?1:0,
                    borderRadius: props.data.viewSize==="minimized"?'50%':'0'
                }
        break;
        case "note-minimized":
            style.backgroundColor=props.data.color,
            style.padding = '10px';
            style.borderRadius = '50%';
        break;
        case "note-body":
            style.width = props.noteWidth,
            style.height = props.noteHeight,
            style.overflow = "auto";
            if(props.data.selected){
                style.minWidth = props.noteWidth,
                style.resize = "both";
            }
        break;
        case "note-input":
            style.height =  "100%";
        break;
        case "note-header":
            style.backgroundColor=props.data?props.data.color:'';
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
        case "note-menu":
            style.backgroundColor = "#ffffff";
            style.minHeight = '100%';
        break;
        case "note-color-selector":
            style = {
                backgroundColor: props.colorCode
            }
        break;
    }
    return style;
}
