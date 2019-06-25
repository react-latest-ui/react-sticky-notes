const reducer = (state, action) => {
    let { items } = state;
    switch (action.type) {
        case 'add':
            items.push({
                ...action.payload
            });
            break;
        case 'update':
            items = items.map((item, index)=>{
                return index===action.payload.index?{...item, ...action.payload }:item;
            });
            break;
        case 'delete':
            items.splice(action.payload.index,1);
            break;
        default:
                items = state.items;
            break;
    }
    localStorage.setItem('react-sticky-notes', JSON.stringify(items));
    return {items};
}
export default reducer;