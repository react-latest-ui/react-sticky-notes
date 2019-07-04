import { h, getElementStyle } from './../utils';
export default function NoteMaximized({ data, index, prefix, updateItem }) {
    return h('div', {
        className:`${prefix}--minimized`,
        onClick: () => updateItem(index,{ id:data.id, viewSize: null }),
        style: getElementStyle('note-minimized', {data})
    })
}
