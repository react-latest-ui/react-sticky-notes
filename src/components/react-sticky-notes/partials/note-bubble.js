import React from 'react';
import { h, getElementStyle } from './../utils';
import NoteDraggable from './note-draggable';
export default class NoteBubble extends React.Component{
    constructor(props){
        super(props);
        this.targetRef = React.createRef();
    }
    render(){
        const props = this.props;
        return h(NoteDraggable, {
                className:`${props.prefix}--note ${props.data.selected?props.prefix+'--note__selected':''}`,
                position: props.data.position,
                selected: props.data.selected,
                target: this.targetRef,
                onDragComplete:(pos)=> props.callbacks.updateItem(null, {id: props.data.id, position:pos }),
                style: getElementStyle('note', props )
            }, 
            h('div',{
                ref: this.targetRef,
                onClick: ()=> props.callbacks.updateItem(null, {id: props.data.id, hidden: false }),
                style: {
                    width: '15px',
                    height: '15px',
                    borderRadius: '50%',
                    backgroundColor: props.data.color,
                }
            })
        )
    }
}
