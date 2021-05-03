import React, { Children } from 'react'
import { Overlay, Modal, Container } from './style'



interface ModalProps {
    open: boolean;
    onClose: () => void;
}


const BaseModal: React.FC<ModalProps> = ({ open, onClose, children }) => {

    return (
        <>
            <Overlay onClick={onClose} open={open} />
            <Modal open={open}>
                <Container>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </Container>
                {children}
            </Modal>

        </>

    )
}

export default BaseModal

