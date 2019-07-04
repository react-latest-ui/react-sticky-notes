import { h, nlToBr, getElementStyle } from './../utils';
function NoteText({ data, index, prefix, updateItem }) {
    return h('div',{
        className:`${prefix}--text`,
        placeholder:"react-hooks",
        contentEditable:"true",
        onBlur:(e)=>updateItem(index, {
            id:data.id,
            title: String(e.target.innerText).substr(0,10),
            text: e.target.innerText
        }),
        dangerouslySetInnerHTML:{__html:nlToBr(data.text)},
        style: getElementStyle('note-input')
    })
}
export default NoteText;
