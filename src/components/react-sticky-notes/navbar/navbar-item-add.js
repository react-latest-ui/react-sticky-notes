
import { h } from './../utils';
function NavBarItemAdd({prefix, icons, addItem}){
    return h('button',{
        key: `${prefix}--navbar__item--add`,
        type: 'button',
        className:`${prefix}--navbar__item--add`,
        onClick: ()=>addItem(),
    }, icons.add);
}
export default NavBarItemAdd;