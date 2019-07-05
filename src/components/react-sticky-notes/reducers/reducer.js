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
            const index = items.findIndex(item=>action.payload.data.id===item.id);
            if(index!==-1){
                items.splice(index,1);
            }else{
                items.splice(0,items.length);
            }
            break;
        case 'select':
            items = items.map((item)=>{
                item.menu = false;
                item.selected = item.id===action.payload.data.id?true:false;
                return item;
            });
            break;
        case 'changeview':
            items = items.map((item)=>{
                item.viewSize = item.id===action.payload.data.id?action.payload.data.viewSize:item.viewSize;
                item.selected = item.id===action.payload.data.id?true:false;
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
