import { useRef } from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
import NoteDraggable from './note-draggable';
import { h } from './utils';
import './note.scss';
function Note(props) {
    const { index,toggle, prefix, color, updateItem, colorCodes, position } = props;
    const targetRef = useRef(null);
    return h(NoteDraggable,{
        className:`${prefix}--note`,
        position,
        target:targetRef,
        onDragComplete:(position)=>updateItem(index, {position}),
        onInit:(options)=>updateItem(index, options),
        style: {
            backgroundColor: `hsl(${color},50%, 50%)`
        }
    },[
        h(NoteHeader, {
            ...props,
            key:'note-header',
            targetRef,
            position
        }),
        h('div',{
            key:'note-body',
            className:`${prefix}--note__body ${position.y}-${props.limitY}`,
            style:{
                backgroundColor: toggle===index+1?"#ffffff":""
            }
        },
            toggle===index+1&&colorCodes?h(NoteMenu, { ...props, key: 'note-menu', colorCodes, updateItem }):h(NoteText, {...props, key: 'note-text'})
        )

    ])
}
export default Note;