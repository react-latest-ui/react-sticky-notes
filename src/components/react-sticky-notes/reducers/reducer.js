const reducer = (state, action) => {
    let { items } = state;
    switch (action.type) {
        case 'add':
            items = items.map((item)=>{
                item.selected = false;
                return item;
            });
            items.splice(action.payload.index, 0, action.payload.data);
            break;
        case 'update':
            items = items.map((item)=>{
                return item.id===action.payload.data.id?{...item, ...action.payload.data }:item;
            });
            break;
        case 'delete':
            items.splice(items.findIndex(item=>action.payload.data.id===item.id),1);
            break;
        case 'select':
            items = items.map((item)=>{
                if( item.id===action.payload.data.id ){
                    item.selected = true;
                    item.viewSize = null;
                }else{
                    item.selected = false;
                }
                return item;
            });
            break;
        default:
                items = state.items;
            break;
    }
    return {items};
}
export default reducer;
