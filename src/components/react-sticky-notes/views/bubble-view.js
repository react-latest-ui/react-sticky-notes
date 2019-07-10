import { h, getElementStyle } from './../utils';
import NavBar from './../navbar';
import NoteBubble from '../partials/note-bubble';
export function BubbleView(props){
    return [
        h(NavBar, { ...props, key: 'navbar' }),
        h('div', {
            key: props.prefix, 
            className: props.prefix,
            style: getElementStyle('container', props)
        }, 
            props.items.map( data => h( NoteBubble, { key: `note-${data.id}`,...props, data } ) )
        )
    ]
}