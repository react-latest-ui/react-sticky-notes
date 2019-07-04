import React from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
import NoteDraggable from './note-draggable';
import { h, getElementStyle } from './../utils';
class Note extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
    	const { id, index, selected, toggle, setToggle, prefix, title, text, color, setColor, addItem, updateItem, selectItem, deleteItem, colorCodes, position, icons } = this.props;
        return h(NoteDraggable,{
            className:`${prefix}--note ${selected?prefix+'--note__selected':''}`,
            position,
            selected,
            target: this.targetRef,
            onDragComplete:(position)=>updateItem(index, {id, position}),
            onInit:(options)=>updateItem(index, options),
            onSelect:(active)=>selectItem(index, {id, selected:active}),
            style: getElementStyle('note', this.props)
        },[
            h(NoteHeader, {
                key:'note-header',
                targetRef: this.targetRef,
                id,
                index, 
                prefix,
                selected, 
                icons,
                addItem, 
                deleteItem, 
                setToggle, 
                position, 
                title
            }),
            h('div',{
                key:'note-body',
                className:`${prefix}--note__body`,
                style: getElementStyle('note-body', this.props)
            },
                toggle===index+1&&selected&&colorCodes?
                h(NoteMenu, { 
                    key: 'note-menu', 
                    id,
                    colorCodes, 
                    updateItem, 
                    index, 
                    prefix, 
                    color, 
                    setColor, 
                    colorCodes
                }):
                h(NoteText, { 
                    key: 'note-text', 
                    id,
                    index, 
                    prefix, 
                    text, 
                    updateItem
                })
            )
    
        ])
    }
}
export default Note;
