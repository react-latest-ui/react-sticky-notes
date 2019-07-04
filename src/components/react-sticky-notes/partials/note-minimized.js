import { h, getElementStyle } from './../utils';
export default function NoteMinimized({ data, index, prefix, updateItem }) {
    return h('div', {
        className:`${prefix}--minimized`,
        onClick: () => updateItem(index,{ id:data.id, viewSize: null, selected: true }),
        style: getElementStyle('note-minimized', {data})
    })
}