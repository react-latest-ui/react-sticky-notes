import { h, getElementStyle } from './../utils';
function NoteHeader({ data, index, prefix, callbacks, setToggle, targetRef, icons }) {
    return h('div',{
        className:`${prefix}--header ${data.selected?prefix+'--header__selected':''}`,
        style: getElementStyle('note-header',{data})
    },[
        h('button',{
            key: 'note-header-button-1',
            className:`${prefix}--header__button--add`,
            onClick:()=>callbacks.addItem({index, id: data.id, position:data.position, selected: true})
        }, 
            icons.add
        ),
        h('button',{
            key: 'note-header-button-2',
            className:`${prefix}--header__button--title`,
            ref: targetRef
        },
            data.title?data.title:"..."
        ),
        h('button',{
            key: 'note-header-button-3',
            className:`${prefix}--header__button--menu`,
            onClick:()=>setToggle(index, {id: data.id})
        }, 
            icons.menu
        ),
        h('button',{
            key: 'note-header-button--minmax',
            className:`${prefix}--header__button--minmax`,
            onClick:(e)=>callbacks.updateItem(e, { id: data.id, viewSize: 'minimized', selected: false })
        }, 
            icons.minimize
        ),
        h('button',{
            key: 'note-header-button-4',
            className:`${prefix}--header__button--trash`,
            onClick:()=>callbacks.deleteItem(index, {id: data.id})
        }, 
            icons.trash
        ),
    ])
}
export default NoteHeader;
