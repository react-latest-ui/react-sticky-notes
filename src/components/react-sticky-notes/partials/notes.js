import React from 'react';
import Note from './note';
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
    setColor = (index, color) => {
        this.setToggle(false);
        this.props.updateItem(index,{color})
    }
    render(){
        const {prefix, items} = this.props;
        return h('div', {
                key: prefix, 
                className: prefix,
                style: getElementStyle('container', this.props)
            }, items?items.map((item, index)=>
                h(Note,{ 
                    index, 
                    key: `note-${index}`, 
                    ...item,
                    ...this.state,
                    ...this.props,
                    toggle:this.state.toggle,
                    setToggle:this.setToggle,
                    setColor:this.setColor
                },null)
            ):null
        )
    }
}
export default Notes;
