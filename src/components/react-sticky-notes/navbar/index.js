import { h } from './../utils';
import NavBarItem from './navbar-item';
import NavBarItemAdd from './navbar-item-add';
function NavBar({prefix, items, addItem, selectItem, deleteItem, icons}){
    return h('div',{
        className:`${prefix}--navbar`,
    },[
        items?items.map((item, index)=>
            h(NavBarItem,{
                key: `navbar-item__${index}`,
                index,
                prefix,
                icons,
                id:item.id,
                text:item.text,
                color:item.color,
                selectItem,
                deleteItem
            },item.text)
        ):null,
        h(NavBarItemAdd,{
            key: `navbar-item__add`,
            prefix,
            icons,
            addItem,
        })
    ]);
}
export default NavBar;
