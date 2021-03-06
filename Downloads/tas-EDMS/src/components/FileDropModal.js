import React, { useState } from "react";
import { connect } from "react-redux";
import ReactDropzone from "react-dropzone";
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";


const FileDropModal = (props) => {

    const hiddenFileInput = React.useRef(null);
    const [fileName, setFileName] = React.useState('');

    const onDrop = (files) => {
        // POST to a test endpoint for demo purposes
        // const req = request.post('https://httpbin.org/post');

        // files.forEach(file => {
        //   req.attach(file.name, file);
        // });

        // req.end();
    }

    const handleClick = (e) => {
        hiddenFileInput.current.click();
    }

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        setFileName(fileUploaded.name);
        console.log(fileName)
        props.setFileTitle(fileUploaded.name);
    }

    return (
        // <ReactDropzone
        //     onDrop={onDrop}
        // >
        //     {({ getRootProps, getInputProps }) => (
        //         <section>
        //             <div {...getRootProps()}>
        //                 <input {...getInputProps()} />
        //                 <p>Drag 'n' drop some files here, or click to select files</p>
        //             </div>
        //         </section>
        //     )}
        <div className="modal">
            <h1>Drag and drop files to upload</h1>
            <p>or</p>
            <button onClick={handleClick}>Select Files</button>
            <input
                type='file'
                ref={hiddenFileInput}
                onChange={handleChange}
                name='filename'
                id='myfile' />
            {
                fileName !== ''
                &&
                <p><b>file selected:</b> {fileName}</p>
            }
            <p>maximum file size is 125mb</p>
        </div>
        // </ReactDropzone>
    )
}


export default connect()(FileDropModal);



