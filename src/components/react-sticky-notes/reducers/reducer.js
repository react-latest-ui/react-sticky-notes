const reducer = (state, action) => {
    const params = Object.keys(action.payload.data);
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
                if(item.id===action.payload.data.id){
                    item = {...item, ...action.payload.data };
                }
                if(params.indexOf('selected')!==-1){
                    item.selected = item.id===action.payload.data.id?action.payload.data.selected:false;
                }
                if(params.indexOf('menu')!==-1){
                    item.menu = item.id===action.payload.data.id?action.payload.data.menu:false;
                }
                return item;
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
