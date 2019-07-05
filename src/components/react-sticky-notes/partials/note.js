import React from 'react';
import NoteHeader from './note-header';
import NoteBody from './note-body';
import NoteDraggable from './note-draggable';
import {ButtonAdd, ButtonTitle, ButtonMenu, ButtonMinimize, ButtonTrash} from './../buttons';
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
    	const { data, prefix, callbacks } = this.props;
        return h(NoteDraggable,{
            className:`${prefix}--note ${data.selected?prefix+'--note__selected':''} ${data.viewSize?prefix+'--note__'+data.viewSize:''}`,
            position:data.position,
            selected:data.selected,
            target: this.targetRef,
            onDragComplete:(pos)=>callbacks.updateItem(null, {id:data.id, position:pos}),
            style: getElementStyle('note', this.props)
        },[
            data.viewSize==='minimized'?h('div', {
                key:'note-header--minimized',
                ref: this.targetRef,
                style: getElementStyle('note-minimized', this.props),
                onClick:(e)=>callbacks.changeView(e, {id:data.id, viewSize:null}),
            }):null,
            !data.viewSize?h(NoteHeader, {
                ...this.props,
                key:'note-header',
                targetRef: this.targetRef,
                prefix: `${prefix}--header`,
                buttons: [ButtonAdd, ButtonTitle, ButtonMenu, ButtonMinimize, ButtonTrash]
            }):null,
            !data.viewSize?h(NoteBody,{
                key:'note-body',
                ...this.props
            }):null
    
        ])
    }
}
export default Note;
