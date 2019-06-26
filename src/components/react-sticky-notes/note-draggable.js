import React from 'react';
import Draggable from './utils/draggable';
import { h } from './utils';
class NoteDraggable extends React.Component {
	draggable = null
	constructor(props) {
		super(props);
		this.state= {
			active: false,
			options: {}
		}
		this.element = React.createRef();
		this.draggable = new Draggable();
	}
	componentDidMount() {
		const el = this.element?this.element.current:null
		const options = {
			element: el, 
			target: this.props.target?this.props.target.current:el, 
			position: this.props.position?{
				x: this.props.position.x,
				y: this.props.position.y
			}:{x:0,y:0},
			onDragComplete:this.props.onDragComplete,
			onInit:this.props.onInit
		};
		this.setState({options}, ()=> {
			this.draggable.init(options);
		})
		
	}
	onMouseDown = (e) => {
		if(e.currentTarget===this.state.options.target){
			this.draggable.onMouseDown(e);
			this.setState({
				active: true
			})
		}else{
			this.draggable.beingToForwarding();
		}
	}
	onMouseUp = (e) => {
		if(this.state.active){
			this.draggable.onMouseUp(e);
		}
	}
	render() {
		return (
			h('div', {
				className: this.props.className,
				style: this.props.style,
				ref: this.element,
				onClick: this.onClick,
				onMouseUp:this.onMouseUp,
				onMouseDown:this.onMouseDown
			}, 
				this.props.children
			)
		);
	}
}
export default NoteDraggable;
