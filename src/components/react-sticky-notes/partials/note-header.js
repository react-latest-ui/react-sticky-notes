import { h, getElementStyle } from './../utils';
function NoteHeader({ index, prefix, selected, addItem, deleteItem, setToggle, position, title, targetRef, icons }) {
    return h('div',{
        className:`${prefix}--header ${selected?prefix+'--header__selected':''}`,
        style: getElementStyle('note-header',{selected})
    },[
        h('button',{
            key: 'note-header-button-1',
            className:`${prefix}--header__button--add`,
            onClick:()=>addItem({index, position, selected: true})
        }, 
            icons.add
        ),
        h('button',{
            key: 'note-header-button-2',
            className:`${prefix}--header__button--title`,
            ref: targetRef
        },
            title?title:"..."
        ),
        h('button',{
            key: 'note-header-button-3',
            className:`${prefix}--header__button--menu`,
            onClick:()=>setToggle(index+1)
        }, 
            icons.menu
        ),
        h('button',{
            key: 'note-header-button-4',
            className:`${prefix}--header__button--trash`,
            onClick:()=>deleteItem(index)
        }, 
            icons.trash
        ),
    ])
}
export default NoteHeader;
