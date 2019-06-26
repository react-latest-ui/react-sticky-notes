import React from "react";
import ReactDOM from "react-dom";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import AddOutlined from '@material-ui/icons/AddOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import ReactStickyNotes from './components/react-sticky-notes';
const icons = { add:AddOutlined,menu: MoreHorizOutlined, trash: DeleteOutlined };
ReactDOM.render(<ReactStickyNotes width={'800px'} height={'400px'} icons={icons} />, document.getElementById("root"));
