import { Component } from 'react';
import reducer from './reducers/reducer';
import Notes from './partials/notes';
import NavBar from './navbar';
import * as icons from './icons';
import { h, colorCodes, getNotes, getUUID } from './utils';
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
		icons
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
	addItem = (e, data) => {
		const { items } = this.state;
		const index=data?items.findIndex(item=>item.id===data.id)+1:items.length;
		this.dispatch({
			type: 'add',
			payload: {
				index,
				data: {
					id: getUUID(),
					color: this.getColor(),
					text: '',
					selected: true,
					position: {
						x: 0,
						y: 0
					}
				}
			}
		});
	}
	updateItem = (e, data) => {
		this.dispatch({
			type: 'update',
			payload: {
				data
			}
		});
	}
	selectItem = (e, data) => {
		this.dispatch({
			type: 'select',
			payload: {
				data
			}
		});
	}
	deleteItem = (e, data) => {
		this.dispatch({
			type: 'delete',
			payload: {
				data
			}
		});
	}
	render() {
		const { items } = this.state;
		const { noteWidth, noteHeight, containerWidth, containerHeight, backgroundColor, icons, prefix, navbar } = this.props;
		return [
			h(Notes, {
				key: `${prefix}--notes`,
				items,
				noteWidth,
				noteHeight,
				containerWidth, 
				containerHeight,
				backgroundColor,
				icons,
				prefix,
				colorCodes,
				callbacks: {
					addItem: this.addItem,
					updateItem: this.updateItem,
					selectItem: this.selectItem,
					deleteItem: this.deleteItem
				}
			}),
			navbar?h(NavBar,{
				key: `${prefix}--navbar`,
				...this.props,
				items,
				colorCodes,
				callbacks: {
					addItem: this.addItem,
					updateItem: this.updateItem,
					selectItem: this.selectItem,
					deleteItem: this.deleteItem
				}
			}):null
		]
	}

}
export default ReactStickyNotes;
