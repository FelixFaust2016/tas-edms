import React from "react";
import { connect } from "react-redux";
import { SearchOutlined, Apps, AccountCircleOutlined, NotificationsOutlined, Settings, HelpOutline } from '@material-ui/icons';




const File = (props) => {


    const handleChange = (e) => {
        e.preventDefault();
    }

    return (

        <div className="file" style={props.fileTitle ? {display: 'flex'} : {display: 'none'}} >
            <div className='thumbnail'></div>
            <div className='title'>{props.fileTitle}</div>
        </div>
    )
}


export default connect()(File);
