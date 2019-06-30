import React from "react";
import ReactDOM from "react-dom";
import DeleteOutlined from '@material-ui/icons/DeleteOutlined';
import AddOutlined from '@material-ui/icons/AddOutlined';
import MoreHorizOutlined from '@material-ui/icons/MoreHorizOutlined';
import ReactStickyNotes from './components/react-sticky-notes';
import './app.scss';
const icons = { add:AddOutlined,menu: MoreHorizOutlined, trash: DeleteOutlined };
ReactDOM.render(
    <ReactStickyNotes 
        //icons={icons}
        prefix = 's-notes'
        useCSS={false}
    />, 
    document.getElementById("root")
);
