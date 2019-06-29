import React from 'react';
import Note from './note';
import './index.scss';
import { getElementStyle } from './utils';
const h = React.createElement;
const NavBarItem = ({prefix, icons,index, color, text, selectItem, deleteItem}) => {
    return h('div',{
        className:`${prefix}--navbar__item`,
        style:{
            backgroundColor: color
        }
    },[
        h('button',{
            key: `navbar-item__${index}--select`,
            className:`${prefix}--navbar__item--select`,
            type: 'button',
            onClick: ()=>selectItem(index, {selected:true})
        }, text?text:'Add your notes'),
        h('button',{
            key: `navbar-item__${index}--delete`,
            type: 'button',
            className:`${prefix}--navbar__item--delete`,
            onClick: ()=>deleteItem(index, {selected:true}),
        }, 'x'),
    ]);
}
const NavBarItemAdd = ({prefix, icons, addItem}) => {
    return h('button',{
        key: `${prefix}--navbar__item--add`,
        type: 'button',
        className:`${prefix}--navbar__item--add`,
        onClick: ()=>addItem(),
    }, h(icons.add) );
}
const NavBar = ({prefix, items, addItem, selectItem, deleteItem, icons, displayFooter}) => {
    return h('div',{
        className:`${prefix}--navbar`,
    },[
        displayFooter&&items?items.map((item, index)=>
            h(NavBarItem,{
                key: `navbar-item__${index}`,
                index,
                prefix,
                icons,
                text:item.text,
                color:item.color,
                selectItem,
                deleteItem
            },item.text)
        ):null,
        h(NavBarItemAdd,{
            key: `navbar-item__add`,
            prefix,
            icons,
            addItem,
        })
    ]);
}
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
