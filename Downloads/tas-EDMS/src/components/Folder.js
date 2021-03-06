import React from "react";
import { connect } from "react-redux";
import { FolderOpen } from '@material-ui/icons';
import MyDrive from '../pages/MyDrive';

import Logo from '../components/Logo';


const Folder = (props) => {
    // const history = useHistory();
    const [clicked, setClicked] = React.useState(false);

    const handleChange = (e) => {
        e.preventDefault();
    }

    return (
        <div className="folder" >

            <FolderOpen style={{fontSize: '25px', color: '#5a5a5a', margin: '4px'}}/>
            <p>Main Folder</p>
        </div>
    )
}


export default connect()(Folder);
