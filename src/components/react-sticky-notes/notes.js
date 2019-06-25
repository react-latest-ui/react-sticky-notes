import React,{useState} from 'react';
import Note from './note';
import './index.scss';
const h = React.createElement;
function Notes({items, addItem, updateItem, deleteItem, colorCodes, width, height}) {
    const [toggle, setToggle] = useState(false);
    const prefix = 's-notes';
    const onColorSelect = (index, color) => {
        setToggle(false);
        updateItem(index,{color})
    }
    return h('div', { className: prefix, style:{width:width, height:height}  },
        items?items.map((item, index)=>
            h(Note,{ ...item, count:items.length, key: index, prefix, index, toggle, addItem, updateItem, deleteItem, colorCodes, setToggle, onColorSelect },null)
        ):null
    )
}
export default Notes;