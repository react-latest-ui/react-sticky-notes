import React from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
//import NoteDraggable from './note-draggable';
import { h } from './utils';
import './note.scss';
class Note extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
		const props = this.props;
    	const { index,toggle, prefix, color, updateItem, colorCodes, position } = this.props;
        return h('div',{
            className:`${prefix}--note`,
            position,
            onDragComplete:(position)=>updateItem(index, {position}),
            onInit:(options)=>updateItem(index, options),
            style: {
                backgroundColor: `hsl(${color},50%, 50%)`
            }
        },[
            h(NoteHeader, {
                ...props,
                key:'note-header',
                position
            }),
            h('div',{
                key:'note-body',
                className:`${prefix}--note__body`,
                style:{
                    backgroundColor: toggle===index+1?"#ffffff":""
                }
            },
                toggle===index+1&&colorCodes?h(NoteMenu, { ...props, key: 'note-menu', colorCodes, updateItem }):h(NoteText, {...props, key: 'note-text'})
            )
    
        ])
    }
}
export default Note;