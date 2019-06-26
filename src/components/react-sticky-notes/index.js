import React from 'react';
import Notes from './notes';
import reducer from './reducers/reducer';
import { h, colorCodes, getNotes } from './utils';
class ReactStickyNotes extends React.Component{
	constructor(){
		super();
		this.state = {
			items: getNotes(colorCodes)
		};
	}
	dispatch = ({type,payload}) => {
		this.setState(
			reducer(this.state,{type,payload})
		)
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
		this.dispatch({
			type: 'add',
			payload:{
			  ...newProps
			}
		});
	  }
	updateItem = (index, newProps ) => {
		this.dispatch({
			type: 'update',
			payload:{
			  index,
			  ...newProps
			}
		});
	  }
	 deleteItem = ( index ) => {
		this.dispatch({
			type: 'delete',
			payload:{
			  index
			}
		});
	  }
	render(){
        const prefix = 's-notes';
		const { width, height, backgroundColor } = this.props;
		return h(Notes,{
			...this.state,
			prefix,
			width,
			height,
			backgroundColor,
			addItem:this.addItem, 
			updateItem:this.updateItem, 
			deleteItem:this.deleteItem,
			colorCodes
		}, null);
  }

}
export default ReactStickyNotes;
