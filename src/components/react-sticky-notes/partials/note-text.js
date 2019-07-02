import { h, nlToBr, getElementStyle } from './../utils';
function NoteText({ index, prefix, text, updateItem }) {
    return h('div',{
        className:`${prefix}--text`,
        placeholder:"react-hooks",
        contentEditable:"true",
        onBlur:(e)=>updateItem(index, {
            title: String(e.target.innerText).substr(0,10),
            text: e.target.innerText
        }),
        dangerouslySetInnerHTML:{__html:nlToBr(text)},
        style: getElementStyle('note-input')
    })
}
export default NoteText;