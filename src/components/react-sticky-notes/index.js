import { Component } from 'react';
import reducer from './reducers/reducer';
import Notes from './partials/notes';
import { h, colorCodes, getNotes, iconAdd, iconMenu, iconTrash } from './utils';
class ReactStickyNotes extends Component {
	static defaultProps = {
		useCSS: true,
		cssPrefix: 'rs-notes',
		colorCodes,
		displayFooter: true,
		sessionKey: 'react-sticky-notes',
		width: 220,
		height: 220,
		containerWidth: '100%',
		containerHeight: '100%',
		icons: {
			add: iconAdd,
			menu: iconMenu,
			trash: iconTrash
		}
	}
	constructor(props) {
		super(props);
		this.state = {
			items: getNotes(props.colorCodes, props.notes)
		};
	}
	componentDidMount(){
		if(this.props.useCSS){
			console.log("notes-with-style");
			require('./index.scss');
		}
	}
	dispatch = ({ type, payload }) => {
		this.setState(
			reducer(this.state, { type, payload }),
			()=>{
				if(this.props.sessionKey){
					localStorage.setItem(this.props.sessionKey, JSON.stringify(this.state.items));
				}
				if(this.props.onChange){
					this.props.onChange(
						this.state.items
					)
				}
			}
		)
	}
	getColor() {
		return this.props.colorCodes[Math.floor(Math.random() * this.props.colorCodes.length)];
	}
	addItem = (options) => {
		const newProps = {
			index:options?options.index+1:this.state.items.length,
			color: this.getColor(),
			text: '',
			selected: true,
			position: {
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
		const { items } = this.state;
		const { width, height, containerWidth, containerHeight, backgroundColor, icons, cssPrefix, displayFooter } = this.props;
		return h(Notes, {
			displayFooter,
			items,
			width,
			height,
			containerWidth, 
			containerHeight,
			backgroundColor,
			icons,
			prefix: cssPrefix,
			addItem: this.addItem,
			updateItem: this.updateItem,
			selectItem: this.selectItem,
			deleteItem: this.deleteItem,
			colorCodes
		});
	}

}
export default ReactStickyNotes;
