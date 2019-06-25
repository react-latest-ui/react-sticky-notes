import React from 'react';
import Notes from './notes';
import reducer from './reducers/reducer';
import { h, colorCodes, getNotes } from './utils';
const dispatch = () => {
	
}
class ReactStickyNotes extends React.Component{
	constructor(){
		super();
		this.state = {
			items: getNotes(colorCodes)
		};
	}
	addItem = (index, {position}) => {
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
	updateItem = (index, newProps ) => {
		dispatch({
			type: 'update',
			payload:{
			  index,
			  ...newProps
			}
		});
	  }
	 deleteItem = ( index ) => {
		dispatch({
			type: 'delete',
			payload:{
			  index
			}
		});
	  }
	render(){
		const { width, height } = this.props;
		return h(Notes,{
			...this.state,
			width,
			height,
			addItem:this.addItem, 
			updateItem:this.updateItem, 
			deleteItem:this.deleteItem,
			colorCodes
		}, null);
  }

}
export default ReactStickyNotes;
