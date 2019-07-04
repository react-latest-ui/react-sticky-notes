import React from 'react';
import Note from './note';
import NoteMaximized from './note-maximized';
import NoteMinimized from './note-minimized';
import { h, getElementStyle } from './../utils';
class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggle:false
        }
    }
    setToggle = (toggle) => {
        this.setState({
            toggle: this.state.toggle===toggle?false:toggle
        });
    }
    setColor = (index, {id, colorCode}) => {
        this.setToggle(false);
        this.props.updateItem(index,{id, color: colorCode})
    }
    render(){
        const {prefix, items} = this.props;
        return h('div', {
                key: prefix, 
                className: prefix,
                style: getElementStyle('container', this.props)
            }, items?items.map((data, index)=> {
                let _note = null;
                switch(data.viewSize){
                    case "minimized":
                        _note = h(NoteMinimized, { 
                            key: `note-${data.id}`, 
                            prefix,
                            index, 
                            data,
                            updateItem: this.props.updateItem
                        });
                        break;
                    case "maximized":
                        _note = h(NoteMaximized, { 
                            key: `note-${data.id}`, 
                            prefix,
                            index, 
                            data,
                            updateItem: this.props.updateItem
                        });
                        break;
                    default:
                        _note = h(Note, { 
                            key: `note-${data.id}`, 
                            index, 
                            data,
                            ...this.state,
                            ...this.props,
                            toggle:this.state.toggle,
                            setToggle:this.setToggle,
                            setColor:this.setColor
                        })
                    break;
                }
                return _note;
            }
            ):null
        )
    }
}
export default Notes;
