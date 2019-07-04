import { h, getElementStyle } from './../utils';
function NoteMenu({ id, index, prefix, color, colorCodes, setColor }) {
    return h('div', {
        className: `${prefix}--colors`,
        style: getElementStyle('note-menu')
    }, 
        colorCodes.map((colorCode) =>  h('button', {
            key: colorCode,
            onClick: () => setColor(index, {id, colorCode}),
            className: `${prefix}--colors__color ${color === colorCode ? prefix + '--colors__color--selected' : ''}`,
            style: getElementStyle('note-color-selector', {colorCode})
        }, colorCode )
    ))
}
export default NoteMenu;
