import { h, getElementStyle } from './../utils';
import NoteHeader from './../partials/note-header';
import { ButtonAdd, ButtonTitle, ButtonTrash } from './../buttons';
function NavBar({prefix, items, callbacks, icons}){
    return h('div',{
        className:`${prefix}--navbar`,
        style: getElementStyle('navbar')
    },[
        h( 'div',{
            key: `${prefix}--navbar__nav`,
            className:`${prefix}--navbar__nav`,
            style: getElementStyle('navbar-nav')
        },
            items?items.map((data)=>
                h(NoteHeader,{
                    key: `navbar-item__${data.id}`,
                    data,
                    prefix: `${prefix}--navbar__item`,
                    icons,
                    callbacks,
                    buttons: [ButtonTitle, ButtonTrash]
                })
            ):null 
        ),
        h('div',{
            key: `navbar-item__options`,
        },
            h( NoteHeader, {
                prefix: `${prefix}--navbar__item`,
                icons,
                callbacks,
                buttons: [ButtonAdd, ButtonTrash]
            })
        )
    ]);
}
export default NavBar;
