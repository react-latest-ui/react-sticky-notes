import { h } from './../utils';
import NavBarItem from './navbar-item';
import NavBarItemAdd from './navbar-item-add';
function NavBar({prefix, items, addItem, callbacks, icons}){
    return h('div',{
        className:`${prefix}--navbar`,
    },[
        items?items.map((data)=>
            h(NavBarItem,{
                key: `navbar-item__${data.id}`,
                data,
                prefix,
                icons,
                callbacks
            })
        ):null,
        h(NavBarItemAdd,{
            key: `navbar-item__add`,
            prefix,
            icons,
            callbacks,
        })
    ]);
}
export default NavBar;
