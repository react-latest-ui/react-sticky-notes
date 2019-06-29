const reducer = (state, action) => {
    let { items } = state;
    switch (action.type) {
        case 'add':
            items = items.map((item, index)=>{
                item.selected = false;
                return item;
            });
            items.splice(action.payload.index, 0, action.payload);
            break;
        case 'update':
            items = items.map((item, index)=>{
                return index===action.payload.index?{...item, ...action.payload }:item;
            });
            break;
        case 'delete':
            items.splice(action.payload.index,1);
            break;
        case 'select':
            items = items.map((item, index)=>{
                item.selected = (index===action.payload.index)?true:false;
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