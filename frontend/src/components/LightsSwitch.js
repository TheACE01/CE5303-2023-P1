import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { apiTurnOnLight, apiTurnOffLight } from '../services/api';

const LightsSwitch = ({ room, initialState }) => {
    const [checked, setChecked] = useState(initialState);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

    const handleChange = async (event) => {
        try {
            setChecked(event.target.checked);
            const response = event.target.checked
                ? await apiTurnOnLight(room)
                : await apiTurnOffLight(room);
            console.log(response);
            if (response) {//&& response.status) {
                // Successfully turned on/off light, show modal
                setModalMessage(response.id);
                console.log(response.id)
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
        <div className={`switch switch-${room}`}>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                
            />
            <p>{room}</p>

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
                            {modalMessage} {checked && <p>{room}'s light on</p> }
                            {!checked && <p>{room}'s light off</p> }
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
        </div>
    );
};

export default LightsSwitch;
