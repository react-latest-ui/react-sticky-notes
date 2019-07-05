
import { h } from './../utils';
function NavBarItemAdd({prefix, icons, callbacks}){
    return h('button',{
        key: `${prefix}--navbar__item--add`,
        type: 'button',
        className:`${prefix}--navbar__item--add`,
        onClick: (e)=>callbacks.addItem(e),
    }, icons.add);
}
export default NavBarItemAdd;
