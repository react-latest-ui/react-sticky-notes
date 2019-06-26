import React from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
import NoteDraggable from './note-draggable';
import { h } from './utils';
import './note.scss';
class Note extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
    	const { index, count, toggle, setToggle, prefix, title, text, color, setColor, addItem, updateItem, deleteItem, colorCodes, position, icons } = this.props;
        return h(NoteDraggable,{
            className:`${prefix}--note`,
            position,
            target: this.targetRef,
            onDragComplete:(position)=>updateItem(index, {position}),
            onInit:(options)=>updateItem(index, options),
            style: {
                backgroundColor: `hsl(${color},50%, 50%)`
            }
        },[
            h(NoteHeader, {
                key:'note-header',
                targetRef: this.targetRef,
                index, 
                prefix, 
                icons,
                addItem, 
                deleteItem, 
                setToggle, 
                position, 
                count, 
                title
            }),
            h('div',{
                key:'note-body',
                className:`${prefix}--note__body`,
                style:{
                    backgroundColor: toggle===index+1?"#ffffff":""
                }
            },
                toggle===index+1&&colorCodes?h(NoteMenu, { key: 'note-menu', colorCodes, updateItem, index, prefix, color, setColor, colorCodes }):h(NoteText, { key: 'note-text', index, prefix, text, updateItem })
            )
    
        ])
    }
}
export default Note;
