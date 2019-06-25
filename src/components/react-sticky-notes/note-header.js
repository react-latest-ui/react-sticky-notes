import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import AddOutlined from '@material-ui/icons/AddOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import { h } from './utils';
import './note-header.scss';
function NoteHeader({ index, prefix, addItem, deleteItem, setToggle, targetRef, position, count, title }) {
    return h('div',{
        className:`${prefix}--header`
    },[
        h('button',{
            key: 'note-header-button-1',
            onClick:()=>addItem(index, {position})
        }, h(AddOutlined) ),
        h('span',{
            key: 'note-header-button-2',
            className:"title", 
            ref:targetRef
        },title),
        h('button',{
            key: 'note-header-button-3',
            onClick:()=>setToggle(toggle=>toggle===index+1?false:index+1)
        }, h(MoreHorizOutlined) ),
        h('button',{
            key: 'note-header-button-4',
            disabled: count===1?true:false,
            onClick:()=>deleteItem(index)
        }, h(DeleteOutlined) ),
    ])
}
export default NoteHeader;