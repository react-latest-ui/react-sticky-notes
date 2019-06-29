import React from 'react';
import Note from './note';
import NavBar from './navbar';
import { h, getElementStyle } from './utils';
class Notes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            toggle:false,
            containerWidth: 0,
            containerHeight: 0
        }
        this.notesContainer = React.createRef();
    }
    componentDidMount(){
        if(this.notesContainer && this.notesContainer.current){
            this.setState({
                containerWidth: this.notesContainer.current.offsetWidth,
                containerHeight: this.notesContainer.current.offsetHeight,
            })
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
        const {prefix, addItem, updateItem, selectItem, deleteItem, colorCodes, containerWidth, containerHeight, width, height, backgroundColor, icons, items, displayFooter} = this.props;
        return h('div', {
                key: prefix, 
                className: prefix,
                ref: this.notesContainer,
                style: getElementStyle('container', this.props)
            },
           [
                items?items.map((item, index)=>
                    h(Note,{ 
                        ...item,
                        ...this.state,
                        count:items.length, 
                        key: index, 
                        prefix,
                        index, 
                        icons,
                        width, 
                        height,
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
                h(NavBar,{
                    key: `${prefix}--navbar`,
                    displayFooter,
                    prefix,
                    icons,
                    items,
                    addItem,
                    selectItem,
                    deleteItem
                })
           ]
        )
    }
}
export default Notes;
