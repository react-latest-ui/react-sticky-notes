import React from 'react';
import Note from './note';
import './index.scss';
const h = React.createElement;
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
        const {prefix, addItem, updateItem, selectItem, deleteItem, colorCodes, width, height, backgroundColor, icons, items} = this.props;
        return h('div', {
                key: prefix, 
                className: prefix, 
                style:{ width, height, backgroundColor }  
            },
           [
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
                        selectItem,
                        deleteItem, 
                        colorCodes,  
                        toggle:this.state.toggle,
                        setToggle:this.setToggle,
                        setColor:this.setColor 
                    },null)
                ):null,
                h('div',{
                    className:`${prefix}--footer`,
                    key: `${prefix}--footer`
                }, 
                    items?items.map((item, i)=>
                        h('span', {
                            key: i+'-note-footer', 
                            className:`${prefix}--footer__item`
                        },'item.text')
                    ):null
                )
           ]
        )
    }
}
export default Notes;
