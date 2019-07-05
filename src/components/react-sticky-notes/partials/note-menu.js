import { h, getElementStyle } from './../utils';
function NoteMenu(props) {
    const { data, index, prefix, colorCodes, setColor } = props;
    return h('div', {
        className: `${prefix}--colors`,
        style: getElementStyle('note-menu', props)
    }, 
        colorCodes.map((colorCode) =>  h('button', {
            key: colorCode,
            onClick: () => setColor(index, {id:data.id, colorCode}),
            className: `${prefix}--colors__color ${data.color === colorCode ? prefix + '--colors__color--selected' : ''}`,
            style: getElementStyle('note-color-selector', {colorCode})
        }, colorCode )
    ))
}
export default NoteMenu;
