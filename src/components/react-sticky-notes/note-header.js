import { h } from './utils';
import './note-header.scss';
function NoteHeader({ index, prefix, selected, addItem, deleteItem, setToggle, position, title, targetRef, icons }) {
    return h('div',{
        className:`${prefix}--header ${selected?prefix+'--header__selected':''}`
    },[
        h('button',{
            key: 'note-header-button-1',
            onClick:()=>addItem({index, position, selected: true})
        }, 
            h(icons.add)
        ),
        h('button',{
            key: 'note-header-button-2',
            className:"title",
            ref: targetRef
        },
        title?title:"A"
        ),
        h('button',{
            key: 'note-header-button-3',
            onClick:()=>setToggle(index+1)
        }, 
            h(icons.menu) 
        ),
        h('button',{
            key: 'note-header-button-4',
            onClick:()=>deleteItem(index)
        }, 
            h(icons.trash)
        ),
    ])
}
export default NoteHeader;
