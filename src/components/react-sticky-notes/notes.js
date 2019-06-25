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
            toggle:toggle
        });
    }
    onColorSelect = (index, color) => {
        this.setToggle(false);
        this.props.updateItem(index,{color})
    }
    render(){
        const prefix = 's-notes';
        const {items, addItem, updateItem, deleteItem, colorCodes, width, height} = this.props;
        return h('div', { className: prefix, style:{width:width, height:height}  },
        items?items.map((item, index)=>
            h(Note,{ ...item, 
                count:items.length, 
                key: index, 
                prefix, 
                index, 
                addItem, 
                updateItem, 
                deleteItem, 
                colorCodes, 
                toggle:this.state.toggle, 
                setToggle:this.setToggle,
                onColorSelect:this.onColorSelect },null)
        ):null
    )
    }
}
export default Notes;