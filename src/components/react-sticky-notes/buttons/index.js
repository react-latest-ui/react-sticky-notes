import { h, getElementStyle } from './../utils';

export function ButtonAdd({prefix, data, icons, callbacks}){
    return h('button',{
        key: `${prefix}--button__add`,
        className:`${prefix}--button ${prefix}--button__add`,
        onClick:(e)=>callbacks.addItem(e, {id: data?data.id:null, position:data?data.position:null, selected: true})
    }, 
        icons.add
    )
}

export function ButtonTitle({prefix, data, targetRef, callbacks }){
    return h('button',{
        key: `${prefix}--button__title`,
        className:`${prefix}--button ${prefix}--button__title`,
        ref: targetRef,
        onClick:(e)=>callbacks.changeView(e, { id: data?data.id:null, selected: true })
    },
        data.title?data.title:"..."
    )
}

export function ButtonMenu({prefix, data, icons, callbacks }){
    return h('button',{
        key: `${prefix}--button__menu`,
        className:`${prefix}--button ${prefix}--button__menu`,
        onClick:(e)=>callbacks.updateItem(e, {id: data?data.id:null, menu: !data.menu})
    }, 
        icons.menu
    );
}

export function ButtonMinimize({prefix, data, icons, callbacks }){
    return h('button',{
        key: `${prefix}--button__minmax`,
        className:`${prefix}--button ${prefix}--button__minmax`,
        onClick:(e)=>callbacks.changeView(e, { id: data?data.id:null, viewSize: 'minimized' })
    }, 
        icons.minimize
    );
}

export function ButtonTrash({prefix, data, icons, callbacks }){
    return h('button',{
        key: `${prefix}--button__trash`,
        className:`${prefix}--button ${prefix}--button__trash`,
        onClick:(e)=>callbacks.deleteItem(e, {id: data?data.id:null})
    }, 
        icons.trash
    );
}

        
        