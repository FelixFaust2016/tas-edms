import React, { useState } from "react";
import { connect } from "react-redux";
import Modal from 'react-modal';
import { BrowserRouter, Route, Switch, Link, NavLink, useHistory } from "react-router-dom";

import Logo from '../components/Logo';
import SideNav from '../components/SideNav';
import DocumentsPage from '../components/DocumentsPage';
import FileDropModal from '../components/FileDropModal';



const MainPage = (props) => {
    var subtitle;
    const history = useHistory();

    const [page, setPage] = useState(1);
    const [modalIsOpen, setIsOpen] = useState(false);

    const [fileTitle, setTitle] = useState('');

    const handleSignIn = (e) => {
        e.preventDefault();
        history.push("/home");
    }

    const pageSetter = (page) => {
        setPage(page);
    }

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const setFileTitle = (t) => {
        setTitle(t);
        console.log(t);

        closeModal();

    }

    const customStyles = {
        content: {
            top: '45%',
            left: '59%',
            right: 'auto',
            bottom: 'auto',
            width: 'auto',
            borderRadius: '20px',
            // marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        },
        overlay: {
            background: '#c4c4c455'
        }
    };

    Modal.setAppElement('#app');

    return (
        <div className="mainpage" >

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <FileDropModal setFileTitle={setFileTitle} />

            </Modal>

            <div className='leftside'>
                <SideNav page={page} pageSetter={pageSetter} openModal={openModal} />
            </div>

            <div className='rightside'>
                <DocumentsPage page={page} fileTitle={fileTitle} />
            </div>
        </div>
    )
}


export default connect()(MainPage);



