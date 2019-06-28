import React from 'react';
import Notes from './notes';
import reducer from './reducers/reducer';
import { h, colorCodes, getNotes, iconAdd, iconMenu, iconTrash } from './utils';
class ReactStickyNotes extends React.Component {
	constructor(props) {
		super(props);
		const colors = props.colorCodes ? props.colorCodes : colorCodes;
		this.state = {
			colors,
			items: getNotes(colors, props.notes)
		};
	}
	dispatch = ({ type, payload }) => {
		this.setState(
			reducer(this.state, { type, payload })
		)
	}
	getColor() {
		return this.state.colors[Math.floor(Math.random() * this.state.colors.length)];
	}
	addItem = (index, { position }) => {
		const newProps = {
			color: this.getColor(),
			text: '',
			position: position ? {
				x: position.x + 24,
				y: position.y + 24
			} : {
					x: 0,
					y: 0
				}
		}
		this.dispatch({
			type: 'add',
			payload: {
				...newProps
			}
		});
	}
	updateItem = (index, newProps) => {
		this.dispatch({
			type: 'update',
			payload: {
				index,
				...newProps
			}
		});
	}
	selectItem = (index, newProps) => {
		this.dispatch({
			type: 'select',
			payload: {
				index,
				...newProps
			}
		});
	}
	deleteItem = (index) => {
		this.dispatch({
			type: 'delete',
			payload: {
				index
			}
		});
	}
	render() {
		const prefix = 's-notes';
		const { width, height, backgroundColor, icons } = this.props;
		return h(Notes, {
			...this.state,
			prefix,
			width,
			height,
			backgroundColor,
			icons: {
				add: iconAdd,
				menu: iconMenu,
				trash: iconTrash,
				...icons
			},
			addItem: this.addItem,
			updateItem: this.updateItem,
			selectItem: this.selectItem,
			deleteItem: this.deleteItem,
			colorCodes
		}, null);
	}

}
export default ReactStickyNotes;
