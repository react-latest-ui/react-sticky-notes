import { h, nlToBr } from './utils'
import './note-text.scss';
function NoteText({ index, prefix, text, updateItem }) {
    return h('div',{
        className:`${prefix}--text`,
        placeholder:"react-hooks",
        contentEditable:"true",
        onBlur:(e)=>updateItem(index, {
            title: String(e.target.innerText).substr(0,10),
            text: nlToBr(e.target.innerText)
        }),
        dangerouslySetInnerHTML:{__html:text}
    })
}
export default NoteText;