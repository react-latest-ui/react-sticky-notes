import { h } from './../utils';
function NavBarItem({data, prefix, icons, callbacks}){
    return h('span',{
        className:`${prefix}--navbar__item`,
        style:{
            backgroundColor: data.color
        }
    },[
        h('button',{
            key: `navbar-item__${data.id}--select`,
            className:`${prefix}--navbar__item--select`,
            type: 'button',
            onClick: (e)=>callbacks.updateItem(e, {id:data.id, selected:true})
        }, data.title?data.title:'...'),
        h('button',{
            key: `navbar-item__${data.id}--delete`,
            type: 'button',
            className:`${prefix}--navbar__item--delete`,
            onClick: (e)=>callbacks.deleteItem(e, {id:data.id, selected:true}),
        }, icons.trash),
    ]);
}
export default NavBarItem;
