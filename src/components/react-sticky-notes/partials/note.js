import React from 'react';
import NoteHeader from './note-header';
import NoteText from './note-text';
import NoteMenu from './note-menu';
import NoteDraggable from './note-draggable';
import { h, getElementStyle } from './../utils';
class Note extends React.Component{
    state = {
        viewSize: 'normal'
    }
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
    	const { data, index, toggle, setToggle, prefix, setColor, callbacks, colorCodes, icons } = this.props;
        return h(NoteDraggable,{
            className:`${prefix}--note ${data.selected?prefix+'--note__selected':''}`,
            position:data.position,
            selected:data.selected,
            target: this.targetRef,
            onDragComplete:(pos)=>callbacks.updateItem(null, {id:data.id, position:pos}),
            onSelect:(active)=>callbacks.selectItem(index, {id:data.id, selected:active}),
            style: getElementStyle('note', this.props)
        },[
            h(NoteHeader, {
                key:'note-header',
                targetRef: this.targetRef,
                data,
                index, 
                prefix,
                icons,
                callbacks, 
                setToggle
            }),
            h('div',{
                key:'note-body',
                className:`${prefix}--note__body`,
                style: getElementStyle('note-body', this.props)
            },
                toggle===index&&data.selected&&colorCodes?
                h(NoteMenu, { 
                    key: 'note-menu', 
                    data,
                    colorCodes, 
                    callbacks, 
                    index, 
                    prefix, 
                    setColor, 
                    colorCodes
                }):
                h(NoteText, { 
                    key: 'note-text', 
                    data,
                    index, 
                    prefix, 
                    callbacks
                })
            )
    
        ])
    }
}
export default Note;
