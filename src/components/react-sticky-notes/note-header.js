import { h } from './utils';
import './note-header.scss';
function NoteHeader({ index, prefix, addItem, deleteItem, setToggle, position, count, title, targetRef, icons }) {
    return h('div',{
        className:`${prefix}--header`
    },[
        h('button',{
            key: 'note-header-button-1',
            onClick:()=>addItem(index, {position})
        }, 
            h(icons.add)
        ),
        h('span',{
            key: 'note-header-button-2',
            className:"title",
            ref: targetRef
        },title),
        h('button',{
            key: 'note-header-button-3',
            onClick:()=>setToggle(index+1)
        }, 
            h(icons.menu) 
        ),
        h('button',{
            key: 'note-header-button-4',
            disabled: count===1?true:false,
            onClick:()=>deleteItem(index)
        }, 
            h(icons.trash)
        ),
    ])
}
export default NoteHeader;
