import { Component } from 'react';
import reducer from './reducers/reducer';
import Notes from './partials/notes';
import NavBar from './navbar';
import { h, colorCodes, getNotes, getUUID, iconAdd, iconMenu, iconTrash } from './utils';
class ReactStickyNotes extends Component {
	static defaultProps = {
		useCSS: true,
		prefix: 'rs-notes',
		colorCodes,
		navbar: true,
		sessionKey: 'react-sticky-notes',
		noteWidth: 220,
		noteHeight: 220,
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
			require('./index.scss');
		}
	}
	dispatch = (options) => {
		let { type, payload } = options;
		if(this.props.onBeforeChange){
			payload = this.props.onBeforeChange(type, payload, [...this.state.items])
		}
		this.setState(
			reducer(this.state, { type, payload }),
			()=>{
				if(this.props.sessionKey){
					localStorage.setItem(this.props.sessionKey, JSON.stringify(this.state.items));
				}
				if(this.props.onChange){
					this.props.onChange(type, payload, [...this.state.items])
				}
			}
		)
	}
	getColor() {
		return this.props.colorCodes[Math.floor(Math.random() * this.props.colorCodes.length)];
	}
	addItem = (options) => {
		const index=options?options.index+1:this.state.items.length;
		const newProps = {
			id: getUUID(),
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
				index,
				data: newProps
			}
		});
	}
	updateItem = (index, newProps) => {
		this.dispatch({
			type: 'update',
			payload: {
				index,
				data: newProps
			}
		});
	}
	selectItem = (index, newProps) => {
		this.dispatch({
			type: 'select',
			payload: {
				index,
				data: newProps
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
		const { noteWidth, noteHeight, containerWidth, containerHeight, backgroundColor, icons, prefix, navbar } = this.props;
		return [
				h(Notes, {
				key: `${prefix}--notes`,
				navbar,
				items,
				noteWidth,
				noteHeight,
				containerWidth, 
				containerHeight,
				backgroundColor,
				icons,
				prefix,
				colorCodes,
				addItem: this.addItem,
				updateItem: this.updateItem,
				selectItem: this.selectItem,
				deleteItem: this.deleteItem
			}),
			h(NavBar,{
				key: `${prefix}--navbar`,
				...this.props,
				items,
				colorCodes,
				addItem: this.addItem,
				updateItem: this.updateItem,
				selectItem: this.selectItem,
				deleteItem: this.deleteItem
			})
		]
	}

}
export default ReactStickyNotes;
