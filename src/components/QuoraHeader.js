import React, { useState } from 'react'
import HomeIcon from '@material-ui/icons/Home'
import CloseIcon from '@material-ui/icons/Close'
import FeaturedPlayListOutlinedIcon from "@material-ui/icons/FeaturedPlayListOutlined";
import {
    AssignmentTurnedInOutlined,
    ExpandMore,
    NotificationsOutlined,
    PeopleAltOutlined,
    Search
} from "@material-ui/icons";
import { Avatar, Button, Input } from "@material-ui/core";
import './css/QuoraHeader.css';
import Modal from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

function QuoraHeader() {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [inputurl, setInputUrl] = useState(" ");
    const Close = <CloseIcon />

    return (
        <div className='qHeader'>
            <div className='qHeader-content'>

                <div className='qHeader__logo'>
                    <img src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif" alt="logo" />
                </div>

                <div className="qHeader__icons">
                    <div className="qHeader__icon">
                        <HomeIcon />
                    </div>
                    <div className="qHeader__icon">
                        <FeaturedPlayListOutlinedIcon />
                    </div>
                    <div className="qHeader__icon">
                        <AssignmentTurnedInOutlined />
                    </div>
                    <div className="qHeader__icon">
                        <PeopleAltOutlined />
                    </div>
                    <div className="qHeader__icon">
                        <NotificationsOutlined />
                    </div>
                </div>

                <div className="qHeader__input">
                    <Search />
                    <input type="text" placeholder="Search questions" />
                </div>

                <div className="qHeader__Rem">
                    <Avatar />
                </div>

                <Button

                    onClick={() => setIsModalOpen(true)}

                >Add Question</Button>
                <Modal
                    open={isModalOpen}
                    closeIcon={Close}
                    onClose={() => setIsModalOpen(false)}
                    closeOnEsc
                    center
                    closeOnOverlayClick={false}
                    styles={{
                        overlay: {
                            height: "auto",
                        },
                    }}
                >
                    <div className='modal__title'>
                        <h5>Add Question</h5>
                        <h5>Share Link</h5>

                    </div>

                    <div className="modal__info">
                            <Avatar className="avatar" />
                            <div className="modal__scope">
                                <PeopleAltOutlined />
                                <p>Public</p>
                                <ExpandMore />
                            </div>
                        </div>

                    <div className='modal__Field'>
                        <Input
                            type=" text"
                            placeholder="Start your question with 'What', 'How', 'Why', etc. "
                        />

                        <div
                            styles={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100vw"
                            }}>

                            <input
                                // className='modal__fieldLink'
                                type='text'
                                value={inputurl}
                                onChange={(e) => setInputUrl(e.target.value)}
                                style={{
                                    margin: "20px 0",
                                    width: "100%",
                                    border: "1px solid lightgray",
                                    padding: "10px",
                                    outline: "2px solid #000",
                                }}

                                 placeholder='Optional include a link that gives context'/>

                                 {
                                    inputurl !== "" 
                                    && 
                                    <img 
                                    style={{
                                        justifyContent: "center",
                                        alignItems: "center",
                                        alignContent: "center",
                                        height: "20vw",
                                        objectFit: "contain",
                                    }}
                                    src={inputurl} alt='displayimage' />
                                 }

                                 

                        </div>

                    </div>

                    <div className='modal__buttons'>
                        <button className='cancel' 
                        onClick={() => 
                            setIsModalOpen(false)
                            }>
                            Cancel
                        </button>
                        <button type='submit' className='add'>
                            Add Question
                        </button>
                    </div>

                </Modal>

            </div>
        </div>
    )
}

export default QuoraHeader