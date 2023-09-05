import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import image_ from '../assets/home.jpg'
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { apiTakePhoto, apiTurnOnAllLights, apiTurnOffAllLights } from '../services/api';

const ControlBar = ({ initialState }) => {
    const [checked, setChecked] = useState(initialState);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [image, setImage] = useState();

    const onTakePhoto = async () => {
        const res = await apiTakePhoto();
        setImage(res);
    }

    const handleChange = async (event) => {
        try {
            setChecked(event.target.checked);
            const response = event.target.checked
                ? await apiTurnOnAllLights()
                : await apiTurnOffAllLights();
            console.log(response);
            if (response) {//&& response.status) {
                // Successfully turned on/off light, show modal
                setModalMessage(response.id);
                console.log(checked)
                setShowModal(true);

                // Hide modal after 3 seconds
                setTimeout(() => {
                    setShowModal(false);
                }, 3000);
            } else {
                console.error('API request failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className='Control'>
            <ul className='SidebarList'>
                <li className='ControlBarRow'>
                    <h3>Control Bar</h3>
                </li>
                <li>
                    <Switch
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'controlled' }}
                        color="warning"
                    /></li>
                <li className='ControlBarRow'>
                    <p>Turn on/off all lights</p>
                </li>
                <li className='ControlBarRow'>
                    <div>
                        <Button onClick={() => { setOpen(true); onTakePhoto() }}
                            variant='contained'
                            startIcon={<CameraAltIcon />}>
                            Take photo
                        </Button>
                        <Modal
                            open={open}
                            onClose={() => setOpen(false)}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className='ImageModal'>
                                <Typography id="modal-modal-title" variant="h6" component="h2">
                                    Photo
                                </Typography>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    Surrounding monitoring
                                </Typography>
                                <img
                                    src={image} // Replace with the actual path to your local image
                                    alt="Local"
                                    style={{ width: '100%', marginTop: '10px' }}
                                />
                                <Button
                                    onClick={() => setOpen(false)}
                                    variant="contained"
                                    color="warning"
                                    sx={{ mt: 2 }}
                                >
                                    Close
                                </Button>
                            </Box>
                        </Modal>
                    </div>
                </li>
            </ul>

            {/* Modal */}
            <div>
                <Modal
                    open={showModal}
                    onClose={() => setShowModal(false)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className='StatusModal'>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Light Status
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            {modalMessage} {checked && "All lights turned on"}
                            {!checked && "All lights turned off"}
                        </Typography>
                        <Button
                            onClick={() => setShowModal(false)}
                            variant="contained"
                            color="warning"
                            sx={{ mt: 2 }}
                        >
                            Close
                        </Button>
                    </Box>
                </Modal>
            </div>
        </div >
    );
};

export default ControlBar;