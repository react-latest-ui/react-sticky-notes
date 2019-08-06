import { h, getElementStyle } from './../utils';
import React, { Component } from 'react';
export class ImportModal extends Component{
    constructor(){
        super();
        this.jsonInput = React.createRef();
    }
    render(){
        const props = this.props;
        return [
            h('div', {
                key: 'navbar',
                className: `${props.prefix}--form-control`,
                style:{
                    width: '100%',
                    height: '100%'
                }
            },[
                h('button', {
                    key: 'navbar-button--cancel',
                    className: `${props.prefix}--form-control`,
                    onClick: (e)=>props.callbacks.changeModal(e, null )
                }, 'cancel' ),
                h('button', {
                    key: 'navbar-button--save',
                    className: `${props.prefix}--form-control`,
                    onClick: (e)=>props.callbacks.saveJSON(e, JSON.parse(this.jsonInput.current.value) )
                }, 'save' ),
            ]),
            h('div', {
                key: props.prefix, 
                className: props.prefix,
                style: getElementStyle('container', props)
            }, 
                h('textarea',{
                        ref: this.jsonInput,
                        className: `${props.prefix}--form-control`,
                        style:{
                            width: '100%',
                            height: '100%'
                        }
                    })
                )
        ]
    }
}