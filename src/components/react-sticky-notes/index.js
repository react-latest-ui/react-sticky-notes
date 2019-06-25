import { useReducer } from 'react';
import Notes from './notes';
import reducer from './reducers/reducer';
import { h, colorCodes, getNotes } from './utils';
function ReactStickyNotes() {
  const items = getNotes(colorCodes);
  const [state,dispatch]=useReducer(reducer,{items});
  const addItem = (index, {position}) => {
    const newProps = {
      color: colorCodes[Math.floor(Math.random()*colorCodes.length)],
      text:'', 
      position:position?{
        x:position.x+24,
        y:position.y+24
      }:{
        x:0,
        y:0
      }
    }
    dispatch({
        type: 'add',
        payload:{
          ...newProps
        }
    });
  }
  const updateItem = (index, newProps ) => {
    dispatch({
        type: 'update',
        payload:{
          index,
          ...newProps
        }
    });
  }
  const deleteItem = ( index ) => {
    dispatch({
        type: 'delete',
        payload:{
          index
        }
    });
  }
  return h(Notes,{
    ...this.props,
    ...state,
    addItem, 
    updateItem, 
    deleteItem,
    colorCodes
  }, null);
}

export default ReactStickyNotes;
