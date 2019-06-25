import { h } from './utils'
import './note-menu.scss';
function NoteMenu({ index, prefix, color, colorCodes, onColorSelect }) {
    return h('div', {
        className: `${prefix}--colors`
    }, colorCodes.map((colorCode) => h('div', {
        className: `${prefix}--colors__color ${color === colorCode ? prefix + '--colors__color--selected' : ''}`,
        key: colorCode
    },
        h('button', {
            name: colorCode,
            onClick: () => onColorSelect(index, colorCode),
            style: {
                backgroundColor: `hsl(${colorCode},50%, 50%)`
            }
        })
    )))
}
export default NoteMenu;