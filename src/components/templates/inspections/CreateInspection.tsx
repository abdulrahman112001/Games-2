import * as React from 'react';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {  FaPen, FaPlus } from "react-icons/fa6";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    maxHeight: '95vh',
    overflow: 'auto',
};

export default function CreateInspection() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button onClick={handleOpen} className="add-button"><FaPlus/></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} >
                    <form className='form-container-modal ' action="">
                        <h3 className='text-darkColor font-medium text-center text-xl'>Create Inspection</h3>

                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Inspection Title</label>
                            <div className="relative">
                                <input type="text" placeholder="Type Here .." className="input"/>
                                <FaPen className="input-text-icon"/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Quantity</label>
                            <div className="relative">
                                <input type="text" placeholder="Type Here .." className="input"/>
                                <FaPen className="input-text-icon"/>
                            </div>
                        </div>

                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Item Code</label>
                            <div className="relative">
                                <input type="text" placeholder="Type Here .." className="input"/>
                                <FaPen className="input-text-icon"/>
                            </div>
                        </div>


                        <div className="input-container">
                            <label htmlFor="production" className="input-label">Description</label>
                            <div className="relative">
                                {/* <input type="text" placeholder="Type Here .." className="input"/> */}
                                <textarea  placeholder="Type Here .." className="input" name="" id=""></textarea>
                                <FaPen className="input-text-icon top-4 "/>
                            </div>
                        </div>
                        <div className="action-buttons-container">
                            <button onClick={handleClose} className='action-button'>Cancel</button>
                            <button type='submit' className='action-button'>Confirm</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </div>
);
}
