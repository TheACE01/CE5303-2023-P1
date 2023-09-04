import React, { useState } from 'react';
import Switch from '@mui/material/Switch';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { apiTurnOnAllLights, apiTurnOffAllLights } from '../services/api';

const ControlBar = ({ initialState }) => {
    const [checked, setChecked] = useState(initialState);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState('');

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
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
                color="warning"
            />
            <p>Light Control</p>

            {/* Modal */}
            <Modal
                className='StatusModal'
                show={showModal}
                onHide={() => setShowModal(false)}
            >
                <Modal.Dialog>
                    <Modal.Header>
                        <Modal.Title className='modalText'>
                            Light Status
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body className='modalText'>
                        {modalMessage} {checked && "ON"}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className='modalbutton' variant="secondary" 
                            onClick={() => setShowModal(false)}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </Modal>
        </div>
    );
};

export default ControlBar;