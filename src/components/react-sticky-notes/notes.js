import React from 'react';
import Note from './note';
import './index.scss';
const h = React.createElement;
class Notes extends React.Component{
    constructor(){
        super();
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
        const {prefix, items, addItem, updateItem, deleteItem, colorCodes, width, height, backgroundColor, icons} = this.props;
        return h('div', { className: prefix, style:{width, height, backgroundColor}  },
            items?items.map((item, index)=>
                h(Note,{ 
                    ...item, 
                    count:items.length, 
                    key: index, 
                    prefix, 
                    index, 
                    icons,
                    addItem, 
                    updateItem, 
                    deleteItem, 
                    colorCodes, 
                    toggle:this.state.toggle, 
                    setToggle:this.setToggle,
                    setColor:this.setColor 
                },null)
            ):null
        )
    }
}
export default Notes;
