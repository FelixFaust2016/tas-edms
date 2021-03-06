import React from "react";
import { connect } from "react-redux";
import { SearchOutlined, Apps, AccountCircleOutlined, NotificationsOutlined, Settings, HelpOutline } from '@material-ui/icons';

import Folder from "../components/Folder";
import File from "../components/File";


const MyDrive = (props) => {
    // const history = React.useHistory();
    // const [clicked, setClicked] = React.useState(false);

    // const handleSignIn = (e) => {
    //     e.preventDefault();
    //     history.push("/home");
    // }

    const handleChange = (e) => {
        e.preventDefault();
    }

    return (
        <div className='my-drive' >
            <div className='folders-div'>
                <p>Folders</p>
                <div className='folders-containers'>
                    <Folder />
                </div>
            </div>
            <div className='files-div'>
                <p>Files</p>
                <div className='files-container'>
                    <File fileTitle={props.fileTitle}/>
                </div>
            </div>
        </div>
    )
}


export default connect()(MyDrive);
