import React from 'react'
import { Overlay, Modal, Container } from './style'



interface ModalProps {
    open: boolean;
    onClose: () => void;
}


const BaseModal: React.FC<ModalProps> = ({ open, onClose }: ModalProps) => {

    return (
        <>
            <Overlay onClick={onClose} open={open} />
            <Modal open={open}>
                <Container>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </Container>
            </Modal>

        </>

    )
}

export default BaseModal

